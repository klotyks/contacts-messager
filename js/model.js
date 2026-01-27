const favorites = []
const recents = []
const contacts = []
let selectedContact = null

function createContact(name, surname, phonenumber) {
  return {
    id: Math.floor(Math.random() * 10000000000000),
    name: name,
    surname: surname,
    phonenumber: phonenumber,
  }
}

function createRecent(phonenumber) {
  return {
    phonenumber: phonenumber,
    timestamp: Date.now(),
  }
}

function addContact(name, surname, phonenumber) {
  const contact = createContact(name, surname, phonenumber)
  contacts.push(contact)
}

function addFavorite(name, surname) {
  const contact = createContact(name, surname)

  let alreadyInFavorites = false

  for (const fav of favorites) {
    if (fav.id === id) {
      alreadyInFavorites = true
    }
  }
  if (!alreadyInFavorites) {
    favorites.push(contact)
    console.log(`Контакт ${name} ${surname} добавлен в избранное!`)
  } else {
    console.log(`Контакт ${name} ${surname} уже есть в избранном.`)
  }
}

function removeFromFavorites(id) {
  const index = favorites.findIndex(fav => fav.id === id)
  if (index > -1) {
    favorites.splice(index, 1)
  }
}

function removeFromContact(id) {
  const index = contacts.findIndex(con => con.id === id)
  if (index > -1) {
    contacts.splice(index, 1)
  }
}

function findContact(searchText) {
  let props = ['name', 'surname']
  return contacts.filter(contact =>
    props.some(p => contact[p].includes(searchText)),
  )
}

function selectContactById(id) {
  selectedContact = contacts.find(contact => contact.id === id)
}

function makePhoneCall(phonenumber) {
  const recent = createRecent(phonenumber)
  recents.push(recent)
}

function howLongAgo(milSec) {
  const seconds = Math.floor((Date.now() - milSec) / 1000)
  if (seconds < 60) return seconds
}
// addContact('Vasya', 'Firma', 12393)
// addContact('Petya', 'Golem', 12393)

// contacts
// console.log(findContact('Go'))
// addFavorite('Vasya', 'F', 12393)
// favorites
// removeFromFavorites(12393)
// favorites
