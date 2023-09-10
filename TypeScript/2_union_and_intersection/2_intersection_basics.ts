/**
 * InterSection
 *
 * And
 */

interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

// Human의 속성과 Contacts의 속성 합치기
type HumanAndContacts = Human & Contacts;

let HumanAndContacts: HumanAndContacts = {
  name: "지은",
  age: 27,
  phone: "01012341234",
  address: "대한민국",
};

// 존재할 수 없는 타입 -> never
// type NumberAndString = never
// type NumberAndString = number & string;
