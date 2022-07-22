import React from "react"
import {DeliveryType} from "../types/types"

export const createDelivery = (deliveryTypes: DeliveryType[]) => deliveryTypes.map(elem => {
    const {value, label: {title, price, duration}} = elem
    return {
        value: value,
        label: title,
        node: (
            <div className='delivery-type'>
                <div className='delivery-type__price'>{price}</div>
                <div className='delivery-type__duration'>{duration}</div>
            </div>
        )
    }
})