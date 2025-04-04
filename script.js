import quotes from "./modules/quotes.js";

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');
const toggleFavoriteBtn = document.getElementById('make-fav');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex = -1;
let favorites = [];

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { text, author } = randomQuote;

  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  generateBtn.classList.toggle('red-background');
  
  // После генерации новой цитаты сбрасываем текст на кнопке
  toggleFavoriteBtn.textContent = 'Add to fav';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  
  // Проверяем, есть ли уже цитата в избранных
  const isFavorite = favorites.some(fav => fav.text === currentQuote.text && fav.author === currentQuote.author);

  if (isFavorite) {
    // Убираем из избранных
    favorites = favorites.filter(fav => fav.text !== currentQuote.text || fav.author !== currentQuote.author);
    
    // Меняем текст на кнопке
    toggleFavoriteBtn.textContent = 'Add to fav';  // Меняем текст на 'Add to fav'
  } else {
    // Добавляем в избранные
    favorites.push(currentQuote);

    // Меняем текст на кнопке
    toggleFavoriteBtn.textContent = 'Remove from fav';  // Меняем текст на 'Remove from fav'
  }

  // Обновляем отображение избранных цитат
  updateFavorites();
}

function updateFavorites() {
  favoritesContainer.innerHTML = ''; // Очищаем контейнер перед обновлением

  favorites.forEach(fav => {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
      <p>${fav.text}</p>
      <p class="author">${fav.author}</p>
    `;
    favoritesContainer.appendChild(favoriteCard);
  });
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
