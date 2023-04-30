/* eslint-disable jsx-a11y/alt-text */
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Details/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


// const API_KEY = '44a605cc5688.d3c9b32c126b4f9eed23';
// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'

// const email = 'juan@gmail.com';
// const password = '123juan';
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };
      }  catch (error) {
         alert('¡No hay personajes con este ID!');
         }
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }
   return (
      <div className='App'>
      
      
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>

            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />

            <Route path='/about' element={<About/>} />

            <Route path='/detail/:id' element={<Detail/>} />

            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
      </div>
   );
}

export default App;
