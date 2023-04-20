// 전역 문맥에서의 this
console.log(this)  // Window

// 함수 문맥에서의 this
// 1. 단순 호출
const myFunc = function () {
    console.log(this)
}
myFunc()  // Window 
// 2. Method (Function in Object, 객체의 메서드로서)
const myObj = {
    data : 1,
    myFunc() {
        console.log(this)  // myObj
        console.log(this.data)  // 1
    }
}
myObj.myFunc()  // myObj
// 3-1. Nested (Function 키워드)
const myObj2 = {
    numbers: [1],
    myFunc() {
        console.log(this)  // myObj
        this.numbers.forEach(function(num)
        {
            console.log(num)  // 1
            console.log(this)  // window
        })
    }
}
myObj2.myFunc()
// 3-2. Nested (화살표 함수)
const myObj3 = {
    numbers: [1],
    myFunc() {
        console.log(this)  // myObj
        this.numbers.forEach(number =>
        {
            console.log(number)  // 1
            console.log(this)  // myObj
        })
    }
}
myObj3.myFunc()
// Lexical scope - 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정
let x = 1  // global
function first() {
    let x = 10
    second()
}
function second() {
    console.log(x)
}
first()  // 1
second()  // 1