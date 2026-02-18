let favorites = []
const recents = []
const contacts = []
let selectedContact = null

function createContact(name, surname, phonenumber) {
  return {
    id: Math.floor(Math.random() * 100000),
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

function editContact(id, name, surname, phonenumber) {
  const contact = contacts.find(c => c.id === id)
  console.log(id)
  if (!contact) return
  console.log(id)
  contact.name = name
  contact.surname = surname
  contact.phonenumber = phonenumber
}

function addContactToFavoritesById(id) {
  if (favorites.find(c => c.id === id)) return
  const findedContact = contacts.find(c => c.id === id)
  favorites.push(findedContact)

  // let alreadyInFavorites = false

  // for (const fav of favorites) {
  //   if (fav.id === id) {
  //     alreadyInFavorites = true
  //   }
  // }
  // if (!alreadyInFavorites) {
  //   favorites.push(contact)
  //   console.log(`Контакт ${name} ${surname} добавлен в избранное!`)
  // } else {
  //   console.log(`Контакт ${name} ${surname} уже есть в избранном.`)
  // }
}

function addFavoriteById(id) {
  const contact = contacts.find(c => c.id === id)
  if (contact && !isFavoriteById(id)) favorites.push(contact)
}
function removeFavoriteById(id) {
  favorites = favorites.filter(f => f.id !== id)
}
function isFavoriteById(id) {
  return favorites.some(f => f.id === id)
}

// function removeFromFavoritesById(id) {
//   const index = favorites.findIndex(fav => fav.id === id)
//   if (index > -1) {
//     favorites.splice(index, 1)
//   }
// }

function removeFromContactById(id) {
  const index = contacts.findIndex(con => con.id === id)
  if (index > -1) {
    contacts.splice(index, 1)
  }
}

function findContact(searchText) {
  let props = ['name', 'surname']
  return contacts.filter(contact =>
    props.some(p => contact[p].includes(searchText))
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
// contacts
addContact('Petya', 'Golem', '+380991234567')
addContact('Pavel', 'Durov', '+380995555555')
addContact('Vasya', 'Firma', '+380997654321')

console.log(favorites.map(c => [c.name, c.id]))

addFavoriteById(contacts[0].id)
console.log(favorites.map(c => [c.name, c.id]))

addFavoriteById(contacts[0].id)
console.log(favorites.map(c => [c.name, c.id]))

addFavoriteById(1234)
console.log(favorites.map(c => [c.name, c.id]))

removeFavoriteById(contacts[0].id)
console.log(favorites.map(c => [c.name, c.id]))

removeFavoriteById(contacts[0].id)
console.log(favorites.map(c => [c.name, c.id]))

removeFavoriteById(1234)
console.log(favorites.map(c => [c.name, c.id]))

//

console.log(contacts.length)
contacts
editContact(contacts[2].id, 'name', 'surname', 'phonenumber')
contacts
editContact(333, 'name', 'surname', 'phonenumber')
contacts

// favorites
// console.log(contacts[0].id)
// addContactToFavoritesById(contacts[0].id)
// favorites
// contacts
// console.log(findContact('Go'))
// addFavorite('Vasya', 'F', 12393)
// favorites
// removeFromFavorites(12393)
// favorites

// рендер функцию можно вызвать 1раз или 101раз
// если в моделях ничего не поменялось, то рендер ничего нового не нарисует
