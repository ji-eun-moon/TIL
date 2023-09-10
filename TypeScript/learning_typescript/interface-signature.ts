// 호출 시그니처
interface FunctionWithCount {
  count: number;
  (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
  console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls;

function doesNotHaveCount() {
  console.log("No idea!");
}

// hasCallCount = doesNotHaveCount;
// Property 'count' is missing in type '() => void' but required in type 'FunctionWithCount'.

// 인덱스 시그니처
interface WordCounts {
  [i: string]: number;
}

const counts: WordCounts = {};

counts.apple = 0;
counts.banana = 1;

// counts.cherry = false;
// Type 'boolean' is not assignable to type 'number'

// 속성 + 인덱스 시그니처
interface HistoricalNovels {
  Oroonoko: number;
  [i: string]: number;
}

const novels: HistoricalNovels = {
  Outlander: 1991,
  Oroonoko: 1688,
};

// const missingOrrnoko: HistoricalNovels = {
//   // Property 'Oroonoko' is missing in type
//   // '{ Outlander: number; }' but required in type 'HistoricalNovels'.
//   Outlander: 1991,
// };

interface ChapterStarts {
  preface: 0;
  [i: string]: number;
}

const correctPreface: ChapterStarts = {
  preface: 0,
  night: 1,
  shopping: 1,
};

// const wrongPreface: ChapterStarts = {
//   preface: 1,
//   // Type '1' is not assignable to type '0'
// };

// 숫자 인덱스 시그니처
interface MoreNarrowNumbers {
  [i: number]: string;
  [i: string]: string | undefined;
}

const mixesNumbersAndStrings: MoreNarrowNumbers = {
  0: "",
  key1: "",
  key2: undefined,
};

// interface MoreNarrowStrings {
//   [i: number]: string | undefined;
//   // Error: 'number' index type 'string | undefined' is not assignable to 'string' index type 'string'.
//   [i: string]: string;
// }

// 중첩 인터페이스
interface Novel {
  author: {
    name: string;
  };
  setting: Setting;
}

interface Setting {
  place: string;
  year: number;
}

let myNovel: Novel;

myNovel = {
  author: {
    name: "Jane Austen",
  },
  setting: {
    place: "England",
    year: 1812,
  },
};

// myNovel = {
//   author: {
//     name: "Jane Austen",
//   },
//   setting: {
//     place: "England",
//     // Error: Property 'year' is missing in type '{ place: string; }' but required in type 'Setting'
//   },
// };
