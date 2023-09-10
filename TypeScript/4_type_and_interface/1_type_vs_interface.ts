/**
 * Type vs Interface
 */

interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만 Interface 에서는 할 수 없는 것들
 */

// 1. primitive 타입 선언하기
type Name = string;

// 2. union 타입 선언하기
type UnionType = string | number;

// 3. primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface에서는 할 수 있고 Type은 못하는 것
 */

// interface merging
// 중복 선언시 속성이 중첩됨 - type은 중복 선언 불가
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

let rectangle: IRectangle = {
  height: 200,
  width: 100,
};

/**
 * Interface Merging
 */

class Review {
  // 프로퍼티
  getY = (x: number) => {
    return x;
  };

  // 메서드
  getX(x: number) {
    return x;
  }
}

interface getXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface getXnY {
  getX: (x: number) => number;
  // 프로퍼티로 선언시 오버로딩 시 타입까지 일치해야함
  //   getY: (y: string) => number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;
  // 메서드로 선언하는 오버로딩은 타입 달라도 됨
  getY(y: string): number;
}

const testMethod: GetXnY2 = {
  getX(x) {
    return x;
  },
  // Error: '(y: string | number) => string | number' 형식은 '{ (y: number): number; (y: string): number; }' 형식에 할당할 수 없습니다.
  // 'string | number' 형식은 'number' 형식에 할당할 수 없습니다.
  // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
  //   getY(y) {
  //     return y;
  //   },

  getY(y) {
    return 1;
  },
};
