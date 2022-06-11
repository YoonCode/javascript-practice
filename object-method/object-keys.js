// Object.keys() : 키 - 배열 반환
const user1 = {
  name: 'Mike',
  age: 30,
  gender: 'male',
}
const userArr1 = Object.keys(user1)
console.log(user1)
console.log(userArr1)
console.log('#####')

// Object.values() : 값 - 배열 반환
const user2 = {
  name: 'Tom',
  age: 34,
  gender: 'male',
}
const userArr2 = Object.values(user2)
console.log(userArr2)
console.log('#####')

// Object.entries() : 키/값 - 배열 반환
const user3 = {
  name: 'May',
  age: 29,
  gender: 'female',
}
const userArr3 = Object.entries(user3)
console.log(userArr3)
console.log('#####')

// Object.fromEntries() : 키/값 배열 - 객체 변환
const arr = [
  ['name', 'Mike'],
  ['age', '30'],
  ['gender', 'male'],
]
const arrUser = Object.fromEntries(arr)
console.log(arrUser)
console.log('#####')
