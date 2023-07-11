import React from 'react';
import Artistdiv from './Artistdiv';

function Throwback() {
    return (
        <>
            <div>
                <div className='artistcomp p-5'>
                    <h3 className='text-white'>Throwback</h3>
                    <div className='artistcomp d-flex flex-wrap'>
                        <Artistdiv image={require("./pix folder/Dunsin-Halleluyah.jpg")} name="Hallelujah (Live at Code Red 5)- song and lyrics by Dunsin Oyekan" />
                        <Artistdiv image={require("./pix folder/Dunsin-Here.jpg")} name="I'll Be Here - song and lyrics by Dunsin Oyekan" />
                        <Artistdiv image={require("./pix folder/Dunsin-I proclaim.jpg")} name="I Proclaim - song and lyrics by Dunsin Oyekan" />
                        <Artistdiv image={require("./pix folder/Dunsin-Kingdom.jpg")} name="Breathe - song and lyrics by Dunsin Oyekan" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Throwback