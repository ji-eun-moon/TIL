class MyClass extends React.Component {
    componentDidMount() {
        let value = this.context;
        // MyContext 값을 이용하여 원하는 작업을 수행 가능
    }
    componentDidUpdate() {
        let value = this.context;
    }
    componentWillUnmount() {
        let value = this.context;
    }
    render() {
        let value = this.context;
        // MyContext 값에 따라 컴포넌트들을 렌더링
    }
}
MyClass.contextType = MyContext;