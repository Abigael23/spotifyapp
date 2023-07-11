import React from 'react'

function Playercomp() {
  return (
    <>
        <div className='playerdiv mx-auto w-50'>
        <div className='w-25 font mx-auto'>
        <i class="bi bi-shuffle"></i>
        <i class="bi bi-skip-start-fill"></i>
        <i class="bi bi-pause-circle-fill"></i>
        <i class="bi bi-skip-end-fill"></i>
        </div>
         <div>
         <input className='w-100' type="range" name="" id="" />
         </div>
        </div>
    </>
  )
}

export default Playercomp