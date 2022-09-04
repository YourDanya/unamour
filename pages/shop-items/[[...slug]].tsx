import {AppThunkDispatch, wrapper} from "../../redux/store"
import {LocaleType, NextPageWithLayout} from "../../types/types"
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component"
import {fetchItems} from "../../redux/shop-items/shop-items.thunk"
import ShopItem from "../../components/shop-item/shop-item.component"
import ShopItemsCollection from "../../components/shop-items-collection/shop-items-collection.component"
import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {createClientItems} from "../../utils/data.utils"
import {setClientItems} from "../../redux/shop-items/shop-items.slice"
import global from "../../utils/global.utils"

type shopItemsProps = {
    items?: ClientItem[],
    item?: ClientItem,
    title?: string
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {
        const dispatch = store.dispatch as AppThunkDispatch

        //retrieving categories and locale
        let categories = store.getState().shopItems.categories
        const locale = context.locale as LocaleType

        // checking if items are in global
        let items = global.get('items') as ClientItem[]

        if(!items) {
            console.log('no items')
            //fetching items
            await dispatch(fetchItems())
            const fetchedItems = store.getState().shopItems.fetchedItems
            //creating client items
            items = createClientItems(fetchedItems, locale)
            //set items to global
        }

        //dispatching for client
        dispatch(setClientItems(items))

        let query = context.query
        const slug = query.slug

        console.log('query', {...context})

        if (!slug || slug.length > 2) {
            //wrong path
            console.log('wrong slug')
            return {notFound: true}
        }
        const category = categories.find(category => category.slug.includes(slug[0]))
        if (!category) {
            //category not found
            return {notFound: true}
        }
        if (slug[1]) {
            //one item
            const item = items.find(item => item.slug === slug[1] && item.color.slug===query.color)
            if (item) {
                return {props: {item}}
            } else {
                // item not found
                return {notFound: true}
            }
        } else {
            //item category
            return {props: {items, title: category[locale]}}
        }
    }
)

const ShopItemsPage: NextPageWithLayout<shopItemsProps> = ({items, item, title}) => {

    return (
        <div>
            {items && <ShopItemsCollection items={items} title={title as string}/>}
            {item && <ShopItem {...item}/>}
        </div>
    )
}

ShopItemsPage.getLayout = getShopItemsLayout


export default ShopItemsPage