import {AppThunkDispatch, wrapper} from "../../redux/store"
import {LocaleType, NextPageWithLayout} from "../../types/types"
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component"
import {fetchItems} from "../../redux/shop-items/shop-items.thunk"
import ShopItem from "../../components/shop-item/shop-item.component"
import ShopItemsCollection from "../../components/shop-items-collection/shop-items-collection.component"
import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {createClientItems} from "../../utils/data.utils"
import {setClientItems} from "../../redux/shop-items/shop-items.slice"

type shopItemsProps = {
    items?: ClientItem[],
    item?: ClientItem,
    title?: string
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {

        // checking if items are in redux
        const dispatch = store.dispatch as AppThunkDispatch
        await dispatch(fetchItems())
        const fetchedItems = store.getState().shopItems.fetchedItems

        //checking if categories are in redux
        let categories = store.getState().shopItems.categories

        const locale = context.locale as LocaleType

        //creating client items
        const items = createClientItems(fetchedItems, locale)
        dispatch(setClientItems(items))

        let query = context.query
        const slug = query.slug

        console.log('context params', context.query)

        if (!slug || slug.length > 2) {
            //wrong path
            return {notFound: true}
        }
        const category =categories.find(category => category.slug.includes(slug[0]))
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