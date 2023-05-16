import {ShopItemsPageProps} from 'app/[locale]/shop-items/[category]/shop-items.types'
import ShopItems from 'app/[locale]/shop-items/[category]/_components/shop-items.component'
import {CategoryItem} from 'app/[locale]/_common/types/types'
import {apiCall} from 'app/[locale]/_common/utils/api/api-v2.utils'

const ShopItemsPage = async (props: ShopItemsPageProps) => {
    const {params} = props

    let {category} = params as Record<string, string>
    const {data} = await apiCall<{ items: CategoryItem[]}>(`shop-item/category/${category}`, {
        cache: 'no-cache'
    })
    let items = data?.items

    return (<ShopItems items={items}/>)
}

export default ShopItemsPage
