import { TOGGLE_FAVORITES,REMOVE_FAVORITE,ADD_FAVORITE } from "../actions/favoritesActions";

const initialState={
    favorites: [],
    displayFavorites: true,
}

const reducer= (state=initialState,action)=>{

    switch(action.type){
        case ADD_FAVORITE:{
            let adder={
                id : action.payload.id,
                title: action.payload.title
            }
            if(!state.favorites.includes(action.payload.id) ){
                return {...state, favorites: [...state.favorites,adder]}
            }
            else return state
        }
        case REMOVE_FAVORITE:{
            return {...state, favorites: state.favorites.filter((item) =>item.id === action.payload) }
        }
        
       default:
        return state;
    }
};  
export default reducer