

const GithubReducer = (state, action) => {

    switch (action.type) {
        case 'GET_USERS': return {
            ...state,
            loading: false,
            users: action.payload
        }
        case 'GET_USER': return {
            ...state,
            loading: false,
            user: action.payload
        }
        case 'GET_REPOS': return {
            ...state,
            loading: false,
            repos: action.payload
        }
        case 'GET_USER_AND_REPOS': return {
            ...state,
            loading: false,
            repos: action.payload.repos,
            user: action.payload.user
        }
        case 'SET_LOADING': return {
            ...state,
            loading: true
        }
        case 'CLEAR_USERS': return {
            ...state,
            users: []
        }
        default: return state
    }
}

export default GithubReducer