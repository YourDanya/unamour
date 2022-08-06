import {ClientItem, FetchedItem} from "../redux/shop-items/shop-items.types";
import {LocaleType} from "../types/types";

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