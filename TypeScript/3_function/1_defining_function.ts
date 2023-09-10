/**
 * Defining Function
 */

function printName(name: string) {
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}는 커플입니다.`;
}

returnTwoCouples("영희", "철수");
// returnTwoCouples(0, 1)  // 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.

/**
 * Optional Parameters
 */

// (parameter) y: number | undefined
function multiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}

multiplyOrReturn(10, 20);
multiplyOrReturn(10);

function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}

multiplyOrReturn2(10, 20);
multiplyOrReturn2(10);

/**
 * 나머지 매개변수
 */

function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `너무좋아 ${x}`);
}

getInfiniteParameters("야이유", "아이브", "블랙핑크");
// getInfiniteParameters(1, 2, 3); // getInfiniteParameters(...args: string[]): string[]

/**
 * Return Type 유추
 */

function addTwoNumbers(x: number, y: number) {
  return x + y;
}

// function addTwoNumbers(x: number, y: number): number
addTwoNumbers(10, 20);

function randomNumber() {
  return Math.random() > 0.5 ? 10 : "랜덤";
}

randomNumber(); // function randomNumber(): 10 | "랜덤"

// 선언된 형식이 'void'도 'any'도 아닌 함수는 값을 반환해야 합니다.
function subtractTwoNumbers(x: number, y: number): number {
  // return "이게 반환이 되나"; // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
  return x - y;
}

const subtractTwoNumbersArrow = (x: number, y: number): number => {
  return x - y;
};

/**
 * 특수 반환 타입
 *
 * void / never
 */

function doNotReturn(): void {
  console.log("저는 반환을 하지 않습니다.");
  // return "hi"; // 'string' 형식은 'void' 형식에 할당할 수 없습니다.
  return;
}

function neverEndingLoop(): never {
  while (true) {}
}

function throwError(): never {
  throw Error();
}
