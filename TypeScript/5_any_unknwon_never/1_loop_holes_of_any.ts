/**
 * Loopholes of Any
 */

let number: number;
number = 10;

// Error: 'number' 형식에 'toUpperCase' 속성이 없습니다.
// number.toUpperCase();
// (number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
  return x * y;
};

let args1: any = "코드팩토리";
let args2: any = true;

multiplyTwo(args1, args2); // 오류가 나지 않음 - any로 casting 하지 않기

let iu: any = { name: "아이유", age: 30 };
iu.name; // 자동완성도 되지 않음 (프로퍼티 불러오지 못함)

const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x, y);
};

// callback 함수 인자가 잘못되어도 오류가 나지 않음
const callback = (x: number) => {
  return x;
};

callbackRunner(5, 4, callback);
