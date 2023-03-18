import {useGetParamForImages, useLocale} from 'hooks/other/other.hooks'
import favoritesContent from 'pages/favorites/favorites.content'

const useFavorites = () => {
    const [transl] = useLocale(favoritesContent)

    // const {} = useApiCall()

    const {width, height, elemRef} = useGetParamForImages()

    return {items, transl, width, height, elemRef}
}

export default useFavorites