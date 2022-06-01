import {useState, useContext} from 'react'
import GithubContext from '../../context/Github/GithubContext'


function Serach() {

  const [text, setText] = useState('')

  const {setLoading, getUsers, clearUsers} = useContext(GithubContext)
  
  const onUpdateText = (event) => {
    setText(event.target.value)
  }

  const onSubmit = (event) => {
    setLoading()
    getUsers(text)
    event.preventDefault()
  }

  const onClear = () => {
    clearUsers()
    setText('')
  }

  return (
    <form onSubmit={onSubmit} className='w-full text-center m-8'>
        <input value={text} onChange={onUpdateText} type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-lg rounded-r-none" />
        <input type='submit' className={`btn rounded-l-none ${text.length && 'rounded-r-none'}`} value='Search' />
        <button type='button' onClick={onClear} className={`btn rounded-l-none absolute border-0 border-l border-gray-500 ${!text.length && 'hidden'}`}>Clear</button>
    </form>
  )
}

export default Serach