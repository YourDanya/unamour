import {ShopItemsSuccess} from 'redux/shop-items/shop-items.types'
import {ShopItemsErrors} from 'redux/shop-items/shop-items.types'

export const shopItemsErrors: ShopItemsErrors = {
    '5': {
        ua: 'Щось пійшло не так. Спробоуйте пізніше.',
        eng: 'Something went wrong. Try again later.',
        ru: 'Что-то пошло не так. Попройбуйте снова позже.'
    },
    '4': {
        getItems: {
            ua: 'Щось пійшло не так. Спробоуйте пізніш.е',
            eng: 'Something went wrong. Try again later.',
            ru: 'Что-то пошло не так. Попройбуйте снова позже.'
        }
    }
}

export const shopItemsSuccess: ShopItemsSuccess = {
    getItems: {
        ua: 'Товари успішно отримано.',
        eng: 'Items fetched successfully.',
        ru: 'Товары успешно получено.'
    }
}
