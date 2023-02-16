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
        getItems: {
            ua: 'Не вдалося завантажити товари.',
            eng: 'Items were not fetched.',
            ru: 'Не удалось загрузить товары.'
        },
        updateItem: {
            ua: 'Невірні дані. Не вдалося оновити товар.',
            eng: 'Wrong data. Item was not updated.',
            ru: 'Неверные данные. Товар не бьл обнолвен.'
        },
        createItem: {
            ua: 'Невірні дані. Не вдалося створити товар.',
            eng: 'Wrong data. Item was not created.',
            ru: 'Неверные данные. Товар не бьл содан.'
        },
        deleteItem: {
            ua: 'Невірні дані. Не вдалося видалити товар.',
            eng: 'Wrong data. Item was not  deleted.',
            ru: 'Неверные данные. Товар не бьл удален.'
        }
    }
}

export const adminSuccess: AdminSuccess = {
    getItems: {
        ua: 'Товари успішно завантажені',
        eng: 'Items fetched successfully.',
        ru: 'Товары успешно загружены.'
    },
    updateItem: {
        ua: 'Товар успішно оновлено.\nПовідомлення буде видалено через',
        eng: 'Item updated successfully.\nMessage will be cleared in',
        ru: 'Товар успешно обналвен.\nУведомление будет удалено через'
    },
    createItem: {
        ua: 'Товар успішно створено.\nПовідомлення буде видалено через',
        eng: 'Item was successfully created.\nMessage will be cleared in',
        ru: 'Товар успешно создан.\nУведомление будет удалено через'
    },
    deleteItem: {
        ua: 'Товар успішно видалено.\nПовідомлення буде видалено через',
        eng: 'Item was successfully deleted.\nMessage will be cleared in',
        ru: 'Товар успешно удален.\nУведомление будет удалено через'
    }
}

export const getAdminClientErrors: GetAdminClientErrors = ({field,locale, count}) => {
    return {
        updateItem: {
            ua: `не можна зберегти. кількість помилок: ${count}`,
            eng: `cannot be saved. number of errors: ${count}`,
            ru: `нельзя сохранить. количество ошибок: ${count}`
        },
        createItem: {
            ua: `не можна зберегти. кількість помилок: ${count}`,
            eng: `cannot be saved. number of errors: ${count}`,
            ru: `нельзя сохранить. количество ошибок: ${count}`
        }
    }[field][locale]
}