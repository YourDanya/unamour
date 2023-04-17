import {getShopItemsLayout} from 'components/shop-items/shop-items.component'
import ShopItems from 'app/_shop-items/[category]/components/shop-items.component'
import {CategoryItem} from 'redux/shop-items/shop-items.types'
import {apiCall} from 'utils/api/api-v3.utils'
import {ShopItemsPageProps} from 'app/_shop-items/[category]/shop-items.types'

const ShopItemsPage = async (props: ShopItemsPageProps) => {
    const {params} = props

    let {category} = params as Record<string, string>
    const {data} = await apiCall<{ items: CategoryItem[]}>(`shop-item/category/${category}`)
    let items = data?.items

    return (
        <ShopItems items={items}/>
    )
}

ShopItemsPage.getLayout = getShopItemsLayout

export default ShopItemsPage

// export const getServerSideProps =
//     wrapper.getServerSideProps(store =>
//     async (context) => {
//         let query = context.query
//         let {category, reset: _, ...other} = query as Record<string, string>
//         let param = ''
//         if (otherCategoriesContent.common.includes(category) && category !== 'all') {
//             param = `?${category}=true`
//         }
//         const {data} = await apiCall<{ items: CategoryItem[] }>(() =>
//             api.get(`shop-item/category/${category}${param}`)
//         )
//         let {items} = data as { items: CategoryItem[] }
//
//         const filters = other as Record<string, string>
//         items = filterItems(items, filters)
//
//         return {props: {items}}
//     }
// )

// export async function getStaticPaths() {
//     const paths = [...categoriesContent.common, ...otherCategoriesContent.common].map((category) => ({
//         params: {category}
//     }))
//
//     return { paths, fallback: true }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//     let {category} = context.params as Record<string, string>
//     const {data} = await apiCall<{ items: CategoryItem[]}>(() =>
//         api.get(`shop-item/category/${category}`)
//     )
//     let {items} = data as {items: CategoryItem[]}
//
//     return {props: {items}}
// }