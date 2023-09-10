/**
 * Tuple
 */
let iveTopMembers: string[] = ["안유진", "장원영", "레이"];

// 개수, 타입 순서 지정
let numberAndStringTuple: [number, string] = [23, "코드팩토리"];

// 그러나 여전히 push는 됨
numberAndStringTuple.push("아이유");
console.log(numberAndStringTuple);

// readonly 키워드를 쓰면 push 불가능
let unmodifiableTuple: readonly [number, string] = [23, "코드팩토리"];

// unmodifiableTuple.push();

/**
 * Tuple 유추하기
 */
let actresses = ["김고은", "박소담", "전여빈"];

// type const = readonly ["김고은", "박소담", "전여빈"]
let actressesTuple = ["김고은", "박소담", "전여빈"] as const;
const actressesTupleConst = ["김고은", "박소담", "전여빈"] as const;

let stringArray: string[] = [...actressesTuple, ...actressesTupleConst];

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ["코드팩토리", 32];

/**
 * Assigning Tuple to Tuple
 *
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ["아이유", "유애나"];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = ["장원영", "안유진"];

let stringArr: string[] = ive;

// Error: 'string[]' 형식은 '[string, string]' 형식에 할당할 수 없습니다.
//   대상에 2개 요소가 필요하지만, 소스에 더 적게 있을 수 있습니다.
// let ive2: [string, string] = stringArr;

/**
 * Multi Dimesional Tuple
 */
const tuple2D: [string, number][] = [
  ["코드팩토리", 32],
  ["아이유", 31],
  ["김고은", 30],
];
