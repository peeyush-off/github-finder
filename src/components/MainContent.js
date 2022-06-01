import React from 'react'
import Search from './shared/Search'
import Searchcontent from './shared/Searchcontent'

function MainContent() {
  return (
    <div className='main-container-height flex flex-col items-center justify-center w-full container m-auto'>
      <Search />
      <Searchcontent />
    </div>
  )
}

export default MainContent