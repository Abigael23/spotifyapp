import React from 'react';
import Artistdiv from './Artistdiv';

function Focus() {
    return (
        <>
            <div>
                <div className='artistcomp p-5'>
                    <h3 className='text-white'>Focus</h3>
                    <div className='artistcomp d-flex flex-wrap'>
                        <Artistdiv image={require("./pix folder/NathanielB-Halleluyah Again.jpg")} name="Hallelujah Again - Nathaniel Bassey" />
                        <Artistdiv image={require("./pix folder/NathanielB-Imela.jpg")} name="Imela - Single by Nathaniel Bassey" />
                        <Artistdiv image={require("./pix folder/NathanielB-King.jpg")} name="The KING is coming - Nathaniel Bassey " />
                        <Artistdiv image={require("./pix folder/NathanielB-Onise.jpg")} name="Nathaniel Bassey - Onise Iyanu" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Focus