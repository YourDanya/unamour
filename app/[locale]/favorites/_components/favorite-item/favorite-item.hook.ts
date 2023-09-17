import {useRouter} from 'next/navigation'
import {FavoriteItemProps} from 'app/[locale]/favorites/_components/favorite-item/favorite-item.types'
import {Locale} from 'app/_common/types/types'
import {useParams} from 'next/navigation'

const useFavoriteItem = (props: FavoriteItemProps) => {
    const locale = useParams().locale as Locale

    return {locale}
}

export default useFavoriteItem