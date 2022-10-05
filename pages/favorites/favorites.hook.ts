import {useState} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import favoritesContent from 'pages/favorites/favorites.content'

const useFavorites = () => {
    const [favorites] = useState(null)
    const [transl] = useLocale(favoritesContent)

    return {favorites, transl}
}

export default useFavorites