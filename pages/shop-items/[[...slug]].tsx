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

        const start = new Date().getTime()

        const dispatch = store.dispatch as AppThunkDispatch

        //retrieving categories and locale
        let categories = store.getState().shopItems.categories
        const locale = context.locale as LocaleType

        // checking if items are in global
        let items = global.get('items') as ClientItem[]

        if (!items) {
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
        const {slug, rest: _, ...other} = query
        const filters = other as Record<string, string>

        console.log('query', query)

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
            const item = items.find(item => item.slug === slug[1] && item.color.slug === query.color)
            if (item) {
                return {props: {item}}
            } else {
                // item not found
                return {notFound: true}
            }
        } else {
            //item category
            if (filters) {
                const {sorting, price, ...otherFilters} = filters
                if (sorting) {
                    items = [...items].sort((item1, item2) => {
                        const desc = sorting.startsWith('-')
                        let sortParam = sorting as keyof ClientItem
                        if (desc) sortParam = sortParam.replace('-', '') as keyof ClientItem
                        const value1 = Number(item1[sortParam]) ?? 0
                        const value2 = Number(item2[sortParam]) ?? 0
                        console.log('value1', value1)
                        console.log('value2', value2)
                        if (desc) return value2 - value1
                        else return value1 - value2
                    })
                }
                if (price) {
                    const [min, max] = price.split('-').map(elem => +elem)
                    items = items.filter(item => item.price >= min && item.price <= max)
                }
                if (otherFilters) {
                    console.log(otherFilters)
                    Object.entries(otherFilters).forEach(([filter, filterValueString]) => {
                        const filterParam = filter as keyof ClientItem
                        const filterValues = filterValueString
                            .split(';')
                            .reduce((accum, filterValue) => {
                                accum[filterValue] = true
                                return accum
                            }, {} as Record<string, boolean>)
                        items = items.filter(item => {
                            const filterValue = item[filterParam] as string
                            return filterValue in filterValues
                        })
                        console.log('items', items)
                    })
                }
            }

            const end = new Date().getTime()
            console.log('time', end - start)

            return {props: {items, title: category[locale]}}
        }
    }
)

const ShopItemsPage: NextPageWithLayout<shopItemsProps> = ({items, item, title}) => {
    items?.forEach(item => console.log(item.price))
    return (
        <div>
            {items && <ShopItemsCollection items={items} title={title as string}/>}
            {item && <ShopItem {...item}/>}
        </div>
    )
}

ShopItemsPage.getLayout = getShopItemsLayout


export default ShopItemsPage