// 1. уменьшить количество кода
// 2. уменьшить колчество логики
// 3. упростить задачу
// 4. свести к минимуму переменные и параметры

let x = 33

function editX(newValue) {
  x = newValue
}

editX(42)

console.log(x)

let array = [3, 5, 7, 13, 15, 17, 23, 25, 28]

// редактирование числа
// взять некое число и заменить его на другое

function editNumber(newValue, oldValue) {
  let idx = array.indexOf(oldValue)
  if (idx === -1) return
  array[idx] = newValue
}

array

editNumber(42, 15)
array

editNumber(33)
array

editNumber(33, 23)
array

// уничтожаем уверенность

const obj = {
  x: 42,
  y: 33,
}

function editObj(newValue) {
  obj.x = newValue
}

obj

editObj(101)
obj

editObj(333)
obj

let arrayObjs = [{ x: 3 }, { x: 5 }, { x: 7 }, { x: 13 }, { x: 15 }, { x: 17 }]

// function editSuperObj(newValue, banana) {
//   let idx = arrayObjs.findIndex(obj => obj.x === banana)
//   if (idx === -1) return
//   arrayObjs[idx].x = newValue
// }

function editSuperObj(newValue, banana) {
  let findedObj = arrayObjs.find(obj => obj.x === banana)
  findedObj
  if (findedObj) return
  arrayObjs.x = newValue
}

arrayObjs

editSuperObj(131, 13)
arrayObjs
