import {FilterItems} from 'app/[locale]/_common/utils/component/component.types'
import {ClientItem} from 'app/[locale]/_redux/shop-items/shop-items.types'
import {CategoryItem} from 'app/[locale]/_redux/shop-items/shop-items.types'

export const filterItems: FilterItems = (items, filters) => {
    const {sorting, price, ...otherFilters} = filters

    if (sorting) {
        items = [...items].sort((item1, item2) => {
            const desc = sorting.startsWith('-')
            let sortParam = sorting as keyof CategoryItem['common']
            if (desc) {
                sortParam = sortParam.replace('-', '') as keyof CategoryItem['common']
            }
            const value1 = Number(item1.common[sortParam]) ?? 0
            const value2 = Number(item2.common[sortParam]) ?? 0
            if (desc) {
                return value2 - value1
            } else {
                return value1 - value2
            }
        })
    }
    if (price) {
        const [min, max] = price.split('-').map(elem => +elem)
        items = items.filter(item => +item.common.price >= min && +item.common.price <= max)
    }
    if (otherFilters) {
        // console.log(otherFilters)
        Object.entries(otherFilters).forEach(([filter, filterValueString]) => {
            const filterParam = filter as keyof ClientItem
            const filterValues = filterValueString
                .split(';')
                .reduce((accum, filterValue) => {
                    accum[filterValue] = true
                    return accum
                }, {} as Record<string, boolean>)
            // console.log('filterValues', filterValues)
            items = items.filter(item => {
                if (filter === 'color') {
                    const color = item.common['color']
                    return color in filterValues
                }
                if (filter === 'size') {
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