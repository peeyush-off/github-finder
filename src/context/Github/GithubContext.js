import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

let GithubContext = createContext()


export const GithubContextProvider = ({ children }) => {

    let initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)


    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext