import {NextPageWithLayout} from 'types/types'
import ShopItem from 'components/shop-item/shop-item.component'
import {ShopItemPageProps} from 'pages/shop-items/shop-items-page.types'
import {wrapper} from 'redux/store'
import {api} from 'utils/api/api.utils'
import {apiCall} from 'utils/api/api.utils'
import {FetchedItem} from 'redux/shop-items/shop-items.types'

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {
        let query = context.query
        const {item: slug, color} = query
        const {data, err} = await apiCall<{item: FetchedItem}>(() => api.get(`shop-item/${slug}?color=${color}`))
        const {item} = data as {item: FetchedItem}
        if (!item) {
            return {notFound: true}
        }
        return {props: {item}}
    }
)

const ShopItemPage: NextPageWithLayout<ShopItemPageProps> = ({item}) => {
    return (
        <>
            {item && <ShopItem {...item}/>}
        </>
    )
}

export default ShopItemPage