import React from 'react'

let Skills=(props)=>{
    return(
        <div className='flex border rounded shadow-lg shadow-gray-600 border-black m-5 p-5 w-60'>
            <div>
            <img width="50" src={props.image} alt="" />

            </div>
            <div className='ml-2'>
            <h1 className='text-lg'>skills:{props.name}</h1>

                <p>Level: {props.friendly}</p>
            </div>
        </div>
    )
}
export default Skills;