/**
 * Function Type
 */

const runner = () => {
  return ["안유진", "장원영", "레이"].map((x) => `아이브 멤버: ${x}`);
};

console.log(runner());

type Mapper = (x: string) => string;

const runner2 = (callback: Mapper) => {
  return ["안유진", "장원영", "레이"].map(callback);
};

console.log(runner2((x) => `아이브 멤버: ${x}`));

type MultiplyTwoNumbers = (x: number, y: number) => number;
// 타입을 지정해주지 않아도 됨.
const multiplyTowNumbers: MultiplyTwoNumbers = (x, y) => {
  return x + y;
};

/**
 * Interface로 함수 타입 선언하기
 */

interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}

const multiplyTowNumbers2: IMultiplyTwoNumbers = (x, y) => {
  return x * y;
};
