function addToFavorites(currentQuote, favorites) {
  favorites.push(currentQuote);
  return favorites;
}

function removeFromFavorites(currentQuote, favorites) {
  return favorites.filter(
    fav => fav.text !== currentQuote.text || fav.author !== currentQuote.author
  );
}

function showToggleFavB(btn){
  btn.style.display = 'inline-block';
}

function hideToggleFavB(btn){
  btn.style.display = 'none';
}

function toggleFavoriteIcon(isFavorite, toggleFavoriteBtn) {
  toggleFavoriteBtn.classList.toggle('fa-solid', isFavorite);
  toggleFavoriteBtn.classList.toggle('fa-regular', !isFavorite);
}

export {
  toggleFavoriteIcon,
  addToFavorites,
  removeFromFavorites,
  showToggleFavB,
  hideToggleFavB
};
