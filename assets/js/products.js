/**
 * products.js - Gerenciamento de produtos
 */

const Products = {
    translate(key) {
        return window.I18N ? I18N.t(key) : key;
    },

    applyI18n(element) {
        if (window.I18N) {
            I18N.applyTranslations(element || undefined);
        }
    },

    // Carrega todos os produtos
    async loadAll() {
        const response = await API.request('/api/products', { method: 'GET' });
        if (response.success) {
            return response.data || [];
        }
        return [];
    },

    // Carrega produto por ID
    async loadById(id) {
        // Tenta buscar do backend primeiro
        const response = await API.request(`/api/products/${id}`, { method: 'GET' });
        if (response.success && response.data) {
            return response.data;
        }
        
        // Fallback: busca no localStorage
        const products = await this.loadAll();
        const product = products.find(p => String(p.id) === String(id));
        return product || null;
    },

    // Carrega produtos por categoria
    async loadByCategory(category) {
        const products = await this.loadAll();
        return products.filter(p => p.category === category);
    },

    // Busca produtos
    async search(query) {
        const products = await this.loadAll();
        const lowerQuery = query.toLowerCase();
        return products.filter(p => 
            p.title.toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery)
        );
    },

    // Renderiza grid de produtos
    renderGrid(products, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (products.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📦</div>
                    <p data-i18n="products.empty">${this.translate('products.empty')}</p>
                </div>
            `;
            this.applyI18n(container);
            return;
        }

        container.innerHTML = products.map(product => {
            const productId = String(product.id);
            const images = Array.isArray(product.images) ? product.images : (product.images ? [product.images] : []);
            return `
            <a href="produto.html?id=${productId}" class="product-card" onclick="Products.addToHistory('${productId}')">
                <img src="${images[0] || 'https://via.placeholder.com/400x400?text=Produto'}" 
                     alt="${product.title}" 
                     class="product-image">
                <div class="product-info">
                    <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                    <div class="product-title">${product.title}</div>
                    <div class="product-location">São Paulo, SP</div>
                    ${product.type === 'affiliate' ? '<span class="product-badge">Loja Externa</span>' : ''}
                </div>
            </a>
        `;
        }).join('');
        this.applyI18n(container);
    },

    // Adiciona produto ao histórico de visualizações
    async addToHistory(productId) {
        const product = await this.loadById(productId);
        if (product) {
            const user = JSON.parse(localStorage.getItem('current_user') || 'null');
            if (user) {
                await API.request('/api/user/history', {
                    method: 'POST',
                    body: JSON.stringify({
                        product_id: productId,
                        product_title: product.title,
                        product_image: product.images[0],
                        product_price: product.price,
                        viewed_at: new Date().toISOString()
                    })
                });
            }
        }
    },

    // Renderiza página de produto
    async renderProductPage(productId) {
        const product = await this.loadById(productId);
        if (!product) {
            document.querySelector('.product-page')?.remove();
            const mainContainer = document.querySelector('.main-container');
            if (mainContainer) {
                mainContainer.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">❌</div>
                        <p data-i18n="products.notFound">${this.translate('products.notFound')}</p>
                        <a href="index.html" style="margin-top: 20px; display: inline-block; color: var(--ml-blue);" data-i18n="products.backHome">
                            ${this.translate('products.backHome')}
                        </a>
                    </div>
                `;
                this.applyI18n(mainContainer);
            }
            return;
        }

        // Adiciona ao histórico
        await this.addToHistory(productId);

        const container = document.querySelector('.product-page');
        if (!container) return;

        const images = Array.isArray(product.images) ? product.images : (product.images ? [product.images] : []);
        const productId = String(product.id);
        const externalCta = this.translate('products.externalCta');
        const buyNow = this.translate('products.buyNow');
        const addToFavorites = this.translate('products.addToFavorites');
        const descriptionLabel = this.translate('products.description');
        const descriptionText = product.description || this.translate('products.noDescription');
        
        container.innerHTML = `
            <div class="product-gallery">
                <img src="${images[0] || 'https://via.placeholder.com/600x600?text=Produto'}" 
                     alt="${product.title}" 
                     class="product-main-image" 
                     id="main-product-image">
                <div class="product-thumbnails">
                    ${images.length > 0 ? images.map((img, index) => `
                        <img src="${img}" 
                             alt="Imagem ${index + 1}" 
                             class="thumbnail ${index === 0 ? 'active' : ''}"
                             onclick="Products.changeMainImage('${img}')">
                    `).join('') : ''}
                </div>
            </div>
            <div class="product-details">
                <h1>${product.title}</h1>
                <div class="product-price-large">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                ${product.type === 'affiliate' ? `
                    <a href="${product.affiliate_link}" target="_blank" class="btn-primary">
                        ${externalCta}
                    </a>
                ` : `
                    <button class="btn-primary" onclick="Products.addToCart('${productId}')">
                        ${buyNow}
                    </button>
                    <button class="btn-secondary" onclick="Products.addToFavorites('${productId}')">
                        ${addToFavorites}
                    </button>
                `}
                <div class="product-description">
                    <h2 data-i18n="products.description">${descriptionLabel}</h2>
                    <p>${descriptionText}</p>
                </div>
            </div>
        `;
        this.applyI18n(container);
    },

    // Muda imagem principal
    changeMainImage(imageUrl) {
        const mainImage = document.getElementById('main-product-image');
        if (mainImage) {
            mainImage.src = imageUrl;
        }
        // Atualiza thumbnails ativos
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src === imageUrl) {
                thumb.classList.add('active');
            }
        });
    },

    // Adiciona ao carrinho
    async addToCart(productId) {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const product = await this.loadById(productId);
        
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(this.translate('alerts.addedToCart'));
        }
    },

    // Adiciona aos favoritos
    async addToFavorites(productId) {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (!favorites.includes(productId)) {
            favorites.push(productId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert(this.translate('alerts.addedToFavorites'));
        } else {
            alert(this.translate('alerts.alreadyFavorite'));
        }
    }
};

