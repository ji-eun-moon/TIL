// 함수 선언식 - 호이스팅 발생
function add(num1, num2){
	return num1 + num2
}

console.log(add(2, 7)) // 9

// 함수 표현식
const sub = function (num1, num2) {
	return num1 - num2
}

console.log(sub(7, 2))  // 5

// 기본 인자
const greeting = function (name = 'Anonymous') {
	return `Hi ${name}`
}

console.log(greeting())  // Hi Anonymous

// 매개변수와 인자의 개수 불일치 허용
// 매개변수보다 인자의 개수가 많을 경우
const noArgs = function () {  // 인자 0개
	return 0
}

noArgs(1, 2, 3)  // 0

const twoArgs = function (arg1, arg2) {
	return [arg1, arg2]
}

console.log(twoArgs(1, 2, 3))  // [1, 2]
// 매개변수보다 인자의 개수가 적을 경우
const threeArgs = function (arg1, arg2, arg3) {
	return [arg1, arg2, arg3]
}
console.log(threeArgs())  // [undefined, undefined, undefined]
console.log(threeArgs(1))  // [1, undefined, undefined]
console.log(threeArgs(2, 3))  // [2, 3, undefined]

// Spread syntax
// 배열과의 사용 - 배열 복사
let parts = ['어꺠', '무릎']
let lyrics = ['머리', ...parts, '발']
console.log(lyrics)  // ['머리', '어꺠', '무릎', '발']
//  함수와의 사용 - 정해지지 않은 수의 매개변수를 배열로 받을 수 있음
const restOpr = function (arg1, arg2, ...restArgs) {
    return [arg1, arg2, restArgs]
}
console.log(restOpr(1, 2, 3, 4, 5))  // [1, 2, [3, 4, 5]]
console.log(restOpr(1, 2))  // [1, 2, []]

// Arrow Function
const arrow1 = function (name) {
    return `hello, ${name}`
}
// 1. function 키워드 삭제
const arrow2 = (name) => {return `hello, ${name}`}
// 2. 인자가 1개인 경우에만 () 생략 가능
const arrow3 = name => {return `hello, ${name}`}
// 3. 함수 바디가 return을 포함한 표현식 1개인 경우에만 {} & return 삭제 가능
const arrow4 = name => `hello, ${name}`

// Arrow Function 응용
// 1. 인자가 없다면 ? () or _ 로 표시 가능 
let noArgs2 = () => 'No args'
noArgs = _ => 'No args'
// 2-1. object를 return 한다면
let returnObject = () => { return {key:'value'}}  // return을 명시적으로 적어준다.
// 2-2. return을 적지 않으려면 괄호를 붙여야 함
returnObject = () => ({key:'value'})
