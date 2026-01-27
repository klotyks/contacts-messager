function renderAddContactToContacts(contacts) {
  const elUlContacts = document.querySelector('#app-contacts')
  elUlContacts.innerHTML = ''
  for (const contact of contacts) {
    elUlContacts.innerHTML += generateContacts(contact)
  }
}

function renderRecents(recents) {
  const elDivRecent = document.querySelector('#app-recent-calls')
  elDivRecent.innerHTML = ''
  for (const recent of recents) {
    elDivRecent.innerHTML += generateRecents(recent)
  }
}

function renderInputAddContact() {
  const elInputName = document.querySelector('#firstName')
  const elInputSurname = document.querySelector('#secondName')
  const elInputPhonenumber = document.querySelector('#phone')
  elInputName.value = ''
  elInputSurname.value = ''
  elInputPhonenumber.value = ''
}

function renderContactDetail(contact) {
  const elDivContactDetail = document.querySelector('.contact-detail')
  const elH5Name = elDivContactDetail.querySelector('h5')
  const elB = elDivContactDetail.querySelector('b')
  elH5Name.textContent = contact.name + ' ' + contact.surname
  elB.textContent = contact.phonenumber
}
function renderAddContactToFavourites(favourites) {
  const elDivFavourite = document.querySelector('.favorite')
  elDivFavourite.innerHTML = ''
  for (const favourite of favourites) {
    elDivFavourite.innerHTML += generateFavourites(favourite)
  }
}

function renderRemoveFromContacts(argument) {
  // body
}
function renderRemoveFromFavourites(argument) {
  // body
}
