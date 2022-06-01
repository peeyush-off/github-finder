import React from 'react'
import NotFoundImg from '../../res/img/404_not_found.svg'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
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