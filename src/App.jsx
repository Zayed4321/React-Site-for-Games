import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Games from './Pages/Games';
import Genre from './Pages/Genre';
import Contact from './Pages/Contact';
import Notfound from './Pages/Notfound';
import GameData from './Pages/GameData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GameCart from "./Pages/GameCart";


function App() {

  return (
    <>
      <ToastContainer position="bottom-left" autoClose={2000} limit={2} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="light" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:uniqueId" element={<GameData />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<GameCart />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
