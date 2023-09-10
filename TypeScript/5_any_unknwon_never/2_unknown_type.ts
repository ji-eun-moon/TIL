/**
 * Unknown type
 */

let anyValue: any;

anyValue = 24;
anyValue = "아이유";
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = "아이유";
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// 에러가 나지 않음
// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullTyle: null = anyValue;
// let undefinedTyle: undefined = anyValue;

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue; // 'unknown' 형식은 'boolean' 형식에 할당할 수 없습니다.
// let arrayType: string[] = unknownValue; // unknown' 형식은 'string[]' 형식에 할당할 수 없습니다.
// let objectType: {} = unknownValue; // 'unknown' 형식은 '{}' 형식에 할당할 수 없습니다.
// let nullTyle: null = unknownValue; // 'unknown' 형식은 'null' 형식에 할당할 수 없습니다.
// let undefinedTyle: undefined = unknownValue; // 'unknown' 형식은 'undefined' 형식에 할당할 수 없습니다.

anyValue.toUpperCase();
// unknownValue.toUpperCase(); // 'unknownValue'은(는) 'unknown' 형식입니다.

function isString(target: unknown): target is string {
  return typeof target === "string";
}

let testVal: unknown;

if (isString(testVal)) {
  testVal; // let testVal: string
}

/**
 * Union Type
 */
type uOrString = unknown | string; // type uOrString = unknown
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;
type anyOrU = any | unknown; // type anyOrU = any

/**
 * Intersection Type
 */
type uAndString = unknown & string; // type uAndString = string
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any; // type uAndAny = any
type anyAndU = any & unknown; // type anyAndU = any

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
