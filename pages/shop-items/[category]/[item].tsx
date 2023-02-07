import {NextPageWithLayout} from 'types/types'
import ShopItem from 'components/shop-item/shop-item.component'
import {ShopItemPageProps} from 'pages/shop-items/shop-items.types'
import {wrapper} from 'redux/store'
import {api} from 'utils/api/api.utils'

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {
        let query = context.query
        const {category, item: slug} = query
        const item = await api.get(`${category}/${slug}`)
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