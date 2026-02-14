function handleAddContact(name, surname, phonenumber) {
  addContact(name, surname, phonenumber)
  renderContactAdder()
  renderContacts(contacts)
}

function handleOpenDetails(id) {
  selectContactById(id)
  const isFavorite = favorites.some(fav => fav.id === id)
  renderContactDetail(selectedContact, isFavorite)
}

function handleCall(phonenumber) {
  makePhoneCall(phonenumber)
  renderRecents(recents)
}

function handleRenderRecents() {
  renderRecents(recents)
}

function handleToggleFavorite(id) {
  if (isFavoriteById(id)) removeFavoriteById(id)
  else addFavoriteById(id)
  renderFavoritesList(favorites)
  renderContactDetail(selectedContact, isFavoriteById(id))
}

// function handleAddFavourite(id) {
//   addContactToFavoritesById(id)
//   renderFavoritesList(favorites)
// }

// function handleRemoveFavorite(id) {
//   removeFromFavoritesById(id)
//   renderFavoritesList(favorites)
// }

function handleRemove(id) {
  removeFromContactById(id)
  renderContacts(contacts)
}

setInterval(handleRenderRecents, 3000)
renderContacts(contacts)
