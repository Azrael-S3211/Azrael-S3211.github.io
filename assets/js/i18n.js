(function () {
    'use strict';

    const STORAGE_KEY = 'wide_market_language';
    const LANGUAGE_OPTIONS = [
        { code: 'pt-BR', label: 'Português (Brasil)' },
        { code: 'en-US', label: 'English (US)' },
        { code: 'es-ES', label: 'Español' },
        { code: 'fr-FR', label: 'Français' },
        { code: 'it-IT', label: 'Italiano' },
        { code: 'zh-CN', label: '中文 (简体)' },
        { code: 'ru-RU', label: 'Русский' },
        { code: 'ar-SA', label: 'العربية' },
        { code: 'hi-IN', label: 'हिन्दी' }
    ];

    const TRANSLATIONS = {
        'topBar.login': {
            'pt-BR': 'Login',
            'en-US': 'Log in',
            'es-ES': 'Iniciar sesión',
            'fr-FR': 'Se connecter',
            'it-IT': 'Accedi',
            'zh-CN': '登录',
            'ru-RU': 'Войти',
            'ar-SA': 'تسجيل الدخول',
            'hi-IN': 'लॉग इन करें'
        },
        'topBar.account': {
            'pt-BR': 'Minha Conta',
            'en-US': 'My account',
            'es-ES': 'Mi cuenta',
            'fr-FR': 'Mon compte',
            'it-IT': 'Il mio account',
            'zh-CN': '我的账户',
            'ru-RU': 'Мой аккаунт',
            'ar-SA': 'حسابي',
            'hi-IN': 'मेरा खाता'
        },
        'topBar.language': {
            'pt-BR': 'Idioma',
            'en-US': 'Language',
            'es-ES': 'Idioma',
            'fr-FR': 'Langue',
            'it-IT': 'Lingua',
            'zh-CN': '语言',
            'ru-RU': 'Язык',
            'ar-SA': 'اللغة',
            'hi-IN': 'भाषा'
        },
        'topBar.back': {
            'pt-BR': 'Voltar',
            'en-US': 'Back',
            'es-ES': 'Volver',
            'fr-FR': 'Retour',
            'it-IT': 'Indietro',
            'zh-CN': '返回',
            'ru-RU': 'Назад',
            'ar-SA': 'رجوع',
            'hi-IN': 'वापस'
        },
        'topBar.home': {
            'pt-BR': 'Início',
            'en-US': 'Home',
            'es-ES': 'Inicio',
            'fr-FR': 'Accueil',
            'it-IT': 'Home',
            'zh-CN': '首页',
            'ru-RU': 'Главная',
            'ar-SA': 'الرئيسية',
            'hi-IN': 'होम'
        },
        'topBar.logout': {
            'pt-BR': 'Sair',
            'en-US': 'Log out',
            'es-ES': 'Cerrar sesión',
            'fr-FR': 'Se déconnecter',
            'it-IT': 'Esci',
            'zh-CN': '退出',
            'ru-RU': 'Выйти',
            'ar-SA': 'تسجيل الخروج',
            'hi-IN': 'लॉग आउट'
        },
        'nav.store': {
            'pt-BR': 'Loja',
            'en-US': 'Store',
            'es-ES': 'Tienda',
            'fr-FR': 'Boutique',
            'it-IT': 'Negozio',
            'zh-CN': '商店',
            'ru-RU': 'Магазин',
            'ar-SA': 'المتجر',
            'hi-IN': 'स्टोर'
        },
        'nav.services': {
            'pt-BR': 'Serviços',
            'en-US': 'Services',
            'es-ES': 'Servicios',
            'fr-FR': 'Services',
            'it-IT': 'Servizi',
            'zh-CN': '服务',
            'ru-RU': 'Услуги',
            'ar-SA': 'الخدمات',
            'hi-IN': 'सेवाएँ'
        },
        'nav.courses': {
            'pt-BR': 'Cursos',
            'en-US': 'Courses',
            'es-ES': 'Cursos',
            'fr-FR': 'Cours',
            'it-IT': 'Corsi',
            'zh-CN': '课程',
            'ru-RU': 'Курсы',
            'ar-SA': 'الدورات',
            'hi-IN': 'पाठ्यक्रम'
        },
        'search.productsPlaceholder': {
            'pt-BR': 'Buscar produtos, marcas e muito mais...',
            'en-US': 'Search products, brands and more...',
            'es-ES': 'Busca productos, marcas y más...',
            'fr-FR': 'Recherchez des produits, des marques et plus...',
            'it-IT': 'Cerca prodotti, marchi e altro...',
            'zh-CN': '搜索商品、品牌等...',
            'ru-RU': 'Ищите товары, бренды и другое...',
            'ar-SA': 'ابحث عن منتجات وعلامات تجارية والمزيد...',
            'hi-IN': 'उत्पाद, ब्रांड और अधिक खोजें...'
        },
        'search.servicesPlaceholder': {
            'pt-BR': 'Buscar serviços...',
            'en-US': 'Search services...',
            'es-ES': 'Buscar servicios...',
            'fr-FR': 'Rechercher des services...',
            'it-IT': 'Cerca servizi...',
            'zh-CN': '搜索服务...',
            'ru-RU': 'Искать услуги...',
            'ar-SA': 'ابحث عن الخدمات...',
            'hi-IN': 'सेवाएँ खोजें...'
        },
        'search.button': {
            'pt-BR': 'Buscar',
            'en-US': 'Search',
            'es-ES': 'Buscar',
            'fr-FR': 'Rechercher',
            'it-IT': 'Cerca',
            'zh-CN': '搜索',
            'ru-RU': 'Поиск',
            'ar-SA': 'بحث',
            'hi-IN': 'खोजें'
        },
        'banner.maintenance': {
            'pt-BR': 'Atenção: nosso site está em manutenção!',
            'en-US': 'Heads up: our site is under maintenance!',
            'es-ES': 'Atención: nuestro sitio está en mantenimiento.',
            'fr-FR': 'Attention : notre site est en maintenance !',
            'it-IT': 'Attenzione: il nostro sito è in manutenzione!',
            'zh-CN': '注意：我们的网站正在维护！',
            'ru-RU': 'Внимание: наш сайт на техническом обслуживании!',
            'ar-SA': 'تنبيه: موقعنا قيد الصيانة!',
            'hi-IN': 'ध्यान दें: हमारी साइट रखरखाव पर है!'
        },
        'banner.launch': {
            'pt-BR': 'Fique ligado! O lançamento oficial está chegando.',
            'en-US': 'Stay tuned! The official launch is coming.',
            'es-ES': '¡Atento! El lanzamiento oficial está por llegar.',
            'fr-FR': 'Restez à l’écoute ! Le lancement officiel arrive.',
            'it-IT': 'Resta connesso! Il lancio ufficiale sta arrivando.',
            'zh-CN': '敬请期待！官网上线即将到来。',
            'ru-RU': 'Следите за новостями! Официальный запуск уже близко.',
            'ar-SA': 'ترقّبوا! الإطلاق الرسمي قادم قريبًا.',
            'hi-IN': 'बने रहें! आधिकारिक लॉन्च जल्द आ रहा है।'
        },
        'section.featuredProducts': {
            'pt-BR': 'Produtos em Destaque',
            'en-US': 'Featured products',
            'es-ES': 'Productos destacados',
            'fr-FR': 'Produits en vedette',
            'it-IT': 'Prodotti in evidenza',
            'zh-CN': '精选商品',
            'ru-RU': 'Популярные товары',
            'ar-SA': 'منتجات مميزة',
            'hi-IN': 'विशेष उत्पाद'
        },
        'ads.title': {
            'pt-BR': 'Anúncios',
            'en-US': 'Ads',
            'es-ES': 'Anuncios',
            'fr-FR': 'Annonces',
            'it-IT': 'Annunci',
            'zh-CN': '广告',
            'ru-RU': 'Реклама',
            'ar-SA': 'إعلانات',
            'hi-IN': 'विज्ञापन'
        },
        'loading.products': {
            'pt-BR': 'Carregando produtos...',
            'en-US': 'Loading products...',
            'es-ES': 'Cargando productos...',
            'fr-FR': 'Chargement des produits...',
            'it-IT': 'Caricamento dei prodotti...',
            'zh-CN': '正在加载商品...',
            'ru-RU': 'Загрузка товаров...',
            'ar-SA': 'جاري تحميل المنتجات...',
            'hi-IN': 'उत्पाद लोड हो रहे हैं...'
        },
        'loading.services': {
            'pt-BR': 'Carregando serviços...',
            'en-US': 'Loading services...',
            'es-ES': 'Cargando servicios...',
            'fr-FR': 'Chargement des services...',
            'it-IT': 'Caricamento dei servizi...',
            'zh-CN': '正在加载服务...',
            'ru-RU': 'Загрузка услуг...',
            'ar-SA': 'جاري تحميل الخدمات...',
            'hi-IN': 'सेवाएँ लोड हो रही हैं...'
        },
        'loading.product': {
            'pt-BR': 'Carregando produto...',
            'en-US': 'Loading product...',
            'es-ES': 'Cargando producto...',
            'fr-FR': 'Chargement du produit...',
            'it-IT': 'Caricamento del prodotto...',
            'zh-CN': '正在加载商品...',
            'ru-RU': 'Загрузка товара...',
            'ar-SA': 'جاري تحميل المنتج...',
            'hi-IN': 'उत्पाद लोड हो रहा है...'
        },
        'loading.courses': {
            'pt-BR': 'Carregando cursos...',
            'en-US': 'Loading courses...',
            'es-ES': 'Cargando cursos...',
            'fr-FR': 'Chargement des cours...',
            'it-IT': 'Caricamento dei corsi...',
            'zh-CN': '正在加载课程...',
            'ru-RU': 'Загрузка курсов...',
            'ar-SA': 'جاري تحميل الدورات...',
            'hi-IN': 'कोर्स लोड हो रहे हैं...'
        },
        'loading.history': {
            'pt-BR': 'Carregando histórico...',
            'en-US': 'Loading history...',
            'es-ES': 'Cargando historial...',
            'fr-FR': 'Chargement de l’historique...',
            'it-IT': 'Caricamento della cronologia...',
            'zh-CN': '正在加载历史记录...',
            'ru-RU': 'Загрузка истории...',
            'ar-SA': 'جاري تحميل السجل...',
            'hi-IN': 'इतिहास लोड हो रहा है...'
        },
        'loading.profile': {
            'pt-BR': 'Carregando dados...',
            'en-US': 'Loading data...',
            'es-ES': 'Cargando datos...',
            'fr-FR': 'Chargement des données...',
            'it-IT': 'Caricamento dei dati...',
            'zh-CN': '正在加载数据...',
            'ru-RU': 'Загрузка данных...',
            'ar-SA': 'جاري تحميل البيانات...',
            'hi-IN': 'डेटा लोड हो रहा है...'
        },
        'services.title': {
            'pt-BR': 'Serviços',
            'en-US': 'Services',
            'es-ES': 'Servicios',
            'fr-FR': 'Services',
            'it-IT': 'Servizi',
            'zh-CN': '服务',
            'ru-RU': 'Услуги',
            'ar-SA': 'الخدمات',
            'hi-IN': 'सेवाएँ'
        },
        'filters.country': {
            'pt-BR': 'País',
            'en-US': 'Country',
            'es-ES': 'País',
            'fr-FR': 'Pays',
            'it-IT': 'Paese',
            'zh-CN': '国家',
            'ru-RU': 'Страна',
            'ar-SA': 'الدولة',
            'hi-IN': 'देश'
        },
        'filters.country.all': {
            'pt-BR': 'Todos',
            'en-US': 'All',
            'es-ES': 'Todos',
            'fr-FR': 'Tous',
            'it-IT': 'Tutti',
            'zh-CN': '全部',
            'ru-RU': 'Все',
            'ar-SA': 'الكل',
            'hi-IN': 'सभी'
        },
        'filters.country.brazil': {
            'pt-BR': 'Brasil',
            'en-US': 'Brazil',
            'es-ES': 'Brasil',
            'fr-FR': 'Brésil',
            'it-IT': 'Brasile',
            'zh-CN': '巴西',
            'ru-RU': 'Бразилия',
            'ar-SA': 'البرازيل',
            'hi-IN': 'ब्राज़ील'
        },
        'filters.country.argentina': {
            'pt-BR': 'Argentina',
            'en-US': 'Argentina',
            'es-ES': 'Argentina',
            'fr-FR': 'Argentine',
            'it-IT': 'Argentina',
            'zh-CN': '阿根廷',
            'ru-RU': 'Аргентина',
            'ar-SA': 'الأرجنتين',
            'hi-IN': 'अर्जेंटीना'
        },
        'filters.country.chile': {
            'pt-BR': 'Chile',
            'en-US': 'Chile',
            'es-ES': 'Chile',
            'fr-FR': 'Chili',
            'it-IT': 'Cile',
            'zh-CN': '智利',
            'ru-RU': 'Чили',
            'ar-SA': 'تشيلي',
            'hi-IN': 'चिली'
        },
        'filters.country.usa': {
            'pt-BR': 'Estados Unidos',
            'en-US': 'United States',
            'es-ES': 'Estados Unidos',
            'fr-FR': 'États-Unis',
            'it-IT': 'Stati Uniti',
            'zh-CN': '美国',
            'ru-RU': 'США',
            'ar-SA': 'الولايات المتحدة',
            'hi-IN': 'संयुक्त राज्य'
        },
        'filters.country.spain': {
            'pt-BR': 'Espanha',
            'en-US': 'Spain',
            'es-ES': 'España',
            'fr-FR': 'Espagne',
            'it-IT': 'Spagna',
            'zh-CN': '西班牙',
            'ru-RU': 'Испания',
            'ar-SA': 'إسبانيا',
            'hi-IN': 'स्पेन'
        },
        'filters.country.france': {
            'pt-BR': 'França',
            'en-US': 'France',
            'es-ES': 'Francia',
            'fr-FR': 'France',
            'it-IT': 'Francia',
            'zh-CN': '法国',
            'ru-RU': 'Франция',
            'ar-SA': 'فرنسا',
            'hi-IN': 'फ़्रांस'
        },
        'filters.country.italy': {
            'pt-BR': 'Itália',
            'en-US': 'Italy',
            'es-ES': 'Italia',
            'fr-FR': 'Italie',
            'it-IT': 'Italia',
            'zh-CN': '意大利',
            'ru-RU': 'Италия',
            'ar-SA': 'إيطاليا',
            'hi-IN': 'इटली'
        },
        'filters.country.china': {
            'pt-BR': 'China',
            'en-US': 'China',
            'es-ES': 'China',
            'fr-FR': 'Chine',
            'it-IT': 'Cina',
            'zh-CN': '中国',
            'ru-RU': 'Китай',
            'ar-SA': 'الصين',
            'hi-IN': 'चीन'
        },
        'filters.country.russia': {
            'pt-BR': 'Rússia',
            'en-US': 'Russia',
            'es-ES': 'Rusia',
            'fr-FR': 'Russie',
            'it-IT': 'Russia',
            'zh-CN': '俄罗斯',
            'ru-RU': 'Россия',
            'ar-SA': 'روسيا',
            'hi-IN': 'रूस'
        },
        'filters.country.uae': {
            'pt-BR': 'Emirados Árabes',
            'en-US': 'United Arab Emirates',
            'es-ES': 'Emiratos Árabes',
            'fr-FR': 'Émirats arabes unis',
            'it-IT': 'Emirati Árabes',
            'zh-CN': '阿联酋',
            'ru-RU': 'ОАЭ',
            'ar-SA': 'الإمارات العربية المتحدة',
            'hi-IN': 'संयुक्त अरब अमीरात'
        },
        'filters.country.india': {
            'pt-BR': 'Índia',
            'en-US': 'India',
            'es-ES': 'India',
            'fr-FR': 'Inde',
            'it-IT': 'India',
            'zh-CN': '印度',
            'ru-RU': 'Индия',
            'ar-SA': 'الهند',
            'hi-IN': 'भारत'
        },
        'filters.region': {
            'pt-BR': 'Região',
            'en-US': 'Region',
            'es-ES': 'Región',
            'fr-FR': 'Région',
            'it-IT': 'Regione',
            'zh-CN': '地区',
            'ru-RU': 'Регион',
            'ar-SA': 'المنطقة',
            'hi-IN': 'क्षेत्र'
        },
        'filters.region.all': {
            'pt-BR': 'Todas',
            'en-US': 'All',
            'es-ES': 'Todas',
            'fr-FR': 'Toutes',
            'it-IT': 'Tutte',
            'zh-CN': '全部',
            'ru-RU': 'Все',
            'ar-SA': 'الكل',
            'hi-IN': 'सभी'
        },
        'filters.region.sp': {
            'pt-BR': 'São Paulo',
            'en-US': 'São Paulo',
            'es-ES': 'São Paulo',
            'fr-FR': 'São Paulo',
            'it-IT': 'São Paulo',
            'zh-CN': '圣保罗',
            'ru-RU': 'Сан-Паулу',
            'ar-SA': 'ساو باولو',
            'hi-IN': 'साओ पाओलो'
        },
        'filters.region.rj': {
            'pt-BR': 'Rio de Janeiro',
            'en-US': 'Rio de Janeiro',
            'es-ES': 'Río de Janeiro',
            'fr-FR': 'Rio de Janeiro',
            'it-IT': 'Rio de Janeiro',
            'zh-CN': '里约热内卢',
            'ru-RU': 'Рио-де-Жанейро',
            'ar-SA': 'ريو دي جانيرو',
            'hi-IN': 'रियो डी जेनेरो'
        },
        'filters.region.mg': {
            'pt-BR': 'Minas Gerais',
            'en-US': 'Minas Gerais',
            'es-ES': 'Minas Gerais',
            'fr-FR': 'Minas Gerais',
            'it-IT': 'Minas Gerais',
            'zh-CN': '米纳斯吉拉斯',
            'ru-RU': 'Минас-Жерайс',
            'ar-SA': 'ميناس جيرايس',
            'hi-IN': 'मिनस गेरैस'
        },
        'filters.region.rs': {
            'pt-BR': 'Rio Grande do Sul',
            'en-US': 'Rio Grande do Sul',
            'es-ES': 'Río Grande do Sul',
            'fr-FR': 'Rio Grande do Sul',
            'it-IT': 'Rio Grande do Sul',
            'zh-CN': '南大河州',
            'ru-RU': 'Риу-Гранди-ду-Сул',
            'ar-SA': 'ريو غراندي دو سول',
            'hi-IN': 'रियो ग्रांडे डो सुल'
        },
        'filters.category': {
            'pt-BR': 'Categoria',
            'en-US': 'Category',
            'es-ES': 'Categoría',
            'fr-FR': 'Catégorie',
            'it-IT': 'Categoria',
            'zh-CN': '类别',
            'ru-RU': 'Категория',
            'ar-SA': 'الفئة',
            'hi-IN': 'श्रेणी'
        },
        'filters.category.all': {
            'pt-BR': 'Todas',
            'en-US': 'All',
            'es-ES': 'Todas',
            'fr-FR': 'Toutes',
            'it-IT': 'Tutte',
            'zh-CN': '全部',
            'ru-RU': 'Все',
            'ar-SA': 'الكل',
            'hi-IN': 'सभी'
        },
        'filters.category.tech': {
            'pt-BR': 'Tecnologia',
            'en-US': 'Technology',
            'es-ES': 'Tecnología',
            'fr-FR': 'Technologie',
            'it-IT': 'Tecnologia',
            'zh-CN': '科技',
            'ru-RU': 'Технологии',
            'ar-SA': 'التقنية',
            'hi-IN': 'प्रौद्योगिकी'
        },
        'filters.category.education': {
            'pt-BR': 'Educação',
            'en-US': 'Education',
            'es-ES': 'Educación',
            'fr-FR': 'Éducation',
            'it-IT': 'Istruzione',
            'zh-CN': '教育',
            'ru-RU': 'Образование',
            'ar-SA': 'التعليم',
            'hi-IN': 'शिक्षा'
        },
        'filters.category.health': {
            'pt-BR': 'Saúde',
            'en-US': 'Health',
            'es-ES': 'Salud',
            'fr-FR': 'Santé',
            'it-IT': 'Salute',
            'zh-CN': '健康',
            'ru-RU': 'Здоровье',
            'ar-SA': 'الصحة',
            'hi-IN': 'स्वास्थ्य'
        },
        'filters.category.beauty': {
            'pt-BR': 'Beleza',
            'en-US': 'Beauty',
            'es-ES': 'Belleza',
            'fr-FR': 'Beauté',
            'it-IT': 'Bellezza',
            'zh-CN': '美妆',
            'ru-RU': 'Красота',
            'ar-SA': 'الجمال',
            'hi-IN': 'सौंदर्य'
        },
        'filters.category.repair': {
            'pt-BR': 'Reparos',
            'en-US': 'Repairs',
            'es-ES': 'Reparaciones',
            'fr-FR': 'Réparations',
            'it-IT': 'Riparazioni',
            'zh-CN': '维修',
            'ru-RU': 'Ремонт',
            'ar-SA': 'الصيانة',
            'hi-IN': 'मरम्मत'
        },
        'filters.category.marketing': {
            'pt-BR': 'Marketing',
            'en-US': 'Marketing',
            'es-ES': 'Marketing',
            'fr-FR': 'Marketing',
            'it-IT': 'Marketing',
            'zh-CN': '市场营销',
            'ru-RU': 'Маркетинг',
            'ar-SA': 'التسويق',
            'hi-IN': 'मार्केटिंग'
        },
        'filters.category.design': {
            'pt-BR': 'Design',
            'en-US': 'Design',
            'es-ES': 'Diseño',
            'fr-FR': 'Design',
            'it-IT': 'Design',
            'zh-CN': '设计',
            'ru-RU': 'Дизайн',
            'ar-SA': 'التصميم',
            'hi-IN': 'डिज़ाइन'
        },
        'filters.category.consulting': {
            'pt-BR': 'Consultoria',
            'en-US': 'Consulting',
            'es-ES': 'Consultoría',
            'fr-FR': 'Conseil',
            'it-IT': 'Consulenza',
            'zh-CN': '咨询',
            'ru-RU': 'Консалтинг',
            'ar-SA': 'الاستشارات',
            'hi-IN': 'परामर्श'
        },
        'filters.category.gastronomy': {
            'pt-BR': 'Gastronomia',
            'en-US': 'Gastronomy',
            'es-ES': 'Gastronomía',
            'fr-FR': 'Gastronomie',
            'it-IT': 'Gastronomia',
            'zh-CN': '美食',
            'ru-RU': 'Гастрономия',
            'ar-SA': 'فنون الطهي',
            'hi-IN': 'खानपान'
        },
        'filters.category.logistics': {
            'pt-BR': 'Logística',
            'en-US': 'Logistics',
            'es-ES': 'Logística',
            'fr-FR': 'Logistique',
            'it-IT': 'Logistica',
            'zh-CN': '物流',
            'ru-RU': 'Логистика',
            'ar-SA': 'اللوجستيات',
            'hi-IN': 'लॉजिस्टिक्स'
        },
        'filters.apply': {
            'pt-BR': 'Filtrar',
            'en-US': 'Filter',
            'es-ES': 'Filtrar',
            'fr-FR': 'Filtrer',
            'it-IT': 'Filtra',
            'zh-CN': '筛选',
            'ru-RU': 'Фильтр',
            'ar-SA': 'تصفية',
            'hi-IN': 'फ़िल्टर करें'
        },
        'filters.reset': {
            'pt-BR': 'Limpar filtros',
            'en-US': 'Clear filters',
            'es-ES': 'Limpiar filtros',
            'fr-FR': 'Réinitialiser',
            'it-IT': 'Pulisci filtros',
            'zh-CN': '清除筛选',
            'ru-RU': 'Сбросить фильтры',
            'ar-SA': 'إعادة التعيين',
            'hi-IN': 'फ़िल्टर रीसेट करें'
        },
        'store.filters.title': {
            'pt-BR': 'Encontre os melhores produtos',
            'en-US': 'Find the best products',
            'es-ES': 'Encuentra los mejores productos',
            'fr-FR': 'Trouvez les meilleurs produits',
            'it-IT': 'Trova i migliori prodotti',
            'zh-CN': '发现优秀商品',
            'ru-RU': 'Найдите лучшие товары',
            'ar-SA': 'اعثر على أفضل المنتجات',
            'hi-IN': 'सबसे अच्छे उत्पाद खोजें'
        },
        'store.search.placeholder': {
            'pt-BR': 'Buscar produtos, marcas e muito mais...',
            'en-US': 'Search products, brands and more...',
            'es-ES': 'Busca productos, marcas y más...',
            'fr-FR': 'Recherchez des produits, des marques et plus...',
            'it-IT': 'Cerca prodotti, marchi e altro...',
            'zh-CN': '搜索商品、品牌等...',
            'ru-RU': 'Ищите товары, бренды и другое...',
            'ar-SA': 'ابحث عن منتجات وعلامات تجارية والمزيد...',
            'hi-IN': 'उत्पाद, ब्रांड और अधिक खोजें...'
        },
        'store.filters.category': {
            'pt-BR': 'Categoria',
            'en-US': 'Category',
            'es-ES': 'Categoría',
            'fr-FR': 'Catégorie',
            'it-IT': 'Categoria',
            'zh-CN': '类别',
            'ru-RU': 'Категория',
            'ar-SA': 'الفئة',
            'hi-IN': 'श्रेणी'
        },
        'store.filters.price': {
            'pt-BR': 'Faixa de preço',
            'en-US': 'Price range',
            'es-ES': 'Rango de precio',
            'fr-FR': 'Fourchette de prix',
            'it-IT': 'Fascia di prezzo',
            'zh-CN': '价格区间',
            'ru-RU': 'Диапазон цен',
            'ar-SA': 'نطاق السعر',
            'hi-IN': 'मूल्य सीमा'
        },
        'store.filters.price.all': {
            'pt-BR': 'Todos',
            'en-US': 'All',
            'es-ES': 'Todos',
            'fr-FR': 'Tous',
            'it-IT': 'Tutti',
            'zh-CN': '全部',
            'ru-RU': 'Все',
            'ar-SA': 'الكل',
            'hi-IN': 'सभी'
        },
        'store.filters.price.low': {
            'pt-BR': 'Até R$ 100',
            'en-US': 'Up to R$100',
            'es-ES': 'Hasta R$100',
            'fr-FR': 'Jusqu’à R$100',
            'it-IT': 'Fino a R$100',
            'zh-CN': '低于 R$100',
            'ru-RU': 'До R$100',
            'ar-SA': 'حتى 100 ريال',
            'hi-IN': 'R$100 तक'
        },
        'store.filters.price.mid': {
            'pt-BR': 'R$ 100 a R$ 500',
            'en-US': 'R$100 to R$500',
            'es-ES': 'De R$100 a R$500',
            'fr-FR': 'De R$100 à R$500',
            'it-IT': 'Da R$100 a R$500',
            'zh-CN': 'R$100 - R$500',
            'ru-RU': 'R$100–R$500',
            'ar-SA': 'من 100 إلى 500 ريال',
            'hi-IN': 'R$100 से R$500'
        },
        'store.filters.price.high': {
            'pt-BR': 'Acima de R$ 500',
            'en-US': 'Above R$500',
            'es-ES': 'Más de R$500',
            'fr-FR': 'Au-dessus de R$500',
            'it-IT': 'Oltre R$500',
            'zh-CN': '高于 R$500',
            'ru-RU': 'Свыше R$500',
            'ar-SA': 'أكثر من 500 ريال',
            'hi-IN': 'R$500 से अधिक'
        },
        'categories.popularTitle': {
            'pt-BR': 'Categorias populares',
            'en-US': 'Popular categories',
            'es-ES': 'Categorías populares',
            'fr-FR': 'Catégories populaires',
            'it-IT': 'Categorie popolari',
            'zh-CN': '热门分类',
            'ru-RU': 'Популярные категории',
            'ar-SA': 'الفئات الشائعة',
            'hi-IN': 'लोकप्रिय श्रेणियाँ'
        },
        'categories.popularSubtitle': {
            'pt-BR': 'Escolha um segmento para refinar sua busca.',
            'en-US': 'Pick a segment to refine your search.',
            'es-ES': 'Elige un segmento para refinar tu búsqueda.',
            'fr-FR': 'Choisissez un segment pour affiner votre recherche.',
            'it-IT': 'Scegli un segmento per affinare la ricerca.',
            'zh-CN': '选择一个类别来精确搜索。',
            'ru-RU': 'Выберите направление, чтобы уточнить поиск.',
            'ar-SA': 'اختر فئة لتحديد بحثك.',
            'hi-IN': 'अपनी खोज को बेहतर बनाने के लिए एक श्रेणी चुनें।'
        },
        'categories.names.eletronicos': {
            'pt-BR': 'Eletrônicos',
            'en-US': 'Electronics',
            'es-ES': 'Electrónica',
            'fr-FR': 'Électronique',
            'it-IT': 'Elettronica',
            'zh-CN': '电子产品',
            'ru-RU': 'Электроника',
            'ar-SA': 'إلكترونيات',
            'hi-IN': 'इलेक्ट्रॉनिक्स'
        },
        'categories.names.roupas': {
            'pt-BR': 'Roupas',
            'en-US': 'Clothing',
            'es-ES': 'Ropa',
            'fr-FR': 'Vêtements',
            'it-IT': 'Abbigliamento',
            'zh-CN': '服饰',
            'ru-RU': 'Одежда',
            'ar-SA': 'ملابس',
            'hi-IN': 'कपड़े'
        },
        'categories.names.casa': {
            'pt-BR': 'Casa e Decoração',
            'en-US': 'Home & décor',
            'es-ES': 'Hogar y decoración',
            'fr-FR': 'Maison & déco',
            'it-IT': 'Casa e decorazione',
            'zh-CN': '家居与装饰',
            'ru-RU': 'Дом и декор',
            'ar-SA': 'المنزل والديكور',
            'hi-IN': 'घर और सजावट'
        },
        'categories.names.esportes': {
            'pt-BR': 'Esportes',
            'en-US': 'Sports',
            'es-ES': 'Deportes',
            'fr-FR': 'Sports',
            'it-IT': 'Sport',
            'zh-CN': '运动',
            'ru-RU': 'Спорт',
            'ar-SA': 'الرياضة',
            'hi-IN': 'खेल'
        },
        'categories.names.livros': {
            'pt-BR': 'Livros',
            'en-US': 'Books',
            'es-ES': 'Libros',
            'fr-FR': 'Livres',
            'it-IT': 'Libri',
            'zh-CN': '图书',
            'ru-RU': 'Книги',
            'ar-SA': 'كتب',
            'hi-IN': 'किताबें'
        },
        'categories.names.brinquedos': {
            'pt-BR': 'Brinquedos',
            'en-US': 'Toys',
            'es-ES': 'Juguetes',
            'fr-FR': 'Jouets',
            'it-IT': 'Giocattoli',
            'zh-CN': '玩具',
            'ru-RU': 'Игрушки',
            'ar-SA': 'ألعاب',
            'hi-IN': 'खिलौने'
        },
        'categories.names.automoveis': {
            'pt-BR': 'Automóveis',
            'en-US': 'Automotive',
            'es-ES': 'Automóviles',
            'fr-FR': 'Automobile',
            'it-IT': 'Automobili',
            'zh-CN': '汽车',
            'ru-RU': 'Авто',
            'ar-SA': 'سيارات',
            'hi-IN': 'ऑटोमोबाइल'
        },
        'categories.names.informatica': {
            'pt-BR': 'Informática',
            'en-US': 'Computing',
            'es-ES': 'Informática',
            'fr-FR': 'Informatique',
            'it-IT': 'Informatica',
            'zh-CN': '计算机',
            'ru-RU': 'Компьютеры',
            'ar-SA': 'الحوسبة',
            'hi-IN': 'कम्प्यूटिंग'
        },
        'categories.defaultTitle': {
            'pt-BR': 'Categoria',
            'en-US': 'Category',
            'es-ES': 'Categoría',
            'fr-FR': 'Catégorie',
            'it-IT': 'Categoria',
            'zh-CN': '类别',
            'ru-RU': 'Категория',
            'ar-SA': 'الفئة',
            'hi-IN': 'श्रेणी'
        },
        'products.empty': {
            'pt-BR': 'Nenhum produto encontrado',
            'en-US': 'No products found',
            'es-ES': 'No se encontraron productos',
            'fr-FR': 'Aucun produit trouvé',
            'it-IT': 'Nessun prodotto trovato',
            'zh-CN': '未找到商品',
            'ru-RU': 'Товары не найдены',
            'ar-SA': 'لم يتم العثور على منتجات',
            'hi-IN': 'कोई उत्पाद नहीं मिला'
        },
        'products.notFound': {
            'pt-BR': 'Produto não encontrado',
            'en-US': 'Product not found',
            'es-ES': 'Producto no encontrado',
            'fr-FR': 'Produit introuvable',
            'it-IT': 'Prodotto non trovato',
            'zh-CN': '未找到商品',
            'ru-RU': 'Товар не найден',
            'ar-SA': 'المنتج غير موجود',
            'hi-IN': 'उत्पाद नहीं मिला'
        },
        'products.backHome': {
            'pt-BR': 'Voltar para início',
            'en-US': 'Back to home',
            'es-ES': 'Volver al inicio',
            'fr-FR': 'Retour à l’accueil',
            'it-IT': 'Torna alla home',
            'zh-CN': '返回首页',
            'ru-RU': 'Вернуться на главную',
            'ar-SA': 'العودة إلى الرئيسية',
            'hi-IN': 'होम पर लौटें'
        },
        'products.externalCta': {
            'pt-BR': 'Ir para Loja Externa',
            'en-US': 'Go to partner store',
            'es-ES': 'Ir a la tienda externa',
            'fr-FR': 'Aller à la boutique externe',
            'it-IT': 'Vai al negozio esterno',
            'zh-CN': '前往合作商店',
            'ru-RU': 'Перейти во внешний магазин',
            'ar-SA': 'اذهب إلى المتجر الخارجي',
            'hi-IN': 'बाहरी स्टोर पर जाएँ'
        },
        'products.buyNow': {
            'pt-BR': 'Comprar Agora',
            'en-US': 'Buy now',
            'es-ES': 'Comprar ahora',
            'fr-FR': 'Acheter maintenant',
            'it-IT': 'Acquista ora',
            'zh-CN': '立即购买',
            'ru-RU': 'Купить сейчас',
            'ar-SA': 'اشترِ الآن',
            'hi-IN': 'अभी खरीदें'
        },
        'products.addToFavorites': {
            'pt-BR': 'Adicionar aos Favoritos',
            'en-US': 'Add to favorites',
            'es-ES': 'Agregar a favoritos',
            'fr-FR': 'Ajouter aux favoris',
            'it-IT': 'Aggiungi ai preferiti',
            'zh-CN': '加入收藏',
            'ru-RU': 'В избранное',
            'ar-SA': 'أضف إلى المفضلة',
            'hi-IN': 'पसंदीदा में जोड़ें'
        },
        'products.description': {
            'pt-BR': 'Descrição',
            'en-US': 'Description',
            'es-ES': 'Descripción',
            'fr-FR': 'Description',
            'it-IT': 'Descrizione',
            'zh-CN': '描述',
            'ru-RU': 'Описание',
            'ar-SA': 'الوصف',
            'hi-IN': 'विवरण'
        },
        'products.noDescription': {
            'pt-BR': 'Sem descrição disponível.',
            'en-US': 'No description available.',
            'es-ES': 'Sin descripción disponible.',
            'fr-FR': 'Aucune description disponible.',
            'it-IT': 'Nessuna descrizione disponibile.',
            'zh-CN': '暂无描述。',
            'ru-RU': 'Описание отсутствует.',
            'ar-SA': 'لا يوجد وصف متاح.',
            'hi-IN': 'विवरण उपलब्ध नहीं है।'
        },
        'alerts.addedToCart': {
            'pt-BR': 'Produto adicionado ao carrinho!',
            'en-US': 'Product added to cart!',
            'es-ES': '¡Producto agregado al carrito!',
            'fr-FR': 'Produit ajouté au panier !',
            'it-IT': 'Prodotto aggiunto al carrello!',
            'zh-CN': '商品已加入购物车！',
            'ru-RU': 'Товар добавлен в корзину!',
            'ar-SA': 'تمت إضافة المنتج إلى السلة!',
            'hi-IN': 'उत्पाद कार्ट में जोड़ा गया!'
        },
        'alerts.addedToFavorites': {
            'pt-BR': 'Produto adicionado aos favoritos!',
            'en-US': 'Product added to favorites!',
            'es-ES': '¡Producto agregado a favoritos!',
            'fr-FR': 'Produit ajouté aux favoris !',
            'it-IT': 'Prodotto aggiunto ai preferiti!',
            'zh-CN': '商品已收藏！',
            'ru-RU': 'Товар добавлен в избранное!',
            'ar-SA': 'تمت إضافة المنتج إلى المفضلة!',
            'hi-IN': 'उत्पाद पसंदीदा में जोड़ा गया!'
        },
        'alerts.alreadyFavorite': {
            'pt-BR': 'Produto já está nos favoritos!',
            'en-US': 'Product is already in favorites!',
            'es-ES': '¡El producto ya está en favoritos!',
            'fr-FR': 'Le produit est déjà dans vos favoris !',
            'it-IT': 'Il prodotto è già nei preferiti!',
            'zh-CN': '该商品已在收藏夹中！',
            'ru-RU': 'Товар уже в избранном!',
            'ar-SA': 'المنتج موجود بالفعل في المفضلة!',
            'hi-IN': 'उत्पाद पहले से पसंदीदा में है!'
        },
        'services.empty': {
            'pt-BR': 'Nenhum serviço encontrado',
            'en-US': 'No services found',
            'es-ES': 'No se encontraron servicios',
            'fr-FR': 'Aucun service trouvé',
            'it-IT': 'Nessun servizio trovato',
            'zh-CN': '未找到服务',
            'ru-RU': 'Услуги не найдены',
            'ar-SA': 'لم يتم العثور على خدمات',
            'hi-IN': 'कोई सेवा नहीं मिली'
        },
        'services.filters.searchTitle': {
            'pt-BR': 'Busque por serviços especializados',
            'en-US': 'Search for specialized services',
            'es-ES': 'Busca servicios especializados',
            'fr-FR': 'Recherchez des services spécialisés',
            'it-IT': 'Cerca servizi specializzati',
            'zh-CN': '搜索专业服务',
            'ru-RU': 'Ищите специализированные услуги',
            'ar-SA': 'ابحث عن خدمات متخصصة',
            'hi-IN': 'विशेष सेवाएँ खोजें'
        },
        'services.whatsapp': {
            'pt-BR': 'WhatsApp:',
            'en-US': 'WhatsApp:',
            'es-ES': 'WhatsApp:',
            'fr-FR': 'WhatsApp :',
            'it-IT': 'WhatsApp:',
            'zh-CN': 'WhatsApp：',
            'ru-RU': 'WhatsApp:',
            'ar-SA': 'واتساب:',
            'hi-IN': 'व्हाट्सएप:'
        },
        'login.title': {
            'pt-BR': 'Entrar',
            'en-US': 'Sign in',
            'es-ES': 'Iniciar sesión',
            'fr-FR': 'Se connecter',
            'it-IT': 'Accedi',
            'zh-CN': '登录',
            'ru-RU': 'Войти',
            'ar-SA': 'تسجيل الدخول',
            'hi-IN': 'साइन इन करें'
        },
        'login.google': {
            'pt-BR': 'Continuar com Google',
            'en-US': 'Continue with Google',
            'es-ES': 'Continuar con Google',
            'fr-FR': 'Continuer avec Google',
            'it-IT': 'Continua con Google',
            'zh-CN': '使用 Google 继续',
            'ru-RU': 'Продолжить с Google',
            'ar-SA': 'تابع عبر Google',
            'hi-IN': 'Google से जारी रखें'
        },
        'login.or': {
            'pt-BR': 'ou',
            'en-US': 'or',
            'es-ES': 'o',
            'fr-FR': 'ou',
            'it-IT': 'oppure',
            'zh-CN': '或',
            'ru-RU': 'или',
            'ar-SA': 'أو',
            'hi-IN': 'या'
        },
        'login.form.email': {
            'pt-BR': 'Email',
            'en-US': 'Email',
            'es-ES': 'Correo electrónico',
            'fr-FR': 'E-mail',
            'it-IT': 'Email',
            'zh-CN': '邮箱',
            'ru-RU': 'Email',
            'ar-SA': 'البريد الإلكتروني',
            'hi-IN': 'ईमेल'
        },
        'login.form.password': {
            'pt-BR': 'Senha',
            'en-US': 'Password',
            'es-ES': 'Contraseña',
            'fr-FR': 'Mot de passe',
            'it-IT': 'Password',
            'zh-CN': '密码',
            'ru-RU': 'Пароль',
            'ar-SA': 'كلمة المرور',
            'hi-IN': 'पासवर्ड'
        },
        'login.form.submit': {
            'pt-BR': 'Entrar',
            'en-US': 'Sign in',
            'es-ES': 'Ingresar',
            'fr-FR': 'Se connecter',
            'it-IT': 'Accedi',
            'zh-CN': '登录',
            'ru-RU': 'Войти',
            'ar-SA': 'تسجيل الدخول',
            'hi-IN': 'साइन इन करें'
        },
        'login.noAccount': {
            'pt-BR': 'Não tem conta?',
            'en-US': 'Don’t have an account?',
            'es-ES': '¿No tienes cuenta?',
            'fr-FR': 'Vous n’avez pas de compte ?',
            'it-IT': 'Non hai un account?',
            'zh-CN': '还没有账号？',
            'ru-RU': 'Нет аккаунта?',
            'ar-SA': 'لا تملك حسابًا؟',
            'hi-IN': 'क्या आपका खाता नहीं है?'
        },
        'login.registerLink': {
            'pt-BR': 'Cadastre-se',
            'en-US': 'Sign up',
            'es-ES': 'Regístrate',
            'fr-FR': 'Inscrivez-vous',
            'it-IT': 'Registrati',
            'zh-CN': '立即注册',
            'ru-RU': 'Зарегистрируйтесь',
            'ar-SA': 'سجل الآن',
            'hi-IN': 'पंजीकरण करें'
        },
        'register.title': {
            'pt-BR': 'Criar Conta',
            'en-US': 'Create account',
            'es-ES': 'Crear cuenta',
            'fr-FR': 'Créer un compte',
            'it-IT': 'Crea account',
            'zh-CN': '创建账户',
            'ru-RU': 'Создать аккаунт',
            'ar-SA': 'إنشاء حساب',
            'hi-IN': 'खाता बनाएं'
        },
        'register.form.name': {
            'pt-BR': 'Nome Completo',
            'en-US': 'Full name',
            'es-ES': 'Nombre completo',
            'fr-FR': 'Nom complet',
            'it-IT': 'Nome completo',
            'zh-CN': '全名',
            'ru-RU': 'Полное имя',
            'ar-SA': 'الاسم الكامل',
            'hi-IN': 'पूरा नाम'
        },
        'register.form.email': {
            'pt-BR': 'Email',
            'en-US': 'Email',
            'es-ES': 'Correo electrónico',
            'fr-FR': 'E-mail',
            'it-IT': 'Email',
            'zh-CN': '邮箱',
            'ru-RU': 'Email',
            'ar-SA': 'البريد الإلكتروني',
            'hi-IN': 'ईमेल'
        },
        'register.form.password': {
            'pt-BR': 'Senha',
            'en-US': 'Password',
            'es-ES': 'Contraseña',
            'fr-FR': 'Mot de passe',
            'it-IT': 'Password',
            'zh-CN': '密码',
            'ru-RU': 'Пароль',
            'ar-SA': 'كلمة المرور',
            'hi-IN': 'पासवर्ड'
        },
        'register.form.phone': {
            'pt-BR': 'Telefone',
            'en-US': 'Phone',
            'es-ES': 'Teléfono',
            'fr-FR': 'Téléphone',
            'it-IT': 'Telefono',
            'zh-CN': '电话',
            'ru-RU': 'Телефон',
            'ar-SA': 'الهاتف',
            'hi-IN': 'फ़ोन'
        },
        'register.form.country': {
            'pt-BR': 'País',
            'en-US': 'Country',
            'es-ES': 'País',
            'fr-FR': 'Pays',
            'it-IT': 'Paese',
            'zh-CN': '国家',
            'ru-RU': 'Страна',
            'ar-SA': 'الدولة',
            'hi-IN': 'देश'
        },
        'register.form.submit': {
            'pt-BR': 'Cadastrar',
            'en-US': 'Create account',
            'es-ES': 'Crear cuenta',
            'fr-FR': 'Créer le compte',
            'it-IT': 'Crea account',
            'zh-CN': '创建账户',
            'ru-RU': 'Создать аккаунт',
            'ar-SA': 'إنشاء حساب',
            'hi-IN': 'खाता बनाएं'
        },
        'register.haveAccount': {
            'pt-BR': 'Já tem conta?',
            'en-US': 'Already have an account?',
            'es-ES': '¿Ya tienes cuenta?',
            'fr-FR': 'Vous avez déjà un compte ?',
            'it-IT': 'Hai già un account?',
            'zh-CN': '已有账户？',
            'ru-RU': 'Уже есть аккаунт?',
            'ar-SA': 'لديك حساب بالفعل؟',
            'hi-IN': 'क्या आपका पहले से खाता है?'
        },
        'register.backToLogin': {
            'pt-BR': 'Faça login',
            'en-US': 'Sign in',
            'es-ES': 'Inicia sesión',
            'fr-FR': 'Connectez-vous',
            'it-IT': 'Accedi',
            'zh-CN': '去登录',
            'ru-RU': 'Войти',
            'ar-SA': 'سجّل الدخول',
            'hi-IN': 'साइन इन करें'
        },
        'messages.loginSuccess': {
            'pt-BR': 'Login realizado com sucesso!',
            'en-US': 'Signed in successfully!',
            'es-ES': '¡Inicio de sesión exitoso!',
            'fr-FR': 'Connexion réussie !',
            'it-IT': 'Accesso effettuato con successo!',
            'zh-CN': '登录成功！',
            'ru-RU': 'Вы успешно вошли!',
            'ar-SA': 'تم تسجيل الدخول بنجاح!',
            'hi-IN': 'सफलतापूर्वक साइन इन किया गया!'
        },
        'messages.registerSuccess': {
            'pt-BR': 'Conta criada com sucesso!',
            'en-US': 'Account created successfully!',
            'es-ES': '¡Cuenta creada con éxito!',
            'fr-FR': 'Compte créé avec succès !',
            'it-IT': 'Account creato con successo!',
            'zh-CN': '账户创建成功！',
            'ru-RU': 'Аккаунт успешно создан!',
            'ar-SA': 'تم إنشاء الحساب بنجاح!',
            'hi-IN': 'खाता सफलतापूर्वक बनाया गया!'
        },
        'auth.loginError': {
            'pt-BR': 'Erro ao fazer login',
            'en-US': 'Unable to sign in',
            'es-ES': 'No se pudo iniciar sesión',
            'fr-FR': 'Impossible de se connecter',
            'it-IT': 'Impossibile accedere',
            'zh-CN': '无法登录',
            'ru-RU': 'Не удалось войти',
            'ar-SA': 'تعذر تسجيل الدخول',
            'hi-IN': 'साइन इन नहीं हो सका'
        },
        'auth.registerError': {
            'pt-BR': 'Erro ao registrar',
            'en-US': 'Unable to create account',
            'es-ES': 'No se pudo crear la cuenta',
            'fr-FR': 'Impossible de créer le compte',
            'it-IT': 'Impossibile creare l’account',
            'zh-CN': '无法创建账户',
            'ru-RU': 'Не удалось создать аккаунт',
            'ar-SA': 'تعذر إنشاء الحساب',
            'hi-IN': 'खाता नहीं बन पाया'
        },
        'auth.invalidCredentials': {
            'pt-BR': 'Credenciais inválidas',
            'en-US': 'Invalid credentials',
            'es-ES': 'Credenciales inválidas',
            'fr-FR': 'Identifiants invalides',
            'it-IT': 'Credenziali non valide',
            'zh-CN': '凭证无效',
            'ru-RU': 'Неверные учетные данные',
            'ar-SA': 'بيانات اعتماد غير صالحة',
            'hi-IN': 'अमान्य प्रमाण-पत्र'
        },
        'auth.emailInUse': {
            'pt-BR': 'Email já cadastrado',
            'en-US': 'Email already registered',
            'es-ES': 'Correo ya registrado',
            'fr-FR': 'E-mail déjà enregistré',
            'it-IT': 'Email già registrata',
            'zh-CN': '邮箱已被注册',
            'ru-RU': 'Email уже зарегистрирован',
            'ar-SA': 'البريد مسجل بالفعل',
            'hi-IN': 'ईमेल पहले से पंजीकृत है'
        },
        'auth.googleUser': {
            'pt-BR': 'Usuário Google',
            'en-US': 'Google user',
            'es-ES': 'Usuario de Google',
            'fr-FR': 'Utilisateur Google',
            'it-IT': 'Utente Google',
            'zh-CN': 'Google 用户',
            'ru-RU': 'Пользователь Google',
            'ar-SA': 'مستخدم Google',
            'hi-IN': 'Google उपयोगकर्ता'
        },
        'footer.aboutTitle': {
            'pt-BR': 'Wide Market',
            'en-US': 'Wide Market',
            'es-ES': 'Wide Market',
            'fr-FR': 'Wide Market',
            'it-IT': 'Wide Market',
            'zh-CN': 'Wide Market',
            'ru-RU': 'Wide Market',
            'ar-SA': 'وايد ماركت',
            'hi-IN': 'वाइड मार्केट'
        },
        'footer.about': {
            'pt-BR': 'Conectamos produtos, serviços e conhecimento em um único lugar.',
            'en-US': 'We connect products, services, and knowledge in one place.',
            'es-ES': 'Conectamos productos, servicios y conocimiento en un solo lugar.',
            'fr-FR': 'Nous connectons produits, services et connaissances en un seul lieu.',
            'it-IT': 'Connettiamo prodotti, servizi e conoscenza in un unico luogo.',
            'zh-CN': '我们在同一个地方连接商品、服务与知识。',
            'ru-RU': 'Мы объединяем товары, услуги и знания в одном месте.',
            'ar-SA': 'نربط المنتجات والخدمات والمعرفة في مكان واحد.',
            'hi-IN': 'हम उत्पादों, सेवाओं और ज्ञान को एक ही स्थान पर जोड़ते हैं।'
        },
        'footer.links.title': {
            'pt-BR': 'Navegação',
            'en-US': 'Navigation',
            'es-ES': 'Navegación',
            'fr-FR': 'Navigation',
            'it-IT': 'Navigazione',
            'zh-CN': '导航',
            'ru-RU': 'Навигация',
            'ar-SA': 'التنقل',
            'hi-IN': 'नेविगेशन'
        },
        'footer.links.store': {
            'pt-BR': 'Loja',
            'en-US': 'Store',
            'es-ES': 'Tienda',
            'fr-FR': 'Boutique',
            'it-IT': 'Negozio',
            'zh-CN': '商店',
            'ru-RU': 'Магазин',
            'ar-SA': 'المتجر',
            'hi-IN': 'स्टोर'
        },
        'footer.links.services': {
            'pt-BR': 'Serviços',
            'en-US': 'Services',
            'es-ES': 'Servicios',
            'fr-FR': 'Services',
            'it-IT': 'Servizi',
            'zh-CN': '服务',
            'ru-RU': 'Услуги',
            'ar-SA': 'الخدمات',
            'hi-IN': 'सेवाएँ'
        },
        'footer.links.courses': {
            'pt-BR': 'Cursos',
            'en-US': 'Courses',
            'es-ES': 'Cursos',
            'fr-FR': 'Cours',
            'it-IT': 'Corsi',
            'zh-CN': '课程',
            'ru-RU': 'Курсы',
            'ar-SA': 'الدورات',
            'hi-IN': 'पाठ्यक्रम'
        },
        'footer.links.tools': {
            'pt-BR': 'Ferramentas e Softwares',
            'en-US': 'Tools & Software',
            'es-ES': 'Herramientas y Softwares',
            'fr-FR': 'Outils et Logiciels',
            'it-IT': 'Strumenti e Software',
            'zh-CN': '工具与软件',
            'ru-RU': 'Инструменты и Программы',
            'ar-SA': 'الأدوات والبرامج',
            'hi-IN': 'उपकरण और सॉफ्टवेयर'
        },
        'hero.title': {
            'pt-BR': '<span class="highlight-text">Os Melhores Preços</span><br>em Lojas Oficiais',
            'en-US': '<span class="highlight-text">The Best Prices</span><br>in Official Stores',
            'es-ES': '<span class="highlight-text">Los Mejores Precios</span><br>en Tiendas Oficiales',
            'fr-FR': '<span class="highlight-text">Les Meilleurs Prix</span><br>dans les Boutiques Officielles',
            'it-IT': '<span class="highlight-text">I Migliori Prezzi</span><br>nei Negozi Ufficiali',
            'zh-CN': '<span class="highlight-text">官方商店</span><br>最优惠价格',
            'ru-RU': '<span class="highlight-text">Лучшие Цены</span><br>в Официальных Магазинах',
            'ar-SA': '<span class="highlight-text">أفضل الأسعار</span><br>في المتاجر الرسمية',
            'hi-IN': '<span class="highlight-text">आधिकारिक स्टोर में</span><br>सर्वोत्तम मूल्य'
        },
        'hero.subtitle': {
            'pt-BR': 'A <strong>Wide Market</strong> reúne os melhores sites de compra com os melhores preços do mercado. Compre direto nas lojas oficiais com o melhor indicativo de preço!',
            'en-US': '<strong>Wide Market</strong> brings together the best shopping sites with the best prices on the market. Buy directly from official stores with the best price indication!',
            'es-ES': '<strong>Wide Market</strong> reúne los mejores sitios de compra con los mejores precios del mercado. ¡Compra directamente en tiendas oficiales con la mejor indicación de precio!',
            'fr-FR': '<strong>Wide Market</strong> rassemble les meilleurs sites d\'achat avec les meilleurs prix du marché. Achetez directement dans les magasins officiels avec la meilleure indication de prix !',
            'it-IT': '<strong>Wide Market</strong> riunisce i migliori siti di shopping con i migliori prezzi sul mercato. Acquista direttamente dai negozi ufficiali con la migliore indicazione di prezzo!',
            'zh-CN': '<strong>Wide Market</strong>汇集了市场上最优惠的购物网站。直接从官方商店购买，享受最优惠的价格指示！',
            'ru-RU': '<strong>Wide Market</strong> собирает лучшие торговые площадки с лучшими ценами на рынке. Покупайте напрямую в официальных магазинах с лучшим указанием цен!',
            'ar-SA': 'يجمع <strong>Wide Market</strong> أفضل مواقع التسوق بأفضل الأسعار في السوق. اشترِ مباشرة من المتاجر الرسمية مع أفضل مؤشر للأسعار!',
            'hi-IN': '<strong>वाइड मार्केट</strong> बाजार में सर्वोत्तम कीमतों वाले सर्वोत्तम शॉपिंग साइटों को एक साथ लाता है। सर्वोत्तम मूल्य संकेत के साथ सीधे आधिकारिक स्टोर से खरीदें!'
        },
        'hero.ctaProducts': {
            'pt-BR': 'Ver Produtos',
            'en-US': 'View Products',
            'es-ES': 'Ver Productos',
            'fr-FR': 'Voir les Produits',
            'it-IT': 'Vedi Prodotti',
            'zh-CN': '查看产品',
            'ru-RU': 'Посмотреть Товары',
            'ar-SA': 'عرض المنتجات',
            'hi-IN': 'उत्पाद देखें'
        },
        'hero.ctaCourses': {
            'pt-BR': 'Explorar Cursos',
            'en-US': 'Explore Courses',
            'es-ES': 'Explorar Cursos',
            'fr-FR': 'Explorer les Cours',
            'it-IT': 'Esplora Corsi',
            'zh-CN': '探索课程',
            'ru-RU': 'Изучить Курсы',
            'ar-SA': 'استكشاف الدورات',
            'hi-IN': 'कोर्स एक्सप्लोर करें'
        },
        'hero.badgeBestPrice': {
            'pt-BR': '💰 Melhor Preço',
            'en-US': '💰 Best Price',
            'es-ES': '💰 Mejor Precio',
            'fr-FR': '💰 Meilleur Prix',
            'it-IT': '💰 Miglior Prezzo',
            'zh-CN': '💰 最优惠价格',
            'ru-RU': '💰 Лучшая Цена',
            'ar-SA': '💰 أفضل سعر',
            'hi-IN': '💰 सर्वोत्तम मूल्य'
        },
        'hero.badgeOfficialStore': {
            'pt-BR': '🏪 Loja Oficial',
            'en-US': '🏪 Official Store',
            'es-ES': '🏪 Tienda Oficial',
            'fr-FR': '🏪 Boutique Officielle',
            'it-IT': '🏪 Negozio Ufficiale',
            'zh-CN': '🏪 官方商店',
            'ru-RU': '🏪 Официальный Магазин',
            'ar-SA': '🏪 متجر رسمي',
            'hi-IN': '🏪 आधिकारिक स्टोर'
        },
        'hero.badgeReliable': {
            'pt-BR': '✅ Confiável',
            'en-US': '✅ Reliable',
            'es-ES': '✅ Confiable',
            'fr-FR': '✅ Fiable',
            'it-IT': '✅ Affidabile',
            'zh-CN': '✅ 可靠',
            'ru-RU': '✅ Надежный',
            'ar-SA': '✅ موثوق',
            'hi-IN': '✅ विश्वसनीय'
        },
        'features.whyChooseTitle': {
            'pt-BR': 'Por que escolher a Wide Market?',
            'en-US': 'Why choose Wide Market?',
            'es-ES': '¿Por qué elegir Wide Market?',
            'fr-FR': 'Pourquoi choisir Wide Market ?',
            'it-IT': 'Perché scegliere Wide Market?',
            'zh-CN': '为什么选择 Wide Market？',
            'ru-RU': 'Почему выбрать Wide Market?',
            'ar-SA': 'لماذا تختار وايد ماركت؟',
            'hi-IN': 'वाइड मार्केट क्यों चुनें?'
        },
        'features.bestPriceTitle': {
            'pt-BR': 'Melhor Indicativo de Preço',
            'en-US': 'Best Price Indicator',
            'es-ES': 'Mejor Indicador de Precio',
            'fr-FR': 'Meilleur Indicateur de Prix',
            'it-IT': 'Miglior Indicatore di Prezzo',
            'zh-CN': '最佳价格指标',
            'ru-RU': 'Лучший Индикатор Цены',
            'ar-SA': 'أفضل مؤشر أسعار',
            'hi-IN': 'सर्वोत्तम मूल्य सूचक'
        },
        'features.bestPriceDescription': {
            'pt-BR': 'Encontre os melhores preços em lojas oficiais. Nossa plataforma compara e indica onde comprar com segurança e economia.',
            'en-US': 'Find the best prices in official stores. Our platform compares and indicates where to buy safely and economically.',
            'es-ES': 'Encuentra los mejores precios en tiendas oficiales. Nuestra plataforma compara e indica dónde comprar de forma segura y económica.',
            'fr-FR': 'Trouvez les meilleurs prix dans les magasins officiels. Notre plateforme compare et indique où acheter en toute sécurité et économie.',
            'it-IT': 'Trova i migliori prezzi nei negozi ufficiali. La nostra piattaforma confronta e indica dove acquistare in modo sicuro ed economico.',
            'zh-CN': '在官方商店找到最优惠的价格。我们的平台比较并指出哪里可以安全经济地购买。',
            'ru-RU': 'Находите лучшие цены в официальных магазинах. Наша платформа сравнивает и указывает, где купить безопасно и экономично.',
            'ar-SA': 'اعثر على أفضل الأسعار في المتاجر الرسمية. تقارن منصتنا وتشير إلى أين تشتري بأمان واقتصاد.',
            'hi-IN': 'आधिकारिक स्टोर में सर्वोत्तम मूल्य पाएं। हमारा प्लेटफॉर्म सुरक्षित और किफायती रूप से खरीदने के लिए तुलना करता और संकेत देता है।'
        },
        'features.officialStoresTitle': {
            'pt-BR': 'Lojas Oficiais',
            'en-US': 'Official Stores',
            'es-ES': 'Tiendas Oficiales',
            'fr-FR': 'Magasins Officiels',
            'it-IT': 'Negozi Ufficiali',
            'zh-CN': '官方商店',
            'ru-RU': 'Официальные Магазины',
            'ar-SA': 'المتاجر الرسمية',
            'hi-IN': 'आधिकारिक स्टोर'
        },
        'features.officialStoresDescription': {
            'pt-BR': 'Compre direto nas lojas oficiais das maiores marcas. Garantia de autenticidade e suporte oficial.',
            'en-US': 'Buy directly from the official stores of the biggest brands. Guarantee of authenticity and official support.',
            'es-ES': 'Compra directamente en las tiendas oficiales de las mayores marcas. Garantía de autenticidad y soporte oficial.',
            'fr-FR': 'Achetez directement dans les magasins officiels des plus grandes marques. Garantie d\'authenticité et support officiel.',
            'it-IT': 'Acquista direttamente dai negozi ufficiali delle più grandi marche. Garanzia di autenticità e supporto ufficiale.',
            'zh-CN': '直接从最大品牌的官方商店购买。保证真实性和官方支持。',
            'ru-RU': 'Покупайте напрямую в официальных магазинах крупнейших брендов. Гарантия подлинности и официальная поддержка.',
            'ar-SA': 'اشترِ مباشرة من المتاجر الرسمية لأكبر العلامات التجارية. ضمان الأصالة والدعم الرسمي.',
            'hi-IN': 'सबसे बड़े ब्रांडों के आधिकारिक स्टोर से सीधे खरीदें। प्रामाणिकता और आधिकारिक समर्थन की गारंटी।'
        },
        'features.smartComparisonTitle': {
            'pt-BR': 'Comparação Inteligente',
            'en-US': 'Smart Comparison',
            'es-ES': 'Comparación Inteligente',
            'fr-FR': 'Comparaison Intelligente',
            'it-IT': 'Confronto Intelligente',
            'zh-CN': '智能比较',
            'ru-RU': 'Умное Сравнение',
            'ar-SA': 'مقارنة ذكية',
            'hi-IN': 'स्मार्ट तुलना'
        },
        'features.smartComparisonDescription': {
            'pt-BR': 'Reunimos os melhores sites de compra em um só lugar. Economize tempo e dinheiro.',
            'en-US': 'We gather the best shopping sites in one place. Save time and money.',
            'es-ES': 'Reunimos los mejores sitios de compra en un solo lugar. Ahorra tiempo y dinero.',
            'fr-FR': 'Nous rassemblons les meilleurs sites d\'achat en un seul endroit. Économisez du temps et de l\'argent.',
            'it-IT': 'Raccogliamo i migliori siti di shopping in un unico posto. Risparmia tempo e denaro.',
            'zh-CN': '我们汇集了最好的购物网站。节省时间和金钱。',
            'ru-RU': 'Мы собираем лучшие торговые площадки в одном месте. Экономьте время и деньги.',
            'ar-SA': 'نجمع أفضل مواقع التسوق في مكان واحد. وفر الوقت والمال.',
            'hi-IN': 'हम एक ही स्थान पर सर्वश्रेष्ठ शॉपिंग साइटें इकट्ठा करते हैं। समय और पैसा बचाएं।'
        },
        'features.reliableTitle': {
            'pt-BR': '100% Confiável',
            'en-US': '100% Reliable',
            'es-ES': '100% Confiable',
            'fr-FR': '100% Fiable',
            'it-IT': '100% Affidabile',
            'zh-CN': '100% 可靠',
            'ru-RU': '100% Надежный',
            'ar-SA': '100% موثوق',
            'hi-IN': '100% विश्वसनीय'
        },
        'features.reliableDescription': {
            'pt-BR': 'Parcerias exclusivas com as principais plataformas. Suas compras seguras e protegidas.',
            'en-US': 'Exclusive partnerships with leading platforms. Your purchases are safe and secure.',
            'es-ES': 'Asociaciones exclusivas con plataformas líderes. Tus compras son seguras y protegidas.',
            'fr-FR': 'Partenariats exclusifs avec des plateformes leaders. Vos achats sont sûrs et sécurisés.',
            'it-IT': 'Partnership esclusive con le principali piattaforme. I tuoi acquisti sono sicuri e protetti.',
            'zh-CN': '与领先平台建立独家合作关系。您的购买安全可靠。',
            'ru-RU': 'Эксклюзивные партнерства с ведущими платформами. Ваши покупки безопасны и защищены.',
            'ar-SA': 'شراكات حصرية مع المنصات الرائدة. مشترياتك آمنة ومحمية.',
            'hi-IN': 'प्रमुख प्लेटफार्मों के साथ विशेष साझेदारी। आपकी खरीद सुरक्षित और संरक्षित है।'
        },
        'promo.offerBadge': {
            'pt-BR': '🔥 OFERTA',
            'en-US': '🔥 OFFER',
            'es-ES': '🔥 OFERTA',
            'fr-FR': '🔥 OFFRE',
            'it-IT': '🔥 OFFERTA',
            'zh-CN': '🔥 优惠',
            'ru-RU': '🔥 ПРЕДЛОЖЕНИЕ',
            'ar-SA': '🔥 عرض',
            'hi-IN': '🔥 ऑफर'
        },
        'promo1.title': {
            'pt-BR': '<span class="text-gradient">Economize Mais</span><br>Compre nas Lojas Oficiais',
            'en-US': '<span class="text-gradient">Save More</span><br>Shop in Official Stores',
            'es-ES': '<span class="text-gradient">Ahorra Más</span><br>Compra en Tiendas Oficiales',
            'fr-FR': '<span class="text-gradient">Économisez Plus</span><br>Achetez dans les Boutiques Officielles',
            'it-IT': '<span class="text-gradient">Risparmia di Più</span><br>Acquista nei Negozi Ufficiali',
            'zh-CN': '<span class="text-gradient">省更多</span><br>在官方商店购物',
            'ru-RU': '<span class="text-gradient">Экономьте Больше</span><br>Покупайте в Официальных Магазинах',
            'ar-SA': '<span class="text-gradient">وفر أكثر</span><br>تسوق في المتاجر الرسمية',
            'hi-IN': '<span class="text-gradient">अधिक बचाएं</span><br>आधिकारिक स्टोर में खरीदारी करें'
        },
        'promo1.description': {
            'pt-BR': 'A Wide Market junta os melhores sites de compra com os melhores preços do mercado. Não perca tempo procurando - encontre tudo aqui com o melhor indicativo de preço!',
            'en-US': 'Wide Market brings together the best shopping sites with the best prices on the market. Don\'t waste time searching - find everything here with the best price indication!',
            'es-ES': 'Wide Market reúne los mejores sitios de compra con los mejores precios del mercado. No pierdas tiempo buscando, ¡encuentra todo aquí con la mejor indicación de precio!',
            'fr-FR': 'Wide Market rassemble les meilleurs sites d\'achat avec les meilleurs prix du marché. Ne perdez pas de temps à chercher, trouvez tout ici avec la meilleure indication de prix !',
            'it-IT': 'Wide Market riunisce i migliori siti di shopping con i migliori prezzi sul mercato. Non perdere tempo a cercare, trova tutto qui con la migliore indicazione di prezzo!',
            'zh-CN': 'Wide Market汇集了市场上最优惠的购物网站。不要浪费时间搜索，在这里找到一切，享受最优惠的价格指示！',
            'ru-RU': 'Wide Market объединяет лучшие торговые площадки с лучшими ценами на рынке. Не тратьте время на поиски – найдите все здесь с лучшим указанием цен!',
            'ar-SA': 'يجمع وايد ماركت أفضل مواقع التسوق بأفضل الأسعار في السوق. لا تضيع الوقت في البحث - ابحث عن كل شيء هنا مع أفضل مؤشر للأسعار!',
            'hi-IN': 'वाइड मार्केट बाजार में सर्वोत्तम कीमतों वाले सर्वोत्तम शॉपिंग साइटों को एक साथ लाता है। खोज में समय बर्बाद न करें - सर्वोत्तम मूल्य संकेत के साथ सब कुछ यहां पाएं!'
        },
        'promo1.list1': {
            'pt-BR': '✅ Preços atualizados diariamente',
            'en-US': '✅ Prices updated daily',
            'es-ES': '✅ Precios actualizados diariamente',
            'fr-FR': '✅ Prix mis à jour quotidiennement',
            'it-IT': '✅ Prezzi aggiornati quotidianamente',
            'zh-CN': '✅ 每日更新价格',
            'ru-RU': '✅ Цены обновляются ежедневно',
            'ar-SA': '✅ الأسعار محدثة يوميًا',
            'hi-IN': '✅ मूल्य दैनिक अपडेट किए जाते हैं'
        },
        'promo1.list2': {
            'pt-BR': '✅ Links diretos para lojas oficiais',
            'en-US': '✅ Direct links to official stores',
            'es-ES': '✅ Enlaces directos a tiendas oficiales',
            'fr-FR': '✅ Liens directs vers les magasins officiels',
            'it-IT': '✅ Link diretti ai negozi ufficiali',
            'zh-CN': '✅ 官方商店直达链接',
            'ru-RU': '✅ Прямые ссылки на официальные магазины',
            'ar-SA': '✅ روابط مباشرة إلى المتاجر الرسمية',
            'hi-IN': '✅ आधिकारिक स्टोर के लिए सीधे लिंक'
        },
        'promo1.list3': {
            'pt-BR': '✅ Comparação de preços automática',
            'en-US': '✅ Automatic price comparison',
            'es-ES': '✅ Comparación de precios automática',
            'fr-FR': '✅ Comparaison de prix automatique',
            'it-IT': '✅ Confronto prezzi automatico',
            'zh-CN': '✅ 自动价格比较',
            'ru-RU': '✅ Автоматическое сравнение цен',
            'ar-SA': '✅ مقارنة أسعار تلقائية',
            'hi-IN': '✅ स्वचालित मूल्य तुलना'
        },
        'promo1.list4': {
            'pt-BR': '✅ Ofertas exclusivas',
            'en-US': '✅ Exclusive offers',
            'es-ES': '✅ Ofertas exclusivas',
            'fr-FR': '✅ Offres exclusives',
            'it-IT': '✅ Offerte esclusive',
            'zh-CN': '✅ 独家优惠',
            'ru-RU': '✅ Эксклюзивные предложения',
            'ar-SA': '✅ عروض حصرية',
            'hi-IN': '✅ विशेष ऑफर'
        },
        'promo1.cta': {
            'pt-BR': 'Ver Ofertas Agora',
            'en-US': 'View Offers Now',
            'es-ES': 'Ver Ofertas Ahora',
            'fr-FR': 'Voir les Offres Maintenant',
            'it-IT': 'Vedi Offerte Ora',
            'zh-CN': '立即查看优惠',
            'ru-RU': 'Посмотреть Предложения Сейчас',
            'ar-SA': 'عرض العروض الآن',
            'hi-IN': 'अभी ऑफर देखें'
        },
        'promo2.title': {
            'pt-BR': '<span class="text-gradient">Compre Direto</span><br>Nas Lojas Oficiais',
            'en-US': '<span class="text-gradient">Buy Direct</span><br>From Official Stores',
            'es-ES': '<span class="text-gradient">Compra Directo</span><br>En Tiendas Oficiales',
            'fr-FR': '<span class="text-gradient">Achetez Directement</span><br>Dans les Magasins Officiels',
            'it-IT': '<span class="text-gradient">Acquista Diretto</span><br>Dai Negozi Ufficiali',
            'zh-CN': '<span class="text-gradient">直接购买</span><br>官方商店',
            'ru-RU': '<span class="text-gradient">Покупайте Напрямую</span><br>в Официальных Магазинах',
            'ar-SA': '<span class="text-gradient">اشترِ مباشرة</span><br>من المتاجر الرسمية',
            'hi-IN': '<span class="text-gradient">सीधे खरीदें</span><br>आधिकारिक स्टोर से'
        },
        'promo2.description': {
            'pt-BR': 'Evite intermediários! Compre direto nas lojas oficiais das maiores marcas. Garantia de produto original, suporte oficial e os melhores preços do mercado.',
            'en-US': 'Avoid intermediaries! Buy directly from the official stores of the biggest brands. Guarantee of original product, official support and the best prices on the market.',
            'es-ES': '¡Evita intermediarios! Compra directamente en las tiendas oficiales de las mayores marcas. ¡Garantía de producto original, soporte oficial y los mejores precios del mercado!',
            'fr-FR': 'Évitez les intermédiaires ! Achetez directement dans les magasins officiels des plus grandes marques. Garantie de produit original, support officiel et les meilleurs prix du marché !',
            'it-IT': 'Evita gli intermediari! Acquista direttamente dai negozi ufficiali delle più grandi marche. Garanzia di prodotto originale, supporto ufficiale e i migliori prezzi sul mercato!',
            'zh-CN': '避免中间商！直接从最大品牌的官方商店购买。保证原装产品、官方支持和市场上最优惠的价格！',
            'ru-RU': 'Избегайте посредников! Покупайте напрямую в официальных магазинах крупнейших брендов. Гарантия оригинального продукта, официальная поддержка и лучшие цены на рынке!',
            'ar-SA': 'تجنب الوسطاء! اشترِ مباشرة من المتاجر الرسمية لأكبر العلامات التجارية. ضمان المنتج الأصلي، الدعم الرسمي وأفضل الأسعار في السوق!',
            'hi-IN': 'बिचौलियों से बचें! सबसे बड़े ब्रांडों के आधिकारिक स्टोर से सीधे खरीदें। मूल उत्पाद की गारंटी, आधिकारिक समर्थन और बाजार में सर्वोत्तम मूल्य!'
        },
        'promo2.cta': {
            'pt-BR': 'Explorar Produtos',
            'en-US': 'Explore Products',
            'es-ES': 'Explorar Productos',
            'fr-FR': 'Explorer les Produits',
            'it-IT': 'Esplora Prodotti',
            'zh-CN': '探索产品',
            'ru-RU': 'Изучить Продукты',
            'ar-SA': 'استكشاف المنتجات',
            'hi-IN': 'उत्पाद एक्सप्लोर करें'
        },
        'promo.officialBadge': {
            'pt-BR': '⭐ OFICIAL',
            'en-US': '⭐ OFFICIAL',
            'es-ES': '⭐ OFICIAL',
            'fr-FR': '⭐ OFFICIEL',
            'it-IT': '⭐ UFFICIALE',
            'zh-CN': '⭐ 官方',
            'ru-RU': '⭐ ОФИЦИАЛЬНЫЙ',
            'ar-SA': '⭐ رسمي',
            'hi-IN': '⭐ आधिकारिक'
        },
        'quickCategories.title': {
            'pt-BR': 'Navegue por Categoria',
            'en-US': 'Browse by Category',
            'es-ES': 'Navega por Categoría',
            'fr-FR': 'Naviguer par Catégorie',
            'it-IT': 'Naviga per Categoria',
            'zh-CN': '按类别浏览',
            'ru-RU': 'Навигация по Категориям',
            'ar-SA': 'تصفح حسب الفئة',
            'hi-IN': 'श्रेणी के अनुसार ब्राउज़ करें'
        },
        'quickCategories.productsTitle': {
            'pt-BR': 'Produtos',
            'en-US': 'Products',
            'es-ES': 'Productos',
            'fr-FR': 'Produits',
            'it-IT': 'Prodotti',
            'zh-CN': '产品',
            'ru-RU': 'Товары',
            'ar-SA': 'المنتجات',
            'hi-IN': 'उत्पाद'
        },
        'quickCategories.productsDescription': {
            'pt-BR': 'Os melhores produtos com os melhores preços',
            'en-US': 'The best products at the best prices',
            'es-ES': 'Los mejores productos a los mejores precios',
            'fr-FR': 'Les meilleurs produits aux meilleurs prix',
            'it-IT': 'I migliori prodotti ai migliori prezzi',
            'zh-CN': '最优惠价格的最佳产品',
            'ru-RU': 'Лучшие товары по лучшим ценам',
            'ar-SA': 'أفضل المنتجات بأفضل الأسعار',
            'hi-IN': 'सर्वोत्तम मूल्यों पर सर्वोत्तम उत्पाद'
        },
        'quickCategories.coursesTitle': {
            'pt-BR': 'Cursos',
            'en-US': 'Courses',
            'es-ES': 'Cursos',
            'fr-FR': 'Cours',
            'it-IT': 'Corsi',
            'zh-CN': '课程',
            'ru-RU': 'Курсы',
            'ar-SA': 'الدورات',
            'hi-IN': 'कोर्स'
        },
        'quickCategories.coursesDescription': {
            'pt-BR': 'Cursos online das melhores plataformas',
            'en-US': 'Online courses from the best platforms',
            'es-ES': 'Cursos online de las mejores plataformas',
            'fr-FR': 'Cours en ligne des meilleures plateformes',
            'it-IT': 'Corsi online dalle migliori piattaforme',
            'zh-CN': '来自最佳平台的在线课程',
            'ru-RU': 'Онлайн-курсы от лучших платформ',
            'ar-SA': 'دورات عبر الإنترنت من أفضل المنصات',
            'hi-IN': 'सर्वश्रेष्ठ प्लेटफार्मों से ऑनलाइन पाठ्यक्रम'
        },
        'quickCategories.servicesTitle': {
            'pt-BR': 'Serviços',
            'en-US': 'Services',
            'es-ES': 'Servicios',
            'fr-FR': 'Services',
            'it-IT': 'Servizi',
            'zh-CN': '服务',
            'ru-RU': 'Услуги',
            'ar-SA': 'الخدمات',
            'hi-IN': 'सेवाएं'
        },
        'quickCategories.servicesDescription': {
            'pt-BR': 'Serviços profissionais de qualidade',
            'en-US': 'Quality professional services',
            'es-ES': 'Servicios profesionales de calidad',
            'fr-FR': 'Services professionnels de qualité',
            'it-IT': 'Servizi professionali di qualità',
            'zh-CN': '优质专业服务',
            'ru-RU': 'Качественные профессиональные услуги',
            'ar-SA': 'خدمات احترافية عالية الجودة',
            'hi-IN': 'गुणवत्तापूर्ण पेशेवर सेवाएँ'
        },
        'quickCategories.toolsTitle': {
            'pt-BR': 'Ferramentas',
            'en-US': 'Tools',
            'es-ES': 'Herramientas',
            'fr-FR': 'Outils',
            'it-IT': 'Strumenti',
            'zh-CN': '工具',
            'ru-RU': 'Инструменты',
            'ar-SA': 'الأدوات',
            'hi-IN': 'उपकरण'
        },
        'quickCategories.toolsDescription': {
            'pt-BR': 'Softwares e ferramentas essenciais',
            'en-US': 'Essential software and tools',
            'es-ES': 'Software y herramientas esenciales',
            'fr-FR': 'Logiciels et outils essentiels',
            'it-IT': 'Software e strumenti essenziali',
            'zh-CN': '基本软件和工具',
            'ru-RU': 'Основные программы и инструменты',
            'ar-SA': 'البرامج والأدوات الأساسية',
            'hi-IN': 'आवश्यक सॉफ्टवेयर और उपकरण'
        },
        'cta.title': {
            'pt-BR': 'Pronto para economizar?',
            'en-US': 'Ready to save?',
            'es-ES': '¿Listo para ahorrar?',
            'fr-FR': 'Prêt à économiser ?',
            'it-IT': 'Pronto a risparmiare?',
            'zh-CN': '准备好省钱了吗？',
            'ru-RU': 'Готовы экономить?',
            'ar-SA': 'هل أنت مستعد للتوفير؟',
            'hi-IN': 'बचाने के लिए तैयार हैं?'
        },
        'cta.text': {
            'pt-BR': 'Junte-se a milhares de pessoas que já economizam comprando nas lojas oficiais através da Wide Market. O melhor indicativo de preço está aqui!',
            'en-US': 'Join thousands of people who are already saving by shopping at official stores through Wide Market. The best price indicator is here!',
            'es-ES': 'Únete a miles de personas que ya ahorran comprando en tiendas oficiales a través de Wide Market. ¡El mejor indicador de precios está aquí!',
            'fr-FR': 'Rejoignez des milliers de personnes qui économisent déjà en achetant dans les magasins officiels via Wide Market. Le meilleur indicateur de prix est ici !',
            'it-IT': 'Unisciti a migliaia di persone che stanno già risparmiando acquistando nei negozi ufficiali tramite Wide Market. Il miglior indicatore di prezzo è qui!',
            'zh-CN': '加入成千上万通过 Wide Market 在官方商店购物省钱的人。最佳价格指标就在这里！',
            'ru-RU': 'Присоединяйтесь к тысячам людей, которые уже экономят, совершая покупки в официальных магазинах через Wide Market. Лучший индикатор цен здесь!',
            'ar-SA': 'انضم إلى آلاف الأشخاص الذين يوفرون بالفعل عن طريق التسوق في المتاجر الرسمية عبر وايد ماركت. أفضل مؤشر أسعار هنا!',
            'hi-IN': 'उन हजारों लोगों से जुड़ें जो वाइड मार्केट के माध्यम से आधिकारिक स्टोर में खरीदारी करके पहले से ही बचत कर रहे हैं। सर्वोत्तम मूल्य संकेतक यहां है!'
        },
        'cta.primaryButton': {
            'pt-BR': 'Começar Agora',
            'en-US': 'Start Now',
            'es-ES': 'Empezar Ahora',
            'fr-FR': 'Commencer Maintenant',
            'it-IT': 'Inizia Ora',
            'zh-CN': '立即开始',
            'ru-RU': 'Начать Сейчас',
            'ar-SA': 'ابدأ الآن',
            'hi-IN': 'अभी शुरू करें'
        },
        'cta.secondaryButton': {
            'pt-BR': 'Ver Cursos',
            'en-US': 'View Courses',
            'es-ES': 'Ver Cursos',
            'fr-FR': 'Voir les Cours',
            'it-IT': 'Vedi Corsi',
            'zh-CN': '查看课程',
            'ru-RU': 'Посмотреть Курсы',
            'ar-SA': 'عرض الدورات',
            'hi-IN': 'कोर्स देखें'
        },
        'footer.contact.title': {
            'pt-BR': 'Contato',
            'en-US': 'Contact',
            'es-ES': 'Contacto',
            'fr-FR': 'Contact',
            'it-IT': 'Contatto',
            'zh-CN': '联系',
            'ru-RU': 'Контакты',
            'ar-SA': 'التواصل',
            'hi-IN': 'संपर्क'
        },
        'footer.contact.emailLabel': {
            'pt-BR': 'Email:',
            'en-US': 'Email:',
            'es-ES': 'Correo:',
            'fr-FR': 'E-mail :',
            'it-IT': 'Email:',
            'zh-CN': '邮箱：',
            'ru-RU': 'Email:',
            'ar-SA': 'البريد:',
            'hi-IN': 'ईमेल:'
        },
        'footer.rights': {
            'pt-BR': '© 2025 Wide Market. Todos os direitos reservados.',
            'en-US': '© 2025 Wide Market. All rights reserved.',
            'es-ES': '© 2025 Wide Market. Todos los derechos reservados.',
            'fr-FR': '© 2025 Wide Market. Tous droits réservés.',
            'it-IT': '© 2025 Wide Market. Tutti i diritti riservati.',
            'zh-CN': '© 2025 Wide Market. 保留所有权利。',
            'ru-RU': '© 2025 Wide Market. Все права защищены.',
            'ar-SA': '© 2025 وايد ماركت. جميع الحقوق محفوظة.',
            'hi-IN': '© 2025 वाइड मार्केट. सर्वाधिकार सुरक्षित।'
        },
        'nav.home': {
            'pt-BR': 'Home',
            'en-US': 'Home',
            'es-ES': 'Inicio',
            'fr-FR': 'Accueil',
            'it-IT': 'Home',
            'zh-CN': '首页',
            'ru-RU': 'Главная',
            'ar-SA': 'الرئيسية',
            'hi-IN': 'होम'
        },
        'nav.dailyDeals': {
            'pt-BR': 'Ofertas do Dia',
            'en-US': 'Daily deals',
            'es-ES': 'Ofertas del día',
            'fr-FR': 'Offres du jour',
            'it-IT': 'Offerte del giorno',
            'zh-CN': '每日优惠',
            'ru-RU': 'Предложения дня',
            'ar-SA': 'عروض اليوم',
            'hi-IN': 'दैनिक ऑफ़र'
        },
        'nav.products': {
            'pt-BR': 'Produtos',
            'en-US': 'Products',
            'es-ES': 'Productos',
            'fr-FR': 'Produits',
            'it-IT': 'Prodotti',
            'zh-CN': '产品',
            'ru-RU': 'Товары',
            'ar-SA': 'المنتجات',
            'hi-IN': 'उत्पाद'
        },
        'nav.workshop3d': {
            'pt-BR': '3D Workshop',
            'en-US': '3D Workshop',
            'es-ES': 'Taller 3D',
            'fr-FR': 'Atelier 3D',
            'it-IT': 'Workshop 3D',
            'zh-CN': '3D 工作坊',
            'ru-RU': '3D Мастерская',
            'ar-SA': 'ورشة عمل 3D',
            'hi-IN': '3D वर्कशॉप'
        },
        'nav.books': {
            'pt-BR': 'Livros',
            'en-US': 'Books',
            'es-ES': 'Libros',
            'fr-FR': 'Livres',
            'it-IT': 'Libri',
            'zh-CN': '书籍',
            'ru-RU': 'Книги',
            'ar-SA': 'كتب',
            'hi-IN': 'किताबें'
        },
        'nav.coupons': {
            'pt-BR': 'Promoções & Cupons',
            'en-US': 'Promos & coupons',
            'es-ES': 'Promociones y cupones',
            'fr-FR': 'Promos & coupons',
            'it-IT': 'Promo & cuponi',
            'zh-CN': '促销与优惠券',
            'ru-RU': 'Промо и купоны',
            'ar-SA': 'العروض والقسائم',
            'hi-IN': 'प्रमो और कूपन'
        },
        'nav.tools': {
            'pt-BR': 'Ferramentas e Softwares',
            'en-US': 'Tools & software',
            'es-ES': 'Herramientas y softwares',
            'fr-FR': 'Outils et logiciels',
            'it-IT': 'Strumenti e softwares',
            'zh-CN': '工具与软件',
            'ru-RU': 'Инструменты и ПО',
            'ar-SA': 'الأدوات والبرامج',
            'hi-IN': 'उपकरण और सॉफ्टवेयर'
        },
        'nav.premiumCourses': {
            'pt-BR': 'Cursos Premium',
            'en-US': 'Premium courses',
            'es-ES': 'Cursos premium',
            'fr-FR': 'Cours premium',
            'it-IT': 'Corsi premium',
            'zh-CN': '精品课程',
            'ru-RU': 'Премиум-курсы',
            'ar-SA': 'الدورات المميزة',
            'hi-IN': 'प्रीमियम कोर्स'
        },
        'user.menu.history': {
            'pt-BR': 'Últimos Visitados',
            'en-US': 'Recently viewed',
            'es-ES': 'Vistos recientemente',
            'fr-FR': 'Derniers consultés',
            'it-IT': 'Visti di recente',
            'zh-CN': '最近查看',
            'ru-RU': 'Недавно просмотренные',
            'ar-SA': 'شوهد مؤخرًا',
            'hi-IN': 'हाल में देखे गए'
        },
        'user.menu.purchases': {
            'pt-BR': 'Compras',
            'en-US': 'Purchases',
            'es-ES': 'Compras',
            'fr-FR': 'Achats',
            'it-IT': 'Acquisti',
            'zh-CN': '购买记录',
            'ru-RU': 'Покупки',
            'ar-SA': 'المشتريات',
            'hi-IN': 'खरीदारी'
        },
        'user.menu.profile': {
            'pt-BR': 'Dados Pessoais',
            'en-US': 'Personal data',
            'es-ES': 'Datos personales',
            'fr-FR': 'Données personnelles',
            'it-IT': 'Dati personali',
            'zh-CN': '个人资料',
            'ru-RU': 'Личные данные',
            'ar-SA': 'البيانات الشخصية',
            'hi-IN': 'व्यक्तिगत जानकारी'
        },
        'user.sections.history': {
            'pt-BR': 'Últimos Itens Visitados',
            'en-US': 'Recently viewed items',
            'es-ES': 'Últimos ítems vistos',
            'fr-FR': 'Derniers articles consultés',
            'it-IT': 'Articoli visti di recente',
            'zh-CN': '最近查看的商品',
            'ru-RU': 'Недавно просмотренные товары',
            'ar-SA': 'العناصر التي تمت مشاهدتها مؤخرًا',
            'hi-IN': 'हाल में देखी गई वस्तुएँ'
        },
        'user.sections.purchases': {
            'pt-BR': 'Histórico de Compras',
            'en-US': 'Purchase history',
            'es-ES': 'Historial de compras',
            'fr-FR': 'Historique des achats',
            'it-IT': 'Cronologia acquisti',
            'zh-CN': '购买历史',
            'ru-RU': 'История покупок',
            'ar-SA': 'سجل المشتريات',
            'hi-IN': 'खरीद इतिहास'
        },
        'user.sections.profile': {
            'pt-BR': 'Dados Pessoais',
            'en-US': 'Personal data',
            'es-ES': 'Datos personales',
            'fr-FR': 'Données personnelles',
            'it-IT': 'Dati personali',
            'zh-CN': '个人资料',
            'ru-RU': 'Личные данные',
            'ar-SA': 'البيانات الشخصية',
            'hi-IN': 'व्यक्तिगत जानकारी'
        },
        'user.empty.purchases': {
            'pt-BR': 'Você ainda não realizou nenhuma compra',
            'en-US': 'You have not made any purchases yet',
            'es-ES': 'Aún no has realizado compras',
            'fr-FR': 'Vous n’avez encore rien acheté',
            'it-IT': 'Non hai ancora effettuato acquisti',
            'zh-CN': '你还没有任何购买记录',
            'ru-RU': 'Вы ещё ничего не купили',
            'ar-SA': 'لم تقم بأي مشتريات بعد',
            'hi-IN': 'आपने अभी तक कोई खरीदारी नहीं की है'
        },
        'user.empty.history': {
            'pt-BR': 'Você ainda não visualizou nenhum produto',
            'en-US': 'You have not viewed any products yet',
            'es-ES': 'Aún no has visto productos',
            'fr-FR': 'Vous n’avez pas encore consulté de produit',
            'it-IT': 'Non hai ancora visualizzato prodotti',
            'zh-CN': '你还没有浏览任何商品',
            'ru-RU': 'Вы ещё не просматривали товары',
            'ar-SA': 'لم تطالع أي منتجات بعد',
            'hi-IN': 'आपने अभी तक कोई उत्पाद नहीं देखा है'
        },
        'user.empty.error': {
            'pt-BR': 'Erro ao carregar dados do usuário',
            'en-US': 'Unable to load user data',
            'es-ES': 'No se pudieron cargar los datos del usuario',
            'fr-FR': 'Impossible de charger les données utilisateur',
            'it-IT': 'Impossibile caricare i dati utente',
            'zh-CN': '无法加载用户数据',
            'ru-RU': 'Не удалось загрузить данные пользователя',
            'ar-SA': 'تعذر تحميل بيانات المستخدم',
            'hi-IN': 'उपयोगकर्ता डेटा लोड नहीं हो सका'
        },
        'categories.pageTitle': {
            'pt-BR': 'Categoria - Wide Market',
            'en-US': 'Category - Wide Market',
            'es-ES': 'Categoría - Wide Market',
            'fr-FR': 'Catégorie - Wide Market',
            'it-IT': 'Categoria - Wide Market',
            'zh-CN': '类别 - Wide Market',
            'ru-RU': 'Категория — Wide Market',
            'ar-SA': 'الفئة - Wide Market',
            'hi-IN': 'श्रेणी - Wide Market'
        },
        'courses.pageTitle': {
            'pt-BR': 'Cursos - Wide Market',
            'en-US': 'Courses - Wide Market',
            'es-ES': 'Cursos - Wide Market',
            'fr-FR': 'Cours - Wide Market',
            'it-IT': 'Corsi - Wide Market',
            'zh-CN': '课程 - Wide Market',
            'ru-RU': 'Курсы — Wide Market',
            'ar-SA': 'الدورات - Wide Market',
            'hi-IN': 'पाठ्यक्रम - Wide Market'
        },
        'user.purchasedAt': {
            'pt-BR': 'Comprado em',
            'en-US': 'Purchased on',
            'es-ES': 'Comprado el',
            'fr-FR': 'Acheté le',
            'it-IT': 'Acquistato il',
            'zh-CN': '购买日期',
            'ru-RU': 'Куплено',
            'ar-SA': 'تم الشراء في',
            'hi-IN': 'खरीदा गया'
        },
        'user.viewAgain': {
            'pt-BR': 'Ver novamente →',
            'en-US': 'View again →',
            'es-ES': 'Ver de nuevo →',
            'fr-FR': 'Voir à nouveau →',
            'it-IT': 'Guarda di nuovo →',
            'zh-CN': '再次查看 →',
            'ru-RU': 'Посмотреть снова →',
            'ar-SA': 'مشاهدة مجددًا →',
            'hi-IN': 'फिर से देखें →'
        },
        'user.field.name': {
            'pt-BR': 'Nome:',
            'en-US': 'Name:',
            'es-ES': 'Nombre:',
            'fr-FR': 'Nom :',
            'it-IT': 'Nome:',
            'zh-CN': '姓名：',
            'ru-RU': 'Имя:',
            'ar-SA': 'الاسم:',
            'hi-IN': 'नाम:'
        },
        'user.field.email': {
            'pt-BR': 'Email:',
            'en-US': 'Email:',
            'es-ES': 'Correo:',
            'fr-FR': 'E-mail :',
            'it-IT': 'Email:',
            'zh-CN': '邮箱：',
            'ru-RU': 'Email:',
            'ar-SA': 'البريد:',
            'hi-IN': 'ईमेल:'
        },
        'user.field.phone': {
            'pt-BR': 'Telefone:',
            'en-US': 'Phone:',
            'es-ES': 'Teléfono:',
            'fr-FR': 'Téléphone :',
            'it-IT': 'Telefono:',
            'zh-CN': '电话：',
            'ru-RU': 'Телефон:',
            'ar-SA': 'الهاتف:',
            'hi-IN': 'फ़ोन:'
        },
        'user.field.provider': {
            'pt-BR': 'Login via:',
            'en-US': 'Sign in via:',
            'es-ES': 'Inicio de sesión mediante:',
            'fr-FR': 'Connexion via :',
            'it-IT': 'Accesso tramite:',
            'zh-CN': '登录方式：',
            'ru-RU': 'Вход через:',
            'ar-SA': 'تسجيل الدخول عبر:',
            'hi-IN': 'के माध्यम से साइन इन:'
        },
        'user.value.notProvided': {
            'pt-BR': 'Não informado',
            'en-US': 'Not provided',
            'es-ES': 'No informado',
            'fr-FR': 'Non renseigné',
            'it-IT': 'Non fornito',
            'zh-CN': '未提供',
            'ru-RU': 'Не указано',
            'ar-SA': 'غير متوفر',
            'hi-IN': 'उपलब्ध नहीं'
        },
        'courses.pageTitle': {
            'pt-BR': 'Cursos - Wide Market',
            'en-US': 'Courses - Wide Market',
            'es-ES': 'Cursos - Wide Market',
            'fr-FR': 'Cours - Wide Market',
            'it-IT': 'Corsi - Wide Market',
            'zh-CN': '课程 - Wide Market',
            'ru-RU': 'Курсы — Wide Market',
            'ar-SA': 'الدورات - Wide Market',
            'hi-IN': 'पाठ्यक्रम - Wide Market'
        },
        'courses.list.title': {
            'pt-BR': 'Cursos de Python selecionados',
            'en-US': 'Curated Python courses',
            'es-ES': 'Cursos de Python seleccionados',
            'fr-FR': 'Cours de Python sélectionnés',
            'it-IT': 'Corsi Python selezionati',
            'zh-CN': '精选 Python 课程',
            'ru-RU': 'Подборка курсов по Python',
            'ar-SA': 'دورات بايثون المختارة',
            'hi-IN': 'चयनित पाइथन पाठ्यक्रम'
        },
        'courses.hero.title': {
            'pt-BR': 'Domine Python com especialistas reconhecidos.',
            'en-US': 'Master Python with renowned experts.',
            'es-ES': 'Domina Python con expertos reconocidos.',
            'fr-FR': 'Maîtrisez Python avec des experts reconnus.',
            'it-IT': 'Padroneggia Python con esperti rinomati.',
            'zh-CN': '与知名专家一起精通 Python。',
            'ru-RU': 'Освойте Python с признанными экспертами.',
            'ar-SA': 'أتقن بايثون مع خبراء معترف بهم.',
            'hi-IN': 'प्रतिष्ठित विशेषज्ञों के साथ पाइथन में महारत हासिल करें।'
        },
        'courses.hero.subtitle': {
            'pt-BR': 'Conteúdo atualizado, projetos reais e feedback da comunidade para acelerar sua evolução.',
            'en-US': 'Fresh content, real projects, and community feedback to speed up your growth.',
            'es-ES': 'Contenido actualizado, proyectos reales y feedback de la comunidad para acelerar tu evolución.',
            'fr-FR': 'Contenu actualisé, projets concrets et retours de la communauté pour accélérer votre progression.',
            'it-IT': 'Contenuti aggiornati, progetti reali e feedback della community per accelerare la tua evoluzione.',
            'zh-CN': '最新内容、真实项目与社区反馈，助你快速成长。',
            'ru-RU': 'Актуальный контент, реальные проекты и отзывы сообщества, чтобы ускорить развитие.',
            'ar-SA': 'محتوى محدث ومشاريع واقعية وتغذية راجعة من المجتمع لتسريع تقدمك.',
            'hi-IN': 'नया कंटेंट, वास्तविक प्रोजेक्ट और समुदाय की प्रतिक्रिया आपके विकास को तेज करती है।'
        },
        'courses.hero.stats.ratingLabel': {
            'pt-BR': 'Qualidade global',
            'en-US': 'Global quality',
            'es-ES': 'Calidad global',
            'fr-FR': 'Qualité globale',
            'it-IT': 'Qualità globale',
            'zh-CN': '全局质量',
            'ru-RU': 'Глобальное качество',
            'ar-SA': 'الجودة العالمية',
            'hi-IN': 'वैश्विक गुणवत्ता'
        },
        'courses.hero.stats.rating': {
            'pt-BR': 'Avaliação média 4,8/5',
            'en-US': 'Average rating 4.8/5',
            'es-ES': 'Calificación media 4,8/5',
            'fr-FR': 'Note moyenne 4,8/5',
            'it-IT': 'Valutazione media 4,8/5',
            'zh-CN': '平均评分 4.8/5',
            'ru-RU': 'Средняя оценка 4,8/5',
            'ar-SA': 'متوسط التقييم ‎4.8/5‎',
            'hi-IN': 'औसत रेटिंग 4.8/5'
        },
        'courses.hero.stats.studentsLabel': {
            'pt-BR': 'Impacto',
            'en-US': 'Impact',
            'es-ES': 'Impacto',
            'fr-FR': 'Impact',
            'it-IT': 'Impatto',
            'zh-CN': '影响力',
            'ru-RU': 'Охват',
            'ar-SA': 'التأثير',
            'hi-IN': 'प्रभाव'
        },
        'courses.hero.stats.students': {
            'pt-BR': '+250.000 alunos',
            'en-US': '+250,000 learners',
            'es-ES': '+250.000 estudiantes',
            'fr-FR': '+250 000 apprenants',
            'it-IT': '+250.000 studenti',
            'zh-CN': '超过 250,000 名学员',
            'ru-RU': 'Более 250 000 студентов',
            'ar-SA': 'أكثر من ‎250,000‎ متعلم',
            'hi-IN': '2,50,000+ शिक्षार्थी'
        },
        'courses.hero.stats.updatedLabel': {
            'pt-BR': 'Novidades',
            'en-US': 'Freshness',
            'es-ES': 'Novedades',
            'fr-FR': 'Actualisation',
            'it-IT': 'Aggiornamenti',
            'zh-CN': '最新',
            'ru-RU': 'Обновления',
            'ar-SA': 'التحديثات',
            'hi-IN': 'अद्यतन'
        },
        'courses.hero.stats.updated': {
            'pt-BR': 'Atualizado em novembro de 2025',
            'en-US': 'Updated in November 2025',
            'es-ES': 'Actualizado en noviembre de 2025',
            'fr-FR': 'Mis à jour en novembre 2025',
            'it-IT': 'Aggiornato a novembre 2025',
            'zh-CN': '2025 年 11 月更新',
            'ru-RU': 'Обновлено в ноябре 2025',
            'ar-SA': 'تم التحديث في نوفمبر 2025',
            'hi-IN': 'नवंबर 2025 में अद्यतन'
        },
        'courses.filters.searchPlaceholder': {
            'pt-BR': 'Busque por curso, instrutor ou palavra-chave',
            'en-US': 'Search by course, instructor, or keyword',
            'es-ES': 'Busca por curso, instructor o palabra clave',
            'fr-FR': 'Recherchez par cours, formateur ou mot-clé',
            'it-IT': 'Cerca per corso, docente o parola chiave',
            'zh-CN': '按课程、讲师或关键词搜索',
            'ru-RU': 'Ищите по курсу, преподавателю или ключевому слову',
            'ar-SA': 'ابحث حسب الدورة أو المدرّس أو الكلمة المفتاحية',
            'hi-IN': 'कोर्स, प्रशिक्षक या कीवर्ड से खोजें'
        },
        'courses.filters.level': {
            'pt-BR': 'Nível',
            'en-US': 'Level',
            'es-ES': 'Nivel',
            'fr-FR': 'Niveau',
            'it-IT': 'Livello',
            'zh-CN': '水平',
            'ru-RU': 'Уровень',
            'ar-SA': 'المستوى',
            'hi-IN': 'स्तर'
        },
        'courses.filters.duration': {
            'pt-BR': 'Duração',
            'en-US': 'Duration',
            'es-ES': 'Duración',
            'fr-FR': 'Durée',
            'it-IT': 'Durata',
            'zh-CN': '时长',
            'ru-RU': 'Длительность',
            'ar-SA': 'المدة',
            'hi-IN': 'अवधि'
        },
        'courses.filters.price': {
            'pt-BR': 'Preço',
            'en-US': 'Price',
            'es-ES': 'Precio',
            'fr-FR': 'Prix',
            'it-IT': 'Prezzo',
            'zh-CN': '价格',
            'ru-RU': 'Цена',
            'ar-SA': 'السعر',
            'hi-IN': 'मूल्य'
        },
        'courses.filters.rating': {
            'pt-BR': 'Avaliação mínima',
            'en-US': 'Minimum rating',
            'es-ES': 'Calificación mínima',
            'fr-FR': 'Note minimale',
            'it-IT': 'Valutazione minima',
            'zh-CN': '最低评分',
            'ru-RU': 'Минимальный рейтинг',
            'ar-SA': 'أدنى تقييم',
            'hi-IN': 'न्यूनतम रेटिंग'
        },
        'courses.filters.any': {
            'pt-BR': 'Todas as opções',
            'en-US': 'Any option',
            'es-ES': 'Cualquier opción',
            'fr-FR': 'Toutes les options',
            'it-IT': 'Qualsiasi opzione',
            'zh-CN': '所有选项',
            'ru-RU': 'Любой вариант',
            'ar-SA': 'كل الخيارات',
            'hi-IN': 'कोई भी विकल्प'
        },
        'courses.filters.level.beginner': {
            'pt-BR': 'Iniciante',
            'en-US': 'Beginner',
            'es-ES': 'Principiante',
            'fr-FR': 'Débutant',
            'it-IT': 'Principiante',
            'zh-CN': '初级',
            'ru-RU': 'Новичок',
            'ar-SA': 'مبتدئ',
            'hi-IN': 'शुरुआती'
        },
        'courses.filters.level.intermediate': {
            'pt-BR': 'Intermediário',
            'en-US': 'Intermediate',
            'es-ES': 'Intermedio',
            'fr-FR': 'Intermédiaire',
            'it-IT': 'Intermedio',
            'zh-CN': '中级',
            'ru-RU': 'Средний',
            'ar-SA': 'متوسط',
            'hi-IN': 'मध्यम'
        },
        'courses.filters.level.advanced': {
            'pt-BR': 'Avançado',
            'en-US': 'Advanced',
            'es-ES': 'Avanzado',
            'fr-FR': 'Avancé',
            'it-IT': 'Avanzato',
            'zh-CN': '高级',
            'ru-RU': 'Продвинутый',
            'ar-SA': 'متقدم',
            'hi-IN': 'उन्नत'
        },
        'courses.filters.duration.short': {
            'pt-BR': 'Até 10 horas',
            'en-US': 'Up to 10 hours',
            'es-ES': 'Hasta 10 horas',
            'fr-FR': 'Jusqu’à 10 h',
            'it-IT': 'Fino a 10 ore',
            'zh-CN': '10 小时以内',
            'ru-RU': 'До 10 часов',
            'ar-SA': 'حتى 10 ساعات',
            'hi-IN': '10 घंटे तक'
        },
        'courses.filters.duration.medium': {
            'pt-BR': '10 a 30 horas',
            'en-US': '10 to 30 hours',
            'es-ES': 'De 10 a 30 horas',
            'fr-FR': 'De 10 à 30 h',
            'it-IT': 'Da 10 a 30 ore',
            'zh-CN': '10-30 小时',
            'ru-RU': '10–30 часов',
            'ar-SA': 'من 10 إلى 30 ساعة',
            'hi-IN': '10 से 30 घंटे'
        },
        'courses.filters.duration.long': {
            'pt-BR': 'Mais de 30 horas',
            'en-US': 'More than 30 hours',
            'es-ES': 'Más de 30 horas',
            'fr-FR': 'Plus de 30 h',
            'it-IT': 'Oltre 30 ore',
            'zh-CN': '30 小时以上',
            'ru-RU': 'Более 30 часов',
            'ar-SA': 'أكثر من 30 ساعة',
            'hi-IN': '30 घंटे से अधिक'
        },
        'courses.filters.price.free': {
            'pt-BR': 'Gratuitos',
            'en-US': 'Free',
            'es-ES': 'Gratuitos',
            'fr-FR': 'Gratuits',
            'it-IT': 'Gratuiti',
            'zh-CN': '免费',
            'ru-RU': 'Бесплатные',
            'ar-SA': 'مجانية',
            'hi-IN': 'नि:शुल्क'
        },
        'courses.filters.price.paid': {
            'pt-BR': 'Pagos',
            'en-US': 'Paid',
            'es-ES': 'De pago',
            'fr-FR': 'Payants',
            'it-IT': 'A pagamento',
            'zh-CN': '付费',
            'ru-RU': 'Платные',
            'ar-SA': 'مدفوعة',
            'hi-IN': 'भुगतान किए गए'
        },
        'courses.filters.rating.four': {
            'pt-BR': 'Nota mínima 4.5',
            'en-US': 'Rating 4.5+',
            'es-ES': 'Calificación mínima 4.5',
            'fr-FR': 'Note mini 4,5',
            'it-IT': 'Valutazione minima 4,5',
            'zh-CN': '评分至少 4.5',
            'ru-RU': 'Рейтинг от 4.5',
            'ar-SA': 'تقييم ‎4.5‎ فأكثر',
            'hi-IN': 'रेटिंग 4.5+'
        },
        'courses.badge.bestseller': {
            'pt-BR': 'Mais vendido',
            'en-US': 'Bestseller',
            'es-ES': 'Más vendido',
            'fr-FR': 'Meilleure vente',
            'it-IT': 'Più venduto',
            'zh-CN': '畅销',
            'ru-RU': 'Бестселлер',
            'ar-SA': 'الأكثر مبيعًا',
            'hi-IN': 'सर्वाधिक बिकने वाला'
        },
        'courses.badge.new': {
            'pt-BR': 'Novo',
            'en-US': 'New',
            'es-ES': 'Nuevo',
            'fr-FR': 'Nouveau',
            'it-IT': 'Nuovo',
            'zh-CN': '全新',
            'ru-RU': 'Новинка',
            'ar-SA': 'جديد',
            'hi-IN': 'नया'
        },
        'courses.badge.updated': {
            'pt-BR': 'Atualizado',
            'en-US': 'Updated',
            'es-ES': 'Actualizado',
            'fr-FR': 'Mis à jour',
            'it-IT': 'Aggiornato',
            'zh-CN': '已更新',
            'ru-RU': 'Обновлено',
            'ar-SA': 'محدَّث',
            'hi-IN': 'अपडेटेड'
        },
        'courses.card.students': {
            'pt-BR': '{{count}} alunos',
            'en-US': '{{count}} students',
            'es-ES': '{{count}} estudiantes',
            'fr-FR': '{{count}} élèves',
            'it-IT': '{{count}} studenti',
            'zh-CN': '{{count}} 名学员',
            'ru-RU': '{{count}} студентов',
            'ar-SA': '{{count}} طالبًا',
            'hi-IN': '{{count}} विद्यार्थी'
        },
        'courses.card.hours': {
            'pt-BR': '{{count}} horas',
            'en-US': '{{count}} hours',
            'es-ES': '{{count}} horas',
            'fr-FR': '{{count}} heures',
            'it-IT': '{{count}} ore',
            'zh-CN': '{{count}} 小时',
            'ru-RU': '{{count}} часов',
            'ar-SA': '{{count}} ساعة',
            'hi-IN': '{{count}} घंटे'
        },
        'courses.card.lessons': {
            'pt-BR': '{{count}} aulas',
            'en-US': '{{count}} lessons',
            'es-ES': '{{count}} lecciones',
            'fr-FR': '{{count}} leçons',
            'it-IT': '{{count}} lezioni',
            'zh-CN': '{{count}} 节课',
            'ru-RU': '{{count}} уроков',
            'ar-SA': '{{count}} درسًا',
            'hi-IN': '{{count}} पाठ'
        },
        'courses.card.updated': {
            'pt-BR': 'Atualizado em {{date}}',
            'en-US': 'Updated {{date}}',
            'es-ES': 'Actualizado {{date}}',
            'fr-FR': 'Mis à jour {{date}}',
            'it-IT': 'Aggiornato il {{date}}',
            'zh-CN': '{{date}} 更新',
            'ru-RU': 'Обновлено {{date}}',
            'ar-SA': 'تم التحديث {{date}}',
            'hi-IN': '{{date}} को अपडेट'
        },
        'courses.card.free': {
            'pt-BR': 'Gratuito',
            'en-US': 'Free',
            'es-ES': 'Gratis',
            'fr-FR': 'Gratuit',
            'it-IT': 'Gratuito',
            'zh-CN': '免费',
            'ru-RU': 'Бесплатно',
            'ar-SA': 'مجاني',
            'hi-IN': 'मुफ़्त'
        },
        'courses.card.reviewCta': {
            'pt-BR': 'Avaliar curso',
            'en-US': 'Review course',
            'es-ES': 'Evaluar curso',
            'fr-FR': 'Évaluer le cours',
            'it-IT': 'Valuta il corso',
            'zh-CN': '评价课程',
            'ru-RU': 'Оценить курс',
            'ar-SA': 'قيّم الدورة',
            'hi-IN': 'कोर्स का मूल्यांकन करें'
        },
        'courses.card.closeReviews': {
            'pt-BR': 'Fechar avaliações',
            'en-US': 'Close reviews',
            'es-ES': 'Cerrar reseñas',
            'fr-FR': 'Fermer les avis',
            'it-IT': 'Chiudi recensioni',
            'zh-CN': '收起评价',
            'ru-RU': 'Скрыть отзывы',
            'ar-SA': 'إغلاق المراجعات',
            'hi-IN': 'समीक्षाएँ बंद करें'
        },
        'courses.card.viewDetails': {
            'pt-BR': 'Ver detalhes',
            'en-US': 'View details',
            'es-ES': 'Ver detalles',
            'fr-FR': 'Voir les détails',
            'it-IT': 'Vedi dettagli',
            'zh-CN': '查看详情',
            'ru-RU': 'Подробнее',
            'ar-SA': 'عرض التفاصيل',
            'hi-IN': 'विवरण देखें'
        },
        'courses.review.title': {
            'pt-BR': 'Avaliações e comentários',
            'en-US': 'Reviews and comments',
            'es-ES': 'Reseñas y comentarios',
            'fr-FR': 'Avis et commentaires',
            'it-IT': 'Recensioni e commenti',
            'zh-CN': '评分与评论',
            'ru-RU': 'Отзывы и комментарии',
            'ar-SA': 'التقييمات والتعليقات',
            'hi-IN': 'समीक्षाएँ और टिप्पणियाँ'
        },
        'courses.review.ratingLabel': {
            'pt-BR': 'Nota (1 a 5)',
            'en-US': 'Rating (1 to 5)',
            'es-ES': 'Nota (1 a 5)',
            'fr-FR': 'Note (1 à 5)',
            'it-IT': 'Valutazione (1-5)',
            'zh-CN': '评分 (1-5)',
            'ru-RU': 'Оценка (1–5)',
            'ar-SA': 'التقييم (1 إلى 5)',
            'hi-IN': 'रेटिंग (1 से 5)'
        },
        'courses.review.ratingPlaceholder': {
            'pt-BR': 'Selecione uma nota',
            'en-US': 'Select a rating',
            'es-ES': 'Selecciona una nota',
            'fr-FR': 'Choisissez une note',
            'it-IT': 'Seleziona una valutazione',
            'zh-CN': '选择评分',
            'ru-RU': 'Выберите оценку',
            'ar-SA': 'اختر التقييم',
            'hi-IN': 'रेटिंग चुनें'
        },
        'courses.review.nameLabel': {
            'pt-BR': 'Nome (opcional)',
            'en-US': 'Name (optional)',
            'es-ES': 'Nombre (opcional)',
            'fr-FR': 'Nom (optionnel)',
            'it-IT': 'Nome (facoltativo)',
            'zh-CN': '姓名（可选）',
            'ru-RU': 'Имя (необязательно)',
            'ar-SA': 'الاسم (اختياري)',
            'hi-IN': 'नाम (वैकल्पिक)'
        },
        'courses.review.namePlaceholder': {
            'pt-BR': 'Informe seu nome ou deixe em branco',
            'en-US': 'Tell us your name or leave blank',
            'es-ES': 'Dinos tu nombre o déjalo vacío',
            'fr-FR': 'Indiquez votre nom ou laissez vide',
            'it-IT': 'Scrivi il tuo nome o lascia vuoto',
            'zh-CN': '填写姓名或留空',
            'ru-RU': 'Укажите имя или оставьте пустым',
            'ar-SA': 'اكتب اسمك أو اتركه فارغًا',
            'hi-IN': 'अपना नाम लिखें या खाली छोड़ें'
        },
        'courses.review.commentLabel': {
            'pt-BR': 'Comentário',
            'en-US': 'Comment',
            'es-ES': 'Comentario',
            'fr-FR': 'Commentaire',
            'it-IT': 'Commento',
            'zh-CN': '评论',
            'ru-RU': 'Комментарий',
            'ar-SA': 'التعليق',
            'hi-IN': 'टिप्पणी'
        },
        'courses.review.commentPlaceholder': {
            'pt-BR': 'Conte rapidamente o que achou do curso',
            'en-US': 'Briefly share what you thought of the course',
            'es-ES': 'Resume qué te pareció el curso',
            'fr-FR': 'Partagez brièvement votre avis sur le cours',
            'it-IT': 'Racconta in breve cosa ne pensi del corso',
            'zh-CN': '简要分享你对课程的看法',
            'ru-RU': 'Кратко расскажите, что думаете о курсе',
            'ar-SA': 'اخبرنا باختصار رأيك في الدورة',
            'hi-IN': 'संक्षेप में बताएं कि आपको कोर्स कैसा लगा'
        },
        'courses.review.submit': {
            'pt-BR': 'Enviar avaliação',
            'en-US': 'Submit review',
            'es-ES': 'Enviar reseña',
            'fr-FR': 'Envoyer l’avis',
            'it-IT': 'Invia recensione',
            'zh-CN': '提交评价',
            'ru-RU': 'Отправить отзыв',
            'ar-SA': 'إرسال التقييم',
            'hi-IN': 'समीक्षा भेजें'
        },
        'courses.review.listTitle': {
            'pt-BR': 'Avaliações da comunidade',
            'en-US': 'Community reviews',
            'es-ES': 'Reseñas de la comunidad',
            'fr-FR': 'Avis de la communauté',
            'it-IT': 'Recensioni della community',
            'zh-CN': '学员点评',
            'ru-RU': 'Отзывы сообщества',
            'ar-SA': 'مراجعات المجتمع',
            'hi-IN': 'समुदाय की समीक्षाएँ'
        },
        'courses.review.countLabel': {
            'pt-BR': '{{count}} avaliações',
            'en-US': '{{count}} reviews',
            'es-ES': '{{count}} reseñas',
            'fr-FR': '{{count}} avis',
            'it-IT': '{{count}} recensioni',
            'zh-CN': '{{count}} 条评价',
            'ru-RU': '{{count}} отзывов',
            'ar-SA': '{{count}} مراجعات',
            'hi-IN': '{{count}} समीक्षाएँ'
        },
        'courses.review.none': {
            'pt-BR': 'Seja o primeiro a deixar um comentário',
            'en-US': 'Be the first to leave a comment',
            'es-ES': 'Sé el primero en comentar',
            'fr-FR': 'Soyez le premier à commenter',
            'it-IT': 'Sii il primo a lasciare un commento',
            'zh-CN': '抢先写下你的评价',
            'ru-RU': 'Оставьте первый отзыв',
            'ar-SA': 'كن أول من يضيف تعليقًا',
            'hi-IN': 'पहली टिप्पणी आप लिखें'
        },
        'courses.review.anonymous': {
            'pt-BR': 'Aluno anônimo',
            'en-US': 'Anonymous learner',
            'es-ES': 'Alumno anónimo',
            'fr-FR': 'Apprenant anonyme',
            'it-IT': 'Studente anonimo',
            'zh-CN': '匿名学员',
            'ru-RU': 'Анонимный студент',
            'ar-SA': 'متعلّم مجهول',
            'hi-IN': 'अनाम छात्र'
        },
        'courses.review.success': {
            'pt-BR': 'Obrigado! Sua avaliação está visível.',
            'en-US': 'Thanks! Your review is live.',
            'es-ES': '¡Gracias! Tu reseña ya es visible.',
            'fr-FR': 'Merci ! Votre avis est en ligne.',
            'it-IT': 'Grazie! La tua recensione è pubblicata.',
            'zh-CN': '感谢！你的评价已发布。',
            'ru-RU': 'Спасибо! Ваш отзыв опубликован.',
            'ar-SA': 'شكرًا لك! تم نشر تقييمك.',
            'hi-IN': 'धन्यवाद! आपकी समीक्षा प्रकाशित हो गई है।'
        },
        'courses.review.errorRating': {
            'pt-BR': 'Escolha uma nota antes de enviar.',
            'en-US': 'Pick a rating before submitting.',
            'es-ES': 'Elige una nota antes de enviar.',
            'fr-FR': 'Choisissez une note avant d’envoyer.',
            'it-IT': 'Scegli una valutazione prima di inviare.',
            'zh-CN': '提交前请选择评分。',
            'ru-RU': 'Выберите оценку перед отправкой.',
            'ar-SA': 'اختر تقييمًا قبل الإرسال.',
            'hi-IN': 'भेजने से पहले रेटिंग चुनें।'
        },
        'courses.review.errorComment': {
            'pt-BR': 'O comentário precisa de pelo menos 10 caracteres.',
            'en-US': 'Comment must be at least 10 characters.',
            'es-ES': 'El comentario debe tener al menos 10 caracteres.',
            'fr-FR': 'Le commentaire doit comporter au moins 10 caractères.',
            'it-IT': 'Il commento deve avere almeno 10 caratteri.',
            'zh-CN': '评论至少需要 10 个字符。',
            'ru-RU': 'Комментарий должен содержать минимум 10 символов.',
            'ar-SA': 'يجب أن يحتوي التعليق على 10 أحرف على الأقل.',
            'hi-IN': 'टिप्पणी कम से कम 10 अक्षरों की होनी चाहिए।'
        },
        'courses.review.published': {
            'pt-BR': 'Publicado em {{date}}',
            'en-US': 'Published on {{date}}',
            'es-ES': 'Publicado el {{date}}',
            'fr-FR': 'Publié le {{date}}',
            'it-IT': 'Pubblicato il {{date}}',
            'zh-CN': '{{date}} 发布',
            'ru-RU': 'Опубликовано {{date}}',
            'ar-SA': 'نُشر في {{date}}',
            'hi-IN': '{{date}} को प्रकाशित'
        },
        'courses.empty': {
            'pt-BR': 'Nenhum curso corresponde aos filtros selecionados',
            'en-US': 'No courses match the selected filters',
            'es-ES': 'Ningún curso coincide con los filtros seleccionados',
            'fr-FR': 'Aucun cours ne correspond aux filtres choisis',
            'it-IT': 'Nessun corso corrisponde ai filtri selezionati',
            'zh-CN': '没有符合筛选条件的课程',
            'ru-RU': 'Нет курсов, подходящих под выбранные фильтры',
            'ar-SA': 'لا توجد دورات مطابقة لعوامل التصفية المختارة',
            'hi-IN': 'चयनित फ़िल्टर से कोई कोर्स मेल नहीं खाता'
        },
        'courses.data.pythonCompleto.title': {
            'pt-BR': 'Python Completo: do Zero ao Profissional',
            'en-US': 'Complete Python: from zero to pro',
            'es-ES': 'Python completo: de cero a profesional',
            'fr-FR': 'Python complet : du zéro au pro',
            'it-IT': 'Python completo: da zero al professionista',
            'zh-CN': 'Python 全面课程：从零到专家',
            'ru-RU': 'Полный Python: от нуля до профи',
            'ar-SA': 'بايثون كامل: من الصفر إلى الاحتراف',
            'hi-IN': 'पूर्ण पाइथन: शून्य से प्रो तक'
        },
        'courses.data.pythonCompleto.description': {
            'pt-BR': 'Guia definitivo com lógica, POO, testes e deploy para dominar o ecossistema Python.',
            'en-US': 'Definitive guide covering logic, OOP, testing and deploy to master the Python ecosystem.',
            'es-ES': 'Guía definitiva con lógica, POO, pruebas y despliegue para dominar el ecosistema Python.',
            'fr-FR': 'Guide complet avec logique, POO, tests et déploiement pour maîtriser l’écosystème Python.',
            'it-IT': 'Guida definitiva con logica, OOP, test e deploy per dominare l’ecosistema Python.',
            'zh-CN': '涵盖逻辑、面向对象、测试与部署的权威指南，全面掌握 Python 生态。',
            'ru-RU': 'Полное руководство с логикой, ООП, тестированием и деплоем, чтобы освоить экосистему Python.',
            'ar-SA': 'دليل شامل يتضمن المنطق وOOP والاختبارات والنشر لإتقان منظومة بايثون.',
            'hi-IN': 'लॉजिक, OOP, परीक्षण और डिप्लॉय को शामिल करने वाली संपूर्ण गाइड जो पाइथन इकोसिस्टम में महारत दिलाए।'
        },
        'courses.data.pythonCompleto.instructor': {
            'pt-BR': 'com Mariana Costa',
            'en-US': 'with Mariana Costa',
            'es-ES': 'con Mariana Costa',
            'fr-FR': 'avec Mariana Costa',
            'it-IT': 'con Mariana Costa',
            'zh-CN': '讲师：Mariana Costa',
            'ru-RU': 'с Mariana Costa',
            'ar-SA': 'مع Mariana Costa',
            'hi-IN': 'मारियाना कोस्टा के साथ'
        },
        'courses.data.pythonAutomacao.title': {
            'pt-BR': 'Automação com Python e Selenium',
            'en-US': 'Automation with Python & Selenium',
            'es-ES': 'Automatización con Python y Selenium',
            'fr-FR': 'Automatisation avec Python et Selenium',
            'it-IT': 'Automazione con Python e Selenium',
            'zh-CN': 'Python + Selenium 自动化',
            'ru-RU': 'Автоматизация на Python и Selenium',
            'ar-SA': 'الأتمتة ببايثون و Selenium',
            'hi-IN': 'पाइथन और Selenium के साथ स्वचालन'
        },
        'courses.data.pythonAutomacao.description': {
            'pt-BR': 'Crie robôs para scraping, testes e integrações usando Selenium, Playwright e APIs.',
            'en-US': 'Build bots for scraping, testing and integrations using Selenium, Playwright and APIs.',
            'es-ES': 'Crea bots para scraping, pruebas e integraciones con Selenium, Playwright y APIs.',
            'fr-FR': 'Créez des robots pour le scraping, les tests et les intégrations avec Selenium, Playwright et des API.',
            'it-IT': 'Crea bot per scraping, test e integrazioni con Selenium, Playwright e API.',
            'zh-CN': '使用 Selenium、Playwright 与 API 构建用于爬取、测试和集成的自动化机器人。',
            'ru-RU': 'Создавайте ботов для парсинга, тестов и интеграций с Selenium, Playwright и API.',
            'ar-SA': 'اصنع روبوتات للسكربينغ والاختبارات والتكاملات باستخدام Selenium و Playwright وواجهات API.',
            'hi-IN': 'Selenium, Playwright और APIs से स्क्रैपिंग, परीक्षण और इंटीग्रेशन के लिए बॉट बनाएं।'
        },
        'courses.data.pythonAutomacao.instructor': {
            'pt-BR': 'com Bruno Andrade',
            'en-US': 'with Bruno Andrade',
            'es-ES': 'con Bruno Andrade',
            'fr-FR': 'avec Bruno Andrade',
            'it-IT': 'con Bruno Andrade',
            'zh-CN': '讲师：Bruno Andrade',
            'ru-RU': 'с Bruno Andrade',
            'ar-SA': 'مع Bruno Andrade',
            'hi-IN': 'ब्रूनो आंद्रादे के साथ'
        },
        'courses.data.pythonDados.title': {
            'pt-BR': 'Ciência de Dados com Python e Pandas',
            'en-US': 'Data science with Python & Pandas',
            'es-ES': 'Ciencia de datos con Python y Pandas',
            'fr-FR': 'Data science avec Python et Pandas',
            'it-IT': 'Data science con Python e Pandas',
            'zh-CN': 'Python 与 Pandas 数据科学',
            'ru-RU': 'Data Science на Python и Pandas',
            'ar-SA': 'علم البيانات ببايثون و Pandas',
            'hi-IN': 'पाइथन और Pandas के साथ डेटा साइंस'
        },
        'courses.data.pythonDados.description': {
            'pt-BR': 'Construa pipelines analíticos com Pandas, NumPy, Matplotlib e dashboards interativos.',
            'en-US': 'Build analytical pipelines with Pandas, NumPy, Matplotlib and interactive dashboards.',
            'es-ES': 'Construye pipelines analíticos con Pandas, NumPy, Matplotlib y tableros interactivos.',
            'fr-FR': 'Construisez des pipelines analytiques avec Pandas, NumPy, Matplotlib et des tableaux de bord interactifs.',
            'it-IT': 'Crea pipeline analitiche con Pandas, NumPy, Matplotlib e dashboard interattive.',
            'zh-CN': '使用 Pandas、NumPy、Matplotlib 打造分析流水线和交互式仪表盘。',
            'ru-RU': 'Создавайте аналитические пайплайны с Pandas, NumPy, Matplotlib и интерактивными дашбордами.',
            'ar-SA': 'ابنِ خطوط تحليلية باستخدام Pandas وNumPy وMatplotlib ولوحات تفاعلية.',
            'hi-IN': 'Pandas, NumPy, Matplotlib और इंटरैक्टिव डैशबोर्ड के साथ विश्लेषणात्मक पाइपलाइन बनाएँ।'
        },
        'courses.data.pythonDados.instructor': {
            'pt-BR': 'com Sofia Martins',
            'en-US': 'with Sofia Martins',
            'es-ES': 'con Sofia Martins',
            'fr-FR': 'avec Sofia Martins',
            'it-IT': 'con Sofia Martins',
            'zh-CN': '讲师：Sofia Martins',
            'ru-RU': 'с Sofia Martins',
            'ar-SA': 'مع Sofia Martins',
            'hi-IN': 'सोफिया मार्टिंस के साथ'
        },
        'courses.data.pythonFastapi.title': {
            'pt-BR': 'APIs Profissionais com FastAPI',
            'en-US': 'Professional APIs with FastAPI',
            'es-ES': 'APIs profesionales con FastAPI',
            'fr-FR': 'API professionnelles avec FastAPI',
            'it-IT': 'API professionali con FastAPI',
            'zh-CN': 'FastAPI 企业级接口',
            'ru-RU': 'Профессиональные API на FastAPI',
            'ar-SA': 'واجهات APIs احترافية بـ FastAPI',
            'hi-IN': 'FastAPI के साथ प्रोफेशनल APIs'
        },
        'courses.data.pythonFastapi.description': {
            'pt-BR': 'Modelagem, validação e deploy de APIs escaláveis com FastAPI, SQLModel e Docker.',
            'en-US': 'Design, validation and deployment of scalable APIs with FastAPI, SQLModel and Docker.',
            'es-ES': 'Modelado, validación y despliegue de APIs escalables con FastAPI, SQLModel y Docker.',
            'fr-FR': 'Modélisation, validation et déploiement d’API évolutives avec FastAPI, SQLModel et Docker.',
            'it-IT': 'Modeling, validazione e deploy di API scalabili con FastAPI, SQLModel e Docker.',
            'zh-CN': '借助 FastAPI、SQLModel 与 Docker 构建可扩展 API 的建模、验证与部署。',
            'ru-RU': 'Проектирование, валидация и деплой масштабируемых API с FastAPI, SQLModel и Docker.',
            'ar-SA': 'تصميم، التحقق ونشر واجهات APIs قابلة للتوسع باستخدام FastAPI وSQLModel وDocker.',
            'hi-IN': 'FastAPI, SQLModel और Docker से स्केलेबल APIs का मॉडलिंग, वैलिडेशन और डिप्लॉय।'
        },
        'courses.data.pythonFastapi.instructor': {
            'pt-BR': 'com Diego Albuquerque',
            'en-US': 'with Diego Albuquerque',
            'es-ES': 'con Diego Albuquerque',
            'fr-FR': 'avec Diego Albuquerque',
            'it-IT': 'con Diego Albuquerque',
            'zh-CN': '讲师：Diego Albuquerque',
            'ru-RU': 'с Diego Albuquerque',
            'ar-SA': 'مع Diego Albuquerque',
            'hi-IN': 'डिएगो अल्बुकर्क के साथ'
        },
        'courses.data.pythonFinancas.title': {
            'pt-BR': 'Python para Finanças e Investimentos',
            'en-US': 'Python for finance & investing',
            'es-ES': 'Python para finanzas e inversiones',
            'fr-FR': 'Python pour la finance et l’investissement',
            'it-IT': 'Python per finanza e investimenti',
            'zh-CN': '金融与投资 Python',
            'ru-RU': 'Python для финансов и инвестиций',
            'ar-SA': 'بايثون للتمويل والاستثمار',
            'hi-IN': 'वित्त और निवेश के लिए पाइथन'
        },
        'courses.data.pythonFinancas.description': {
            'pt-BR': 'Automatize análises, backtests e relatórios financeiros com Pandas, yFinance e Plotly.',
            'en-US': 'Automate analysis, backtests and financial reports with Pandas, yFinance and Plotly.',
            'es-ES': 'Automatiza análisis, backtests e informes financieros con Pandas, yFinance y Plotly.',
            'fr-FR': 'Automatisez analyses, backtests et rapports financiers avec Pandas, yFinance et Plotly.',
            'it-IT': 'Automatizza analisi, backtest e report finanziari con Pandas, yFinance e Plotly.',
            'zh-CN': '利用 Pandas、yFinance 与 Plotly 自动化分析、回测和财报。',
            'ru-RU': 'Автоматизируйте анализ, бэктесты и фин. отчёты с Pandas, yFinance и Plotly.',
            'ar-SA': 'أتمت التحليلات والاختبارات الخلفية والتقارير المالية باستخدام Pandas وyFinance وPlotly.',
            'hi-IN': 'Pandas, yFinance और Plotly से विश्लेषण, बैकटेस्ट व वित्तीय रिपोर्ट स्वचालित करें।'
        },
        'courses.data.pythonFinancas.instructor': {
            'pt-BR': 'com Paula Nunes',
            'en-US': 'with Paula Nunes',
            'es-ES': 'con Paula Nunes',
            'fr-FR': 'avec Paula Nunes',
            'it-IT': 'con Paula Nunes',
            'zh-CN': '讲师：Paula Nunes',
            'ru-RU': 'с Paula Nunes',
            'ar-SA': 'مع Paula Nunes',
            'hi-IN': 'पाउला नूनेस के साथ'
        },
        'courses.data.pythonTensorflow.title': {
            'pt-BR': 'Machine Learning com TensorFlow e Python',
            'en-US': 'Machine learning with TensorFlow & Python',
            'es-ES': 'Machine learning con TensorFlow y Python',
            'fr-FR': 'Machine learning avec TensorFlow et Python',
            'it-IT': 'Machine learning con TensorFlow e Python',
            'zh-CN': 'TensorFlow + Python 机器学习',
            'ru-RU': 'Машинное обучение с TensorFlow и Python',
            'ar-SA': 'تعلّم الآلة عبر TensorFlow وPython',
            'hi-IN': 'TensorFlow और पाइथन के साथ मशीन लर्निंग'
        },
        'courses.data.pythonTensorflow.description': {
            'pt-BR': 'Treine redes neurais, ajuste hiperparâmetros e publique modelos de ML em produção.',
            'en-US': 'Train neural networks, tune hyperparameters and ship ML models to production.',
            'es-ES': 'Entrena redes neuronales, ajusta hiperparámetros y publica modelos de ML en producción.',
            'fr-FR': 'Entraînez des réseaux neuronaux, ajustez les hyperparamètres et déployez vos modèles ML.',
            'it-IT': 'Allena reti neurali, affina iperparametri e pubblica modelli ML in produzione.',
            'zh-CN': '训练神经网络、调参并将机器学习模型发布到线上环境。',
            'ru-RU': 'Обучайте нейросети, настраивайте гиперпараметры и выводите ML-модели в прод.',
            'ar-SA': 'درّب الشبكات العصبية واضبط المعاملات وانشر نماذج التعلم الآلي للإنتاج.',
            'hi-IN': 'न्यूरल नेटवर्क ट्रेन करें, हाइपरपैरामीटर ट्यून करें और ML मॉडल प्रोडक्शन में तैनात करें।'
        },
        'courses.data.pythonTensorflow.instructor': {
            'pt-BR': 'com Rafael Kimura',
            'en-US': 'with Rafael Kimura',
            'es-ES': 'con Rafael Kimura',
            'fr-FR': 'avec Rafael Kimura',
            'it-IT': 'con Rafael Kimura',
            'zh-CN': '讲师：Rafael Kimura',
            'ru-RU': 'с Rafael Kimura',
            'ar-SA': 'مع Rafael Kimura',
            'hi-IN': 'राफेल किमुरा के साथ'
        },
        'courses.affiliateTitle': {
            'pt-BR': 'Cursos afiliados',
            'en-US': 'Affiliate courses',
            'es-ES': 'Cursos afiliados',
            'fr-FR': 'Cours affiliés',
            'it-IT': 'Corsi affiliati',
            'zh-CN': '联盟课程',
            'ru-RU': 'Партнерские курсы',
            'ar-SA': 'دورات تابعة',
            'hi-IN': 'सहयोगी पाठ्यक्रम'
        },
        'courses.affiliateSubtitle': {
            'pt-BR': 'Os melhores cursos pré-selecionados para você.',
            'en-US': 'The best pre-selected courses for you.',
            'es-ES': 'Los mejores cursos preseleccionados para ti.',
            'fr-FR': 'Les meilleurs cours présélectionnés pour vous.',
            'it-IT': 'I migliori corsi preselezionati per te.',
            'zh-CN': '为您预选的最佳课程。',
            'ru-RU': 'Лучшие предварительно отобранные курсы для вас.',
            'ar-SA': 'أفضل الدورات المختارة مسبقًا لك.',
            'hi-IN': 'आपके लिए सर्वश्रेष्ठ पूर्व-चयनित पाठ्यक्रम।'
        },
        'courses.searchLabel': {
            'pt-BR': 'Buscar cursos',
            'en-US': 'Search courses',
            'es-ES': 'Buscar cursos',
            'fr-FR': 'Rechercher des cours',
            'it-IT': 'Cerca corsi',
            'zh-CN': '搜索课程',
            'ru-RU': 'Искать курсы',
            'ar-SA': 'ابحث عن الدورات',
            'hi-IN': 'पाठ्यक्रम खोजें'
        },
        'courses.searchPlaceholder': {
            'pt-BR': 'Digite parte do nome, produtor ou categoria',
            'en-US': 'Enter part of the name, producer or category',
            'es-ES': 'Introduce parte del nombre, productor o categoría',
            'fr-FR': 'Entrez une partie du nom, du producteur ou de la catégorie',
            'it-IT': 'Inserisci parte del nome, del produttore o della categoria',
            'zh-CN': '输入名称、制作人或类别的一部分',
            'ru-RU': 'Введите часть названия, производителя или категории',
            'ar-SA': 'أدخل جزءًا من الاسم أو المنتج أو الفئة',
            'hi-IN': 'नाम, निर्माता या श्रेणी का कुछ हिस्सा दर्ज करें'
        },
        'courses.categoryLabel': {
            'pt-BR': 'Categoria',
            'en-US': 'Category',
            'es-ES': 'Categoría',
            'fr-FR': 'Catégorie',
            'it-IT': 'Categoria',
            'zh-CN': '类别',
            'ru-RU': 'Категория',
            'ar-SA': 'الفئة',
            'hi-IN': 'श्रेणी'
        },
        'courses.categoryAll': {
            'pt-BR': 'Todas as categorias',
            'en-US': 'All categories',
            'es-ES': 'Todas las categorías',
            'fr-FR': 'Toutes les catégories',
            'it-IT': 'Tutte le categorie',
            'zh-CN': '所有类别',
            'ru-RU': 'Все категории',
            'ar-SA': 'جميع الفئات',
            'hi-IN': 'सभी श्रेणियां'
        },
        'tools.pageTitle': {
            'pt-BR': 'Ferramentas e Softwares - Wide Market',
            'en-US': 'Tools & Software - Wide Market',
            'es-ES': 'Herramientas y Softwares - Wide Market',
            'fr-FR': 'Outils et Logiciels - Wide Market',
            'it-IT': 'Strumenti e Software - Wide Market',
            'zh-CN': '工具与软件 - Wide Market',
            'ru-RU': 'Инструменты и ПО — Wide Market',
            'ar-SA': 'الأدوات والبرامج - Wide Market',
            'hi-IN': 'उपकरण और सॉफ्टवेयर - Wide Market'
        },
        'tools.heroPill': {
            'pt-BR': 'SaaS + ferramentas criativas',
            'en-US': 'SaaS + creative tools',
            'es-ES': 'SaaS + herramientas creativas',
            'fr-FR': 'SaaS + outils créatifs',
            'it-IT': 'SaaS + strumenti creativi',
            'zh-CN': 'SaaS + 创意工具',
            'ru-RU': 'SaaS + креативные инструменты',
            'ar-SA': 'SaaS + أدوات إبداعية',
            'hi-IN': 'SaaS + रचनात्मक उपकरण'
        },
        'tools.heroTitle': {
            'pt-BR': 'Espaços prontos para Canva, Hostinger, VPNs e mais',
            'en-US': 'Spaces ready for Canva, Hostinger, VPNs and more',
            'es-ES': 'Espacios listos para Canva, Hostinger, VPNs y más',
            'fr-FR': 'Espaces prêts pour Canva, Hostinger, VPN et plus',
            'it-IT': 'Spazi pronti per Canva, Hostinger, VPN e altro',
            'zh-CN': 'Canva、Hostinger、VPN 等的可用空间',
            'ru-RU': 'Готовые пространства для Canva, Hostinger, VPN и других',
            'ar-SA': 'مساحات جاهزة لـ Canva و Hostinger و VPNs والمزيد',
            'hi-IN': 'Canva, Hostinger, VPNs और अधिक के लिए तैयार स्थान'
        },
        'tools.heroSubtitle': {
            'pt-BR': 'Transforme esta página no seu hub de softwares favoritos. Insira banners, widgets e tabelas comparativas sem esforço.',
            'en-US': 'Turn this page into your favorite software hub. Insert banners, widgets and comparison tables effortlessly.',
            'es-ES': 'Convierte esta página en tu centro de software favorito. Inserta banners, widgets y tablas comparativas sin esfuerzo.',
            'fr-FR': 'Transformez cette page en votre centre de logiciels préférés. Insérez des bannières, des widgets et des tableaux comparatifs sans effort.',
            'it-IT': 'Trasforma questa pagina nel tuo hub software preferito. Inserisci banner, widget e tabelle comparative senza sforzo.',
            'zh-CN': '将此页面变成您最喜爱的软件中心。轻松插入横幅、小部件和比较表格。',
            'ru-RU': 'Превратите эту страницу в свой центр любимых программ. Вставляйте баннеры, виджеты и сравнительные таблицы без усилий.',
            'ar-SA': 'حوّل هذه الصفحة إلى مركز برامجك المفضل. أدخل اللافتات والأدوات والجداول المقارنة بسهولة.',
            'hi-IN': 'इस पेज को अपने पसंदीदा सॉफ्टवेयर हब में बदलें। बैनर, विजेट और तुलना तालिकाएं आसानी से डालें।'
        },
        'tools.badgeCanva': {
            'pt-BR': 'Canva',
            'en-US': 'Canva',
            'es-ES': 'Canva',
            'fr-FR': 'Canva',
            'it-IT': 'Canva',
            'zh-CN': 'Canva',
            'ru-RU': 'Canva',
            'ar-SA': 'كانفا',
            'hi-IN': 'कैनवा'
        },
        'tools.badgeHostinger': {
            'pt-BR': 'Hostinger',
            'en-US': 'Hostinger',
            'es-ES': 'Hostinger',
            'fr-FR': 'Hostinger',
            'it-IT': 'Hostinger',
            'zh-CN': 'Hostinger',
            'ru-RU': 'Hostinger',
            'ar-SA': 'Hostinger',
            'hi-IN': 'होस्टिंगर'
        },
        'tools.badgeNordVPN': {
            'pt-BR': 'NordVPN',
            'en-US': 'NordVPN',
            'es-ES': 'NordVPN',
            'fr-FR': 'NordVPN',
            'it-IT': 'NordVPN',
            'zh-CN': 'NordVPN',
            'ru-RU': 'NordVPN',
            'ar-SA': 'NordVPN',
            'hi-IN': 'नॉर्डवीपीएन'
        },
        'tools.badgeSurfshark': {
            'pt-BR': 'Surfshark',
            'en-US': 'Surfshark',
            'es-ES': 'Surfshark',
            'fr-FR': 'Surfshark',
            'it-IT': 'Surfshark',
            'zh-CN': 'Surfshark',
            'ru-RU': 'Surfshark',
            'ar-SA': 'Surfshark',
            'hi-IN': 'सर्फशार्क'
        },
        'tools.metricCommissionsLabel': {
            'pt-BR': 'Comissões médias',
            'en-US': 'Average commissions',
            'es-ES': 'Comisiones promedio',
            'fr-FR': 'Commissions moyennes',
            'it-IT': 'Commissioni medie',
            'zh-CN': '平均佣金',
            'ru-RU': 'Средние комиссии',
            'ar-SA': 'متوسط العمولات',
            'hi-IN': 'औसत कमीशन'
        },
        'tools.metricCommissionsValue': {
            'pt-BR': '20%+',
            'en-US': '20%+',
            'es-ES': '20%+',
            'fr-FR': '20%+',
            'it-IT': '20%+',
            'zh-CN': '20%以上',
            'ru-RU': '20%+',
            'ar-SA': '20%+',
            'hi-IN': '20%+'
        },
        'tools.metricTicketsLabel': {
            'pt-BR': 'Tickets mensais',
            'en-US': 'Monthly tickets',
            'es-ES': 'Tickets mensuales',
            'fr-FR': 'Tickets mensuels',
            'it-IT': 'Biglietti mensili',
            'zh-CN': '月票',
            'ru-RU': 'Ежемесячные билеты',
            'ar-SA': 'التذاكر الشهرية',
            'hi-IN': 'मासिक टिकट'
        },
        'tools.metricTicketsValue': {
            'pt-BR': 'Recorrentes',
            'en-US': 'Recurring',
            'es-ES': 'Recurrentes',
            'fr-FR': 'Récurrents',
            'it-IT': 'Ricorrenti',
            'zh-CN': '经常性',
            'ru-RU': 'Повторяющиеся',
            'ar-SA': 'متكررة',
            'hi-IN': 'आवर्ती'
        },
        'tools.metricPrizesLabel': {
            'pt-BR': 'Prêmios físicos',
            'en-US': 'Physical prizes',
            'es-ES': 'Premios físicos',
            'fr-FR': 'Prix physiques',
            'it-IT': 'Premi fisici',
            'zh-CN': '实物奖品',
            'ru-RU': 'Физические призы',
            'ar-SA': 'جوائز مادية',
            'hi-IN': 'भौतिक पुरस्कार'
        },
        'tools.metricPrizesValue': {
            'pt-BR': 'Canva Champion, Hostinger Expert',
            'en-US': 'Canva Champion, Hostinger Expert',
            'es-ES': 'Canva Champion, Hostinger Expert',
            'fr-FR': 'Canva Champion, Hostinger Expert',
            'it-IT': 'Canva Champion, Hostinger Expert',
            'zh-CN': 'Canva Champion, Hostinger Expert',
            'ru-RU': 'Canva Champion, Hostinger Expert',
            'ar-SA': 'بطل Canva، خبير Hostinger',
            'hi-IN': 'कैनवा चैंपियन, होस्टिंगर विशेषज्ञ'
        },
        'tools.infoCard1Title': {
            'pt-BR': 'Landing comparativa',
            'en-US': 'Comparative landing',
            'es-ES': 'Landing comparativa',
            'fr-FR': 'Landing comparative',
            'it-IT': 'Landing comparativa',
            'zh-CN': '比较落地页',
            'ru-RU': 'Сравнительный лендинг',
            'ar-SA': 'صفحة هبوط مقارنة',
            'hi-IN': 'तुलनात्मक लैंडिंग'
        },
        'tools.infoCard1Description': {
            'pt-BR': 'Reserve o topo para um comparativo rápido (tabela ou cards) destacando bônus físicos ou kits enviados aos afiliados.',
            'en-US': 'Reserve the top for a quick comparison (table or cards) highlighting physical bonuses or kits sent to affiliates.',
            'es-ES': 'Reserva la parte superior para una comparación rápida (tabla o tarjetas) destacando bonos físicos o kits enviados a los afiliados.',
            'fr-FR': 'Réservez la partie supérieure pour une comparaison rapide (tableau ou cartes) mettant en évidence les bonus physiques ou les kits envoyés aux affiliés.',
            'it-IT': 'Riserva la parte superiore per un confronto rapido (tabella o schede) evidenziando bonus fisici o kit inviati agli affiliati.',
            'zh-CN': '顶部预留用于快速比较（表格或卡片），突出显示发送给附属公司的实物奖金或套件。',
            'ru-RU': 'Зарезервируйте верхнюю часть для быстрого сравнения (таблицы или карточки), выделяя физические бонусы или комплекты, отправленные аффилированным лицам.',
            'ar-SA': 'احجز الجزء العلوي لمقارنة سريعة (جدول أو بطاقات) تسلط الضوء على المكافآت المادية أو المجموعات المرسلة إلى الشركات التابعة.',
            'hi-IN': 'शीर्ष को एक त्वरित तुलना (तालिका या कार्ड) के लिए आरक्षित करें, जिसमें संबद्धों को भेजे गए भौतिक बोनस या किट को उजागर किया गया हो।'
        },
        'tools.infoCard2Title': {
            'pt-BR': 'Conteúdo educativo',
            'en-US': 'Educational content',
            'es-ES': 'Contenido educativo',
            'fr-FR': 'Contenu éducatif',
            'it-IT': 'Contenuti educativi',
            'zh-CN': '教育内容',
            'ru-RU': 'Образовательный контент',
            'ar-SA': 'محتوى تعليمي',
            'hi-IN': 'शैक्षिक सामग्री'
        },
        'tools.infoCard2Description': {
            'pt-BR': 'Inclua listas “como usar” e CTAs em cada bloco para melhorar o SEO e o tempo de permanência.',
            'en-US': 'Include "how-to" lists and CTAs in each block to improve SEO and dwell time.',
            'es-ES': 'Incluye listas de "cómo usar" y CTAs en cada bloque para mejorar el SEO y el tiempo de permanencia.',
            'fr-FR': 'Incluez des listes "comment utiliser" et des CTA dans chaque bloc pour améliorer le référencement et le temps de séjour.',
            'it-IT': 'Includi elenchi "come usare" e CTA in ogni blocco per migliorare il SEO e il tempo di permanenza.',
            'zh-CN': '在每个块中包含“如何使用”列表和 CTA，以提高 SEO 和停留时间。',
            'ru-RU': 'Включайте списки "как использовать" и CTA в каждый блок для улучшения SEO и времени нахождения на странице.',
            'ar-SA': 'قم بتضمين قوائم "كيفية الاستخدام" وعبارات الحث على اتخاذ إجراء (CTAs) في كل كتلة لتحسين تحسين محركات البحث ووقت الإقامة.',
            'hi-IN': 'SEO और ठहरने के समय को बेहतर बनाने के लिए प्रत्येक ब्लॉक में "कैसे करें" सूचियां और CTA शामिल करें।'
        },
        'tools.infoCard3Title': {
            'pt-BR': 'Widgets oficiais',
            'en-US': 'Official widgets',
            'es-ES': 'Widgets oficiales',
            'fr-FR': 'Widgets officiels',
            'it-IT': 'Widget ufficiali',
            'zh-CN': '官方小部件',
            'ru-RU': 'Официальные виджеты',
            'ar-SA': 'أدوات رسمية',
            'hi-IN': 'आधिकारिक विजेट'
        },
        'tools.infoCard3Description': {
            'pt-BR': 'Canva, Hostinger e provedores de VPN oferecem widgets, GIFs e vídeos embarcáveis para reforçar a oferta.',
            'en-US': 'Canva, Hostinger and VPN providers offer embeddable widgets, GIFs and videos to reinforce the offer.',
            'es-ES': 'Canva, Hostinger y proveedores de VPN ofrecen widgets, GIF y videos incrustables para reforzar la oferta.',
            'fr-FR': 'Canva, Hostinger et les fournisseurs de VPN proposent des widgets, des GIF et des vidéos intégrables pour renforcer l\'offre.',
            'it-IT': 'Canva, Hostinger e i fornitori di VPN offrono widget, GIF e video incorporabili per rafforzare l\'offerta.',
            'zh-CN': 'Canva、Hostinger 和 VPN 提供商提供可嵌入的小部件、GIF 和视频，以强化优惠。',
            'ru-RU': 'Canva, Hostinger и провайдеры VPN предлагают встраиваемые виджеты, GIF и видео для усиления предложения.',
            'ar-SA': 'تقدم Canva و Hostinger ومقدمو VPN أدوات واجهة مستخدم (widgets) وصور GIF ومقاطع فيديو قابلة للتضمين لتعزيز العرض.',
            'hi-IN': 'कैनवा, होस्टिंगर और वीपीएन प्रदाता प्रस्ताव को मजबूत करने के लिए एम्बेडेबल विजेट, जीआईएफ और वीडियो प्रदान करते हैं।'
        },
        'tools.availableSpacesTitle': {
            'pt-BR': 'Espaços disponíveis',
            'en-US': 'Available spaces',
            'es-ES': 'Espacios disponibles',
            'fr-FR': 'Espaces disponibles',
            'it-IT': 'Spazi disponibili',
            'zh-CN': '可用空间',
            'ru-RU': 'Доступные места',
            'ar-SA': 'المساحات المتاحة',
            'hi-IN': 'उपलब्ध स्थान'
        },
        'tools.availableSpacesSubtitle': {
            'pt-BR': 'Basta substituir cada placeholder pelo HTML enviado pelo parceiro.',
            'en-US': 'Simply replace each placeholder with the HTML sent by the partner.',
            'es-ES': 'Simplemente reemplaza cada marcador de posición con el HTML enviado por el socio.',
            'fr-FR': 'Remplacez simplement chaque espace réservé par le HTML envoyé par le partenaire.',
            'it-IT': 'Sostituisci semplicemente ogni segnaposto con l\'HTML inviato dal partner.',
            'zh-CN': '只需将每个占位符替换为合作伙伴发送的 HTML。',
            'ru-RU': 'Просто замените каждый заполнитель HTML-кодом, отправленным партнером.',
            'ar-SA': 'ما عليك سوى استبدال كل عنصر نائب بـ HTML الذي أرسله الشريك.',
            'hi-IN': 'बस प्रत्येक प्लेसहोल्डर को पार्टनर द्वारा भेजे गए HTML से बदलें।'
        },
        'tools.widgetCard1Title': {
            'pt-BR': 'Hero SaaS',
            'en-US': 'Hero SaaS',
            'es-ES': 'Hero SaaS',
            'fr-FR': 'Hero SaaS',
            'it-IT': 'Hero SaaS',
            'zh-CN': '英雄 SaaS',
            'ru-RU': 'Hero SaaS',
            'ar-SA': 'Hero SaaS',
            'hi-IN': 'हीरो सास'
        },
        'tools.widgetCard1SlotStrong': {
            'pt-BR': 'Canva / Hostinger',
            'en-US': 'Canva / Hostinger',
            'es-ES': 'Canva / Hostinger',
            'fr-FR': 'Canva / Hostinger',
            'it-IT': 'Canva / Hostinger',
            'zh-CN': 'Canva / Hostinger',
            'ru-RU': 'Canva / Hostinger',
            'ar-SA': 'كانفا / Hostinger',
            'hi-IN': 'कैनवा / होस्टिंगर'
        },
        'tools.widgetCard1SlotSpan': {
            'pt-BR': 'Banner grande ou vídeo incorporado apresentando o plano destaque.',
            'en-US': 'Large banner or embedded video featuring the highlight plan.',
            'es-ES': 'Banner grande o video incrustado que presenta el plan destacado.',
            'fr-FR': 'Grande bannière ou vidéo intégrée présentant le plan phare.',
            'it-IT': 'Banner grande o video incorporato che presenta il piano in evidenza.',
            'zh-CN': '大型横幅或嵌入式视频，展示亮点计划。',
            'ru-RU': 'Большой баннер или встроенное видео с презентацией основного плана.',
            'ar-SA': 'لافتة كبيرة أو فيديو مدمج يعرض الخطة المميزة.',
            'hi-IN': 'हाइलाइट प्लान को दर्शाने वाला बड़ा बैनर या एम्बेडेड वीडियो।'
        },
        'tools.widgetCard2Title': {
            'pt-BR': 'Comparativo rápido',
            'en-US': 'Quick comparison',
            'es-ES': 'Comparativa rápida',
            'fr-FR': 'Comparaison rapide',
            'it-IT': 'Confronto rapido',
            'zh-CN': '快速比较',
            'ru-RU': 'Быстрое сравнение',
            'ar-SA': 'مقارنة سريعة',
            'hi-IN': 'त्वरित तुलना'
        },
        'tools.widgetCard2SlotStrong': {
            'pt-BR': 'Tabela HTML',
            'en-US': 'HTML Table',
            'es-ES': 'Tabla HTML',
            'fr-FR': 'Tableau HTML',
            'it-IT': 'Tabella HTML',
            'zh-CN': 'HTML 表格',
            'ru-RU': 'HTML-таблица',
            'ar-SA': 'جدول HTML',
            'hi-IN': 'एचटीएमएल तालिका'
        },
        'tools.widgetCard2SlotSpan': {
            'pt-BR': 'Compare planos, bônus e prêmios físicos dos programas.',
            'en-US': 'Compare plans, bonuses and physical prizes of the programs.',
            'es-ES': 'Compara planes, bonificaciones y premios físicos de los programas.',
            'fr-FR': 'Comparez les plans, les bonus et les prix physiques des programmes.',
            'it-IT': 'Confronta piani, bonus e premi fisici dei programmi.',
            'zh-CN': '比较程序的计划、奖金和实物奖品。',
            'ru-RU': 'Сравните планы, бонусы и физические призы программ.',
            'ar-SA': 'قارن الخطط والمكافآت والجوائز المادية للبرامج.',
            'hi-IN': 'कार्यक्रमों के प्लान, बोनस और भौतिक पुरस्कारों की तुलना करें।'
        },
        'tools.widgetCard3Title': {
            'pt-BR': 'Widget lateral',
            'en-US': 'Sidebar widget',
            'es-ES': 'Widget lateral',
            'fr-FR': 'Widget latéral',
            'it-IT': 'Widget laterale',
            'zh-CN': '侧边栏小部件',
            'ru-RU': 'Боковой виджет',
            'ar-SA': 'أداة الشريط الجانبي',
            'hi-IN': 'साइडबार विजेट'
        },
        'tools.widgetCard3SlotStrong': {
            'pt-BR': 'VPNs',
            'en-US': 'VPNs',
            'es-ES': 'VPNs',
            'fr-FR': 'VPNs',
            'it-IT': 'VPNs',
            'zh-CN': 'VPN',
            'ru-RU': 'VPN',
            'ar-SA': 'VPNs',
            'hi-IN': 'वीपीएन'
        },
        'tools.widgetCard3SlotSpan': {
            'pt-BR': 'Ideal para códigos promocionais com contagem regressiva.',
            'en-US': 'Ideal for promotional codes with countdown.',
            'es-ES': 'Ideal para códigos promocionales con cuenta regresiva.',
            'fr-FR': 'Idéal pour les codes promotionnels avec compte à rebours.',
            'it-IT': 'Ideale per codici promozionali con conto alla rovescia.',
            'zh-CN': '非常适合带有倒计时的促销代码。',
            'ru-RU': 'Идеально подходит для промокодов с обратным отсчетом.',
            'ar-SA': 'مثالي للرموز الترويجية مع العد التنازلي.',
            'hi-IN': 'काउंटडाउन के साथ प्रचार कोड के लिए आदर्श।'
        },
        'tools.widgetCard4Title': {
            'pt-BR': 'Bloco de depoimentos',
            'en-US': 'Testimonial block',
            'es-ES': 'Bloque de testimonios',
            'fr-FR': 'Bloc de témoignages',
            'it-IT': 'Blocco di testimonianze',
            'zh-CN': '推荐块',
            'ru-RU': 'Блок отзывов',
            'ar-SA': 'كتلة الشهادات',
            'hi-IN': 'प्रशंसापत्र ब्लॉक'
        },
        'tools.widgetCard4SlotStrong': {
            'pt-BR': 'HTML custom',
            'en-US': 'Custom HTML',
            'es-ES': 'HTML personalizado',
            'fr-FR': 'HTML personnalisé',
            'it-IT': 'HTML personalizzato',
            'zh-CN': '自定义 HTML',
            'ru-RU': 'Пользовательский HTML',
            'ar-SA': 'HTML مخصص',
            'hi-IN': 'कस्टम एचटीएमएल'
        },
        'tools.widgetCard4SlotSpan': {
            'pt-BR': 'Insira reviews, logos de prêmios e badges oficiais.',
            'en-US': 'Insert reviews, award logos and official badges.',
            'es-ES': 'Inserta reseñas, logotipos de premios y insignias oficiales.',
            'fr-FR': 'Insérez des avis, des logos de récompenses et des badges officiels.',
            'it-IT': 'Inserisci recensioni, loghi di premi e badge ufficiali.',
            'zh-CN': '插入评论、奖项标志和官方徽章。',
            'ru-RU': 'Вставляйте отзывы, логотипы наград и официальные значки.',
            'ar-SA': 'أدخل المراجعات وشعارات الجوائز والشارات الرسمية.',
            'hi-IN': 'समीक्षाएं, पुरस्कार लोगो और आधिकारिक बैज डालें।'
        },
        'tools.seoNoteTitle': {
            'pt-BR': 'Otimização',
            'en-US': 'Optimization',
            'es-ES': 'Optimización',
            'fr-FR': 'Optimisation',
            'it-IT': 'Ottimizzazione',
            'zh-CN': '优化',
            'ru-RU': 'Оптимизация',
            'ar-SA': 'التحسين',
            'hi-IN': 'अनुकूलन'
        },
        'tools.seoNoteList1': {
            'pt-BR': 'Adicione FAQ sobre cada ferramenta (ex.: “Canva oferece certificado para afiliados?”).',
            'en-US': 'Add FAQ about each tool (e.g., “Does Canva offer affiliate certification?”).',
            'es-ES': 'Agrega preguntas frecuentes sobre cada herramienta (ej.: “¿Canva ofrece certificado para afiliados?”).',
            'fr-FR': 'Ajoutez une FAQ sur chaque outil (ex : « Canva propose-t-il une certification d\'affiliation ? »).',
            'it-IT': 'Aggiungi FAQ su ogni strumento (es: "Canva offre certificazione per affiliati?").',
            'zh-CN': '添加有关每个工具的常见问题解答（例如，“Canva 提供附属认证吗？”）。',
            'ru-RU': 'Добавьте FAQ по каждому инструменту (например: «Предлагает ли Canva сертификацию для аффилиатов?»).',
            'ar-SA': 'أضف أسئلة متكررة حول كل أداة (مثال: "هل تقدم Canva شهادة للشركات التابعة؟").',
            'hi-IN': 'प्रत्येक टूल के बारे में अक्सर पूछे जाने वाले प्रश्न जोड़ें (जैसे, "क्या कैनवा संबद्ध प्रमाणन प्रदान करता है?")।'
        },
        'tools.seoNoteList2': {
            'pt-BR': 'Use dados estruturados de “Product” quando o parceiro disponibilizar SKU.',
            'en-US': 'Use structured "Product" data when the partner provides SKU.',
            'es-ES': 'Usa datos estructurados de "Producto" cuando el socio proporcione SKU.',
            'fr-FR': 'Utilisez les données structurées "Produit" lorsque le partenaire fournit le SKU.',
            'it-IT': 'Utilizza i dati strutturati "Prodotto" quando il partner fornisce lo SKU.',
            'zh-CN': '当合作伙伴提供 SKU 时，使用结构化的“产品”数据。',
            'ru-RU': 'Используйте структурированные данные "Product", когда партнер предоставляет SKU.',
            'ar-SA': 'استخدم بيانات "المنتج" المنظمة عندما يوفر الشريك SKU.',
            'hi-IN': 'जब पार्टनर SKU प्रदान करे तो संरचित "उत्पाद" डेटा का उपयोग करें।'
        },
        'tools.seoNoteList3': {
            'pt-BR': 'Atualize mensalmente com novos prints das premiações físicas que você receber.',
            'en-US': 'Update monthly with new prints of the physical awards you receive.',
            'es-ES': 'Actualiza mensualmente con nuevas impresiones de los premios físicos que recibas.',
            'fr-FR': 'Mettez à jour mensuellement com de nouvelles impressions des récompenses physiques que vous recevez.',
            'it-IT': 'Aggiorna mensilmente con nuove stampe dei premi fisici che ricevi.',
            'zh-CN': '每月更新您收到的实物奖品的新照片。',
            'ru-RU': 'Ежемесячно обновляйте новыми снимками физических наград, которые вы получаете.',
            'ar-SA': 'قم بالتحديث شهريًا بصور جديدة للجوائز المادية التي تتلقاها.',
            'hi-IN': 'आपको मिलने वाले भौतिक पुरस्कारों के नए प्रिंट के साथ मासिक अपडेट करें।'
        },
        'login.pageTitle': {
            'pt-BR': 'Login - Wide Market',
            'en-US': 'Login - Wide Market',
            'es-ES': 'Login - Wide Market',
            'fr-FR': 'Connexion - Wide Market',
            'it-IT': 'Login - Wide Market',
            'zh-CN': '登录 - Wide Market',
            'ru-RU': 'Вход — Wide Market',
            'ar-SA': 'تسجيل الدخول - Wide Market',
            'hi-IN': 'लॉगिन - वाइड मार्केट'
        },
        'filters.country.uk': {
            'pt-BR': 'Reino Unido',
            'en-US': 'United Kingdom',
            'es-ES': 'Reino Unido',
            'fr-FR': 'Royaume-Uni',
            'it-IT': 'Regno Unito',
            'zh-CN': '英国',
            'ru-RU': 'Великобритания',
            'ar-SA': 'المملكة المتحدة',
            'hi-IN': 'यूनाइटेड किंगडम'
        },
        'filters.country.portugal': {
            'pt-BR': 'Portugal',
            'en-US': 'Portugal',
            'es-ES': 'Portugal',
            'fr-FR': 'Portugal',
            'it-IT': 'Portogallo',
            'zh-CN': '葡萄牙',
            'ru-RU': 'Португалия',
            'ar-SA': 'البرتغال',
            'hi-IN': 'पुर्तगाल'
        },
        'filters.country.germany': {
            'pt-BR': 'Alemanha',
            'en-US': 'Germany',
            'es-ES': 'Alemania',
            'fr-FR': 'Allemagne',
            'it-IT': 'Germania',
            'zh-CN': '德国',
            'ru-RU': 'Германия',
            'ar-SA': 'ألمانيا',
            'hi-IN': 'जर्मनी'
        },
        'filters.country.japan': {
            'pt-BR': 'Japão',
            'en-US': 'Japan',
            'es-ES': 'Japón',
            'fr-FR': 'Japon',
            'it-IT': 'Giappone',
            'zh-CN': '日本',
            'ru-RU': 'Япония',
            'ar-SA': 'اليابان',
            'hi-IN': 'जापान'
        },
        'filters.country.australia': {
            'pt-BR': 'Austrália',
            'en-US': 'Australia',
            'es-ES': 'Australia',
            'fr-FR': 'Australie',
            'it-IT': 'Australia',
            'zh-CN': '澳大利亚',
            'ru-RU': 'Австралия',
            'ar-SA': 'أستراليا',
            'hi-IN': 'ऑस्ट्रेलिया'
        }
    };

    let currentLanguage = detectLanguage();

    function detectLanguage() {
        const stored = getStoredLanguage();
        if (stored) return stored;

        const browserLangs = Array.isArray(navigator.languages) ? navigator.languages : [navigator.language];
        for (const lang of browserLangs) {
            const resolved = resolveLanguage(lang);
            if (resolved) return resolved;
        }
        return 'pt-BR';
    }

    function getStoredLanguage() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return resolveLanguage(saved);
        } catch {
            return null;
        }
    }

    function resolveLanguage(lang) {
        if (!lang) return null;
        const normalized = lang.toString();
        const exact = LANGUAGE_OPTIONS.find(option => option.code.toLowerCase() === normalized.toLowerCase());
        if (exact) return exact.code;

        const base = normalized.split('-')[0];
        const fallback = LANGUAGE_OPTIONS.find(option => option.code.toLowerCase().startsWith(base.toLowerCase()));
        return fallback ? fallback.code : null;
    }

    function saveLanguage(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            /* ignore storage issues */
        }
    }

    function updateHtmlLanguage() {
        const html = document.documentElement;
        html.lang = currentLanguage;
        html.dir = currentLanguage === 'ar-SA' ? 'rtl' : 'ltr';
    }

    function getDefaultTranslation(map) {
        return map['en-US'] || map['pt-BR'] || Object.values(map)[0] || '';
    }

    function interpolate(template, params = {}) {
        if (!template) return '';
        return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, token) => {
            const value = params[token];
            return value !== undefined ? value : '';
        });
    }

    function t(key, params = {}) {
        const pack = TRANSLATIONS[key];
        if (!pack) return key;

        const baseCode = currentLanguage.split('-')[0];
        const value = pack[currentLanguage] || pack[baseCode] || getDefaultTranslation(pack);
        return interpolate(value, params);
    }

    function parseParams(raw) {
        if (!raw) return {};
        try {
            return JSON.parse(raw);
        } catch {
            return {};
        }
    }

    function findNodes(scope, selector) {
        const nodes = [];
        if (scope && scope.nodeType === 1 && scope.matches(selector)) {
            nodes.push(scope);
        }
        scope.querySelectorAll(selector).forEach(node => nodes.push(node));
        return nodes;
    }

    function applyTextTranslations(scope) {
        findNodes(scope, '[data-i18n]').forEach(node => {
            const key = node.getAttribute('data-i18n');
            if (!key) return;
            const params = parseParams(node.getAttribute('data-i18n-params'));
            const translation = t(key, params);
            if (node.getAttribute('data-i18n-html') === 'true') {
                node.innerHTML = translation;
            } else {
                node.textContent = translation;
            }
        });
    }

    function datasetKeyFromSuffix(suffix) {
        return `i18n${suffix.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}`;
    }

    function applyAttributeTranslations(scope, suffix, attribute) {
        const selector = `[data-i18n-${suffix}]`;
        const datasetKey = datasetKeyFromSuffix(suffix);
        findNodes(scope, selector).forEach(node => {
            const key = node.dataset[datasetKey];
            if (!key) return;
            const params = parseParams(node.dataset[`${datasetKey}Params`]);
            node.setAttribute(attribute, t(key, params));
        });
    }

    function applyTranslations(root = document) {
        const scope = root || document;
        applyTextTranslations(scope);
        applyAttributeTranslations(scope, 'placeholder', 'placeholder');
        applyAttributeTranslations(scope, 'title', 'title');
        applyAttributeTranslations(scope, 'ariaLabel', 'aria-label');
    }

    function populateLanguageMenu() {
        const select = document.getElementById('language-select');
        if (!select) return;

        if (!select.dataset.i18nReady) {
            select.innerHTML = LANGUAGE_OPTIONS
                .map(option => `<option value="${option.code}">${option.label}</option>`)
                .join('');
            select.dataset.i18nReady = 'true';
            select.addEventListener('change', (event) => setLanguage(event.target.value));
        }

        select.value = currentLanguage;
    }

    function setLanguage(languageCode) {
        const resolved = resolveLanguage(languageCode) || 'pt-BR';
        if (resolved === currentLanguage) {
            populateLanguageMenu();
            return;
        }
        currentLanguage = resolved;
        saveLanguage(resolved);
        updateHtmlLanguage();
        applyTranslations();
        populateLanguageMenu();
        window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: currentLanguage } }));
    }

    function init() {
        updateHtmlLanguage();
        populateLanguageMenu();
        applyTranslations();
    }

    window.I18N = {
        t,
        applyTranslations,
        setLanguage,
        getCurrentLanguage: () => currentLanguage
    };

    document.addEventListener('DOMContentLoaded', init);

})();
