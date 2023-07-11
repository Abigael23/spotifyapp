import React from 'react';
import Artistdiv from './Artistdiv';

function Happy() {
    return (
        <>
            <div>
                <div className='artistcomp p-5'>
                    <h3 className='text-white'>Happy</h3>
                    <div className='artistcomp d-flex flex-wrap'>
                        <Artistdiv image={require("./pix folder/MercyC-Confidence.jpg")} name="New Music: Mercy Chinwo - Confidence" />
                        <Artistdiv image={require("./pix folder/MercyC-Cross.jpg")} name="Mercy Chinwo - The Cross" />
                        <Artistdiv image={require("./pix folder/MercyC-Elevated Mix.jpg")} name="Mercy Chinwo - Elevated Mix EP" />
                        <Artistdiv image={require("./pix folder/MercyC-Elevated.jpg")} name="Mercy Chinwo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Happy