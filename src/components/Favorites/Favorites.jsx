import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux'
import { filterCards, orderCards, toggleFavorite } from '../../redux/actions';
import { useState } from 'react';

const Favorites = ({ myFavorites }) => {

    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const [aux, setAux] = useState(false);    


    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    const handleToggleFavorite = (event, id) => {
        dispatch(toggleFavorite(id));
    }

    return (
        <div >
            <div class="filtro">
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="allCharacters">All Characters</option>
                </select>
            </div>

            <div class="contenedor-cards">
            {
                myFavorites?.map(fav => {
                    return (
                        <div key={fav.id}>
                        <label class="checkbox">
                            <input type="checkbox" checked={true} onChange={(event) => handleToggleFavorite(event, fav.id)} />
                            <span className="checkmark"></span>
                            Eliminar
                        </label>
                        <Card
                            key={fav.id}
                            name={fav.name}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,//me permite acceder al estado global
    null//me permite despachar acciones
)(Favorites);