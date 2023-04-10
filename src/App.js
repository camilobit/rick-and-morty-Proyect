import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

const API_KEY = '44a605cc5688.d3c9b32c126b4f9eed23';
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'

function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>

            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />

            <Route path='/about' element={<About/>} />

            <Route path='/detail/:id' element={<Detail/>} />

         </Routes>
      </div>
   );
}

export default App;
