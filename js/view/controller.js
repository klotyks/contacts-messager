let editingContactId = null
function handleAddContact(name, surname, phonenumber) {
  addContact(name, surname, phonenumber)
  renderContactAdder()
  renderContacts(contacts)
}

// handleOpenContactEditing

// function handleSaveEditedContact(id) {
//   const contact = getContactById(id)
//   renderModal0EditContact(contact)
//   // renderContacts(contacts)
// }

// function handleCompleteEdit(name, surname, phonenumber) {
//   editingContactId = id
//   const contact = getContactyId(id)
//   saveEditedContact(name, surname, phonenumber)
//   renderContacts(contacts)
// }

function handleSaveEditedContact(id) {
  editingContactId = id
  const contact = getContactById(id)
  renderModal0EditContact(contact)
}

function handleCompleteEdit(name, surname, phonenumber) {
  saveEditedContact(editingContactId, name, surname, phonenumber)
  editingContactId = null
  renderContacts(contacts)
}

function handleOpenContactDetails(id) {
  selectContactById(id)
  const isFavorite = favorites.some(fav => fav.id === id)
  renderContactDetail(selectedContact, isFavorite)
}

function handleCall(phonenumber) {
  makePhoneCall(phonenumber)
  renderRecents(recents)
}

function handleUpdateRecents() {
  renderRecents(recents)
}

// догадайся как назвать
// function handleToggleFavorite(id) {
//   if (isFavoriteById(id)) removeFavoriteById(id)
//   else addFavoriteById(id)
//   renderFavoritesList(favorites)
//   renderContactDetail(selectedContact, isFavoriteById(id))
// }

function handleAddFavourite(id) {
  addFavoriteById(id)
  renderFavoritesList(favorites)
}

function handleRemoveFavorite(id) {
  removeFavoriteById(id)
  renderFavoritesList(favorites)
}

function handleRemove(id) {
  removeFromContactById(id)
  renderContacts(contacts)
}

setInterval(handleUpdateRecents, 3000)
renderContacts(contacts)
