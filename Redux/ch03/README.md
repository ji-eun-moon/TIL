# Redux Store

- Redux 의 데이터를 저장하기 위한 저장소
  - 여기에서 말하는 저장은, 우리가 컴퓨터에 파일을 저장하는 것처럼 실제로 저장하는 것이 아님!
  - Redux는 상태를 관리하기 위한 라이브러리이이지, 상태를 저장하고 지속시키기 위한 목적의 라이브러리가 아니다.
  - 즉, Redux Store의 데이터들은 컴퓨터의 하드디스크나 SSD 같은 저장장치에 저장되지 않는다.
- 그렇다면 Redux Store는 실제로 데이터들을 어떻게 관리할까?
  - Redux Store는 **JavaScript 객체나 배열 같은 변수를 통해 데이터들을 관리**
  - JavaScript의 변수들은 메모리에 올라가고, 이 메모리는 휘발성이기 때문에 컴퓨터 전원이 꺼지거나 프로그램이 다시 시작되면 이전 데이터는 모두 날아가고 초기화 된다.
  - Redux Store 역시 웹브라우저를 새로고침 하거나 컴퓨터를 재부팅 하면 데이터가 모두 초기화되는데, 데이터들이 메모리 위에 존재하기 때문
- Redux Store에 데이터는 아래와 같이 Tree 형태로 저장되며, 이러한 Tree를 State Tree 라고 부름.
  - 하나의 Tree에 계층 구조로 각각의 state들이 들어있는 형태인 것

