import {ClientItem, FetchedItem} from "../redux/shop-items/shop-items.types"
import {LocaleType} from "../types/types"

export const createClientItems = (fetchedItems: FetchedItem[], locale: LocaleType): ClientItem[] => {
    const clientItems: ClientItem [] = []

    fetchedItems.forEach(item => {
        const {variants: commonVariants, ...common} = item.common
        const {translations} = item

        const {variants: translateVariants, ...translation} = translations[locale]

        const mergedVariants = commonVariants.map((variant, index) => {
            const translateVariant = translateVariants[index]
            return {
                ...variant, ...translateVariant, color: {...variant.color, ...translateVariant.color}
            }
        })

        mergedVariants.forEach((variant, index) => {
            const clientItem = {
                ...common,
                ...variant,
                ...translation,
                variants: mergedVariants,
                translations
            }
            clientItems.push(clientItem)
        })

        // const clientItem : ClientItem = {} as ClientItem
    })
    return clientItems
}

export const mapFilters =<T>(object: T) => {
    type R1 = Record<keyof Omit<T, 'sorting'>, Record<string, boolean>>
    type R2 = Record<'sorting', null | string>

    return Object.entries(object).reduce((accum, [key, value]) => {
        main: if (Array.isArray(value)){
            if (key==='sorting') {
                accum['sorting'] = null
                break main
            }
            const tKey = key as keyof Omit<T, 'sorting'>
            (accum as R1 )[tKey]  = {}

            value.forEach(elem => {
                let prop: string = ''
                if (typeof elem==='string') prop=elem
                if (typeof elem==='object' && elem.param) prop = elem.param;
                (accum[tKey] as Record<string, boolean>)[prop] = false
            })
        }
        return accum
    }, {} as R1 & R2)
}