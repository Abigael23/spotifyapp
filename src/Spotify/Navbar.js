import React from 'react';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand text-primary" href="#">BOLD-SPOTIFY</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex" role="search">
                            <div className='divsearch w-100 d-flex bg-black rounded text-secondary'>
                                <i className='bi bi-search py-2'></i>
                                {/* <input class="form-control me-3 bg-black" type="search" placeholder="What do you want to listen to?" aria-label="Search" /> */}
                                <input type="search" placeholder="What do you want to listen to?" />
                            </div>
                        </form>
                        <div>
                            <i className="bi bi-code"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar