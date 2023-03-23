import {useRouter} from 'next/router'
import {Locale} from 'types/types'
import {FavoriteItemProps} from 'components/favorites/favorite-item/favorite-item.types'

const useFavoriteItem = (props: FavoriteItemProps) => {
    const locale = useRouter().locale as Locale

    return {locale}
}

export default useFavoriteItem