import {AppThunk} from 'redux/store'
import {StateField} from 'redux/store.types'
import {AppState} from 'redux/store'
import {CheckTimerField} from 'redux/store.types'
import {UserField} from 'redux/user/user.types'
import {SelectField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'

export type CartItem = {
    common: {
        itemId: string
        slug: string,
        slugCategory: string,
        price: string,
        images: string[],
        size: string,
        color: string,
        _id: string
    },
    translations: {
        ua: {
            name: string,
        },
        eng: {
            name: string
        },
        ru: {
            name: string
        }
    },
    quantity: number
}

export type CartState = {
    items: CartItem []
}
