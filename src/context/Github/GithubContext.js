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

export const GithubContextProvider = ({ children }) => {

    let initialState = {
        users: [],
        user: {},
        repos: [],
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

    const getUser = async (login) => {
        setLoading()

        const response = await github.get(`/users/${login}`);
        
        if(response.status === 404) {
            window.location = '/notfound'
        }
        dispatch({
            type: 'GET_USER',
            payload: response?.data ?? {}
        })
    }

    const getUserRepos = async (login) => {

        const response = await github.get(`/users/${login}/repos?per_page=10&sort=created:asc`);
        dispatch({
            type: 'GET_REPOS',
            payload: response?.data ?? {}
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
            user: state.user,
            repos: state.repos,
            getUsers,
            setLoading,
            clearUsers,
            getUser,
            getUserRepos,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext