// Casting
// 타입스크립트는 자바스크립트로 컴파일 되는 파일이지만,
// TS 에서 Casting을 하면 JS에서는 적용이 안된다.

let jieun = "jieun";
let testNumber = 3;

console.log(jieun.toUpperCase());
// Error: Property 'toUpperCase' does not exist on type 'number'.
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// Error: TypeError: sampleNumber.toUpperCase is not a function
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string;
console.log(typeof (sampleNumber as string)); // number
