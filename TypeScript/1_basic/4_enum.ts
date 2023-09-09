// Enum

// API 요청을 한다. 상태는 4가지 상태
// DONE - 요청 완료 상태
// ERROR - 에러가 생긴 상태
// LOADING - 로딩 상태
// INITIAL - 초기 상태

// 1. 상태를 직접 입력
function runWork() {
  let state = "INITIAL";

  try {
    state = "LOADING";

    // 작업을 한다.
    state = "DONE";
  } catch (e) {
    state = "ERROR";
  } finally {
    return state;
  }
}

console.log(runWork()); // DONE
console.log(runWork() === "DONNE"); // 실수로 오타 입력시 확인 불가능

// 2. 상태를 변수로 지정
const doneState = "DONE";
const loadingState = "LOADING";
const errorState = "ERROR";
const initialState = "INITIAL";

function runWork2() {
  let state = initialState;

  try {
    state = loadingState;

    // 작업을 한다.
    state = doneState;
  } catch (e) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2()); // DONE
console.log(runWork2() === doneState);
// 오타 입력하면 에러가 나기 때문에 확인 가능
// Error: Cannot find name 'doneeState'. Did you mean 'doneState'?
// console.log(runWork2() === doneeState);

// 3. Enum
enum State {
  DONE = "DONE",
  LOADING = "LOADING",
  INITIAL = "INITIAL",
  ERROR = "ERROR",
}

function runWork3() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;

    // 작업을 한다.
    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3()); // DONE
console.log(runWork3() === State.DONE); // true
