// Union Basics
// 유니언은 TS에서 타입을 병합할 수 있는 수많은 방법 중 하나이다.

type StringOrBooleanType = String | boolean;

let stringOrBooleanType: StringOrBooleanType = "아이브";
stringOrBooleanType = true;

// Error: Type 'undefined' is not assignable to type 'StringOrBooleanType'.
// stringOrBooleanType = undefined

type StrBoolNullType = string | boolean | null;

type StateTypes = "DONE" | "LOADING" | "ERROR";

let state: StateTypes = "DONE";
state = "LOADING";
// Error: Type 'undefined' is not assignable to type 'StringOrBooleanType'.
// state = "INITIAL";

// 리스트의 유니언
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
  "아이유",
  "김고은",
  "박소담",
];

strListOrBooleanList = [true, false, false, true];

// Error:
// Type '(string | true)[]' is not assignable to type 'StringListOrBooleanList'.
//   Type '(string | true)[]' is not assignable to type 'string[]'.
//     Type 'string | true' is not assignable to type 'string'.
//       Type 'boolean' is not assignable to type 'string'.
// strListOrBooleanList = [
//     true,
//     '아이유'
// ]

type StrOrNumberList = (string | number)[];
let stringOrNumberList = [1, 2, 3, "아이유", "레드벨벳"];

// Interface Union
interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: "문지은",
  age: 27,
  address: "대한민국",
};

// let animalOrHuman: Human
console.log(animalOrHuman);

animalOrHuman = {
  name: "오리",
  age: 9,
};

// let animalOrHuman: Animal
console.log(animalOrHuman);

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// Error: Property 'address' does not exist on type 'Animal'
// console.log(animalOrHuman.address);

let animalOrHuman2:
  | {
      name: string;
      age: number;
    }
  | {
      name: string;
      age: number;
      address: string;
    } = {
  name: "문지은",
  age: 27,
  address: "대한민국",
};

animalOrHuman2 = {
  name: "오리",
  age: 9,
};

// Error: Property 'address' does not exist on type '{ name: string; age: number; }'.
// 에러 읽기가 조금 어려워졌음.
// console.log(animalOrHuman2.address);

// 서로 관계가 없는 유니언을 선언하면?
type Person = {
  name: string;
  age: number;
};

type Cat = {
  bared: string;
  country: string;
};

type PersonOrCat = Person | Cat;

// 한 타입을 모두 충족하다면, 모든 속성 사용 가능
const personOrCat: PersonOrCat = {
  name: "문지은",
  age: 27,
  bared: "밤톨",
  country: "대한민국",
};
