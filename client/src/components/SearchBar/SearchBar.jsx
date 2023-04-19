import { useState } from "react";

export default function SearchBar({ onSearch }) {
   
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div class= "buscador">
         <input class="inputsearch form-control" type='search color'  onChange={handleChange} value={id} />
         
         <button class ="btn btn-dark" onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
