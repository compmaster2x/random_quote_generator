import quotes from "./modules/quotes.js";

  
  const quoteElement = document.getElementById('quote');
  const generateBtn = document.getElementById('generate-btn');
  const quoteAuthorElement = document.getElementById('quote-author')
  const toggleFavoriteBtn = document.getElementById('make-fav')

  let currentQuoteIndex


  function generateRandomQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[currentQuoteIndex];
    const {text, author}  = randomQuote
    quoteElement.textContent = text
    quoteAuthorElement.textContent = author
  }

  function toggleFavorite(){
    const currentQuote= quotes[currentQuoteIndex]
    currentQuote.isFavorite = !currentQuote.isFavorite
  }
  
  generateBtn.addEventListener('click', generateRandomQuote);
  toggleFavoriteBtn.addEventListener('click', toggleFavorite)