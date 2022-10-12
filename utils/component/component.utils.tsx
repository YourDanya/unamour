import React from 'react'
import {MapDelivery} from 'utils/component/component.types'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {Locale} from 'types/types'
import {ClientItem} from 'redux/shop-items/shop-items.types'

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

export const createClientItems = (fetchedItems: FetchedItem[], locale: Locale): ClientItem[] => {
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