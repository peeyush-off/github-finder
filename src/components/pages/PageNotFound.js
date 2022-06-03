import React from 'react'
import NotFoundImg from '../../res/img/404_not_found.svg'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="hero main-container-height">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={NotFoundImg} alt="Not found image" />
          <h2 className="py-6">Page not found</h2>
          <Link to="/" className="btn btn-primary btn-wide">Home</Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound