export type FavoritesStore = {
    favorites: {id: string, color: string}[],
    setFavoritesFromUser: (params: {favorites: string[], favoritesColors: string[]}) => void,
    addFavorite: (params: {color: string, id: string}) => void,
    removeFavorite: (params: {color: string, id: string}) => void
}

export type Favorite = {id: string, color: string}

export type FavoritesSort = (favorites: Favorite[]) => Favorite[]
