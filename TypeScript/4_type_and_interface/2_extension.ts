/**
 * Extension
 *
 * interface는 extends 키워드를
 * type은 & 키워드를 사용
 */

// Example 1

interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "안유진",
  age: 23,
};

// Example 2

type TName = {
  name: string;
};

type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "아이유",
  age: 29,
};

// Example 3

interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: "제니",
  age: 29,
};

type TIdol2 = IName & {
  age: number;
};

const idol4: TIdol2 = {
  name: "지수",
  age: 31,
};

/**
 * extending multiple
 */

// Example 1
type DogName = {
  name: string;
};
type DogAge = {
  age: number;
};

type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: "코드팩토리",
  age: 32,
  breed: "Poodl",
};

// Example 2
interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: "오리",
  age: 7,
  breed: "코리안 냥냥이",
};

/**
 * Overriding
 */

// Example 1

type THeight = {
  height: number;
};

type TRectangle = THeight & {
  height: string;
  width: number;
};

// const rectangle: TRectangle = {
//     // (property) height: never - 오버라이딩시 반드시 같은 타입으로 지정해야함.
//     // height:
// }

type TWidth = {
  width: number | string; // Union으로 narrowing 하면 해결
};

type TRectangle2 = TWidth & {
  width: number;
  height: number;
};

const rectangle: TRectangle2 = {
  height: 100,
  width: 200, // (property) width: number
};

// Example 2

interface IHeight {
  height: number;
}

interface IRectangle extends IHeight {
  // 인터페이스에서는 선언 자체가 불가능
  // Error: 'IRectangle' 인터페이스가 'IHeight' 인터페이스를 잘못 확장합니다.
  // 'height' 속성의 형식이 호환되지 않습니다.
  // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
  //   height: string;
  height: number;
  width: number;
}

interface IWidth {
  width: number | string;
}

interface IRectangel extends IWidth {
  width: number;
  height: number;
}
