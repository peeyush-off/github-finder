import { useEffect, useContext } from 'react'
import Spinner from '../shared/Spinner'
import Repo from '../shared/Repo'
import { Link, useParams } from 'react-router-dom'
import {FaUsers, FaUserFriends, FaStore, FaCodepen} from 'react-icons/fa'

import GithubContext from '../../context/Github/GithubContext'

function User() {

    const githubContext = useContext(GithubContext)

    const params = useParams()
    const { getUser, loading, user, repos, getUserRepos } = githubContext

    useEffect(() => {
        getUser(params.login)
        getUserRepos(params.login)
    }, [])

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        type,
        twitter_username
    } = user

    if (loading) return <Spinner />

    return (

        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to='/' className='btn btn-ghost'>
                        Back To Search
                    </Link>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-xl card image-full">
                            <figure>
                                <img src={avatar_url} alt=''></img>
                            </figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title mb-0">
                                    {name}
                                </h2>
                                <p>{login}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title">
                                {name}
                                <div className="ml-2 mr-1 badge badge-success">
                                    {type}
                                </div>
                                {
                                    hireable && (
                                        <div className="mx-1 badge badge-info">
                                            Hireable
                                        </div>
                                    )
                                }
                            </h1>
                            <p>{bio}</p>
                            <div className="mt-4 card-actions">
                                <a href={html_url} className='btn btn-outline' target='_blank' rel='noreferrer'>
                                    Visit Github Profile
                                </a>
                            </div>
                        </div>

                        <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                            {location && (
                                <div className="stat">
                                    <div className="stat-title text-md">Location</div>
                                    <div className="stat-value text-lg">{location}</div>

                                </div>
                            )}
                            {blog && (
                                <div className="stat">
                                    <div className="stat-title text-md">Website</div>
                                    <div className="stat-value text-lg">
                                        <a href={`https://${blog}`} target='_blank' rel='noreferrer'>
                                            {blog}
                                        </a>
                                    </div>

                                </div>
                            )}
                            {twitter_username && (
                                <div className="stat">
                                    <div className="stat-title text-md">Twitter</div>
                                    <div className="stat-value text-lg">
                                        <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>
                                            {twitter_username}
                                        </a>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className ="text-3xl md:text-5xl" />
                        </div>
                        <div className="stat-title pr-5">
                            Followers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {followers}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className ="text-3xl md:text-5xl" />
                        </div>
                        <div className="stat-title pr-5">
                            Following
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {following}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaCodepen className ="text-3xl md:text-5xl" />
                        </div>
                        <div className="stat-title pr-5">
                            Public Repos
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {public_repos}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStore className ="text-3xl md:text-5xl" />
                        </div>
                        <div className="stat-title pr-5">
                            Public Gists
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {public_gists}
                        </div>
                    </div>
                </div>

                <Repo repos={repos}/>
            </div>
        </>

        // <>

        //     Hireable:{' '}
        //     {hireable ? (
        //         <i className='fas fa-check text-success' />
        //     ) : (
        //         <i className='fas fa-times-circle text-danger' />
        //     )}
        //     <div className='card grid-2'>
        //         <div className='all-center'>
        //             <img
        //                 src={avatar_url}
        //                 className='round-img'
        //                 alt=''
        //                 style={{ width: '150px' }}
        //             />
        //             <h1>{name}</h1>
        //             <p>Location: {location}</p>
        //         </div>
        //         <div>
        //             {bio && (
        //                 <>
        //                     <h3>Bio</h3>
        //                     <p>{bio}</p>
        //                 </>
        //             )}
        //             <a href={html_url} className='btn btn-dark my-1'>
        //                 Visit Github Profile
        //             </a>
        //             <ul>
        //                 <li>
        //                     {login && (
        //                         <>
        //                             <strong>Username: </strong> {login}
        //                         </>
        //                     )}
        //                 </li>

        //                 <li>
        //                     {company && (
        //                         <>
        //                             <strong>Company: </strong> {company}
        //                         </>
        //                     )}
        //                 </li>

        //                 <li>
        //                     {blog && (
        //                         <>
        //                             <strong>Website: </strong> {blog}
        //                         </>
        //                     )}
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div className='card text-center'>
        //         <div className='badge badge-primary'>Followers: {followers}</div>
        //         <div className='badge badge-success'>Following: {following}</div>
        //         <div className='badge badge-light'>Public Repos: {public_repos}</div>
        //         <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        //     </div>
        //     <Repos repos={repos} />
        // </>
    )
}

export default User