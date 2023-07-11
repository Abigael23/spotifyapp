import React from 'react';
// import Narbar from './Navbar';
import Artistcomp from './Artistcomp';
import Madecomp from './Madecomp';
import Mood from './Mood';
import Throwback from './Throwback';
import Unique from './Unique';
import Happy from './Happy';
import Fresh from './Fresh';
import Focus from './Focus';
import Trending from './Trending';

function Component1() {
  return (
    <>
      <div className='divone'>
        {/* <Navbar /> */}
        <Artistcomp />
        <Madecomp />
        <Unique />
        <Mood />
        <Throwback />
        <Happy />
        <Fresh />
        <Focus />
        <Trending />
      </div>
    </>
  )
}

export default Component1