import quotes from "./modules/quotes.js";
import {
  addToFavorites,
  removeFromFavorites,
  toggleFavoriteIcon
} from "./modules/favoritesHandler.js"

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');
const toggleFavoriteBtn = document.getElementById('make-fav');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex = -1;
let favorites = [];

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const currentQuote = quotes[currentQuoteIndex];

  quoteElement.textContent = currentQuote.text;
  quoteAuthorElement.textContent = currentQuote.author;
  generateBtn.classList.toggle('red-background');
  toggleFavoriteBtn.style.display = 'inline-block';

  const isFavorite = favorites.some(
    fav => fav.text === currentQuote.text && fav.author === currentQuote.author
  );

  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];

  const isFavorite = favorites.some(
    fav => fav.text === currentQuote.text && fav.author === currentQuote.author
  );

  if (isFavorite) {
    favorites = removeFromFavorites(currentQuote, favorites);
  } else {
    addToFavorites(currentQuote, favorites);
  }

  toggleFavoriteIcon(!isFavorite, toggleFavoriteBtn);
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
