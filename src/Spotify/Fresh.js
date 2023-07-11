import React from 'react';
import Artistdiv from './Artistdiv';

function Fresh() {
    return (
        <>
            <div>
                <div className='artistcomp p-5'>
                    <h3 className='text-white'>Fresh new music</h3>
                    <div className='artistcomp d-flex flex-wrap'>
                        <Artistdiv image={require("./pix folder/Emma-Lagbo.jpg")} name="EmmaOMG" />
                        <Artistdiv image={require("./pix folder/Emma-ObaNiJESU.jpg")} name="EmmaOMG - OBA NI JESU" />
                        <Artistdiv image={require("./pix folder/Emma-Series1.jpg")} name="Make You No Worry - song and lyrics by EmmaOhMaGod" />
                        <Artistdiv image={require("./pix folder/MercyC-Come....jpg")} name="Mercy Chinwo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fresh