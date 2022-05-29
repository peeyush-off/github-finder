import { createContext, useReducer } from "react";
import UserProfileReducer from './UserProfileReducer'

const UserProfileContext = createContext()

export const UserProfileContextProvider = ({children}) => {

    const initialState = {
        theme: 'dark'
    }

    const [state, dispatch] = useReducer(UserProfileReducer, initialState)

    function updateTheme(themeName) {
        dispatch( {
            type: 'SET_THEME',
            payload: themeName
        })
    }

    return(
        <UserProfileContext.Provider value={{
            updateTheme,
            theme: state.theme
            }}>
            {children}
        </UserProfileContext.Provider>
    )
}

export default UserProfileContext