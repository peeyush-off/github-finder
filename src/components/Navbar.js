import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeSelector from './shared/ThemeSelector'
import UserProfileContext from '../context/UserProfile/UserProfileContext'

function Navbar() {

    let themeTypes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

    const { updateTheme } = useContext(UserProfileContext)

    const onClickUpdateTheme = (themeName) => {
        updateTheme(themeName);
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Github finder</Link>
            </div>

            <div className="navbar-end mr-6">

                <ThemeSelector themeTypes={themeTypes} onThemeUpdate={onClickUpdateTheme} />
                <Link className="btn" to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar