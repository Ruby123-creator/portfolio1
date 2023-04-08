import React from 'react'

const Header = (props)=>{
    return(
        <div className=''>
            <div className="navbar text-white flex font-bold flex-col bg-blue-900 justify-center items-center">
                <div className="name text-4xl">
                    <h1>{props.name}</h1>
                </div>
                <div className="properties">
                    <ul className='flex justify-center gap-4 text-lg font-semibold'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>

                        <li><a href="">Skills</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">{props.details}</a></li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;