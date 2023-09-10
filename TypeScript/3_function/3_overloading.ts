/**
 * Overloading
 *
 */

// 무조건 하나만 받거나 무조건 세개만 받는 함수를 만들고 싶다면?
// 오버로딩 시그니처
function stringOrStrings(members: string): string;
function stringOrStrings(
  member1: string,
  member2: string,
  member3: string
): string;

// 오버로딩 불가능
// Error: 이 오버로드 시그니처는 해당 구현 시그니처와 호환되지 않습니다.
// function stringOrStrings(member: string): number;
// function stringOrStrings()

// 파라미터를 하나를 받거나 세개를 받는 함수
// 하나의 파라미터만 입력받는다면, 아이돌 멤버들을 하나의 스트링으로 입력받는다.
// 예 ) '안유진, 장원영, 레이
// 세개의 파라미터를 받는다면, 각각의 아이돌을 각각의 파라미터 값으로 입력한다.
// 예 ) '안유진', '장원영', '레이'
function stringOrStrings(
  memberOrMembers: string,
  member2?: string,
  member3?: string
) {
  if (member2 && member3) {
    return `아이브: ${memberOrMembers}, ${member2}. ${member3}`;
  } else {
    return `아이브: ${memberOrMembers}`;
  }
}

console.log(stringOrStrings("안유진, 장원영, 레이")); // 아이브: 안유진, 장원영, 레이
console.log(stringOrStrings("안유진", "장원영", "레이")); // 아이브: 안유진, 장원영, 레이

// console.log(stringOrString("안유진", "장원영"));
// Error: 오버로드에 2 인수가 필요하지 않지만, 1 또는 3 인수가 필요한 오버로드가 있습니다.
