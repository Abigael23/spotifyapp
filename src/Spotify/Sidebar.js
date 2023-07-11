import React from 'react'
// import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div className='sidediv w-25'>
                <div className='sidebardiv w-100 text-white'>
                    <p>
                        {/* <Link className='nav-link' to={"/home"}> */}
                            <i className='bi bi-house-door-fill'></i>
                            Home
                        {/* </Link> */}
                    </p>
                    <p>
                        {/* <i class="bi bi-code"></i> */}
                        {/* <Link className='nav-link' to={"/search"}> */}
                            <i className='bi bi-search'></i>
                            Search
                        {/* </Link> */}

                    </p>
                </div>
                <div className='sidebardiv w-100 text-white'>
                    <p>
                        Your Library
                    </p>
                    <div className='sidebarsmdiv mx-auto'>
                        <p>
                            Create your first playlist
                        </p>
                        <p>
                            It's easy, we'll help you
                        </p>
                        <button className='btn1 text-black'>Create playlist</button>
                    </div>
                    <div className='sidebarsmdiv mx-auto'>
                        <p>
                            Create your first playlist
                        </p>
                        <p>
                            It's easy, we'll help you
                        </p>
                        <button className='btn1 text-black'>Browse podcasts</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar