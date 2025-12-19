/**
 * services.js - Gerenciamento de serviços
 */

const Services = {
    translate(key) {
        return window.I18N ? I18N.t(key) : key;
    },

    applyI18n(element) {
        if (window.I18N) {
            I18N.applyTranslations(element || undefined);
        }
    },
    allServices: [],

    // Carrega todos os serviços
    async loadAll() {
        const response = await API.request('/api/services', { method: 'GET' });
        if (response.success) {
            this.allServices = response.data || [];
            this.render(this.allServices);
            return this.allServices;
        }
        return [];
    },

    // Aplica filtros
    applyFilters() {
        const searchInput = document.getElementById('services-search');
        const countrySelect = document.getElementById('filter-country');
        const categorySelect = document.getElementById('filter-category');

        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const country = countrySelect ? countrySelect.value : '';
        const category = categorySelect ? categorySelect.value : '';

        let filtered = [...this.allServices];

        if (query) {
            filtered = filtered.filter(s =>
                s.name.toLowerCase().includes(query) ||
                (s.description || '').toLowerCase().includes(query)
            );
        }
        if (country) {
            filtered = filtered.filter(s => s.country === country);
        }
        if (category) {
            filtered = filtered.filter(s => s.category === category);
        }

        this.render(filtered);
    },

    // Renderiza lista de serviços
    render(services) {
        const container = document.getElementById('services-list');
        if (!container) return;

        if (services.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🔧</div>
                    <p data-i18n="services.empty">${this.translate('services.empty')}</p>
                </div>
            `;
            this.applyI18n(container);
            return;
        }

        container.innerHTML = services.map(service => {
            const translatedCountry = service.country ? this.translate(`filters.country.${service.country}`) : '';
            const countryLabel = translatedCountry && !translatedCountry.startsWith('filters.country')
                ? translatedCountry
                : (service.country || 'Brasil');
            const whatsappNumber = (service.whatsapp || '').replace(/\D/g, '');
            return `
            <div class="service-card">
                <div class="service-header">
                    <div>
                        <div class="service-title">${service.name}</div>
                        <div class="service-location">${countryLabel}</div>
                    </div>
                    <div class="service-price">R$ ${service.price.toFixed(2).replace('.', ',')}</div>
                </div>
                <div class="service-description">${service.description}</div>
                <a href="https://wa.me/${whatsappNumber}" 
                   target="_blank" 
                   class="service-whatsapp">
                    📱 ${this.translate('services.whatsapp')} ${service.whatsapp}
                </a>
            </div>
        `;
        }).join('');
        this.applyI18n(container);
    }
};

// Inicializa dados de exemplo se não existirem
if (!localStorage.getItem('services')) {
    const sampleServices = [
        {
            id: '1',
            name: 'Desenvolvimento de Sites',
            description: 'Criação de sites responsivos e modernos usando as melhores tecnologias. Entrega rápida e suporte completo.',
            price: 1500.00,
            country: 'brazil',
            category: 'tecnologia',
            whatsapp: '+5511999999999'
        },
        {
            id: '2',
            name: 'Aulas de Inglês Online',
            description: 'Aulas particulares de inglês via videoconferência. Material incluso e horários flexíveis.',
            price: 80.00,
            country: 'usa',
            category: 'educacao',
            whatsapp: '+14255550123'
        },
        {
            id: '3',
            name: 'Manutenção de Computadores',
            description: 'Serviço completo de manutenção, formatação e instalação de programas. Atendimento em domicílio.',
            price: 120.00,
            country: 'spain',
            category: 'reparos',
            whatsapp: '+34911222333'
        },
        {
            id: '4',
            name: 'Consultoria de Marketing Digital',
            description: 'Planejamento de campanhas, funil completo e otimização de mídia paga para marcas globais.',
            price: 950.00,
            country: 'france',
            category: 'marketing',
            whatsapp: '+33140000000'
        },
        {
            id: '5',
            name: 'Chef Personalizado em Casa',
            description: 'Experiências gastronômicas exclusivas com menu autoral para eventos intimistas.',
            price: 650.00,
            country: 'italy',
            category: 'gastronomia',
            whatsapp: '+390211234567'
        },
        {
            id: '6',
            name: 'Design de Identidade Visual',
            description: 'Criação de logotipos, guias de marca e materiais digitais completos.',
            price: 520.00,
            country: 'india',
            category: 'design',
            whatsapp: '+919876543210'
        }
    ];
    localStorage.setItem('services', JSON.stringify(sampleServices));
}

