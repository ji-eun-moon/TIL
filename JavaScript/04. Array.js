// 배열 메서드 기초
const numbers = [1, 2, 3, 4, 5]

// reverse - 원본 배열의 요소들의 순서를 반대로 정렬
numbers.reverse()
console.log(numbers)  // [5, 4, 3, 2, 1]

// push & pop -배열의 가장 뒤에 요소를 추가 또는 제거
numbers.push(100)
console.log(numbers)  // [5, 4, 3, 2, 1, 100]

console.log(numbers.pop())  // 100
console.log(numbers)  // [5, 4, 3, 2, 1]

// unshift & shift - 배열의 가장 앞에 요소를 추가 또는 제거
numbers.unshift(0)
console.log(numbers)  // [0, 5, 4, 3, 2, 1]

numbers.shift()
console.log(numbers)  // [5, 4, 3, 2, 1]

// includes - 배열에 특정 값이 존재하는지 판별 후 참/거짓 반환
console.log(numbers.includes(1))  // true
console.log(numbers.includes(100))  // false

// indexOf - 배열에 특정 값이 존재하는지 판별 후 인덱스 반환, 요소가 없을 경우 -1 반환
console.log(numbers.indexOf(3))  // 2
console.log(numbers.indexOf(100))  // -1

// --------------------------------------------------------------------------------------
// 콜백 함수
const numbers2 = [1, 2, 3]
numbers2.forEach(function (num) {
    console.log(num**2)
})
// 1
// 4
// 9

const callBackFunction = function (num) {
    console.log(num ** 2)
}

const numbers3 = [1, 2, 3]
numbers3.forEach(callBackFunction)
// 1
// 4
// 9

// --------------------------------------------------------------------------------------
// Array Helper Methods
// forEach
// 1. 일단 사용해보기
const colors = ['red', 'green', 'blue']
printFunc = function (color) {
    console.log(color)
}
colors.forEach(printFunc)
// 2. 함수 정의를 인자로 넣어보기
colors.forEach(function (color) {
    console.log(color)
})
// 3. 화살표 함수 적용하기
colors.forEach((color) => {
    return console.log(color)
})
// red
// green
// blue
// ----------------------------------------------------------------
// map
// 1. 일단 사용해보기
const numbers4 = [1, 2, 3]
// 함수 정의 (표현식)
const doubleFunc = function (number) {
    return number * 2
}
// 함수를 다른 함수의 인자로 넣기 (콜백 함수)
const doubleNumbers = numbers4.map(doubleFunc)
console.log(doubleNumbers)  // [2, 4, 6]
// 2. 함수 정의를 인자로 넣어보기
const doubleNumbers2 = numbers4.map(function (number){
    return number * 2
})
console.log(doubleNumbers2) // [2, 4, 6]
// 3. 화살표 함수 적용하기
const doubleNumbers3 = numbers4.map((number) => {
    return number * 2
})
console.log(doubleNumbers3) // [2, 4, 6]
// ----------------------------------------------------------------
// filter
// 1. 일단 사용해보기
const products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'carrot', type: 'vegetable'},
    {name: 'apple', type: 'fruit'},
]
// 함수 정의하기
const fruitFilter = function (product) {
    return product.type === 'fruit'
}
// 콜백으로 넘기고
const fruits = products.filter(fruitFilter)
console.log(fruits)
// [{name: 'banana', type: 'fruit'}, {name: 'apple', type: 'fruit'}]
// 2. 함수 정의를 인자로 넣어보기
const fruits2 = products.filter(function (product){
    return product.type === 'fruit'
})
console.log(fruits2)
// [{name: 'banana', type: 'fruit'}, {name: 'apple', type: 'fruit'}]
// 3. 화살표 함수 정의하기
const fruits3 = products.filter((product) => {
    return product.type === 'fruit'
})
console.log(fruits3)
// [{name: 'banana', type: 'fruit'}, {name: 'apple', type: 'fruit'}]
// -------------------------------------------------------------------
// reduce
const tests = [90, 90, 80, 77]
// 콜백 함수 정의
const sum = tests.reduce(function (total, x) {
    return total + x
}, 0)
// 화살표 함수
const sum2 = tests.reduce((total, x) => total + x, 0)
console.log(sum2)  // 337
// 평균
const sum3 = tests.reduce((total, x) => total + x, 0) / tests.length
console.log(sum3)  // 84.25
// -------------------------------------------------------------------
// map
const avengers = [
    {name: 'Tony Stark', age: 45},
    {name: 'Steve Rogers', age: 32},
    {name: 'Thor', age: 40},
]
const avenger = avengers.find(function (avenger){
    return avenger.name === 'Tony Stark'
})
console.log(avenger)  // {name: 'Tony Stark', age: 45}
// 화살표 함수 적용
const avenger2 = avengers.find((avenger) => {
    return avenger.name === 'Tony Stark'
})
console.log(avenger2) // {name: 'Tony Stark', age: 45}
// ----------------------------------------------------------------
// some
const arr = [1, 2, 3, 4, 5]
const result = arr.some((elem) => {
    return elem % 2 === 0
})
console.log(result)  // true
// every
const result2 = arr.every((elem) => {
    return elem % 2 === 0
})
console.log(result2)  // false
//-----------------------------------------------------------------------------------------------
// 배열 순회 비교
const chars = ['A', 'B', 'C', 'D']

// for loop
for (let idx = 0; idx < chars.length; idx++) {
    console.log(idx, chars[idx])
}

// for ... of
for (const char of chars) {
    console.log(char)
}

// forEach
chars.forEach((char, idx) => {
    console.log(idx, char)
})

chars.forEach(char => {
    console.log(char)
})