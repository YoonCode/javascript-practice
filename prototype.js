// 생성자 함수 : 상품 객체를 생성해보자.

function User(name, age) {
  this.name = name
  this.age = age
  this.userInfo = function () {
    console.log(`${this.name} 나이는 ${this.age}세 입니다.`)
  }
}

const user1 = new User('윤상진', 40)
const user2 = new User('이진솔', 30)

console.log(user1, user2)

user1.userInfo()

function Item(title, price) {
  // this = [];
  this.title = title
  this.price = price
  this.showPrice = function () {
    console.log(`${this.title} 가격은 ${this.price} 입니다.`)
  }
  // return this;
}
const item1 = new Item('인형', 3000)
const item2 = new Item('가방', 4000)
const item3 = new Item('반지', 7000)

console.log(item1, item2, item3)

item1.showPrice()
item2.showPrice()
item3.showPrice()
