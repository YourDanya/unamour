import {AdminErrors} from 'redux/admin/admin.types'
import {AdminSuccess} from 'redux/admin/admin.types'

export const adminErrors: AdminErrors = {
    '5' : {
        ua: 'Щось пійшло не так. Спробоуйте пізніше.',
        eng: 'Something went wrong. Try again later.',
        ru: 'Что-то пошло не так. Попройбуйте снова позже.'
    },
    '4' : {
        updateItem: {
            ua: 'невірні дані. не вдалося оновити товар.',
            eng: 'wrong data. item was not updated.',
            ru: 'неверные данные. товар не бьл обнолвен.'
        },
        updateItems: {
            ua: 'невірні дані. не вдалося оновити товар.',
            eng: 'wrong data. items were not updated.',
            ru: 'неверные данные. товары успешно обновлены.'
        }
    }
}

export const adminSuccess: AdminSuccess = {
    updateItem : {
        ua: 'товар успішно оновлено',
        eng: 'item updated successfully',
        ru: 'товар успешно обналвен'
    },
    updateItems : {
        ua: 'товари успішно оновлені',
        eng: 'items updated successfully',
        ru: 'товары успешно обнавлены'
    }
}