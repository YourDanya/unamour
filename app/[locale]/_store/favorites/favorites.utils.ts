import {FavoritesSort} from 'app/[locale]/_store/favorites/favorites.types'

export const sortFavorites: FavoritesSort = (favorites) => {
    return favorites.sort((current, next) => {
        const currentValue = current.id + current.color
        const nextValue = next.id + next.color
        if (currentValue < nextValue) {
            return -1
        } else if (currentValue === nextValue) {
            return 0
        } else {
            return 1
        }
    })
}