function onClickAddContact() {
  const name = document.querySelector('#firstName').value
  const surname = document.querySelector('#secondName').value
  const phonenumber = document.querySelector('#phone').value
  handleAddContact(name, surname, phonenumber)
}

// onClickOpenContactEditing
function onClickEditContact() {
  const elContactDetailId = document.querySelector('.contact-detail')
  const id = elContactDetailId.getAttribute('id')
  // handleOpenContactEditing
  handleSaveEditedContact(+id)
}

function onClickCompleteEdit() {
  const elForm = document.querySelector('#modal0 form')
  const name = document.querySelector('#firstNameEdit').value
  const surname = document.querySelector('#secondNameEdit').value
  const phonenumber = document.querySelector('#phoneEdit').value
  const id = elForm.dataset.id
  handleCompleteEdit(+id, name, surname, phonenumber)
}

function onClickCall() {
  const elLi = document.querySelector('.contact-detail li')
  const elB = elLi.querySelector('b')
  handleCall(elB.textContent)
}

function onClickStarAddToFavorites() {
  const elContactDetailId = document.querySelector('.contact-detail')
  const id = elContactDetailId.getAttribute('id')
  handleAddFavourite(+id)
}
function onClickStarRemoveFromFavorites() {
  const elContactDetailId = document.querySelector('.contact-detail')
  const id = elContactDetailId.getAttribute('id')
  handleRemoveFavorite(+id)
}

function onClickDeleteContact() {
  const elContactDetailId = document.querySelector('.contact-detail')
  const id = elContactDetailId.getAttribute('id')
  handleRemove(+id)
}

function onClickOpenDetails(e) {
  const id = e.currentTarget.id
  handleOpenContactDetails(+id)
}

const elButtonAddContact = document.querySelector('#appAddContact')
elButtonAddContact.onclick = onClickAddContact

const elLiCall = document.querySelector('.contact-detail li')
elLiCall.onclick = onClickCall

const elSpanDeleteContact = document.querySelector(
  '#modal2 .right-align span:nth-child(3)'
)
elSpanDeleteContact.onclick = onClickDeleteContact

const elSpanEditContact = document.querySelector(
  '#modal2 .right-align span:nth-child(2)'
)
elSpanEditContact.onclick = onClickEditContact

const elButtonCompleteEdit = document.querySelector('#appEditContact span')
elButtonCompleteEdit.onclick = onClickCompleteEdit
