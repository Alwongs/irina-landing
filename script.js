// Получаем элементы
const bookingBtn = document.getElementById('bookingBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

// Открытие модального окна
bookingBtn.addEventListener('click', function() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
});

// Закрытие модального окна
closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Восстанавливаем скролл
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