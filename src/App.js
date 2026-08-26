
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { colors } from './constant';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';

function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="App container" style={{backgroundColor:colors.primary['black-100'], color:colors.secondary['white-100']}}>
      <Navbar active={active} setActive={setActive}/>
      <HeroSection/>
      {/* <AboutMe/> */}
    </div>
  );
}

export default App;
