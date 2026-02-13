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
  const isFavorite = favorites.some(f => f.id === id)

  if (isFavorite) {
    favorites = favorites.filter(f => f.id !== id)
  } else {
    const contact = contacts.find(c => c.id === id)
    if (contact) favorites.push(contact)
    else return
  }

  renderFavoritesList(favorites)

  if (selectedContact?.id === id) {
    renderContactDetail(
      selectedContact,
      favorites.some(f => f.id === id),
    )
  }
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
