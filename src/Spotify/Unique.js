import React from 'react';
import Artistdiv from './Artistdiv';

function Unique() {
    return (
        <>
            <div>
                <div className='artistcomp p-5'>
                    <h3 className='text-white'>Uniquely yours</h3>
                    <div className='artistcomp d-flex flex-wrap'>
                        <Artistdiv image={require("./pix folder/MercyC-Obinasom.jpg")} name="Obinasom - song and lyrics by Mercy Chinwo" />
                        <Artistdiv image={require("./pix folder/MercyC-Satisfied.jpg")} name="Satisfied - Mercy Chinwo" />
                        <Artistdiv image={require("./pix folder/NathanielB-Someone.jpg")} name="Nathaniel Bassey - Someone's at the door" />
                        <Artistdiv image={require("./pix folder/NathanielB-TOBECHUKWU.jpg")} name="Nathaniel Bassey - TOBECHUKWU" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Unique