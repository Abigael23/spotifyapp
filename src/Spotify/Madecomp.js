import React from 'react';
import Artistdiv from './Artistdiv';
function Madecomp() {
    return (
        <>
            <div>
                <div className='artistcomp p-5'>
                    <h3 className='text-white'>Made For Abigael Daramola</h3>
                    <div className='artistcomp d-flex flex-wrap'>
                        <Artistdiv image={require("./pix folder/Dunsin-Amazing.jpg")} name="Amazing - song and lyrics by Dunsin Oyekan" />
                        <Artistdiv image={require("./pix folder/Dunsin-Ascend.jpg")} name="Ascend - song and lyrics by Dunsin Oyekan" />
                        <Artistdiv image={require("./pix folder/Dunsin-Fragrance.jpg")} name="Fragrance to Fire - song and lyrics by Dunsin Oyekan" />
                        <Artistdiv image={require("./pix folder/Dunsin-Gospel.jpg")} name="The Gospel of The Kingdom by Dunsin Oyekan" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Madecomp