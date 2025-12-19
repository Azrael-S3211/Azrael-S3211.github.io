# Mercado Livre Clone

Projeto completo de e-commerce baseado no design e estrutura do Mercado Livre, desenvolvido com HTML, CSS, JavaScript puro no frontend e Python FastAPI no backend.

## 🚀 Características

- **Frontend puro**: Funciona apenas abrindo o HTML no navegador (sem necessidade de servidor)
- **Backend opcional**: Python FastAPI com SQLite para funcionalidades avançadas
- **Design responsivo**: Layout idêntico ao Mercado Livre, adaptado para mobile e desktop
- **Sistema de produtos**: Suporte para produtos próprios e afiliados/dropshipping
- **Área de serviços**: Sistema completo de serviços com filtros e integração WhatsApp
- **Autenticação**: Login por email/senha e Google OAuth (mock)

## 📁 Estrutura do Projeto

```
mercadolivre-clone/
├── frontend/
│   ├── index.html          # Página inicial
│   ├── produto.html        # Página de produto
│   ├── categoria.html      # Página de categoria
│   ├── servicos.html       # Página de serviços
│   ├── login.html          # Página de login/registro
│   ├── usuario.html        # Área do usuário
│   └── assets/
│       ├── css/
│       │   └── style.css   # Estilos principais
│       ├── js/
│       │   ├── api.js      # Gerenciamento de API
│       │   ├── products.js # Gerenciamento de produtos
│       │   ├── services.js # Gerenciamento de serviços
│       │   ├── auth.js     # Autenticação
│       │   └── index.js    # Script principal
│       └── img/            # Imagens
│
└── backend/
    ├── main.py             # Aplicação FastAPI
    ├── models.py           # Modelos de banco de dados
    ├── schemas.py          # Schemas Pydantic
    ├── routes.py           # Rotas da API
    ├── utils.py            # Funções utilitárias
    ├── requirements.txt    # Dependências Python
    └── database.db         # Banco SQLite (criado automaticamente)
```

## 🎯 Como Usar

### Frontend (Modo Offline)

1. Abra o arquivo `frontend/index.html` diretamente no navegador
2. O site funcionará completamente offline usando localStorage
3. Todos os dados serão salvos localmente no navegador

### Backend (Modo Online)

1. **Instale as dependências Python:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Inicie o servidor:**
   ```bash
   python main.py
   ```
   Ou usando uvicorn diretamente:
   ```bash
   uvicorn main:app --reload
   ```

3. **Acesse a API:**
   - API: http://localhost:8000
   - Documentação: http://localhost:8000/docs
   - Health Check: http://localhost:8000/api/health

4. **Abra o frontend:**
   - O frontend detectará automaticamente se o backend está rodando
   - Se estiver, usará a API; caso contrário, usará localStorage

## 📋 Funcionalidades

### Frontend

- ✅ Barra superior com logo e links
- ✅ Barra de busca funcional
- ✅ Navegação por categorias
- ✅ Banners rotativos (carrossel)
- ✅ Grid de produtos responsivo
- ✅ Página de produto detalhada
- ✅ Sistema de serviços com filtros
- ✅ Login e registro de usuários
- ✅ Área do usuário (histórico, compras, perfil)
- ✅ Sidebar de propagandas (desktop)
- ✅ Banners rotativos no rodapé (mobile)

### Backend

- ✅ API REST completa com FastAPI
- ✅ Banco de dados SQLite
- ✅ CRUD de produtos
- ✅ CRUD de serviços
- ✅ Sistema de autenticação
- ✅ Importação automática de produtos de links externos
- ✅ Histórico de visualizações
- ✅ CORS configurado para frontend

## 🔧 Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3 (Grid, Flexbox, Responsive Design)
- JavaScript (ES6+, módulos)

### Backend
- Python 3.8+
- FastAPI
- SQLAlchemy
- SQLite
- BeautifulSoup4 (para importação de produtos)
- Requests

## 📱 Responsividade

O layout é totalmente responsivo:
- **Desktop**: Sidebar de propagandas fixa à direita
- **Tablet**: Layout adaptado, sidebar se move para baixo
- **Mobile**: Propagandas viram banners rotativos no rodapé

## 🛍️ Sistema de Produtos

### Produtos Próprios
- Título, descrição, preço, estoque
- Múltiplas imagens
- Categorização

### Produtos Afiliados
- Link de afiliado
- Importação automática de dados
- Botão "Ir para Loja" que abre link externo

## 🔐 Autenticação

- Login por email e senha
- Registro de novos usuários
- Login com Google OAuth (mock para desenvolvimento)
- Sessão persistente com localStorage/tokens

## 📞 Serviços

- Cadastro de serviços com:
  - Nome e descrição
  - Preço
  - Localização (país/região)
  - Categoria
  - Número do WhatsApp com link automático
- Filtros avançados por país, região e categoria

## 🎨 Design

O design replica visualmente o Mercado Livre:
- Cores: Amarelo (#fff159), Azul (#3483fa)
- Tipografia: Proxima Nova (fallback para fontes do sistema)
- Cards de produtos com hover effects
- Layout limpo e profissional

## 📝 Notas

- O projeto funciona completamente offline usando localStorage
- O backend é opcional, mas adiciona persistência de dados
- Produtos e serviços de exemplo são criados automaticamente
- A importação de produtos de links externos pode não funcionar em todos os sites (depende da estrutura HTML)

## 🚀 Próximos Passos

- [ ] Implementar carrinho de compras completo
- [ ] Sistema de pagamento (mock)
- [ ] Upload de imagens
- [ ] Sistema de avaliações
- [ ] Notificações
- [ ] Busca avançada com filtros
- [ ] Dashboard administrativo

## 📄 Licença

Este projeto é apenas para fins educacionais e de demonstração.

