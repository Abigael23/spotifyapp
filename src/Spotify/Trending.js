import React from 'react';
import Artistdiv from './Artistdiv';

function Trending() {
    return (
        <>
            <div>
                <div className='artistcomp p-5'>
                    <h3 className='text-white'>Trending now near you</h3>
                    <div className='artistcomp d-flex flex-wrap'>
                        <Artistdiv image={require("./pix folder/MercyC-Obinasom.jpg")} name="Obinasom - song and lyrics by Mercy Chinwo" />
                        <Artistdiv image={require("./pix folder/MercyC-Satisfied.jpg")} name="Satisfied - Mercy Chinwo" />
                        <Artistdiv image={require("./pix folder/NathanielB-Ama.jpg")} name="I love you / Ama - Nathaniel Bassey" />
                        <Artistdiv image={require("./pix folder/NathanielB-GOD.jpg")} name="This GOD is too good - Nathaniel Bassey" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending