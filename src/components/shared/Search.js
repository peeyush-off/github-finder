import { useState } from 'react'


function Search({ serachProps: { setLoading, clearUsers, getUsersList }, displayAlert }) {

  const [text, setText] = useState('')


  const onUpdateText = (event) => {
    setText(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    clearUsers()
    if (text === '') {
      displayAlert('Username cannot be empty', 'error', 'top-center')
      return
    }
    setLoading()
    getUsersList(text)

  }

  const onClear = () => {
    clearUsers()
    setText('')
  }

  return (
    <form onSubmit={onSubmit} className='w-full text-center m-8'>
      <input value={text} onChange={onUpdateText} type="text" placeholder="Enter Username" className="input input-bordered md:w-full max-w-lg rounded-r-none" />
      <input type='submit' className={`btn rounded-l-none ${text.length && 'rounded-r-none'}`} value='Search' />
      <button type='button' onClick={onClear} className={`btn invisible sm:visible rounded-l-none absolute border-0 border-l border-gray-500 ${!text.length && 'hidden'}`}>Clear</button>
    </form>
  )
}

export default Search