import {NextPageWithLayout} from 'types/types'
import ShopItem from 'components/shop-item/shop-item.component'
import {ShopItemPageProps} from 'pages/shop-items/shop-items.types'
import {wrapper} from 'redux/store'
import {api} from 'utils/api/api.utils'
import {apiCall} from 'utils/api/api.utils'
import {ClientItem} from 'redux/shop-items/shop-items.types'

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {
        let query = context.query
        const {item: slug, color} = query
        const {data, err} = await apiCall<{item: ClientItem}>(() => api.get(`shop-item/${slug}?color=${color}`))
        const {item} = data as {item: ClientItem}
        if (!item) {
            return {notFound: true}
        }
        return {props: {item}}
    }
)

const ShopItemPage: NextPageWithLayout<ShopItemPageProps> = ({item}) => {
    console.log('item', item)
    return (
        <>
            {item && <ShopItem {...item}/>}
        </>
    )
}

export default ShopItemPage