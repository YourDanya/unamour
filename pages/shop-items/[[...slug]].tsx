import {AppThunkDispatch, wrapper} from "../../redux/store";
import {NextPageWithLayout} from "../../types/types";
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component";
import {setCategories, ShopItemObject} from "../../redux/shop-items/shop-items.slice";

import {fetchItems} from "../../redux/shop-items/shop-items.thunk";
import ShopItem from "../../components/shop-item/shop-item.component";
import ShopItemsCollection from "../../components/shop-items-collection/shop-items-collection.component";

type shopItemsProps = {
    items?: ShopItemObject['ua'][],
    item?: ShopItemObject['ua'],
    title?: string
}

type localeType = 'ua' | 'eng' | 'ru'

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {

        // checking if items are in redux
        let items:ShopItemObject[] | ShopItemObject[localeType][] = store.getState().shopItems.items
        if (items.length === 0) {
            const dispatch = store.dispatch as AppThunkDispatch
            await dispatch(fetchItems())
            items = store.getState().shopItems.items
        }

        //checking if categories are in redux
        let categories = store.getState().shopItems.categories
        if (categories.length === 0) {
            store.dispatch(setCategories(categories))
        }

        let locale = context.locale as localeType

        //mapping items according to locale
        items = items.map(item => item[locale])

        let query = context.query
        const slug = query.slug

        if (!slug || slug.length > 2) {
            //wrong path
            return {notFound: true}
        } else if (!categories.find(category => category.includes(slug[0]))) {
            //category not found
            return {notFound: true}
        } else if (slug[1]) {
            //one item
            const item = items.find(item => item.slug === slug[1])
            if (item) {
                return {props: {item}}
            } else {
                // item not found
                return {notFound: true}
            }
        } else {
            //item category

            return {props: {items, title: slug[0]}}
        }
    }
)

const ShopItemsPage: NextPageWithLayout<shopItemsProps> = ({items, item, title}) => {

    return (
        <div>
            {
                items && <ShopItemsCollection items={items} title={title as string}/>
            }
            {
                item && <ShopItem {...item}/>
            }
        </div>
    )
}

ShopItemsPage.getLayout = getShopItemsLayout


export default ShopItemsPage