import {ShopItemsPageProps} from 'app/[locale]/shop-items/[category]/shop-items.types'
import ShopItems from 'app/[locale]/shop-items/[category]/_components/shop-items.component'
import {CategoryItem} from 'app/[locale]/_common/types/types'
import {apiCall} from 'app/[locale]/_common/utils/api/api-v2.utils'

const ShopItemsPage = async (props: ShopItemsPageProps) => {
    const {params} = props

    let {category} = params as Record<string, string>
    const {data} = await apiCall<{ items: CategoryItem[]}>(`shop-item/category/${category}`, {
        headers: {cache: 'no-store'}
    })
    let items = data?.items

    return (<ShopItems items={items}/>)
}

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