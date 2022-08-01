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

export const mapDelivery = (values: string[], labels: {title: string, price: string, duration: string} []) => values.map((value, index) => {
    const {title, price, duration} = labels[index]
    return {
        value,
        label: title,
        node: (
            <div className='delivery-type'>
                <div className='delivery-type__price'>{price}</div>
                <div className='delivery-type__duration'>{duration}</div>
            </div>
        )
    }
})