# Instruções Rápidas

## 🚀 Início Rápido

### Opção 1: Usar apenas o Frontend (Offline)

1. Abra o arquivo `frontend/index.html` no seu navegador
2. Pronto! O site funciona completamente offline usando localStorage

### Opção 2: Usar com Backend (Recomendado)

1. **Instale Python 3.8+** (se ainda não tiver)

2. **Instale as dependências:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Inicie o servidor:**
   ```bash
   python main.py
   ```
   
   Ou:
   ```bash
   uvicorn main:app --reload
   ```

4. **Abra o frontend:**
   - Abra `frontend/index.html` no navegador
   - O frontend detectará automaticamente o backend rodando

## 📝 Funcionalidades Testadas

✅ Página inicial com produtos
✅ Busca de produtos
✅ Navegação por categorias
✅ Página de produto detalhada
✅ Sistema de serviços
✅ Login e registro
✅ Área do usuário
✅ Histórico de visualizações
✅ Banners rotativos
✅ Layout responsivo

## 🔧 Solução de Problemas

### Backend não inicia
- Verifique se Python está instalado: `python --version`
- Verifique se as dependências foram instaladas: `pip list`
- Tente instalar novamente: `pip install -r requirements.txt`

### Frontend não encontra backend
- Certifique-se de que o backend está rodando na porta 8000
- Verifique se não há firewall bloqueando
- O frontend funcionará offline mesmo se o backend não estiver disponível

### Produtos não aparecem
- Se usando backend: verifique se o banco foi criado (`database.db`)
- Se usando offline: os produtos de exemplo são criados automaticamente no localStorage

## 📚 Documentação da API

Quando o backend estiver rodando, acesse:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🎯 Próximos Passos

1. Teste todas as funcionalidades
2. Adicione seus próprios produtos
3. Personalize o design se necessário
4. Configure o backend para produção (se necessário)

