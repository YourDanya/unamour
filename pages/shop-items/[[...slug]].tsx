import {AppThunkDispatch, wrapper} from "../../redux/store";
import {NextPageWithLayout} from "../../types/types";
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component";
import {setCategories, ShopItemObject} from "../../redux/shop-items/shop-items.slice";

import {fetchItems} from "../../redux/shop-items/shop-items.thunk";
import {ShopItemsContent} from "../../components/shop-items/shop-items.content";
import ShopItem from "../../components/shop-item/shop-item.component";
import ShopItemsCollection from "../../components/shop-items-collection/shop-items-collection.component";
import WithIntern from "../../components/hoc/with-intern/with-intern";

type shopItemsProps = {
    items?: ShopItemObject[],
    item?: ShopItemObject,
    title?: string
}

type localeType = 'ua' | 'eng' | 'ru'

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {
        let items = store.getState().shopItems.items

        if (items.length === 0) {
            const dispatch = store.dispatch as AppThunkDispatch
            await dispatch(fetchItems())
            items = store.getState().shopItems.items
        }

        let categories = store.getState().shopItems.categories

        if (categories.length === 0) {
            categories = ShopItemsContent.ua.list1.map(({ref}) => ref)
            store.dispatch(setCategories(categories))
        }

        let query = context.query
        let locale = context.locale as localeType
        const slug = query.slug

        if (!slug || slug.length > 2) {
            return {notFound: true}
        } else if (!categories.find(category => category.includes(slug[0]))) {
            return {notFound: true}
        } else if (slug[1]) {
            const item = items.find(item => item[locale].slug === slug[1])
            if (item) {
                return {props: {item: item[locale]}}
            } else {
                return {notFound: true}
            }
        } else {
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