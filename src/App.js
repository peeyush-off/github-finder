import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import About from './components/About'
import UserProfileContext from './context/UserProfile/UserProfileContext'
import { GithubContextProvider } from './context/Github/GithubContext'
import Alert from './components/shared/Alert'

import AlertContext from './context/Alert/AlertContext'

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
            <Route exact path='/about' exa element={<About />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </GithubContextProvider>
      </Router>
    </div>
  )
}

export default App