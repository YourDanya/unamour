import {NextPageWithLayout} from 'types/types'
import {getShopItemsLayout} from 'components/shop-items/shop-items.component'
import {ShopItemsPageProps} from 'pages/shop-items/shop-items.types'
import {wrapper} from 'redux/store'
import {Locale} from 'types/types'
import {filterItems} from 'utils/component/component.utils'
import {api} from 'utils/api/api.utils'
import {apiCall} from 'utils/api/api.utils'
import {CategoryItem} from 'redux/shop-items/shop-items.types'

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {

        const locale = context.locale as Locale
        let query = context.query
        let {category, reset: _, ...other} = query
        if (category === 'all') {
            category = ''
        }

        const {data} = await apiCall<CategoryItem[]>(() => api.get(`shop-item/category/${category}`))
        let items = data as CategoryItem[]
        if (!items || items.length === 0) {
            return {notFound: true}
        }
        // dispatch(setClientItems(items))

        const filters = other as Record<string, string>
        items = filterItems(items, filters)

        return {props: {items, title: 'Переглянути усе'}}
    }
)

const ShopItemsPage: NextPageWithLayout<ShopItemsPageProps> = ({items, title}) => {
    console.log('items', items)
    return (
        <>
            {/*{items && <ShopItemsCollection items={items} title={title}/>}*/}
        </>
    )
}

ShopItemsPage.getLayout = getShopItemsLayout

export default ShopItemsPage