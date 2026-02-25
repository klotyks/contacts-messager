function renderContacts(contacts) {
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

function renderContactAdder() {
  const elInputName = document.querySelector('#firstName')
  const elInputSurname = document.querySelector('#secondName')
  const elInputPhonenumber = document.querySelector('#phone')
  elInputName.value = ''
  elInputSurname.value = ''
  elInputPhonenumber.value = ''
}

function renderContactDetail(contact, isFav) {
  const elDivContactDetail = document.querySelector('.contact-detail')
  const elH5Name = elDivContactDetail.querySelector('h5')
  const elB = elDivContactDetail.querySelector('b')
  elDivContactDetail.setAttribute('id', contact.id)
  elH5Name.textContent = contact.name + ' ' + contact.surname
  elB.textContent = contact.phonenumber
  const elSpanStar = document.querySelector('#modal2 .right-align span')
  if (isFav) {
    elSpanStar.classList.remove('non-fill')
    elSpanStar.onclick = onClickStarRemoveFromFavorites
  } else {
    elSpanStar.classList.add('non-fill')
    elSpanStar.onclick = onClickStarAddToFavorites
  }
}

function renderModal0EditContact(contact) {
  const elFirstName = document.querySelector('#firstNameEdit')
  const elSecondName = document.querySelector('#secondNameEdit')
  const elPhone = document.querySelector('#phoneEdit')
  elFirstName.value = contact.name || ''
  elSecondName.value = contact.surname || ''
  elPhone.value = contact.phonenumber || ''
  requestAnimationFrame(() => {
    elFirstName.focus()
    elSecondName.focus()
    elPhone.focus()
  })
}

function renderFavoritesList(favorites) {
  const elDivFavourite = document.querySelector('.favorite')
  elDivFavourite.innerHTML = ''
  for (const favorite of favorites) {
    elDivFavourite.innerHTML += generateFavourites(favorite)
  }
}

// function renderOpenDetails(nameSurname, phone) {
//   const nameAndSurname = document.querySelector('#modal2 h5')
//   const phonenumber = document.querySelector('#modal2 b')
//   nameAndSurname.textContent = nameSurname
//   phonenumber.textContent = phone
// }

function renderRemoveFromContacts(argument) {}
function renderRemoveFromFavourites(argument) {
  // body
}
