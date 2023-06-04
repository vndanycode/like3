// Отримуємо посилання на елементи кнопки та лічильника лайків
const likeButton = document.getElementById('likeButton');
const likeCountElement = document.getElementById('likeCount');

// Отримуємо початкове значення кількості лайків з сервера або LocalStorage
let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;

// Встановлюємо початкову кількість лайків
likeCountElement.textContent = likeCount;

// Функція для збільшення кількості лайків при кліку на кнопку
function increaseLikeCount() {
  // Збільшуємо значення лічильника
  likeCount++;
  
  // Зберігаємо оновлене значення кількості лайків в LocalStorage
  localStorage.setItem('likeCount', likeCount);
  
  // Оновлюємо відображення кількості лайків
  likeCountElement.textContent = likeCount;
}

// Додаємо обробник події для кліку на кнопку
likeButton.addEventListener('click', increaseLikeCount);
