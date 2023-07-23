// 수정 전
function App(props) {
    return (
        <MyContext.Provider value={{something: 'something'}}>
            <Toolbar />
        </MyContext.Provider>
    )
}

// 수정 후
function App(props) {
    const [value, setValue] = useState({ something: 'something' });
    return (
        <MyContext.Provider value={value}>
            <Toolbar />
        </MyContext.Provider>
    )
}