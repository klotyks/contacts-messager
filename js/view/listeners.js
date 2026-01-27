function onClickAddContact() {
  const name = document.querySelector('#firstName').value
  const surname = document.querySelector('#secondName').value
  const phonenumber = document.querySelector('#phone').value
  handleAddContact(name, surname, phonenumber)
}

function onClickCall() {
  const elLi = document.querySelector('.contact-detail li')
  const elB = elLi.querySelector('b')
  handleCall(elB.textContent)
}

function onClickStar() {
  const elSpan = document.querySelector(
    '#modal2 .top.teal .row .right-align span',
  )
  elSpan.classList.add('non-fill')
  handleAddFavourite()
}

const elButtonAddContact = document.querySelector('#appAddContact')
elButtonAddContact.onclick = onClickAddContact

const elLiCall = document.querySelector('.contact-detail li')
elLiCall.onclick = onClickCall

const elSpanStar = document.querySelector(
  '#modal2 .top.teal .row .right-align span',
)
elSpanStar.onclick = onClickStar
