import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { connect } from 'react-redux'

export function Card({ name, species, gender, origin, status, image, id, onClose, addFav, removeFav, myFavorites }) {

const [ isFav, setIsFav] = useState(false);

const handleFavorite = (mapDispatchToProps) => {
   if( setIsFav === true) {
      return useState = false && removeFav(mapDispatchToProps)
   }
   else{ 
      return useState = true && addFav(mapDispatchToProps)
   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div class="tarjeta">
         <button onClick={() => onClose(id)}>X</button>
         {
            isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         }
         <NavLink to={`/detail/${id}`}>
         <h2> {name}</h2>
         </NavLink>
         {/* <h2> {species}</h2>
         <h2> {gender}</h2>
         <h2> {origin}</h2>
         <h2> {status}</h2> */}
         <img src={image} alt='' />
      </div>
   );
}



const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: () => dispatch(addFav()),
      removeFav: () => dispatch(removeFav())
   }
}




export default connect(
   mapStateToProps,//me permite acceder al estado global
   mapDispatchToProps//me permite despachar acciones
)(Card);