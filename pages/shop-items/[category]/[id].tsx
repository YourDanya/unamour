import {NextPageWithLayout} from 'types/types'
import ShopItem from 'components/shop-item/shop-item.component'
import {ShopItemPageProps} from 'pages/shop-items/shop-items-page.types'
import {wrapper} from 'redux/store'
import {api} from 'utils/api/api.utils'
import {apiCall} from 'utils/api/api.utils'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {Suspense} from 'react'
import {categoriesContent} from 'components/common/content/content'
import {otherCategoriesContent} from 'components/common/content/content'
import {GetStaticProps} from 'next'
import {CategoryItem} from 'redux/shop-items/shop-items.types'
import {filterItems} from 'utils/component/component.utils'
import axios from 'axios'

// export const getServerSideProps = wrapper.getServerSideProps(store =>
//     async (context) => {
//         let query = context.query
//         const {item: slug, color} = query
//         const {data, error} = await apiCall<{item: FetchedItem}>(() => api.get(`shop-item/${slug}?color=${color}`))
//         const {item} = data as {item: FetchedItem}
//         if (!item) {
//             return {notFound: true}
//         }
//         return {props: {item}}
//     }
// )

export async function getStaticPaths() {
    let paths = [] as {params: {id: string, category: string}}[]

    for (const category of ([...categoriesContent.common, ...otherCategoriesContent.common])) {
        const {data} = await apiCall<{ items: CategoryItem[] }>(() =>
            api.get(`shop-item/category/${category}`)
        )
        const {items} = data as { items: CategoryItem[] }
        items.forEach(item => paths.push({
            params: {id: `${item.common.slug}?${item.common.color}`, category: category}
        }))
    }
    //
    // const paths = items.map((item) => ({
    //     params: {id: `${item.common.slug}?${item.common.color}`}
    // }))

    return {paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context?.params?.id as string
    const [slug, color] = id.split('?')

    const {data} = await apiCall<{ item: FetchedItem }>(
        () => api.get(`shop-item/${slug}?color=${color}`))
    const {item} = data as { item: FetchedItem }

    return {props: {item}}
}

const ShopItemPage: NextPageWithLayout<ShopItemPageProps> = ({item}) => {
    return (
        <>
            {item && <ShopItem {...item}/>}
        </>
    )
}

export default ShopItemPage