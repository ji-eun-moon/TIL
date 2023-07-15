import React, { useState } from "react";

function ConfirmButton03(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <div>
            <h1>함수 컴포넌트 사용</h1>
            <button onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인됨" : "확인하기"}
            </button>
        </div>
    );
}

export default ConfirmButton03;