import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from 'react-redux'

function Card({ name, species, gender, origin, status, image, id, onClose, addFav, removeFav, myFavorites }) {

const [ isFav, setIsFav] = useState(false);

const handleFavorite = () => {
   if( isFav) {
      setIsFav(false);
      removeFav(id);
   } else{
      setIsFav(true);
      addFav({name, species, gender, origin, status, image, id, onClose})
   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [id, myFavorites]);

   return (
   <div class="tarjeta">
         {/* <button onClick={handleFavorite}>{isFav ? '❤️':'🤍'}</button>
         
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </Link>
         {/* <h2> {species}</h2>
         <h2> {gender}</h2>
         <h2> {origin}</h2>
         <h2> {status}</h2> */}
         {/* <img src={image} alt={name} /> */}


         <div class="ContainerCard">
            <div class="card">
               <div class="imgStore">
                  <img src={image} alt={name} />
                  <div class="contentcard">
                     <div class="container-action">
                        <button class="button-action corazon" onClick={handleFavorite}>{isFav ? <i class="bi bi-heart-fill"></i>:<i class="bi bi-heart"></i>}</button>
                     <NavLink to={`/detail/${id}`}><h2>{name}</h2></NavLink>
                        <button class="button-action X" onClick={() => onClose(id)}>X</button>

                     </div>

                  </div>

               </div>

            </div>

         </div>




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
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}




export default connect(
   mapStateToProps,//me permite acceder al estado global
   mapDispatchToProps//me permite despachar acciones
)(Card);