import React from 'react'
import Artistdiv from './Artistdiv'

function Component2() {
    return (
        <>
            <div className='artistcomp p-5'>
                <h3 className='text-white'>Browse all</h3>
                <div className='artistcomp d-flex flex-wrap'>
                    <Artistdiv image={require("./pix folder/Search pix/Podcasts.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Madeforu.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Chart.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Release.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Discover.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Live.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Afro.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Pop.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Hip-Hop.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/R&B.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Frequency.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Gospel.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Soul.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Chill.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Mood.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Equal.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Alternative.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Workout.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Party.png")} />
                    <Artistdiv image={require("./pix folder/Search pix/Focus.png")} />
                </div>
            </div>
        </>
    )
}

export default Component2