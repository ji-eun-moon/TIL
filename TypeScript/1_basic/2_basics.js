"use strict";
let helloText = 'Hello';
// helloText = true  // 'boolean' 형식은 'string' 형식에 할당할 수 없습니다.
const stringVar = 'String';
const numberVar = 3;
const bitIntVar = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
// TS에만 존제파는 타입
// any - 아무 타입이나 입력할 수 있는 타입
let anyVar;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;
// 어떤 타입이든 변수에 저장할 수 있다.
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는 타입
let unknownType;
unknownType = 100;
unknownType = 'unknown';
unknownType = true;
// 다른 타입 변수에는 저장 불가능
// let testNumber2: number = unknownType;
// never - 어떠한 타입도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType: never = null;
// 리스트 타입
const koreanGirlGroup = ['아이브', '레드벨벳', '블랙핑크']; // string으로 구성된 리스트
const booleanList = [true, false, false, true];
