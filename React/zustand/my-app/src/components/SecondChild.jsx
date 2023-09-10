// SecondChild.js
import React from "react";
import useStore from "../store/store.js";

function SecondChild() {
  //   const selectedButton = useStore((state) => state.selectedButton);
  //   const count = useStore((state) => state.count);

  const { count, selectedButton } = useStore((state) => state);

  return (
    <div>
      <h1>SecondChild</h1>
      <p>카운트: {count}</p>
      <p>선택한 버튼: {selectedButton}</p>
    </div>
  );
}

export default SecondChild;
