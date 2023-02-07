import React from 'react'
import {MapDelivery} from 'utils/component/component.types'
import {ClientItem} from 'redux/shop-items/shop-items.types'
import {FilterItems} from 'utils/component/component.types'
import {CategoryItem} from 'redux/shop-items/shop-items.types'

export const mapDelivery: MapDelivery = (labels) => labels.map(({title, price, duration}) => {
    return {
        label: title,
        node: (
            <div className='delivery-type'>
                <div className='delivery-type__price'>{price}</div>
                <div className='delivery-type__duration'>{duration}</div>
            </div>
        )
    }
})

// export const createClientItems = (fetchedItems: FetchedItem[], locale: Locale): ClientItem[] => {
//     const clientItems: ClientItem [] = []
//
//     fetchedItems.forEach(item => {
//         // @ts-ignore
//         const {variants: commonVariants, ...common} = item.common
//         const {translations} = item
//
//         // @ts-ignore
//         const {variants: translateVariants, ...translation} = translations[locale]
//
//         const mergedVariants = commonVariants.map((variant: { color: any }, index: string | number) => {
//             // @ts-ignore
//             const translateVariant = translateVariants[index]
//             return {
//                 ...variant, ...translateVariant, color: {...variant.color, ...translateVariant.color}
//             }
//         })
//
//         mergedVariants.forEach((variant: any, index: any) => {
//             const clientItem = {
//                 ...common,
//                 ...variant,
//                 ...translation,
//                 variants: mergedVariants,
//                 translations
//             }
//             clientItems.push(clientItem)
//         })
//
//         // const clientItem : ClientItem = {} as ClientItem
//     })
//     return clientItems
// }

export const filterItems: FilterItems = (items, filters) => {
    const {sorting, price, ...otherFilters} = filters

    if (sorting) {
        items = [...items].sort((item1, item2) => {
            const desc = sorting.startsWith('-')
            let sortParam = sorting as keyof CategoryItem
            if (desc) sortParam = (sortParam as string).replace('-', '') as keyof CategoryItem
            const value1 = Number(item1[sortParam]) ?? 0
            const value2 = Number(item2[sortParam]) ?? 0
            if (desc) return value2 - value1
            else return value1 - value2
        })
    }
    if (price) {
        const [min, max] = price.split('-').map(elem => +elem)
        items = items.filter(item => +item.common.price >= min && +item.common.price <= max)
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
                if (filter==='color') {
                    const color = item.common['color']
                    return color in filterValues
                }
                if (filter==='size') {
                    const sizes = item.common['sizes'] as string[]
                    let found = false
                    sizes.every(size => {
                        if (size in filterValues) {
                            found = true
                            return false
                        }
                        return true
                    })
                    return found
                }
            })
        })
    }
    return items
}