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
  
  toggleFavoriteBtn.style.display = 'inline-block';

  // Проверка: в избранном ли текущая цитата — и отобразим нужную иконку
  const isFavorite = favorites.some(
    fav => fav.text === randomQuote.text && fav.author === randomQuote.author
  );

  toggleFavoriteBtn.classList.toggle('fa-solid', isFavorite);
  toggleFavoriteBtn.classList.toggle('fa-regular', !isFavorite);
}

function toggleFavoriteIcon(isFavorite){
  toggleFavoriteBtn.classList.toggle('fa-solid', !isFavorite);
  toggleFavoriteBtn.classList.toggle('fa-regular', isFavorite);
}


function hideFavCard(currentQuote){
  favorites.push(currentQuote);
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];

  const isFavorite = favorites.some(
    fav => fav.text === currentQuote.text && fav.author === currentQuote.author
  );

  if (isFavorite) {
    favorites = favorites.filter(
      fav => fav.text !== currentQuote.text || fav.author !== currentQuote.author
    );
  } else {
    hideFavCard(currentQuote);
  }

  // Меняем иконку на кнопке
  toggleFavoriteIcon(isFavorite)

  updateFavorites();
}

function updateFavorites() {
  favoritesContainer.innerHTML = '';

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
