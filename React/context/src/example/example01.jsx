// props 이용
function App(props) {
    return <Toolbar theme="dark" />
}

function Toolbar(props) {
    // 이 Toolbar 컴포넌트는 ThemeButton에 theme를 넘겨주기 위해서 'theme' prop을 가져야만 함
    // 현재 테마를 알아야하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적
    return (
        <div>
            <ThemeButton theme={props.theme} />
        </div>
    );
}

function ThemeButton(props) {
    return <Button theme={props.theme} />;
}

// context 이용

// context는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달
// 여기에서는 현재 테마를 위한 컨텍스트를 생성하며, 기본 값은 'light'
const ThemeContext = React.createContext('light');

// Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달
// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계 없이 데이터를 읽을 수 있음
// 여기에서는 현재 테마 값으로 'dark' 전달
function App(props) {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

// 이제 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없음
function Toolbar(props) {
    return (
        <div>
            <ThemeButton />
        </div>
    );
}

function ThemeButton(props) {
    // 리액트는 가장 가까운 상위 테마 Provider를 찾아 해당되는 값을 사용
    // 만약 해당되는 Provider가 없을 경우 기본값(여기에서는 'light') 사용
    // 여기에서는 상위 Provider가 있기 때문에 현재 테마의 값은 'dark'가 됨
    return (
        <ThemeContext.Consumer>
            {value => <Button theme={value}/>}
        </ThemeContext.Consumer>
    );
}
