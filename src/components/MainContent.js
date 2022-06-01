import { useContext } from 'react'
import Search from './shared/Search'
import Searchcontent from './shared/Searchcontent'
import GithubContext from '../context/Github/GithubContext'
import AlertContext from '../context/Alert/AlertContext'

function MainContent() {
  const { users, loading, setLoading, getUsers, clearUsers } = useContext(GithubContext)
  const { displayAlert } = useContext(AlertContext)

  const serachProps = { setLoading, getUsers, clearUsers }

  return (
    <div className='main-container-height flex flex-col items-center justify-center w-full container m-auto'>
      <Search displayAlert={displayAlert} serachProps={serachProps} />
      <Searchcontent users={users} loading={loading} />
    </div>
  )
}

export default MainContent