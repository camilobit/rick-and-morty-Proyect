import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '44a605cc5688.d3c9b32c126b4f9eed23';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);


    return(
        <div class="tarjeta">
            <h2>Nombre: {character?.name}</h2>
            {/* ambas formas son lo mismo la de arriba es mas usada, hay que poner los condicionales para que espere la info del servidor ya que es una accion asincrona */}
            <h2>Estado: {character && character.status}</h2>
            <h2>Especie: {character?.species}</h2>
            <h2>Genero: {character?.gender}</h2>
            <h2>Origen: {character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;