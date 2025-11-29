// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const bookingBtn = document.getElementById('bookingBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    const mainImage = document.getElementById('mainImage');

    // Ждем полной загрузки главного изображения
    if (mainImage.complete) {
        // Если изображение уже загружено (из кеша)
        mainImage.classList.add('loaded');
    } else {
        // Ждем загрузки изображения
        mainImage.addEventListener('load', function() {
            mainImage.classList.add('loaded');
        });
        
        // На случай ошибки загрузки
        mainImage.addEventListener('error', function() {
            console.log('Ошибка загрузки изображения');
            // Можно добавить fallback изображение
        });
    }

    // Проверяем, что элементы существуют
    if (!bookingBtn || !modalOverlay || !closeModal) {
        console.error('Не найдены необходимые элементы DOM');
        return;
    }

    // Открытие модального окна
    bookingBtn.addEventListener('click', function() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Закрытие по клику на оверлей
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});