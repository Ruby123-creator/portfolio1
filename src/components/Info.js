import React from 'react'

const Info =(props)=>{
    return (
        <div className={props.value}>
            <h2 className='m-5 text-center text-4xl font-bold text-green-700 '>{props.heading}</h2>
            <p className='text-lg m-2 bg-gray-300'>{props.description}</p>
        </div>
    )
}

export default Info