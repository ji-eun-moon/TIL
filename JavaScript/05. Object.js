// 객체 정의
// 객체 리터럴 방식으로 객체 생성
const person = {
    name: 'Jieun',
    age: 27,
    greeting: function () {
        console.log(`Hello, my name is ${this.name}.`)
    }
};

// 객체의 메서드 호출
person.greeting();  // Hello, my name is Jieun.
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// 생성자 함수
function Member(name, age, sId) {
    this.name = name
    this.age = age
    this.sId = sId
}
const member = new Member('isaac', 21, 2022654321)
console.log(member)  // Member {name: 'isaac', age: 21, sId: 2022654321}
// ------------------------------------------------------------------------
//-------------------------------------------------------------------------
// 객체 관련 문법 
// 1. 속성명 축약
var books = ['Learnig JavaScript', 'Learnig Python']
var magazines = ['Vogue', 'Science']
// ES5
var bookShop = {
    books: books,
    magazines: magazines,
}
console.log(bookShop)
/*
{
    books: ['Learnig JavaScript', 'Learnig Python'],
    magazines: ['Vogue', 'Science']
}
*/
// ES6+
const bookShop2 = {
    books,
    magazines,
}
console.log(bookShop2)
/*
{
    books: ['Learnig JavaScript', 'Learnig Python'],
    magazines: ['Vogue', 'Science']
}
*/
//------------------------------------------------------------------------------
// 2. 메서드명 축약
// ES5
var obj = {
	greeting: function () {
		console.log('Hi!')
	}
}

obj.greeting()  // Hi!

// ES6+
var obj = {
	greeting() {
		console.log('Hi!')
	}
}

obj.greeting()  // Hi!
//------------------------------------------------------------------------------
// 3. 계산된 속성
const key = 'country'
const value = ['한국', '미국', '일본', '중국']

const myObj = {
	[key]: value,
}

console.log(myObj) // { country: ['한국', '미국', '일본', '중국']}
console.log(myObj.country) // ['한국', '미국', '일본', '중국']
//-------------------------------------------------------------------------------
// 4. 구조 분해 할당
// ES5
const userInformation = {
    name: 'jieun moon',
    userId: 'mjieun',
    email: 'jieun@jieun.com'
}
const name = userInformation.name
const userId = userInformation.userId
const email = userInformation.email
// ES6+
const userInformation2 = {
    name: 'jieun moon',
    userId: 'mjieun',
    email: 'jieun@jieun.com'
}
const {name2} = userInformation
// 아래와 같은 형태로도 가능
const {userId2, email2} = userInformation 
//-------------------------------------------------------------------------------
// 5. Spread syntax
const obj2 = {b: 2, c: 3, d: 4}
const newObj = {a:1, ...obj2, e:5}
console.log(newObj)  // {a: 1, b: 2, c: 3, d: 4, e: 5}
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// JSON 변환
const jsObject = {
    coffee: 'Americano',
    iceCream: 'Cookie and cream',
}
// Object -> JSON
const objToJson = JSON.stringify(jsObject)
console.log(objToJson)  // {"coffee":"Americano","iceCream":"Cookie and cream"}
console.log(typeof objToJson)  // string
// JSON -> Object
const JsonToObj = JSON.parse(objToJson)
console.log(JsonToObj)  // {coffee: 'Americano', iceCream: 'Cookie and cream'}
console.log(typeof JsonToObj)  // object