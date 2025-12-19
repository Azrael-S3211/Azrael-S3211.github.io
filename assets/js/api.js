/**
 * API.js - Gerenciamento de comunicação com backend
 * Funciona com localStorage quando backend não está disponível
 */

const translate = (key, fallback) => {
    try {
        return window.I18N ? I18N.t(key) : (fallback || key);
    } catch {
        return fallback || key;
    }
};

const API = {
    // URL base da API (será detectada automaticamente)
    baseURL: null,
    
    // Verifica se o backend está disponível
    async checkBackend() {
        if (this.baseURL === null) {
            // Tenta conectar na API hospedada no Render
            try {
                const response = await fetch('https://project-m-1mdo.onrender.com/api/health', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (response.ok) {
                    this.baseURL = 'https://project-m-1mdo.onrender.com';
                    return true;
                }
            } catch (error) {
                // Backend não disponível, usa localStorage
                this.baseURL = null;
            }
        }
        return this.baseURL !== null;
    },

    // Salva dados no localStorage ou envia para API
    async save(key, data) {
        const hasBackend = await this.checkBackend();
        if (hasBackend) {
            // Implementar chamadas de API aqui quando necessário
            return { success: true, data };
        } else {
            localStorage.setItem(key, JSON.stringify(data));
            return { success: true, data };
        }
    },

    // Carrega dados do localStorage ou da API
    async load(key) {
        const hasBackend = await this.checkBackend();
        if (hasBackend) {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } else {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        }
    },

    // Requisições HTTP genéricas
    async request(endpoint, options = {}) {
        const hasBackend = await this.checkBackend();
        if (!hasBackend) {
            // Fallback para localStorage
            return this.localStorageRequest(endpoint, options);
        }

        const url = `${this.baseURL}${endpoint}`;
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        // Adiciona token de autenticação se existir
        const token = localStorage.getItem('auth_token');
        if (token) {
            defaultOptions.headers['Authorization'] = `Bearer ${token}`;
        }

        // Converte body para JSON string se for objeto
        if (options.body && typeof options.body === 'object') {
            options.body = JSON.stringify(options.body);
        }

        try {
            const response = await fetch(url, { ...defaultOptions, ...options });
            const data = await response.json();
            return { success: response.ok, data, status: response.status };
        } catch (error) {
            console.error('API Error:', error);
            return { success: false, error: error.message };
        }
    },

    // Fallback para localStorage quando backend não está disponível
    localStorageRequest(endpoint, options) {
        const method = options.method || 'GET';
        
        if (endpoint === '/api/products' && method === 'GET') {
            const products = JSON.parse(localStorage.getItem('products') || '[]');
            return { success: true, data: products };
        }

        if (endpoint === '/api/products' && method === 'POST') {
            const products = JSON.parse(localStorage.getItem('products') || '[]');
            const body = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
            const newProduct = { ...body, id: Date.now().toString() };
            products.push(newProduct);
            localStorage.setItem('products', JSON.stringify(products));
            return { success: true, data: newProduct };
        }

        if (endpoint.startsWith('/api/products/') && method === 'GET') {
            const id = endpoint.split('/').pop();
            const products = JSON.parse(localStorage.getItem('products') || '[]');
            const product = products.find(p => p.id === id);
            return { success: !!product, data: product };
        }

        if (endpoint === '/api/services' && method === 'GET') {
            const services = JSON.parse(localStorage.getItem('services') || '[]');
            return { success: true, data: services };
        }

        if (endpoint === '/api/services' && method === 'POST') {
            const services = JSON.parse(localStorage.getItem('services') || '[]');
            const body = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
            const newService = { ...body, id: Date.now().toString() };
            services.push(newService);
            localStorage.setItem('services', JSON.stringify(services));
            return { success: true, data: newService };
        }

        if (endpoint === '/api/login' && method === 'POST') {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const credentials = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
            const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
            
            if (user) {
                const token = 'token_' + Date.now();
                localStorage.setItem('auth_token', token);
                localStorage.setItem('current_user', JSON.stringify(user));
                return { success: true, data: { token, user } };
            }
            return { success: false, error: translate('auth.invalidCredentials', 'Credenciais inválidas') };
        }

        if (endpoint === '/api/register' && method === 'POST') {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userData = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
            
            if (users.find(u => u.email === userData.email)) {
                return { success: false, error: translate('auth.emailInUse', 'Email já cadastrado') };
            }

            const newUser = {
                id: Date.now().toString(),
                ...userData,
                created_at: new Date().toISOString()
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            return { success: true, data: newUser };
        }

        if (endpoint === '/api/user/history' && method === 'GET') {
            const history = JSON.parse(localStorage.getItem('user_history') || '[]');
            return { success: true, data: history };
        }

        if (endpoint === '/api/user/history' && method === 'POST') {
            const history = JSON.parse(localStorage.getItem('user_history') || '[]');
            const item = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
            history.unshift(item);
            localStorage.setItem('user_history', JSON.stringify(history.slice(0, 50))); // Limita a 50 itens
            return { success: true, data: item };
        }

        return { success: false, error: 'Endpoint não implementado' };
    }
};

// Inicializa dados de exemplo se não existirem
if (!localStorage.getItem('products')) {
    const sampleProducts = [
        {
            id: '1',
            title: 'Smartphone Android 128GB',
            description: 'Smartphone com tela de 6.5 polegadas, câmera tripla e bateria de longa duração.',
            price: 899.90,
            stock: 15,
            category: 'eletronicos',
            images: ['https://via.placeholder.com/400x400?text=Smartphone'],
            type: 'own'
        },
        {
            id: '2',
            title: 'Notebook Gamer 16GB RAM',
            description: 'Notebook gamer com processador Intel i7, placa de vídeo dedicada e SSD 512GB.',
            price: 2499.90,
            stock: 8,
            category: 'informatica',
            images: ['https://via.placeholder.com/400x400?text=Notebook'],
            type: 'own'
        },
        {
            id: '3',
            title: 'Tênis Esportivo',
            description: 'Tênis confortável para corrida e caminhada, disponível em vários tamanhos.',
            price: 199.90,
            stock: 25,
            category: 'esportes',
            images: ['https://via.placeholder.com/400x400?text=Tenis'],
            type: 'own'
        }
    ];
    localStorage.setItem('products', JSON.stringify(sampleProducts));
}
