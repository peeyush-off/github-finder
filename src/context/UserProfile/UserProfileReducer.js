export default function UserProfileAction(state, action) {
    switch(action.type) {
        case 'SET_THEME': return {
                ...state,
                theme: action.payload
            }
        default: return state 
    }
} 