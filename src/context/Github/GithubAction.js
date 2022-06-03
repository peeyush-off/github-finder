import axios from "axios"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
})


export const getUsers = async (param) => {
    const params = new URLSearchParams({
        q: param,
    })

    const response = await github.get(`/search/users?${params}`);
    return response?.data?.items ?? []
}

export const getUserAndRepos = async (login) => {
   
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?per_page=10&sort=created:asc`)
    ]) 
    
    if(user.status === 404 || repos.response === 404) {
        window.location = '/notfound'
    }
   return {
        user: user?.data ?? {},
        repos: repos?.data ?? [],
   }
}

