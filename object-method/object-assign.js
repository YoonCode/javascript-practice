// Object.assign() : 객체 복제
const user = {
  name: 'Mike',
  age: 30,
}

// 객체를 복제 하는 것이 아니라 참조값만 복사함
const newUser = user
console.log(user)
console.log(newUser)
console.log('#####')

// 따라서 newUser.name 값을 바꾸면 user.name 값도 바뀜
newUser.name = 'Tom'
console.log(user)
console.log(newUser)
console.log('#####')

// 1. 객체 복제 Object.assign(초기값, 복제할 객체)
const newPerson = Object.assign({}, user)

// newPerson.name 값을 바꿔도 user.name 값은 그대로임
newPerson.name = 'May'
console.log(user.name)
console.log(newPerson.name)
console.log('#####')

// 2. 초기값이 있을 때
const newHuman = Object.assign({ gender: 'male' }, user)
console.log(user)
console.log(newHuman)
console.log('#####')

// 3. 여러 개의 객체를 병합할 때
const user1 = {
  name: '윤상진',
}
const info1 = {
  age: 40,
}
const info2 = {
  gender: 'male',
}
Object.assign(user1, info1, info2)
console.log(user1)
