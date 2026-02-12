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

function handleAddFavourite(id) {
  addContactToFavoritesById(id)
  // renderContactDetail(selectedContact, true)
  renderFavoritesList(favorites)
}

function handleRemove(id) {
  removeFromContactById(id)
  renderContacts(contacts)
}

setInterval(handleRenderRecents, 3000)
renderContacts(contacts)
