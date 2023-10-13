import {ShopItemsPageProps} from 'app/[locale]/shop-items/[category]/shop-items.types'
import ShopItems from 'app/[locale]/shop-items/[category]/_components/shop-items.component'
import {CategoryItem} from 'app/_common/types/category-item'
import {apiCall} from 'app/_common/utils/api/api-v2.utils'
import {sleep} from 'app/_common/utils/helpers/sleep/sleep.util'

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

    const {data} = await apiCall<{ items: CategoryItem[], total: number}>(
        `shop-item/category/${category}${paramUrl}`, {
        cache: 'no-cache'
    })
    const items = data?.items
    const total = data?.total

    return (<ShopItems items={items} total={total}/>)
}

export default ShopItemsPage
