import { AiOutlineDoubleRight } from 'react-icons/ai';

function Card({ imageLink, userName, profileDetailsURL }) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full m-10 cursor-pointer transform transition duration-500 hover:scale-110 group">
            <figure><img className='h-96' src={imageLink} alt="avatar" /></figure>
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