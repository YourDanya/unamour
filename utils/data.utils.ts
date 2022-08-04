import {ClientItem, FetchedItem} from "../redux/shop-items/shop-items.types";
import {LocaleType} from "../types/types";

export const createClientItems = (fetchedItems: FetchedItem[], locale: LocaleType) : ClientItem[] => {
    const clientItems: ClientItem [] = []
    fetchedItems.forEach(item => {
        const {variants, ...otherCommon} = item.common
        const {translation} = item

        variants.forEach((variant, index )=> {
            const {variants: translateVariants} = translation[locale]
            const {color: translateColor, ...translateVariant} = translateVariants[index]
            const {color, ...otherVariant} = variant

            const clientItem = {
                ...otherCommon,
                ...otherVariant,
                ...translation[locale],
                ...translateVariant,
                color: {...color, ...translateColor},
                translation
            }

            clientItems.push(clientItem)
        })
    })
    return clientItems
}