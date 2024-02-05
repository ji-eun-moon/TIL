# Redux 구성요소

1. Store
   - Redux의 데이터들을 저장하기 위한 저장소
2. State
   - Redux Store에 저장되어 있는 데이터
3. Action
   - Redux State에 변화를 주기 위한 행동 == Redux Store 에 저장된 데이터에 변화를 주기 위한 행동
   - Redux Action은 JavaScript 객체 형태로 존재한다.
4. Action Creator
   - Action을 생성하는 생성자 역할
   - Action 객체를 생성하는 역할을 하는 JavaScript 함수
5. Reducer
   - 컴퓨터 프로그래밍 분야에서 Reduce는 입력에 어떤 처리를 해서, 원하는 결과로 축소시키는 과정을 의미
   - 따라서 Reducer 는 Action 이 발생하면, Action을 실제로 처리하는 역할을 하는 함수
     - Redux State에 변화를 주는 역할

## Redux 구성요소와 동작 방식

- Redux 동작 방식을 구성 요소와 함께 설명하면,
  - 사용자가 버튼 클릭 → Redux Action 발생 → Reducer가 Action 처리 → State 변화

![](https://velog.velcdn.com/images/mjieun/post/ebeb521a-2e1e-4a24-b996-19a17c975e8e/image.gif)

# Immutability

- Redux의 데이터는 읽기 전용이며 맘대로 바꿀 수 없고, State 변화는 Pure function을 통해 이루어져야 한다는 원칙이 있다.
  - 이 때 불변성(Immutability)가 적용된다.
- Redux State 는 읽기 전용이다 → State를 변경하기 위해서는 새로운 State를 생성해야 한다.
- 새로운 State를 생성 하는 과정은 **Reducer** 라고 불리는 Pure function 을 통해 이루어진다.

![](https://velog.velcdn.com/images/mjieun/post/065c1156-f1cc-41b7-8b79-6035494ad477/image.png)

- 위 그림처럼, Reducer는 이전 상태에 정해진 어떤 변화를 준 뒤에 다음 상태를 리턴하게 된다.
  - 이 과정에서 Pure function 처럼 작동한다는 것은, 입력으로 받은 이전 상태를 직접 변경하는 것이 아니라 새로운 상태 객체를 만들어서 리턴한다는 것이며, 또한 같은 입력에 대해서는 항상 같은 결과를 리턴한다는 뜻이다.
  - 즉, Redux State 생성 후에는 값을 바꿀 수 없고, 값을 바꾸기 위해서는 새로운 State를 변경해야 한다는 것!
- JavaScript 이러한 불변성을 적용하기 위해 사용하는 **immer** 라는 라이브러리가 있다.
  - state에 불변성을 적용하기 편리하게 도와주는 도구이며,
  - 흔히 사용하는 Redux Toolkit 은 불변성을 지키기 위해 내부적으로 immer를 사용하고 있다.

# Redux를 사용하는 경우

1. 하나의 상태를 여러 컴포넌트에서 접근해야 할 경우
   - 하나의 state에 수많은 컴포넌트가 접근해야할 필요가 있을 때, 이 state를 특정 컴포넌트의 Local state로 선언해서 관리한다면 값을 가져다 쓰기에 굉장히 불편하다.
   - 예를 들어, 여러 컴포넌트에서 사용자의 로그인 여부에 따라서 다른 UI를 보여주고자 할 때, 로그인 여부를 나타내는 state에 접근이 필요하다.
     - 이러한 경우, 로그인 여부를 Redux 를 통해 관리한다면 모든 컴포넌트들이 손쉽게 로그인 여부를 알 수 있다.
2. 한 곳에서 상태들을 관리하고 싶은 경우
   - 리액트로 개발을 하다보면 수많은 컴포넌트와 state들이 생기게 되는데, Redux 를 사용하면 상태들을 Redux Store라고 불리는 하나의 저장소에서 편리하게 관리할 수 있다.
   - 하지만, 모든 State를 Redux Store에 넣는 것이 정답은 아니다.
     - 의도치 않게 특정 state에 접근할 수 있는 통로를 열어주게 되어서, 예상치 못한 side effect 가 생길 수 있기 때문
     - 그래서 꼭 필요한 state (여러 컴포넌트에서 접근해야 하는 state)만 Redux 를 통해 관리하는 것이 좋다.

# Redux vs Context API

## Context API

- Context API는 2018년에 리액트 버전 16.3에 정식으로 포함되어 릴리즈 되었다.
- Context는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 **component tree를 통해 곧바로 컴포넌트로 전달하는 새로운 방식**을 제공한다.
  - 이를 통해 어떤 컴포넌트든지 데이터에 쉽게 접근할 수 있다.
- 아래 그림은 props를 통해 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하는 일반적인 방식을 보여준다.
  - 이 방식의 단점은 여러 컴포넌트에 걸쳐서 자주 사용되는 데이터(예: 로그인 여부, 프로필 정보 등)를 전달하려면 반복적인 코드가 많이 생기고 지저분해진다는 것이다.
  - 예를 들어, 위 그림에서 루트 노드에 있는 데이터를 C 컴포넌트로 전달하려면 최소 2번을 `props`로 전달해야 하며, 만약 데이터를 전달하려는 컴포넌트가 10단계 밑에 있다면 10번이나 `props`를 타고 하위 컴포넌트로 내려가야 한다.
  - 이러한 불편한 점을 개선하기 위해 생겨난 것이 바로 Context이다.

![](https://velog.velcdn.com/images/mjieun/post/93f5e332-85f5-4bbb-a750-bb93a1ea51fb/image.png)

- 아래 그림은 방금 전과 동일한 기능을 구현하기 위해 Context를 사용한 것이다.
  - Context를 사용하면 일일이 `props`로 전달할 필요 없이, 이 그림처럼 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 전달할 수 있다.

![](https://velog.velcdn.com/images/mjieun/post/a3e25afc-072e-4053-9495-8920d320869e/image.png)

- 여기까지만 보면 Context가 하는 역할과 용도는 Redux와 매우 유사하다.
  - 두 기술 모두 여러 단계에 걸쳐서 props를 통해 데이터를 전달하는 **prop drilling**이라고 불리는 문제를 해결하기 위한 방법이라는 점
  - 실제로 **내부적으로 Redux는 리액트 Context API를 사용하여 컴포넌트 Tree를 따라 스토어에 있는 데이터들을 전달** 한다.

![](https://velog.velcdn.com/images/mjieun/post/efc4503c-73a8-443b-ac62-85ff7c52cf74/image.png)

## **Redux와 Context API의 차이점**

1. Redux를 사용하게 되면, 앞에서 설치했던 `redux-devtools`라는 강력한 도구를 사용할 수 있다.
   - `redux-devtools`는 모든 상태의 변화를 시각적으로 확인할 수 있게 해주며, 이전 상태로 돌아가서 하나씩 Action을 실행하면서 디버깅 할 수도 있기 때문에, 애플리케이션 규모가 커질수록 꼭 필요한 기능이다.

![](https://velog.velcdn.com/images/mjieun/post/e4e0d55f-41ec-458a-aa4b-b402ab5043cb/image.png)

2. Context API는 특정 Context에 의존하는 컴포넌트들을 분리시킬 수 있다.
   - 여러 개의 Context를 만들고 해당 Context와 관련이 있는 컴포넌트들만을 묶어서 분리시킬 수 있다는 것
   - 이렇게 분리를 시키면 해당 Context와 관련이 없는 컴포넌트는 애초에 데이터에 접근이 불가능해지기 때문에, 의도치 않게 발생할 수 있는 side effect를 사전에 방지할 수 있다.

![](https://velog.velcdn.com/images/mjieun/post/f8a1ef88-54d8-48f2-9ba9-c2667d0d740d/image.png)

3. 데이터를 처리하는 방식
   - Redux는 전체 애플리케이션의 데이터를 Redux Store라고 불리는 하나의 거대한 객체로 관리하고, 사전에 정의된 Action과 Reducer를 통해서만 상태를 변경할 수 있다.
   - Context는 오로지 하나로 구성되어 있지도 않을 뿐만 아니라, 데이터를 별도로 관리하지도 않는다.
     - state를 들고 있는 것이 아니라 **state를 전달하기 위한 통로**의 역할만 하는 것
     - 만약 Context API를 사용해서 `state`를 업데이트 하려면, 상위 컴포넌트의 `state`에 의존할 수밖에 없다. (상위 컴포넌트에서 `state`를 업데이트하고, 변경된 값을 Context라는 통로를 통해 하위 컴포넌트로 전달만 함)

일반적으로 규모가 크고 관리해야할 상태가 많다면 Redux를 사용하고, 규모가 작고 관리해야 할 상태가 적다면 Context API를 사용한다.

# [실습] Redux를 사용하여 Counter app 만들기

- Redux는 JavaScript 라이브러리이기 때문에 React와 관계없이 JavaScript를 사용하는 곳이라면 어디든지 연동해서 사용할 수 있다.
- `html` 파일에 `script` 로 Redux 를 불러오고, Counter app 을 구현해보자.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Counter</title>
    <!-- Redux 패키지 불러오기 -->
    <script src="https://unpkg.com/redux@4.2.1/dist/redux.min.js"></script>
  </head>
  <body>
    <!-- 화면에 나올 UI -->
    <p>Counter: <span id="value">0</span></p>
    <div>
      <button id="increment">+</button>
      <button id="decrement">-</button>
    </div>

    <script>
      // 현재 state, action 객체를 받아 새로운 state를 반환하는 함수 - Reducer
      function counter(state, action) {
        if (typeof state === "undefined") {
          return 0;
        }

        // action type 에 따라 다른 상태 반환
        switch (action.type) {
          case "INCREMENT":
            return state + 1;
          case "DECREMENT":
            return state - 1;
          default:
            return state;
        }
      }

      // Redux Store 생성
      var store = Redux.createStore(counter);

      // value 값을 가져옴
      var valueElem = document.getElementById("value");

      // Redux Store에 있는 count 값을 valueElement에 넣는 함수
      function render() {
        valueElem.innerHTML = store.getState().toString();
      }
      render();

      // Redux Store의 State 변경될 때마다 render 함수 호출 (Redux Store 상태 구독)
      store.subscribe(render);

      // Redux Action을 Dispatch
      // 버튼에 클릭 이벤트 리스너를 추가해주고, 액션 타입 정의
      document
        .getElementById("increment")
        .addEventListener("click", function () {
          store.dispatch({ type: "INCREMENT" });
        });

      document
        .getElementById("decrement")
        .addEventListener("click", function () {
          store.dispatch({ type: "DECREMENT" });
        });
    </script>
  </body>
</html>
```

- 결과

![](https://velog.velcdn.com/images/mjieun/post/3e0eb856-2a43-4c21-9466-17416dd5107b/image.gif)

> #### References
>
> - [처음 만난 리덕스](<https://www.frontoverflow.com/document/1/%EC%B2%98%EC%9D%8C%20%EB%A7%8C%EB%82%9C%20%EB%A6%AC%EB%8D%95%EC%8A%A4%20(Redux)/chapter/3/Redux%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/section/10/Redux%20%EA%B5%AC%EC%84%B1%EC%9A%94%EC%86%8C>)
