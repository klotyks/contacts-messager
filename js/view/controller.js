function handleAddContact(name, surname, phonenumber) {
  addContact(name, surname, phonenumber)
  renderInputAddContact()
  renderContacts(contacts)
}

function handleOpenDetails(id) {
  selectContactById(id)
  renderContactDetail(selectedContact)
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
  renderAddContactToFavourites(favorites)
}

function handleRemove(id) {
  removeFromContactById(id)
  renderContacts(contacts)
}

setInterval(handleRenderRecents, 3000)

handleAddContact('Vasya', 'Firma', '12393')
