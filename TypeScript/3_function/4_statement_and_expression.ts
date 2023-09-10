/**
 * Statement and Expression
 */

// statement (문장)
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
};

/**
 * Statement
 */

function add(x: number, y: number): number {
  return x + y;
}
function substract(x: number, y: number): number {
  return x - y;
}
function multiply(x: number, y: number): number {
  return x * y;
}
function devide(x: number, y: number): number {
  return x / y;
}

/**
 * Expression
 */

// 함수 타입을 미리 선언해두고 사용할 수 있음!
type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = function (x, y) {
  return x + y;
};

const substract2: CalculationType = function (x, y) {
  return x - y;
};

const multiply2: CalculationType = function (x, y) {
  return x * y;
};

const devide2: CalculationType = function (x, y) {
  return x / y;
};
