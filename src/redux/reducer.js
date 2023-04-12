import { ADD_FAV, REMOVE_FAV } from "./actions"


const initialState = {
    myFavorites: []
}


const reducer = (state = initialState, action) => {
    //const numberid = Number(id);

    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.push(state.character)
            }
        
        case REMOVE_FAV:
            return {
                ...state,
                //myFavorites: state.myFavorites.filter(id => (math.floor(id)) !== {id})
                //myFavorites: state.myFavorites.filter.Number(id)(id => id !== {id})
                myFavorites: state.myFavorites.filter(id => id != {id})

            }
        
        default:
            return { ...state }
    }
}                                                                           

export default reducer;



// const animales = ['perro', 'gato', 'oso', 'pájaro', 'hormiga'];

// const resultado = animales.filter(animal => animal != 'oso');
// console.log(resultado);

// Resultado -> ["perro", "gato", "pájaro", "hormiga"]