![](https://velog.velcdn.com/images/mjieun/post/9e86cfff-aa93-4b83-a2a9-f0f454187145/image.png)

# DisPatcher

- **Redux Action을 발송하는 역할**
  - Action이 발생했다는 것을 Redux에 알리는 것
- Action이 생성되면 해당 Action이 Dispatcher로 전달되고, Dispatcher는 Action을 Redux로 보내서 처리하도록 만든다.
  - 실제로 Action을 받아서 State에 변화를 주는 것이 바로 Reducer

![](https://velog.velcdn.com/images/mjieun/post/af328a2f-9905-4618-8941-08c9a5a88808/image.png)

- Store의 `dispatch()` 함수 : Redux에서 Dispatcher의 역할을 하는 함수
  - action 객체를 파라미터로 받아서, 해당 Action을 실제로 발송

```jsx
store.dispatch(action);
```

# Store 관련 함수

## `createStore()`

- **Redux Store를 생성**
- Redux Store에는 Redux에서 관리하는 모든 상태값이 들어가게 되는데, Redux의 세 가지 원칙 중 첫 번째 원칙인 _Single source of truth_ 에 따라, **하나의 애플리케이션에는 단 하나의 Store만 존재해야 한다.**

```jsx
createStore(reducer, [preloadedState], [enhancer]);
```

### Parameter

- `reducer`
  - Action이 발생하면 Action을 실제로 처리
  - **Redux State에 변화를 주는 역할을 하는 Pure function**
  - 애플리케이션 규모가 커질수록 수많은 State와 Action들이 생기게 되고, 그러한 Action들을 처리하기 위한 Reducer들도 많아지는데, 그런 Reducer들을 합쳐서 하나로 만든 `rootReducer`
- `preloadedState` (optional)
  - 미리 로딩되어 있는 State, 쉽게 말하면 **초기 상태값**
- `enhancer` (optional)
  - Redux Store의 기능을 향상 시켜주는 역할
  - Store와 애플리케이션 중간에 있다는 의미로 `middleware` 라고 부름

### Return

- Redux Store

### 예제

- `ADD_TODO`라는 Action이 발생할 때마다 할 일 목록에 할 일들이 하나씩 추가되며, 이 할 일 목록들은 모두 Redux Store에서 관리

```jsx
import { createStore } from "redux";

function todoReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

const store = createStore(todoReducer, ["처음 만난 리덕스"]);

store.dispatch({
  type: "ADD_TODO",
  text: "리덕스 강의 열심히 듣기",
});

// 출력 결과
// ['처음 만난 리덕스', '리덕스 강의 열심히 듣기']
console.log(store.getState());
```

## **`applyMiddleware()`**

- `createStore()` 함수의 세 번째 파라미터였던 `enhancer` 를 적용하기 위해 필요한 함수

```jsx
applyMiddleware(...middleware);
```

### Parameter

- middleware
  - **Redux에 원하는 기능을 추가할 수 있게 해주는 함수**
  - Redux Store의 `dispatch()`와 `getState()` 함수가 포함 된 객체를 파라미터로 받음.
  - Redux Store에서 Action이 처리될 때 함께 작동하길 원하는 코드를 끼워 넣을 수 있음.
  - 여러 개의 `middleware`들은 하나로 합쳐질 수 있음.
  - Redux에서 필수적인 것은 아님

### Return

- 주어진 `middleware`들이 적용 된 **Store enhancer 함수**

### 예제

- `applyMiddleware()` 함수를 사용해서 여러 개의 `middleware`를 Redux에 끼워넣을 수 있음.
- `createStore()` 함수의 세 번째 파라미터로 `applyMiddleware()` 함수를 사용해서 `loggerMiddleware`라는 `middleware`를 넣음
- `loggerMiddleware`는 Action이 발생했을 때 Redux store의 `state` 변화를 logging해주는 `middleware`

```jsx
import { createStore, applyMiddleware } from "redux";

function todoReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

function loggerMiddleware({ getState }) {
  return (next) => (action) => {
    console.log("dispatch 예정 action", action);

    // Middleware chain에 있는 다음 dispatch 함수를 호출
    const returnValue = next(action);

    console.log("dispatch 이후 state", getState());
    return returnValue;
  };
}

const store = createStore(
  todoReducer,
  ["처음 만난 리덕스"],
  applyMiddleware(loggerMiddleware)
);

store.dispatch({
  type: "ADD_TODO",
  text: "리덕스 강의 열심히 듣기",
});
// 아래와 같이 loggingMiddleware에 의해 로깅됨:
// dispatch 예정 action, { type: 'ADD_TODO', text: '리덕스 강의 열심히 듣기' }
// dispatch 이후 state, ['처음 만난 리덕스', '리덕스 강의 열심히 듣기']
```

## **`getState()`**

- **State를 가져오는 역할을 하는 함수**
  - 이 때 가져오는 State는 Redux Store에 저장된 **State Tree**
- Root State Tree를 통해서 Redux에 있는 모든 데이터에 접근 가능

![](https://velog.velcdn.com/images/mjieun/post/ea19a35d-1ea1-4b87-8188-49709cd40dea/image.png)

- 앞에 코드에서, 이미 `getState()` 함수를 사용하고 있는 것을 볼 수 있다.
  - 이 때 `getState()` 함수는 `middleware`에 파라미터로 전달된 것
  - 만약 `middleware` 내부가 아닌 외부에서 State Tree를 가져오려면, 만든 Redux Store를 사용해서 `store.getState()` 형태로 호출하면 된다.

```jsx
import { createStore, applyMiddleware } from "redux";

function todoReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

function loggerMiddleware({ getState }) {
  return (next) => (action) => {
    console.log("dispatch 예정 action", action);

    // Middleware chain에 있는 다음 dispatch 함수를 호출
    const returnValue = next(action);

    console.log("dispatch 이후 state", getState());
    return returnValue;
  };
}

const store = createStore(
  todoReducer,
  ["처음 만난 리덕스"],
  applyMiddleware(loggerMiddleware)
);

store.dispatch({
  type: "ADD_TODO",
  text: "리덕스 강의 열심히 듣기",
});

console.log(store.getState());
```

## `dispatch()`

- Action 객체를 파라미터로 받아서, **실제 Action을 발송하는 역할** (Dispatcher)
- Dispatcher를 통해 Action이 발송되고 그것을 처리하는 과정에서 Redux Store의 State에 변화가 생기게 됨
- 아래 코드는 `ADD_TODO`라는 `type`과 `‘리덕스 강의 열심히 듣기’`라는 `text`를 가진 Action 객체를 생성해서 전달
  - 이렇게 dispatch된 action은 Reducer에서 처리

```jsx
store.dispatch({
  type: "ADD_TODO",
  text: "리덕스 강의 열심히 듣기",
});
```

# [실습] Todo 애플리케이션

- `html` 파일에 `script` 로 Redux 를 불러오고, Todo app 을 구현해보자.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TODO</title>
    <!-- Redux 패키지 불러오기 -->
    <script src="https://unpkg.com/redux@4.2.1/dist/redux.min.js"></script>
  </head>
  <body>
    <!-- 화면에 나올 UI -->
    <h3>오늘 할 일</h3>
    <ul id="todo-list"></ul>

    <div>
      <input id="input-text" />
      <button id="add-button">할 일 추가</button>
    </div>

    <script>
      // Reducer : 현재 state와 액션 객체를 받아 변경된 새로운 state 리턴
      function todoReducer(state, action) {
        switch (action.type) {
          case "ADD_TODO": // 처리할 액션 타입
            return state.concat(action.text);
          default:
            return state;
        }
      }

      // store 생성, 초기 상태 값 설정
      var store = Redux.createStore(todoReducer, ["처음 만난 리덕스 공부하기"]);

      // Todo 목록 렌더링
      var todoListElem = document.getElementById("todo-list");
      var inputElem = document.getElementById("input-text");

      function render() {
        // 이전 TODO 목록 초기화
        todoListElem.innerHTML = "";

        // TODO 목록 렌더링
        store.getState().forEach((todo) => {
          const todoListItemElem = document.createElement("li");
          todoListItemElem.textContent = todo;
          todoListElem.appendChild(todoListItemElem);
        });
      }

      render();
      // store state 가 변경될 때마다 render 함수 호출
      store.subscribe(render);

      // add 버튼에 Click event listener 추가
      document
        .getElementById("add-button")
        .addEventListener("click", function () {
          // Action을 실제로 dispatch
          store.dispatch({
            type: "ADD_TODO",
            text: inputElem.value,
          });

          // Input 초기화
          inputElem.value = "";
        });
    </script>
  </body>
</html>
```

![](https://velog.velcdn.com/images/mjieun/post/b5c290f3-3b2d-4377-8c87-3742a9e99649/image.gif)

## state logging 버튼 만들기

- store 의 `getState` 함수를 사용하여 현재 Redux Store 상태를 콘솔 로그로 출력하는 기능을 하는 버튼을 만들어보자.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TODO - State Logging</title>
    <!-- Redux 패키지 불러오기 -->
    <script src="https://unpkg.com/redux@4.2.1/dist/redux.min.js"></script>
  </head>
  <body>
    <!-- 화면에 나올 UI -->
    <h3>오늘 할 일</h3>
    <ul id="todo-list"></ul>

    <div>
      <input id="input-text" />
      <button id="add-button">할 일 추가</button>
      <!-- Logging State 버튼 -->
      <button id="logging-state">State Logging</button>
    </div>

    <script>
      // Reducer : 현재 state와 액션 객체를 받아 변경된 새로운 state 리턴
      function todoReducer(state, action) {
        switch (action.type) {
          case "ADD_TODO": // 처리할 액션 타입
            return state.concat(action.text);
          default:
            return state;
        }
      }

      // store 생성, 초기 상태 값 설정
      var store = Redux.createStore(todoReducer, ["처음 만난 리덕스 공부하기"]);

      // Todo 목록 렌더링
      var todoListElem = document.getElementById("todo-list");
      var inputElem = document.getElementById("input-text");

      function render() {
        // 이전 TODO 목록 초기화
        todoListElem.innerHTML = "";

        // TODO 목록 렌더링
        store.getState().forEach((todo) => {
          const todoListItemElem = document.createElement("li");
          todoListItemElem.textContent = todo;
          todoListElem.appendChild(todoListItemElem);
        });
      }

      render();
      // store state 가 변경될 때마다 render 함수 호출
      store.subscribe(render);

      // add 버튼에 Click event listener 추가
      document
        .getElementById("add-button")
        .addEventListener("click", function () {
          // Action을 실제로 dispatch
          store.dispatch({
            type: "ADD_TODO",
            text: inputElem.value,
          });

          // Input 초기화
          inputElem.value = "";
        });

      // Logging State 버튼에 Click event listener 추가
      document
        .getElementById("logging-state")
        // 현재 Redux State를 가져와 콘솔에 출력
        .addEventListener("click", function () {
          console.log("현재 state", store.getState());
        });
    </script>
  </body>
</html>
```

![](https://velog.velcdn.com/images/mjieun/post/7710516e-0318-4aa8-94f8-8331ba4da13a/image.gif)

## Middleware 적용

- store에 `loggerMiddleware` 를 적용해보자.
  - action이 실제로 dispatch 되기 전에 dispatch 예정인 action 객체를 콘솔에 출력하고, action이 dispatch 되고 Reducer에서 처리된 이후에 변경된 상태를 콘솔에 출력

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TODO - Middleware</title>
    <!-- Redux 패키지 불러오기 -->
    <script src="https://unpkg.com/redux@4.2.1/dist/redux.min.js"></script>
  </head>
  <body>
    <!-- 화면에 나올 UI -->
    <h3>오늘 할 일</h3>
    <ul id="todo-list"></ul>

    <div>
      <input id="input-text" />
      <button id="add-button">할 일 추가</button>
      <!-- Logging State 버튼 -->
      <button id="logging-state">State Logging</button>
    </div>

    <script>
      // Reducer : 현재 state와 액션 객체를 받아 변경된 새로운 state 리턴
      function todoReducer(state, action) {
        switch (action.type) {
          case "ADD_TODO": // 처리할 액션 타입
            return state.concat(action.text);
          default:
            return state;
        }
      }

      // action이 실제로 dispatch 되기 전에 dispatch 예정인 action 객체를 콘솔에 출력하고,
      // action이 dispatch 되고 Reducer에서 처리된 이후에 변경된 상태를 콘솔에 출력하는 미들웨어
      function loggerMiddleware({ getState }) {
        return (next) => (action) => {
          console.log("dispatch 예정 action", action);

          // Middleware chain에 있는 다음 dispatch 함수를 호출
          const returnValue = next(action);

          console.log("dispatch 이후 state", getState());

          return returnValue;
        };
      }

      // store 생성, 초기 상태 값 설정
      var store = Redux.createStore(
        todoReducer,
        ["처음 만난 리덕스 공부하기"],
        // 미들웨어
        Redux.applyMiddleware(loggerMiddleware)
      );

      // Todo 목록 렌더링
      var todoListElem = document.getElementById("todo-list");
      var inputElem = document.getElementById("input-text");

      function render() {
        // 이전 TODO 목록 초기화
        todoListElem.innerHTML = "";

        // TODO 목록 렌더링
        store.getState().forEach((todo) => {
          const todoListItemElem = document.createElement("li");
          todoListItemElem.textContent = todo;
          todoListElem.appendChild(todoListItemElem);
        });
      }

      render();
      // store state 가 변경될 때마다 render 함수 호출
      store.subscribe(render);

      // add 버튼에 Click event listener 추가
      document
        .getElementById("add-button")
        .addEventListener("click", function () {
          // Action을 실제로 dispatch
          store.dispatch({
            type: "ADD_TODO",
            text: inputElem.value,
          });

          // Input 초기화
          inputElem.value = "";
        });

      // Logging State 버튼에 Click event listener 추가
      document
        .getElementById("logging-state")
        // 현재 Redux State를 가져와 콘솔에 출력
        .addEventListener("click", function () {
          console.log("현재 state", store.getState());
        });
    </script>
  </body>
</html>
```

![](https://velog.velcdn.com/images/mjieun/post/741b6425-4b7f-490e-9ea3-3656056e306d/image.gif)

> #### References

- [처음 만난 리덕스](<https://www.frontoverflow.com/document/1/%EC%B2%98%EC%9D%8C%20%EB%A7%8C%EB%82%9C%20%EB%A6%AC%EB%8D%95%EC%8A%A4%20(Redux)/chapter/4/Store/section/16/Store>)
