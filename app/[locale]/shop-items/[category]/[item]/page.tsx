import {ShopItemPageProps} from 'app/[locale]/shop-items/[category]/[item]/shop-item.types'
import {FetchedItem} from 'app/[locale]/_common/types/types'
import ShopItem from 'app/[locale]/shop-items/[category]/[item]/_components/shop-item.component'
import {apiCall} from 'app/[locale]/_common/utils/api/api-v2.utils'
import {notFound} from 'next/navigation'

const ShopItemPage = async (props: ShopItemPageProps) => {
    const {color} = props.searchParams
    let {item: slug} = props.params

    const {data} = await apiCall<{ item: FetchedItem }>(`shop-item/${slug}?color=${color}`,{
        cache: 'no-cache'
    })
    const item = data?.item
    if (!item) {
        return notFound()
    }

    return (<ShopItem {...item}/>)
}

export default ShopItemPage