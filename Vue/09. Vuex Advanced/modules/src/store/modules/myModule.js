const myModule = {
    state: {
        age: 30
    },
    mutations: {
        INCREMENT_AGE(state) {
            state.age += 1
        }
    },
    actions: {
        incrementAge(context) {
            context.commit('INCREMENT_AGE')
        }
    }
}

export default myModule