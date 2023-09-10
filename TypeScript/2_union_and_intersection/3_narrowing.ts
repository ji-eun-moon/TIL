/**
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추할 수 있게 되는 걸 의미
 */

// let numberOrString: number | string = "Jieun";
// 타입을 선언해도 값을 통해 타입을 유추함.
// let numberOrString: string

// const decimal = 12.3278;
// console.log(decimal.toFixed(2)); // 12.33

/**
 * Narrowing 종류
 *
 * 1) Assignmnet Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instanceof narrowing
 * 7) discrimated union narrowing
 * 8) exhaustiveness checking
 */

// 1. Assignment Narrowing : 특정 값을 할당해서 내로잉
let numberOrString: number | string = "Jieun";

numberOrString.toString(); // let numberOrString: string

// 2. typeof narrowing
numberOrString = Math.random() > 0.5 ? 1123 : "지은"; // let numberOrString: string | number

if (typeof numberOrString === "string") {
  numberOrString; // let numberOrString: string
} else {
  numberOrString; // let numberOrString: number
}

// 3. Truthiness Narrowing
let nullOrString: null | string[] = 0.5 ? null : ["아이유", "레드벨벳"];

if (nullOrString) {
  nullOrString; // let nullOrString: string[]
} else {
  nullOrString; // let nullOrString: null
}

// 4. Equality Narrowing
let numberOrString2: number | string = Math.random() > 0.5 ? 1123 : "지은";
let stringOrBool: string | boolean = Math.random() > 0.5 ? "아이브" : true;

if (numberOrString2 === stringOrBool) {
  numberOrString2; // let numberOrString2: string
} else {
  numberOrString2; // let numberOrString2: string | number
  stringOrBool; // let stringOrBool: string | true
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? "안유진" : null;

if (typeof numberOrStringOrNull === "number") {
  numberOrStringOrNull; // let numberOrStringOrNull: number
} else {
  numberOrStringOrNull; // let numberOrStringOrNull: string | null
}

// 5. in operator Narrowing
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: " 안유진",
  age: 23,
};

let dog: Dog = {
  name: "오리",
  type: "YorkShire Terrier",
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

if ("type" in humanOrDog) {
  humanOrDog; // let humanOrDog: Dog
} else {
  humanOrDog; // let humanOrDog: Human
}

// 6. instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : "지은";

if (dateOrString instanceof Date) {
  dateOrString; // let dateOrString: Date
} else {
  dateOrString; // let dateOrString: string
}

// 7. discrimated union narrowing
interface Animal {
  type: "dog" | "human";
  height?: number;
  breed?: string;
}

let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "Yorkshire Terrier",
      };

if (animal.type === "human") {
  animal.height; // (property) Animal.height?: number | undefined
} else {
  animal.breed;
  animal.height;
}

// 여러개로 나누어서 유니언으로 합쳐서 타입을 선언해야 유추가 더 정확함

interface Human2 {
  type: "human";
  height: number;
}

interface Dog2 {
  type: "dog";
  breed: string;
}

type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "Yorkshire Terrier",
      };

if (humanOrDog2.type === "human") {
  humanOrDog2; // let humanOrDog2: Human2
} else {
  humanOrDog2; // let humanOrDog2: Dog2
}

// 8. exhaustiveness checking
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2; // let humanOrDog2: Human2
    break;
  case "dog":
    humanOrDog2; // let humanOrDog2: Dog2
    break;
  default:
    humanOrDog2; // let humanOrDog2: never
    const _check: never = humanOrDog2; // 새로 생긴 타입이 있다면 에러가 남.
    break;
}
