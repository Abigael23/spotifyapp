import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route path='/' element={<Homepg />} />
            <Route path='/search' element={<Searchpg />} />
          </Routes>
          {/* <Playercomp /> */}
        </div>
        {/* <Playercomp /> */}
      </div>
    </>
  );
}

export default App;
