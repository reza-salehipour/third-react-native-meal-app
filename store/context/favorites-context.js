import {createContext} from 'react'

export const FavoritesContext = createContext({
    ids: [],
    addFavorites: (id) => {
    },
    removeFavorites: (id) => {
    }
})

function FavoritesContextProvider({children}) {

    const [favoriteMealId, setFavoriteMealId] = useState([]);

    function addFavorite(id) {
        setFavoriteMealId((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealId((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }

    const value = {
        id: favoriteMealId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;