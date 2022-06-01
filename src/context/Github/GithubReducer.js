

const GithubReducer = (state, action) => {

    switch (action.type) {
        case 'GET_USERS': return {
            ...state,
            loading: false,
            users: action.payload
        }
        case 'SET_LOADING': return {
            ...state,
            loading: true
        }
        case 'CLEAR_USERS' : return {
            ...state,
            users: []
        }
        default: return state
    }
}

export default GithubReducer