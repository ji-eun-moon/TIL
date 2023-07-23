import React from "react";
import FancyBorder from "./FancyBorder";

function WelcomeDialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                어서오세요.
            </h1>
            <p className="Dialog-message">
                제 블로그에 방문하신걸 환영합니다.!
            </p>
        </FancyBorder>
    );
}

export default WelcomeDialog;