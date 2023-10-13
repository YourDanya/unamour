import {create} from 'zustand'
import {sortFavorites} from 'app/_common/store/favorites/favorites.utils'
import {FavoritesStore} from 'app/_common/store/favorites/favorites.types'

const useFavoritesStore = create<FavoritesStore>((set) => ({
    favorites: [],
    addFavorite: ({color, id}) => set((state) => {
        const favorites = sortFavorites([...state.favorites, {color, id}])
        return {
            favorites
        }
    }),
    removeFavorite: ({color, id}) => set((state) => {
        const favorites = state.favorites
        const findIndex = favorites.findIndex((item) => item.id === id && item.color === color)
        if (findIndex !== -1) {
            favorites.splice(findIndex, 1)
        }
        return {
            favorites
        }
    })
}))

export default useFavoritesStore