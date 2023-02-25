import {NextPageWithLayout} from 'types/types'
import {getShopItemsLayout} from 'components/shop-items/shop-items.component'
import {ShopItemsPageProps} from 'pages/shop-items/shop-items-page.types'
import {wrapper} from 'redux/store'
import {filterItems} from 'utils/component/component.utils'
import {api} from 'utils/api/api.utils'
import {apiCall} from 'utils/api/api.utils'
import {CategoryItem} from 'redux/shop-items/shop-items.types'
import ShopItemsCollection from 'components/shop-items-collection/shop-items-collection.component'
import useShopItemsPage from 'pages/shop-items/shop-items-page.hook'
import {otherCategoriesContent} from 'components/common/content/content'

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {
        let query = context.query
        let {category, reset: _, ...other} = query as Record<string, string>
        let param = ''
        if (otherCategoriesContent.common.includes(category) && category !== 'all') {
            param = `?${category}=true`
        }
        const {data} = await apiCall<{ items: CategoryItem[] }>(() =>
            api.get(`shop-item/category/${category}${param}`)
        )
        let {items} = data as { items: CategoryItem[] }

        const filters = other as Record<string, string>
        items = filterItems(items, filters)

        return {props: {items}}
    }
)

const ShopItemsPage: NextPageWithLayout<ShopItemsPageProps> = ({items}) => {
    const {transl} = useShopItemsPage()
    console.log('transl.title', transl.title)

    return (
        <div className={'shop-items-page'}>
            {items && items.length > 0 ? (
                <ShopItemsCollection items={items} title={transl.title}/>
            ) : (
                <div className={'shop-items-page__not-found'}>
                    {transl.notFound}
                </div>
            )}
        </div>
    )
}

ShopItemsPage.getLayout = getShopItemsLayout

export default ShopItemsPage