/**
 * Type Predicate
 */

/**
 * Example 1
 */

function isNumber(input: any): input is number {
  return typeof input === "number";
}

console.log(isNumber(10));

function isNumberRetBool(input: any): boolean {
  return typeof input === "number";
}

let number: any = 5;

if (isNumberRetBool(number)) {
  number; // let number: any
}

if (isNumber(number)) {
  number; // let number: number
}

/**
 * Example 2
 */

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = {
  name: "도지",
  age: 32,
};

if (isDoge(doge)) {
  doge; // const doge: Doge
} else {
  doge; // const doge: never - Cat을 형성할 수 없으므로
}
