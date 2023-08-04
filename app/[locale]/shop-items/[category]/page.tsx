import {ShopItemsPageProps} from 'app/[locale]/shop-items/[category]/shop-items.types'
import ShopItems from 'app/[locale]/shop-items/[category]/_components/shop-items.component'
import {CategoryItem} from 'app/_common/types/types'
import {apiCall} from 'app/_common/utils/api/api-v2.utils'

const ShopItemsPage = async (props: ShopItemsPageProps) => {
    const {params, searchParams} = props

    let {category} = params as Record<string, string>

    const paramUrl = Object.entries(searchParams).reduce((paramUrl, [name, value]) => {
        if (paramUrl === '') {
            paramUrl = `?${name}=${value}`
        } else {
            paramUrl += `&${name}=${value}`
        }
        return paramUrl
    }, '')

    const {data} = await apiCall<{ items: CategoryItem[]}>(`shop-item/category/${category}${paramUrl}`, {
        cache: 'no-cache'
    })
    let items = data?.items

    return (<ShopItems items={items}/>)
}

export default ShopItemsPage
