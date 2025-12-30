(function () {
    'use strict';

    // Translations
    const translations = {
        'pt-BR': {
            'maintenance.title': '🚧 Em Construção 🚧',
            'maintenance.message1': 'Esta seção está atualmente em desenvolvimento.',
            'maintenance.message2': 'Volte mais tarde para ver o conteúdo completo.',
            'maintenance.button': 'OK',
            'maintenance.note': 'Desculpe pelo inconveniente.',
            'home.button': 'Início',
            'home.title': 'Welcome back, Student! 🎓',
            'home.subtitle': 'Seu caminho para a fluência continua aqui.',
            'home.next_lesson': 'Próxima Lição',
            'home.progress': 'Seu Progresso',
            'home.streak': 'Sua Ofensiva',
            'home.next_lesson_text': 'Unidade 1: Introdução ao Inglês',
            'home.resume_button': 'Começar meu aprendizado',
            'home.progress_percent': '% concluído',
            'home.streak_days': 'Dias seguidos!',
            'course.beginner': 'Começar do Zero',
            'course.intermediate': 'Nível Médio',
            'course.advanced': 'Nível Avançado',
            'course.interactive_reading': 'Leitura Interativa',
            'course.guided_pronunciation': 'Pronúncia Guiada',
            'course.vocabulary': 'Vocabulário',
            'course.writing_practice': 'Prática de Escrita',
            'course.dictionary': 'Dicionário',
            'course.certificate': 'Certificado',
            'ads.title': 'Anúncios',
            'services.nav.home': 'Página Inicial',
            'services.nav.settings': 'Configurações',
            // Begin from Zero Page
            'begin.title': 'Começar do Zero',
            'begin.subtitle': 'Inicie sua jornada de aprendizado de inglês desde o início.',
            'begin.module_nav': 'Navegação de Módulos',
            'begin.module_nav_desc': 'Clique em qualquer módulo para ir até ele',
            // Módulo 1
            'begin.module1.title': '📖 Módulo 1: Alfabeto e Sons',
            'begin.module1.objective': 'Objetivo:',
            'begin.module1.objective_desc': 'Aprenda as 26 letras do alfabeto inglês e seus sons. Domine as regras básicas de pronúncia.',
            // Módulo 2  
            'begin.module2.title': '👋 Módulo 2: Saudações e Apresentações',
            'begin.module2.objective_desc': 'Aprenda a cumprimentar pessoas, se apresentar e fazer perguntas simples.',
            // Módulo 3
            'begin.module3.title': '🔢 Módulo 3: Números e Tempo',
            'begin.module3.objective_desc': 'Aprenda números de 1-100, dias, meses e como dizer as horas em inglês.',
            // Módulo 4
            'begin.module4.title': '👨 Módulo 4: Verbo "To Be"',
            'begin.module4.objective_desc': 'Domine o verbo mais importante em inglês: TO BE (am, is, are).',
            // Módulo 5
            'begin.module5.title': '🏠 Módulo 5: Família e Casa',
            'begin.module5.objective_desc': 'Aprenda vocabulário sobre membros da família, cômodos e móveis.',
            // Módulo 6
            'begin.module6.title': '📅 Módulo 6: Rotinas Diárias e Atividades',
            // Módulo 7
            'begin.module7.title': '⌛ Módulo 7: Presente Simples',
            'begin.module7.grammar': 'Regras Gramaticais',
            'begin.module7.affirmative': 'Afirmativa:',
            'begin.module7.negative': 'Negativa:',
            'begin.module7.questions': 'Perguntas:',
            // Módulo 8
            'begin.module8.title': '👋 Módulo 8: Apresentando-se',
            'begin.module8.phrases': 'Frases Comuns'
        },
        'en-US': {
            'maintenance.title': '🚧 Under Construction 🚧',
            'maintenance.message1': 'This section is currently under development.',
            'maintenance.message2': 'Please check back later for the complete content.',
            'maintenance.button': 'OK',
            'maintenance.note': 'Sorry for the inconvenience.',
            'home.button': 'Home',
            'home.title': 'Welcome back, Student! 🎓',
            'home.subtitle': 'Your path to fluency continues here.',
            'home.next_lesson': 'Next Lesson',
            'home.progress': 'Your Progress',
            'home.streak': 'Your Streak',
            'home.next_lesson_text': 'Unit 1: Introduction to English',
            'home.resume_button': 'Start my learning',
            'home.progress_percent': '% completed',
            'home.streak_days': 'days in a row!',
            'course.beginner': 'Begin from Zero',
            'course.intermediate': 'Intermediate Level',
            'course.advanced': 'Advanced Level',
            'course.interactive_reading': 'Interactive Reading',
            'course.guided_pronunciation': 'Guided Pronunciation',
            'course.vocabulary': 'Vocabulary',
            'course.writing_practice': 'Writing Practice',
            'course.dictionary': 'Dictionary',
            'course.certificate': 'Certificate',
            'ads.title': 'Ads',
            'services.nav.home': 'Home',
            'services.nav.settings': 'Settings',
            // Begin from Zero Page
            'begin.title': 'Begin from Zero',
            'begin.subtitle': 'Start your English learning journey from the very beginning.',
            'begin.module_nav': 'Module Navigation',
            'begin.module_nav_desc': 'Click on any module to jump to it',
            // Module 1
            'begin.module1.title': '📖 Module 1: Alphabet & Sounds',
            'begin.module1.objective': 'Objective:',
            'begin.module1.objective_desc': 'Learn the 26 letters of the English alphabet and their sounds. Master basic pronunciation rules.',
            // Module 2
            'begin.module2.title': '👋 Module 2: Greetings & Introductions',
            'begin.module2.objective_desc': 'Learn how to greet people, introduce yourself, and ask simple questions.',
            // Module 3
            'begin.module3.title': '🔢 Module 3: Numbers & Time',
            'begin.module3.objective_desc': 'Learn numbers 1-100, days, months, and how to tell time in English.',
            // Module 4
            'begin.module4.title': '👨 Module 4: Verb "To Be"',
            'begin.module4.objective_desc': 'Master the most important verb in English: TO BE (am, is, are).',
            // Module 5
            'begin.module5.title': '🏠 Module 5: Family & Home',
            'begin.module5.objective_desc': 'Learn vocabulary about family members, rooms, and furniture.',
            // Module 6
            'begin.module6.title': '📅 Module 6: Daily Routines & Activities',
            // Module 7
            'begin.module7.title': '⌛ Module 7: Present Simple',
            'begin.module7.grammar': 'Grammar Rules',
            'begin.module7.affirmative': 'Affirmative:',
            'begin.module7.negative': 'Negative:',
            'begin.module7.questions': 'Questions:',
            // Module 8
            'begin.module8.title': '👋 Module 8: Introducing Yourself',
            'begin.module8.phrases': 'Common Phrases'
        },
        'es-ES': {
            'maintenance.title': '🚧 En Construcción 🚧',
            'maintenance.message1': 'Esta sección está actualmente en desarrollo.',
            'maintenance.message2': 'Por favor, vuelva más tarde para ver el contenido completo.',
            'maintenance.button': 'OK',
            'maintenance.note': 'Disculpe las molestias.',
            'home.button': 'Inicio',
            'home.title': 'Welcome back, Student! 🎓',
            'home.subtitle': 'Tu camino hacia la fluidez continúa aquí.',
            'home.next_lesson': 'Próxima Lección',
            'home.progress': 'Tu Progreso',
            'home.streak': 'Tu Racha',
            'home.next_lesson_text': 'Unidad 1: Introducción al Inglés',
            'home.resume_button': 'Comenzar mi aprendizaje',
            'home.progress_percent': '% completado',
            'home.streak_days': 'días seguidos!',
            'course.beginner': 'Comenzar desde Cero',
            'course.intermediate': 'Nivel Medio',
            'course.advanced': 'Nivel Avanzado',
            'course.interactive_reading': 'Lectura Interactiva',
            'course.guided_pronunciation': 'Pronunciación Guiada',
            'course.vocabulary': 'Vocabulario',
            'course.writing_practice': 'Práctica de Escritura',
            'course.dictionary': 'Diccionario',
            'course.certificate': 'Certificado',
            'ads.title': 'Anuncios',
            'services.nav.home': 'Inicio',
            'services.nav.settings': 'Configuraciones',
            // Página Begin from Zero
            'begin.title': 'Comenzar desde Cero',
            'begin.subtitle': 'Comienza tu viaje de aprendizaje de inglés desde el principio.',
            'begin.module_nav': 'Navegación de Módulos',
            'begin.module_nav_desc': 'Haz clic en cualquier módulo para ir a él',
            // Módulo 1
            'begin.module1.title': '📖 Módulo 1: Alfabeto y Sonidos',
            'begin.module1.objective': 'Objetivo:',
            'begin.module1.objective_desc': 'Aprende las 26 letras del alfabeto inglés y sus sonidos. Domina las reglas básicas de pronunciación.',
            // Módulo 2
            'begin.module2.title': '👋 Módulo 2: Saludos y Presentaciones',
            'begin.module2.objective_desc': 'Aprende a saludar a las personas, presentarte y hacer preguntas simples.',
            // Módulo 3
            'begin.module3.title': '🔢 Módulo 3: Números y Tiempo',
            'begin.module3.objective_desc': 'Aprende números del 1-100, días, meses y cómo decir la hora en inglés.',
            // Módulo 4
            'begin.module4.title': '👨 Módulo 4: Verbo "To Be"',
            'begin.module4.objective_desc': 'Domina el verbo más importante en inglés: TO BE (am, is, are).',
            // Módulo 5
            'begin.module5.title': '🏠 Módulo 5: Familia y Hogar',
            'begin.module5.objective_desc': 'Aprende vocabulario sobre miembros de la familia, habitaciones y muebles.',
            // Módulo 6
            'begin.module6.title': '📅 Módulo 6: Rutinas Diarias y Actividades',
            // Módulo 7
            'begin.module7.title': '⌛ Módulo 7: Presente Simple',
            'begin.module7.grammar': 'Reglas Gramaticales',
            'begin.module7.affirmative': 'Afirmativo:',
            'begin.module7.negative': 'Negativo:',
            'begin.module7.questions': 'Preguntas:',
            // Módulo 8
            'begin.module8.title': '👋 Módulo 8: Presentándose',
            'begin.module8.phrases': 'Frases Comunes'
        },
        'zh-CN': {
            'maintenance.title': '🚧 正在建设中 🚧',
            'maintenance.message1': '此部分目前正在开发中。',
            'maintenance.message2': '请稍后回来查看完整内容。',
            'maintenance.button': '确定',
            'maintenance.note': '抱歉给您带来的不便。',
            'home.button': '首页',
            'home.title': 'Welcome back, Student! 🎓',
            'home.subtitle': '您的流利之路在此继续。',
            'home.next_lesson': '下一课',
            'home.progress': '您的进度',
            'home.streak': '您的连胜',
            'home.next_lesson_text': '第1单元：英语介绍',
            'home.resume_button': '开始我的学习',
            'home.progress_percent': '% 已完成',
            'home.streak_days': '连续天数！',
            'course.beginner': '从零开始',
            'course.intermediate': '中级水平',
            'course.advanced': '高级水平',
            'course.interactive_reading': '互动阅读',
            'course.guided_pronunciation': '指导发音',
            'course.vocabulary': '词汇',
            'course.writing_practice': '写作练习',
            'course.dictionary': '词典',
            'course.certificate': '证书',
            'ads.title': '广告',
            'services.nav.home': '首页',
            'services.nav.settings': '设置',
            // Begin from Zero 页面
            'begin.title': '从零开始',
            'begin.subtitle': '从头开始你的英语学习之旅。',
            'begin.module_nav': '模块导航',
            'begin.module_nav_desc': '点击任何模块跳转至该模块',
            // 模块 1
            'begin.module1.title': '📖 模块 1：字母与发音',
            'begin.module1.objective': '目标：',
            'begin.module1.objective_desc': '学习26个英文字母及其发音。掌握基本发音规则。',
            // 模块 2
            'begin.module2.title': '👋 模块 2：问候与介绍',
            'begin.module2.objective_desc': '学习如何问候人、介绍自己和提出简单问题。',
            // 模块 3
            'begin.module3.title': '🔢 模块 3：数字与时间',
            'begin.module3.objective_desc': '学习1-100的数字、天数、月份以及如何用英语说时间。',
            // 模块 4
            'begin.module4.title': '👨 模块 4：动词 "To Be"',
            'begin.module4.objective_desc': '掌握英语中最重要的动词：TO BE (am, is, are)。',
            // 模块 5
            'begin.module5.title': '🏠 模块 5：家庭与家居',
            'begin.module5.objective_desc': '学习关于家庭成员、房间和家具的词汇。',
            // 模块 6
            'begin.module6.title': '📅 模块 6：日常作息与活动',
            // 模块 7
            'begin.module7.title': '⌛ 模块 7：一般现在时',
            'begin.module7.grammar': '语法规则',
            'begin.module7.affirmative': '肯定句：',
            'begin.module7.negative': '否定句：',
            'begin.module7.questions': '疑问句：',
            // 模块 8
            'begin.module8.title': '👋 模块 8：自我介绍',
            'begin.module8.phrases': '常用短语'
        }
    };

    // Simple i18n for Own Courses
    window.I18N = {
        currentLang: 'en-US',
        t: function(key) {
            const lang = this.currentLang;
            return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
        },
        setLanguage: function(lang) {
            this.currentLang = lang;
            console.log('Language set to:', lang);
            this.updatePage();
        },
        updatePage: function() {
            // For elements with data-i18n, set textContent
            const textElements = document.querySelectorAll('[data-i18n]');
            textElements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.textContent = this.t(key);
            });

            // For elements with data-i18n-title, set title attribute
            const titleElements = document.querySelectorAll('[data-i18n-title]');
            titleElements.forEach(el => {
                const key = el.getAttribute('data-i18n-title');
                el.setAttribute('title', this.t(key));
            });
        }
    };

})();
