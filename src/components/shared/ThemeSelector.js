import React, { useContext } from 'react'
import UserProfileContext from '../../context/UserProfile/UserProfileContext'

function ThemeSelector() {
    let themeTypes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

    const {updateTheme} = useContext(UserProfileContext)

    const onClickUpdateTheme = (themeName) => {
        updateTheme(themeName);
    }
    return (
        <div className="dropdown dropdown-end mr-5">
            <label tabIndex="0" className="btn btn-ghost rounded-btn">Theme</label>
            <ul tabIndex="0" className="menu dropdown-content p-2 bg-base-100 rounded-box w-52 mt-4 max-h-96 overflow-scroll shadow-lg">
                {themeTypes.map((val, index) => {
                    return (
                        <li onClick={() => onClickUpdateTheme(val)} key={index} data-theme={val}><a>{val.toUpperCase()}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ThemeSelector