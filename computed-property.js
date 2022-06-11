// computed property
const n = 'name'
const a = 'age'

const user = {
  [n]: 'Mike',
  [a]: 30,
}
console.log(user)
console.log('#####')

// 실용적인 예 (어떤 게 키가 될지 모를 때 유용함)
function makeObj(key, val) {
  return {
    [key]: val,
  }
}
const Name = makeObj('이름', 'Tom')
const Age = makeObj('나이', 30)
console.log(Name, Age)
