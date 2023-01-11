import {AdminErrors} from 'redux/admin/admin.types'
import {AdminSuccess} from 'redux/admin/admin.types'
import {GetAdminClientErrors} from 'redux/admin/admin.types'

export const adminErrors: AdminErrors = {
    '5': {
        ua: 'Щось пійшло не так. Спробоуйте пізніше.',
        eng: 'Something went wrong. Try again later.',
        ru: 'Что-то пошло не так. Попройбуйте снова позже.'
    },
    '4': {
        updateItem: {
            ua: 'Невірні дані. Не вдалося оновити товар.',
            eng: 'Wrong data. Item was not updated.',
            ru: 'Неверные данные. Товар не бьл обнолвен.'
        },
        updateItems: {
            ua: 'Невірні дані. Не вдалося оновити товар.',
            eng: 'Wrong data. Items were not updated.',
            ru: 'Неверные данные. Товары успешно обновлены.'
        }
    }
}

export const adminSuccess: AdminSuccess = {
    updateItem: {
        ua: 'Товар успішно оновлено.\nПовідомлення буде видалено через',
        eng: 'Item updated successfully.\nMessage will be cleared in',
        ru: 'Товар успешно обналвен.\nУведомление будет удалено через'
    },
    updateItems: {
        ua: 'Товари успішно оновлені.',
        eng: 'Items updated successfully.',
        ru: 'Товары успешно обнавлены.'
    }
}

export const getAdminClientErrors: GetAdminClientErrors = ({field,locale, count}) => {
    return {
        updateItem: {
            ua: `не можна зберегти. кількість помилок: ${count}`,
            eng: `cannot be saved. number of errors: ${count}`,
            ru: `нельзя сохранить. количество ошибок: ${count}`
        }
    }[field][locale]
}