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
// 생성자 함수
function Member(name, age, sId) {
    this.name = name
    this.age = age
    this.sId = sId
}
const member = new Member('isaac', 21, 2022654321)
console.log(member)  // Member {name: 'isaac', age: 21, sId: 2022654321}
// ------------------------------------------------------------------------
// 속성명 축약
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