/**
 * courses.js - Página de cursos com filtros, avaliações e comentários
 */

const CoursesPage = (() => {
    const REVIEW_STORAGE_KEY = 'wide_market_course_reviews_v1';
    const courseCatalog = [
        {
            id: 'python-completo',
            titleKey: 'courses.data.pythonCompleto.title',
            descriptionKey: 'courses.data.pythonCompleto.description',
            instructorKey: 'courses.data.pythonCompleto.instructor',
            cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
            level: 'beginner',
            durationHours: 42,
            lessons: 210,
            students: 185000,
            price: 39.9,
            priceType: 'paid',
            badge: 'bestseller',
            rating: 4.8,
            ratingCount: 42000,
            lastUpdate: '2025-10-01',
            keywords: ['iniciante', 'fundamentos', 'poo', 'algoritmos', 'beginner', 'zero']
        },
        {
            id: 'python-automacao',
            titleKey: 'courses.data.pythonAutomacao.title',
            descriptionKey: 'courses.data.pythonAutomacao.description',
            instructorKey: 'courses.data.pythonAutomacao.instructor',
            cover: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80',
            level: 'intermediate',
            durationHours: 18,
            lessons: 95,
            students: 82000,
            price: 0,
            priceType: 'free',
            badge: 'updated',
            rating: 4.7,
            ratingCount: 15500,
            lastUpdate: '2025-09-15',
            keywords: ['automacao', 'selenium', 'scrapy', 'bot', 'automation']
        },
        {
            id: 'python-dados',
            titleKey: 'courses.data.pythonDados.title',
            descriptionKey: 'courses.data.pythonDados.description',
            instructorKey: 'courses.data.pythonDados.instructor',
            cover: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a0b?auto=format&fit=crop&w=900&q=80',
            level: 'intermediate',
            durationHours: 28,
            lessons: 140,
            students: 132000,
            price: 59.9,
            priceType: 'paid',
            badge: 'bestseller',
            rating: 4.9,
            ratingCount: 36500,
            lastUpdate: '2025-07-20',
            keywords: ['dados', 'data science', 'pandas', 'numpy', 'analytics']
        },
        {
            id: 'python-fastapi',
            titleKey: 'courses.data.pythonFastapi.title',
            descriptionKey: 'courses.data.pythonFastapi.description',
            instructorKey: 'courses.data.pythonFastapi.instructor',
            cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
            level: 'advanced',
            durationHours: 22,
            lessons: 110,
            students: 46000,
            price: 44.9,
            priceType: 'paid',
            badge: 'updated',
            rating: 4.6,
            ratingCount: 9800,
            lastUpdate: '2025-08-05',
            keywords: ['api', 'fastapi', 'backend', 'rest', 'web']
        },
        {
            id: 'python-financas',
            titleKey: 'courses.data.pythonFinancas.title',
            descriptionKey: 'courses.data.pythonFinancas.description',
            instructorKey: 'courses.data.pythonFinancas.instructor',
            cover: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
            level: 'intermediate',
            durationHours: 16,
            lessons: 80,
            students: 67000,
            price: 29.9,
            priceType: 'paid',
            badge: 'new',
            rating: 4.5,
            ratingCount: 9100,
            lastUpdate: '2025-11-10',
            keywords: ['financas', 'quant', 'investimentos', 'trading', 'fintech']
        },
        {
            id: 'python-tensorflow',
            titleKey: 'courses.data.pythonTensorflow.title',
            descriptionKey: 'courses.data.pythonTensorflow.description',
            instructorKey: 'courses.data.pythonTensorflow.instructor',
            cover: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=900&q=80',
            level: 'advanced',
            durationHours: 34,
            lessons: 160,
            students: 54000,
            price: 64.9,
            priceType: 'paid',
            badge: 'bestseller',
            rating: 4.9,
            ratingCount: 22100,
            lastUpdate: '2025-06-30',
            keywords: ['machine learning', 'ml', 'ia', 'deep learning', 'tensor']
        }
    ];

    const state = {
        filters: { search: '', level: '', duration: '', price: '', rating: '' },
        filtered: [...courseCatalog],
        openPanels: new Set(),
        grid: null
    };

    const translate = (key, params = {}, fallback = '') => {
        let actualParams = params;
        let actualFallback = fallback;
        if (typeof params === 'string' || params === undefined) {
            actualFallback = typeof params === 'string' ? params : fallback;
            actualParams = {};
        }
        try {
            return window.I18N ? I18N.t(key, actualParams) : (actualFallback || key);
        } catch {
            return actualFallback || key;
        }
    };

    const formatNumber = (value, options = {}) => {
        try {
            const locale = window.I18N && I18N.getCurrentLanguage ? I18N.getCurrentLanguage() : undefined;
            return new Intl.NumberFormat(locale, options).format(value);
        } catch {
            return value;
        }
    };

    const formatCurrency = (value) => {
        if (!value) return translate('courses.card.free', {}, 'Gratuito');
        return formatNumber(value, { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    };

    const formatDate = (date) => {
        try {
            const locale = window.I18N && I18N.getCurrentLanguage ? I18N.getCurrentLanguage() : undefined;
            return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
        } catch {
            return date.toLocaleDateString();
        }
    };

    const formatFullDate = (date) => {
        try {
            const locale = window.I18N && I18N.getCurrentLanguage ? I18N.getCurrentLanguage() : undefined;
            return new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
        } catch {
            return date.toLocaleDateString();
        }
    };

    const getText = (key) => translate(key, {}, key);

    const getReviews = () => {
        try {
            return JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY) || '{}');
        } catch {
            return {};
        }
    };

    const saveReviews = (reviews) => {
        localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
    };

    const getCourseReviews = (courseId) => {
        const reviews = getReviews();
        return reviews[courseId] || [];
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalf = rating - fullStars >= 0.5;
        let stars = '★'.repeat(fullStars);
        if (hasHalf && stars.length < 5) {
            stars += '☆';
        }
        while (stars.length < 5) {
            stars += '☆';
        }
        return stars;
    };

    const getDurationCategory = (hours) => {
        if (hours <= 10) return 'short';
        if (hours <= 30) return 'medium';
        return 'long';
    };

    const matchesFilters = (course) => {
        const { search, level, duration, price, rating } = state.filters;
        const localizedTitle = getText(course.titleKey).toLowerCase();
        const localizedDescription = getText(course.descriptionKey).toLowerCase();

        if (search) {
            const normalized = search.toLowerCase();
            const keywordsMatch = course.keywords.some(keyword => keyword.includes(normalized));
            if (!localizedTitle.includes(normalized) && !localizedDescription.includes(normalized) && !keywordsMatch) {
                return false;
            }
        }

        if (level && course.level !== level) {
            return false;
        }

        if (duration) {
            const durationCategory = getDurationCategory(course.durationHours);
            if (durationCategory !== duration) {
                return false;
            }
        }

        if (price) {
            if (price === 'free' && course.priceType !== 'free') return false;
            if (price === 'paid' && course.priceType !== 'paid') return false;
        }

        if (rating) {
            if (course.rating < parseFloat(rating)) return false;
        }

        return true;
    };

    const getAggregatedRating = (course) => {
        const persistedReviews = getCourseReviews(course.id);
        const userSum = persistedReviews.reduce((sum, review) => sum + review.rating, 0);
        const totalReviews = course.ratingCount + persistedReviews.length;
        const totalScore = (course.rating * course.ratingCount) + userSum;
        const average = totalReviews ? (totalScore / totalReviews) : course.rating;

        return {
            average: Math.min(5, Number(average.toFixed(1))),
            totalReviews,
            userReviews: persistedReviews
        };
    };

    const renderReviewList = (courseId, userReviews) => {
        if (!userReviews.length) {
            return `<div class="review-empty" data-i18n="courses.review.none">${translate('courses.review.none')}</div>`;
        }

        return userReviews.map(review => {
            const publishedText = translate('courses.review.published', { date: formatFullDate(new Date(review.createdAt)) });
            return `
            <div class="review-item">
                <strong>${review.author || translate('courses.review.anonymous')}</strong>
                <div class="rating-badge">
                    <span>${review.rating.toFixed(1)}</span>
                    <span class="rating-stars">${renderStars(review.rating)}</span>
                </div>
                <p>${review.comment}</p>
                <div class="review-meta">${publishedText}</div>
            </div>
        `;
        }).join('');
    };

    const renderCourseCard = (course) => {
        const { average, totalReviews, userReviews } = getAggregatedRating(course);
        const badgeLabel = course.badge ? translate(`courses.badge.${course.badge}`) : '';
        const studentsText = translate('courses.card.students', { count: formatNumber(course.students) });
        const hoursText = translate('courses.card.hours', { count: formatNumber(course.durationHours) });
        const lessonsText = translate('courses.card.lessons', { count: formatNumber(course.lessons) });
        const updatedText = translate('courses.card.updated', { date: formatDate(new Date(course.lastUpdate)) });
        const reviewCountText = translate('courses.review.countLabel', { count: formatNumber(totalReviews) });
        const isPanelOpen = state.openPanels.has(course.id);

        return `
            <article class="course-card" data-course-id="${course.id}">
                <img src="${course.cover}" alt="${getText(course.titleKey)}" class="course-cover">
                <div class="course-body">
                    ${badgeLabel ? `<span class="badge ${course.badge}">${badgeLabel}</span>` : ''}
                    <h3 class="course-title">${getText(course.titleKey)}</h3>
                    <p class="course-instructor">${getText(course.instructorKey)}</p>
                    <p class="course-description">${getText(course.descriptionKey)}</p>
                    <div class="course-meta">
                        <span class="rating-badge">
                            <span>${average.toFixed(1)}</span>
                            <span class="rating-stars">${renderStars(average)}</span>
                            <span>${reviewCountText}</span>
                        </span>
                        <span>👨‍🎓 ${studentsText}</span>
                        <span>⏱ ${hoursText}</span>
                        <span>📚 ${lessonsText}</span>
                        <span>🗓 ${updatedText}</span>
                    </div>
                    <div class="course-price">${formatCurrency(course.price)}</div>
                    <div class="course-actions">
                        <button class="btn-primary" type="button" data-course-review-toggle="${course.id}" data-i18n="${isPanelOpen ? 'courses.card.closeReviews' : 'courses.card.reviewCta'}">
                            ${translate(isPanelOpen ? 'courses.card.closeReviews' : 'courses.card.reviewCta')}
                        </button>
                        <button class="btn-outline" type="button" data-i18n="courses.card.viewDetails">${translate('courses.card.viewDetails')}</button>
                    </div>
                </div>
                <div class="review-panel" data-review-panel="${course.id}" ${isPanelOpen ? '' : 'hidden'}>
                    <h4 data-i18n="courses.review.title">${translate('courses.review.title')}</h4>
                    <form class="review-form" data-course-form="${course.id}">
                        <label for="rating-${course.id}" data-i18n="courses.review.ratingLabel">${translate('courses.review.ratingLabel')}</label>
                        <select id="rating-${course.id}" class="js-review-rating">
                            <option value="" data-i18n="courses.review.ratingPlaceholder">${translate('courses.review.ratingPlaceholder')}</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>

                        <label for="name-${course.id}" data-i18n="courses.review.nameLabel">${translate('courses.review.nameLabel')}</label>
                        <input type="text" id="name-${course.id}" class="js-review-name" data-i18n-placeholder="courses.review.namePlaceholder" placeholder="${translate('courses.review.namePlaceholder')}">

                        <label for="comment-${course.id}" data-i18n="courses.review.commentLabel">${translate('courses.review.commentLabel')}</label>
                        <textarea id="comment-${course.id}" class="js-review-comment" data-i18n-placeholder="courses.review.commentPlaceholder" placeholder="${translate('courses.review.commentPlaceholder')}"></textarea>

                        <button type="submit" class="btn-primary" data-i18n="courses.review.submit">${translate('courses.review.submit')}</button>
                        <div class="review-message" data-review-message="${course.id}"></div>
                    </form>
                    <h4 data-i18n="courses.review.listTitle">${translate('courses.review.listTitle')}</h4>
                    <div class="review-list" data-review-list="${course.id}">
                        ${renderReviewList(course.id, userReviews)}
                    </div>
                </div>
            </article>
        `;
    };

    const renderCourses = (courses) => {
        if (!state.grid) return;

        if (!courses.length) {
            state.grid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🎓</div>
                    <p data-i18n="courses.empty">${translate('courses.empty')}</p>
                </div>
            `;
            if (window.I18N) I18N.applyTranslations(state.grid);
            return;
        }

        state.grid.innerHTML = courses.map(renderCourseCard).join('');
        if (window.I18N) I18N.applyTranslations(state.grid);

        // Atualiza mensagens após re-render
        courses.forEach(course => {
            const reviewList = state.grid.querySelector(`[data-review-list="${course.id}"]`);
            if (reviewList && window.I18N) {
                I18N.applyTranslations(reviewList);
            }
        });
    };

    const applyFilters = () => {
        const filtered = courseCatalog.filter(matchesFilters);
        state.filtered = filtered;
        renderCourses(filtered);
    };

    const handleFilterChange = (event) => {
        const target = event.target;
        const filterKey = target.dataset.courseFilter;
        if (!filterKey) return;

        const value = target.value.trim();
        state.filters[filterKey] = value;

        if (filterKey === 'search') {
            state.filters.search = value;
        }

        applyFilters();
    };

    const togglePanel = (courseId) => {
        if (state.openPanels.has(courseId)) {
            state.openPanels.delete(courseId);
        } else {
            state.openPanels.add(courseId);
        }
        renderCourses(state.filtered);
    };

    const showMessage = (courseId, message, isSuccess) => {
        const container = state.grid?.querySelector(`[data-review-message="${courseId}"]`);
        if (!container) return;
        container.textContent = message;
        container.style.color = isSuccess ? '#0f5132' : '#842029';
        container.style.background = isSuccess ? '#d1e7dd' : '#f8d7da';
        container.style.border = `1px solid ${isSuccess ? '#badbcc' : '#f5c2c7'}`;
        container.style.padding = '10px';
        container.style.borderRadius = '6px';
    };

    const handleGridClick = (event) => {
        const toggleButton = event.target.closest('[data-course-review-toggle]');
        if (toggleButton) {
            const courseId = toggleButton.dataset.courseReviewToggle;
            togglePanel(courseId);
        }
    };

    const handleReviewSubmit = (event) => {
        const form = event.target.closest('form[data-course-form]');
        if (!form) return;
        event.preventDefault();

        const courseId = form.dataset.courseForm;
        const rating = Number(form.querySelector('.js-review-rating').value);
        const comment = form.querySelector('.js-review-comment').value.trim();
        const nameInput = form.querySelector('.js-review-name');
        const customName = nameInput?.value.trim();

        if (!rating) {
            showMessage(courseId, translate('courses.review.errorRating'), false);
            return;
        }

        if (comment.length < 10) {
            showMessage(courseId, translate('courses.review.errorComment'), false);
            return;
        }

        const reviews = getReviews();
        const author = customName || (window.Auth && Auth.getCurrentUser()?.name) || translate('courses.review.anonymous');
        const newReview = {
            id: Date.now().toString(),
            rating,
            comment,
            author,
            createdAt: new Date().toISOString()
        };

        const existing = reviews[courseId] || [];
        reviews[courseId] = [newReview, ...existing].slice(0, 25);
        saveReviews(reviews);

        form.reset();
        showMessage(courseId, translate('courses.review.success'), true);
        state.openPanels.add(courseId);
        renderCourses(state.filtered);
    };

    const bindFilters = () => {
        document.querySelectorAll('[data-course-filter]').forEach(element => {
            const eventName = element.tagName === 'INPUT' ? 'input' : 'change';
            element.addEventListener(eventName, handleFilterChange);
        });
    };

    const init = () => {
        state.grid = document.getElementById('courses-grid');
        if (!state.grid) return;

        bindFilters();
        renderCourses(courseCatalog);

        state.grid.addEventListener('click', handleGridClick);
        state.grid.addEventListener('submit', handleReviewSubmit);
        window.addEventListener('languagechange', () => {
            renderCourses(state.filtered);
        });
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', CoursesPage.init);

