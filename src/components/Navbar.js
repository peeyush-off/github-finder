import React from 'react'
import { Link } from 'react-router-dom'
import ThemeSelector from './shared/ThemeSelector'

function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Github finder</Link>
            </div>

            <div className="navbar-end mr-6">

                <ThemeSelector />
                <Link className="btn" to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar