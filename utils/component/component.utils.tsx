import React from 'react'
import {MapDelivery} from 'utils/component/component.types'

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


