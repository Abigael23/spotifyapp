import React from 'react';

function Artistdiv(props) {
  return (
    <>
        <div className='artistdiv w-25'>
            <div className='divtwo'>
            <img src={props.image} className='w-100 rounded' alt="" />
            <p className='text-white'>{props.name}</p>
            </div>
        </div>
    </>
  )
}

export default Artistdiv