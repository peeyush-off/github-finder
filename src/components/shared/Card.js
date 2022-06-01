import { AiOutlineDoubleRight } from 'react-icons/ai';

function Card({ imageLink, userName, profileDetailsURL }) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full m-10 cursor-pointer">
            <figure><img className='h-96' src={imageLink} alt="avatar" /></figure>
            <div className="card-body justify-between">
                <h2 className="card-title">{userName}</h2>
                <div className="card-actions justify-end">
                    <button className="btn"><AiOutlineDoubleRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Card