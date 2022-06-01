import { IoIosArrowDown } from 'react-icons/io'


function ThemeSelector({ themeTypes, onThemeUpdate }) {

    return (
        <div className='dropdown dropdown-end'>
            <label tabIndex="0" className="btn btn-ghost rounded-btn">Theme <IoIosArrowDown className='ml-2' /> </label>
            <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
                <div className="grid grid-cols-1 gap-3 p-3">
                    {themeTypes.map((val, index) => {
                        return (
                            <div onClick={() => onThemeUpdate(val)} key={index} className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2" data-set-theme={val}>

                                <div data-theme={val} className="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div className="grid grid-cols-5 grid-rows-3"><div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"><div className="flex-grow text-sm font-bold">{val.toUpperCase()}</div> <div className="flex flex-shrink-0 flex-wrap gap-1"><div className="bg-primary w-2 rounded"></div> <div className="bg-secondary w-2 rounded"></div> <div className="bg-accent w-2 rounded"></div> <div className="bg-neutral w-2 rounded"></div></div></div></div></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ThemeSelector