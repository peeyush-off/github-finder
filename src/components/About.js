import React from 'react'
import AboutImg from '../res/img/about.svg' 

function About() {
    return (
        <>
        <div className='flex items-center text-center'>
            <div className='w-2/6'>
                <h1 className="mb-5 text-5xl font-bold">Github finder</h1>
                <p className="py-6">App to search Github users and look at user profiles</p>
                <p className='badge badge-lg'>Version: 1.0.0</p>
            </div>
            <div className='w-4/6'>
                <img className='w-5/6' src={AboutImg} alt="About image"/>
            </div>
        </div>
        </>
    )
}

export default About