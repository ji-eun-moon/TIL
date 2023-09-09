// Type Inference - 타입 추론

let stringType = "string"; // let stringType: string
let booleanType = true; // let booleanType: boolean
let numberType = 20; // let numberType: number

booleanType = false;
// Type 'string' is not assignable to type 'boolean'.
// booleanType = "false";

// const 타입 - 타입 추론시 더 구체적으로 추론할 수 있음
const constStringType = "const string"; // const constStringType: "const string"
const constBooleanType = true; // const constBooleanType: true

let yuJin = {
  name: "안유진",
  age: 2003,
};

const yuJin2 = {
  name: "안유진",
  age: 2003,
};

// 객체에서 타입 구체화 하는 방법
const yuJin3 = {
  name: "안유진" as const,
  age: 2003 as const,
};

// Error: Type '"문지은"' is not assignable to type '"안유진"'.
// yuJin2.name = "문지은";

// Array
let numbers = [1, 2, 3, 4, 5]; // let numbers: number[]
let numbersAndString = [1, 2, 3, "4", "5", "6"]; // let numbersAndString: (string | number)[]

// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// numbers.push('6');

const number = numbers[0]; // const number: number

// 어떤 인덱스 값을 가져와도 string|number 타입으로 추론
const nos = numbersAndString[0]; // const nos: string | number
const nos2 = numbersAndString[6]; // 인덱스 초과해도 에러 x

// tuple
const twoNumbers = [1, 3] as const; // const twoNumbers: readonly [1, 3]
// Error: Cannot assign to '0' because it is a read-only property.
// twoNumbers[0] = 10;
// Error: Tuple type 'readonly [1, 3]' of length '2' has no element at index '3'.
// const first2 = twoNumbers[3];
