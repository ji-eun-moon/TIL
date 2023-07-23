function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.rigiht}
            </div>
        </div>
    );
}

function App(props) {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Contacts />
            }
        />
    );
}