import React from 'react';
import Artistdiv from './Artistdiv';

function Artistcomp() {
    return (
        <>
            <div className='artistcomp p-5'>
                <h3 className='text-white'>Recently played</h3>
                    <div className='artistcomp d-flex flex-wrap'>
                        <Artistdiv image={require("./pix folder/mercychinw.jpg")} name="Mercy Chinwo" />
                        <Artistdiv image={require("./pix folder/Dunsin-Oyekan-3.jpg")} name="Dunsin Oyekan" />
                        <Artistdiv image={require("./pix folder/Nathaniel Bassey.jpg")} name="Nathaniel Bassey" />
                        <Artistdiv image={require("./pix folder/mercychinw.jpg")} name="Mercy Chinwo" />
                    </div>
            </div>
        </>
    )
}

export default Artistcomp