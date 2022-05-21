import React, { createContext, useState } from 'react'
export const FavoritesContext = createContext();

export function FavoritesContextProvider(props) {
    const [favoriteList, setFavoriteList] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{
                favoriteList, setFavoriteList
            }}
        >
            {props.children}
        </FavoritesContext.Provider>
    )
}