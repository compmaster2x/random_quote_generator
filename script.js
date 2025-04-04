import quotes from "./modules/quotes.js";

  
  const quoteElement = document.getElementById('quote');
  const generateBtn = document.getElementById('generate-btn');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.innerHTML = `${randomQuote.text}  <br>  ${randomQuote.author}` ;
    

  }
  
  generateBtn.addEventListener('click', generateRandomQuote);
  