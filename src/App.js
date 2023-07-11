import logo from './logo.svg';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Spotify/Sidebar';
import Homepg from './Spotify/Homepg';
import Navbar from './Spotify/Navbar';
import Searchpg from './Spotify/Searchpg';
import Playercomp from './Spotify/Playercomp';

function App() {
  return (
    <>
     <div className='body'>
     <div>
        <Sidebar />
        <Navbar />
        <Homepg />
        {/* <Search /> */}
        {/* <Routes>
        <Route path='/home' element={<Homepg />} />
        <Route path='/search' element={<Searchpg />} />
        </Routes> */}
      </div>
      <Playercomp />
     </div>
    </>
  );
}

export default App;
