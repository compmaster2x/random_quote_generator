function addToFavorites(currentQuote, favorites) {
    favorites.push(currentQuote);
  }
  
  function removeFromFavorites(currentQuote, favorites) {
    return favorites.filter(
      fav => fav.text !== currentQuote.text || fav.author !== currentQuote.author
    );
  }
  
  function toggleFavoriteIcon(isFavorite, toggleFavoriteBtn) {
    toggleFavoriteBtn.classList.toggle('fa-solid', isFavorite);
    toggleFavoriteBtn.classList.toggle('fa-regular', !isFavorite);
  }
  
  export {
    toggleFavoriteIcon,
    addToFavorites,
    removeFromFavorites
  };
  