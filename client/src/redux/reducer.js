import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, TOGGLE_FAVORITE } from "./action-types"


const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, {type, payload}) => {
    

    switch( type ){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            }
        
            case REMOVE_FAV: 
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            }

        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === payload)
            
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharacters]
                    : allCharactersFiltered
            }

            case ORDER:
                const allCharactersFavCopy = [...state.allCharacters]
                return {
                    ...state,
                    myFavorites:
                        payload === 'A'
                        ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                        : allCharactersFavCopy.sort((a, b) => b.id - a.id)
                }

                case TOGGLE_FAVORITE:
                    const isFavorite = state.myFavorites.some(fav => fav.id === payload);
                    if (isFavorite) {
                        return {
                            ...state,
                            myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
                        }
                    } else {
                        const character = state.allCharacters.find(char => char.id === payload);
                        if (character) {
                            return {
                                ...state,
                                myFavorites: [...state.myFavorites, character]
                            }
                        } else {
                            return state;
                        }
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