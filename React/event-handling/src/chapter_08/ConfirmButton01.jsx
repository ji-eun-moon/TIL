import React from 'react'

class ConfirmButton01 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }));
    }

    render() {
        return (
            <div>
                <h1>ConfirmButton 컴포넌트 만들기</h1>
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

export default ConfirmButton01;