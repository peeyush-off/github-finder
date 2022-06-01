import { AiOutlineDoubleRight } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"

function Card({ imageLink, userName, profileDetailsURL }) {

    const navigate = useNavigate()

    const goToUserProfile = (userName) => {
        navigate(`/user/${userName}`)
    }
    return (
        <div onClick={() => goToUserProfile(userName)} className="card w-72 bg-base-100 shadow-xl cursor-pointer image-full m-10 transform transition duration-500 hover:scale-110 group">
            <figure><img className='h-32' src={imageLink} alt="avatar" /></figure>
            <div className="card-body justify-between">
                <h2 className="card-title">{userName}</h2>
                <div className="card-actions justify-end">
                    <button className="btn invisible group-hover:visible group-hover:animate-pulse"><AiOutlineDoubleRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Card