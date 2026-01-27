function handleAddContact(name, surname, phonenumber) {
  addContact(name, surname, phonenumber)
  renderContactDetail({ name, surname, phonenumber })
  renderInputAddContact()
  renderAddContactToContacts(contacts)
}

function handleCall(phonenumber) {
  makePhoneCall(phonenumber)
  renderRecents(recents)
}

function handleRenderRecents() {
  renderRecents(recents)
}
function handleAddFavourite() {
  renderAddContactToContacts(favorites)
}

setInterval(handleRenderRecents, 3000)
