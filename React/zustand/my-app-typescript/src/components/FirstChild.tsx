// FirstChild.tsx
import React from "react";
import useStore from "store/store";

function FirstChild() {
  const setSelectedButton = useStore((state) => state.setSelectedButton);
  const incrementCount = useStore((state) => state.incrementCount);
  const removeCount = useStore((state) => state.removeCount);

  const handleClick = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <h1>FirstChild</h1>
      <div>
        <button onClick={() => handleClick("O")}>O</button>
        <button onClick={() => handleClick("X")}>X</button>
      </div>
      <div>
        <button onClick={incrementCount}>카운트 증가</button>
        <button onClick={removeCount}>카운트 리셋</button>
      </div>
    </div>
  );
}

export default FirstChild;
