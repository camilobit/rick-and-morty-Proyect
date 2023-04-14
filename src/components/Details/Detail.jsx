import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '44a605cc5688.d3c9b32c126b4f9eed23';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
              setIsLoading(false);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    if (isLoading) {
        
        return (
        <div class="container-spinner">
            <div class="spinner-border text-dark" role="status">
                <span class="text-spinner visually-hidden">Cargando Datos</span>
            </div>
        </div>
        )    
    } return(
        <div class="detail-container ">
            <div>
                <img class="img-detail" src={character?.image} alt={character?.name} />
            </div>
            <NavLink to="/home" ><i id="icon" class=" bi bi-arrow-left-square"></i></NavLink>
                
            <div class="text-detail">
                <h2>Nombre: {character?.name}</h2>
                {/* ambas formas son lo mismo la de arriba es mas usada, hay que poner los condicionales para que espere la info del servidor ya que es una accion asincrona */}
                <h2>Estado: {character && character.status}</h2>
                <h2>Especie: {character?.species}</h2>
                <h2>Genero: {character?.gender}</h2>
                <h2>Origen: {character?.origin?.name}</h2>
            </div>
        </div>
    )
}


export default Detail;