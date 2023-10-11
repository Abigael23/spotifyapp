import React from 'react';
// import Sidebar from './Sidebar';
import Component1 from './Component1';
import Playercomp from './Playercomp';
// import Navbar from './Navbar';
// import {Navigate, Route, Routes } from 'react-router-dom';

function Homepg() {
  return (
    <>
        <div className='homediv'>
            {/* <Sidebar /> */}
            {/* <Navbar /> */}
            <Component1 />
        </div>
        <Playercomp />
    </>
  )
}

export default Homepg