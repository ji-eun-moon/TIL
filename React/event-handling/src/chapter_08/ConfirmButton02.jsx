import React from 'react'

class ConfirmButton02 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

    }

    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }));
    }

    render() {
        return (

            <div>
                <h1>클래스 필드 문법 사용</h1>
                <button
                    onClick={this.handleConfirm}
                    disabled={this.state.isConfirmed}
                >
                    {this.state.isConfirmed ? "확인됨" : "확인하기"}
                </button>
            </div>
        )
    }

}

export default ConfirmButton02;