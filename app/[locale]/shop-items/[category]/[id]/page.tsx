import {ShopItemPageProps} from 'app/[locale]/shop-items/[category]/[id]/shop-item.types'
import {FetchedItem} from 'app/[locale]/_common/types/types'
import ShopItem from 'app/[locale]/shop-items/[category]/[id]/_components/shop-item.component'
import {apiCall} from 'app/[locale]/_common/utils/api/api-v2.utils'

const ShopItemPage = async (props: ShopItemPageProps) => {
    let query = props.searchParams

    const {item: slug, color} = query
    const {data} = await apiCall<{ item: FetchedItem }>(`shop-item/${slug}?color=${color}`)
    const item = data?.item

    if (!item) {
        return {notFound: true}
    }

    return (
        <ShopItem {...item}/>
    )
}

export default ShopItemPage