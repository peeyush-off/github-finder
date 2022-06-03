import { useContext } from 'react'
import Search from '../shared/Search'
import Searchcontent from '../shared/Searchcontent'
import GithubContext from '../../context/Github/GithubContext'
import AlertContext from '../../context/Alert/AlertContext'
import {getUsers} from '../../context/Github/GithubAction'

function MainContent() {
  const { users, loading, dispatch } = useContext(GithubContext)
  const { displayAlert } = useContext(AlertContext)

  const getUsersList = async (text) => {

    const response = await getUsers(text)
    dispatch({
      type: 'GET_USERS',
      payload: response
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

  const serachProps = { setLoading, getUsersList, clearUsers }

  return (
    <div className='main-container-height flex flex-col items-center justify-center w-full container m-auto'>
      <Search displayAlert={displayAlert} serachProps={serachProps} />
      <Searchcontent users={users} loading={loading} />
    </div>
  )
}

export default MainContent