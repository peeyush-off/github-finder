import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
import axios from "axios"

let GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

export const GithubContextProvider = ({children}) => {

    let initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const getUsers = async (param) => {
        const params = new URLSearchParams({
            q: param,
        })

        const response = await github.get(`/search/users?${params}`);
        dispatch({
            type: 'GET_USERS',
            payload: response?.data?.items ?? []
        })
    }

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }
    return (
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            getUsers,
            setLoading,
            clearUsers
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext