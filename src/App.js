import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import About from './components/About'
import UserProfileContext from '../src/context/UserProfileContext'

function App() {

  const { theme } = useContext(UserProfileContext)

  return (

    <div data-theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route exact path='/about' exa element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App