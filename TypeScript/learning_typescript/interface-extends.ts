// 인터페이스 확장
interface Writing {
  title: string;
}

interface Novella extends Writing {
  pages: number;
}

let myNovella: Novella = {
  pages: 195,
  title: "Ethan Frome",
};

// let missingPages: Novella = {
//   // Error: Property 'pages' is missing in type '{ title: string; }' but required in type 'Novella'.
//   title: "The Awakening",
// };

// let extraProperty: Novella = {
//   pages: 300,
//   // Error: Type '{ pages: number; strategy: string; style: string; }' is not assignable to type 'Novella'.
//   // Object literal may only specify known properties, and 'strategy' does not exist in type 'Novella'.
//   strategy: "baseline",
//   style: "Naturalism",
// };

// 속성 재정의

interface WithNullableName {
  name: string | null;
}

interface WithNonNullableName extends WithNullableName {
  name: string;
}

// interface WithNumericName extends WithNullableName {
//   // Interface 'WithNumericName' incorrectly extends interface 'WithNullableName'.
//   // Types of property 'name' are incompatible.
//   //     Type 'string | number' is not assignable to type 'string | null'.
//   //     Type 'number' is not assignable to type 'string'.
//   name: number | string;
// }

// 다중 인터페이스 확장
interface GivesNumber {
  giveNumber(): number;
}

interface GivesString {
  giveString(): string;
}

interface GivesBothAndEither extends GivesNumber, GivesString {
  giveEither(): number;
}

function useGivesBoth(instance: GivesBothAndEither) {
  instance.giveEither(); // 타입: number | string
  instance.giveNumber(); // 타입: number
  instance.giveString(); // 타입: string
}
