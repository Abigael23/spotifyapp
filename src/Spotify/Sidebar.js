import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div className='sidediv w-25'>
                <div className='sidebardiv w-100 text-white'>
                    <p>
                        <Link className='nav-link' to={"/"}>
                            <button>
                                <i className='bi bi-house-door-fill'></i>
                                <h6>Home</h6>
                            </button>
                        </Link>
                    </p>
                    <div className='click'>
                        <Link>
                            <button>
                                <h6>Click here</h6>
                            </button>
                        </Link>
                    </div>
                    <p>
                        <Link className='nav-link' to={"/search"}>
                            <button>
                                <i className='bi bi-search'></i>
                                <h6>Search</h6>
                            </button>
                        </Link>

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