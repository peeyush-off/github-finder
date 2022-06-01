import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import MainContent from './components/pages/MainContent'
import Footer from './components/pages/Footer'
import Navbar from './components/pages/Navbar'
import PageNotFound from './components/pages/PageNotFound'
import About from './components/pages/About'
import UserProfileContext from './context/UserProfile/UserProfileContext'
import { GithubContextProvider } from './context/Github/GithubContext'
import Alert from './components/shared/Alert'

import AlertContext from './context/Alert/AlertContext'
import User from './components/pages/User'

function App() {

  const { theme } = useContext(UserProfileContext)
  const { showAlert, alertMessage, alertType, alertPositionCssClasses } = useContext(AlertContext)

  const alertProps = {showAlert, alertMessage, alertType, alertPositionCssClasses}
  return (

    <div data-theme={theme}>
      <Router>
        <GithubContextProvider>
          <Alert options={alertProps}/>
          <Navbar />
          <Routes>
            <Route path='/' element={<MainContent />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/user/:login' element={<User />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </GithubContextProvider>
      </Router>
    </div>
  )
}

export default App