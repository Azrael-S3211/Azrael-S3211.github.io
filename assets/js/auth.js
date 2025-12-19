/**
 * auth.js - Gerenciamento de autenticação
 */

const Auth = {
    translate(key) {
        return window.I18N ? I18N.t(key) : key;
    },
    // Verifica se usuário está logado
    isLoggedIn() {
        return !!localStorage.getItem('auth_token');
    },

    // Obtém usuário atual
    getCurrentUser() {
        const userStr = localStorage.getItem('current_user');
        return userStr ? JSON.parse(userStr) : null;
    },

    // Login com email e senha
    async login(email, password) {
        const response = await API.request('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        if (response.success) {
            this.updateUI();
            return { success: true, user: response.data.user };
        }

        return { success: false, error: response.error || this.translate('auth.loginError') };
    },

    // Registro de novo usuário
    async register(userData) {
        const response = await API.request('/api/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });

        if (response.success) {
            // Faz login automático após registro
            await this.login(userData.email, userData.password);
            return { success: true, user: response.data };
        }

        return { success: false, error: response.error || this.translate('auth.registerError') };
    },

    // Login com Google OAuth (mock)
    async loginWithGoogle() {
        // Simula login com Google
        const mockUser = {
            id: 'google_' + Date.now(),
            name: this.translate('auth.googleUser'),
            email: 'usuario@gmail.com',
            provider: 'google'
        };

        const token = 'google_token_' + Date.now();
        localStorage.setItem('auth_token', token);
        localStorage.setItem('current_user', JSON.stringify(mockUser));

        this.updateUI();
        return { success: true, user: mockUser };
    },

    // Logout
    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('current_user');
        this.updateUI();
        window.location.href = 'index.html';
    },

    // Atualiza UI baseado no estado de autenticação
    updateUI() {
        const isLoggedIn = this.isLoggedIn();
        const loginLink = document.getElementById('login-link');
        const userLink = document.getElementById('user-link');

        if (loginLink) {
            loginLink.style.display = isLoggedIn ? 'none' : 'inline';
        }

        if (userLink) {
            userLink.style.display = isLoggedIn ? 'inline' : 'none';
        }
    }
};

// Atualiza UI quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    Auth.updateUI();
});

