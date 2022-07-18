import {ClientItem, FetchedItem} from "../redux/shop-items/shop-items.types";
import {LocaleType} from "../types/types";

export const createClientItems = (fetchedItems: FetchedItem[], locale: LocaleType) : ClientItem[] => {
    const clientItems: ClientItem [] = []
    fetchedItems.forEach(item => {
        const {variants} = item[locale]
        variants.forEach(variant => {
            clientItems.push({...item.common, ...variant, ...item[locale]})
        })
    })
    return clientItems
}