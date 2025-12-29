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
            'ads.title': 'Anúncios'
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
            'ads.title': 'Ads'
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
            'ads.title': 'Anuncios'
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
            'ads.title': '广告'
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
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.textContent = this.t(key);
            });
        }
    };

})();
