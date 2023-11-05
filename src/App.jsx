import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Games from './Pages/Games';
import Genre from './Pages/Genre';
import Contact from './Pages/Contact';
import Notfound from './Pages/Notfound';
import GameData from './Pages/GameData';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/games" element={ <Games />} />
        <Route path="/games/:uniqueId" element={<GameData/>} />
        <Route path="/genre" element={ <Genre />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="*" element={ <Notfound />} />
      </Routes>
    </>
  )
}

export default App
