import React from 'react';
import Artistdiv from './Artistdiv';

function Mood() {
    return (
        <>
            <div>
                <div className='artistcomp p-5'>
                    <h3 className='text-white'>Mood</h3>
                    <div className='artistcomp d-flex flex-wrap'>
                        <Artistdiv image={require("./pix folder/Dunsin-YHWH.jpg")} name="YHWH - song and lyrics by Dunsin Oyekan" />
                        <Artistdiv image={require("./pix folder/Dunsin-OpenUp.jpg")} name="Open Up - song and lyrics by Dunsin Oyekan" />
                        <Artistdiv image={require("./pix folder/Emma-Baba loke.jpg")} name="EMMA (OH MA GOD!) - BabaLoke" />
                        <Artistdiv image={require("./pix folder/Emma-Church.jpg")} name="How Great Is Our God(Yoruba Version)- song and lyrics by ..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mood