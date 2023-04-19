import {CheckoutErrors} from 'app/[locale]/_redux/checkout/checkout.types'
import {CheckoutSuccess} from 'app/[locale]/_redux/checkout/checkout.types'

export const checkoutErrors: CheckoutErrors = {
    '5': {
        ua: 'Щось пійшло не так. Спробоуйте пізніше.',
        eng: 'Something went wrong. Try again later.',
        ru: 'Что-то пошло не так. Попройбуйте снова позже.'
    },
    '4': {
        createOrder: {
            ua: 'Невірний логін або пароль.',
            eng: 'Wrong email or password.',
            ru: 'Неверниый логин или пароль.'
        },
        getOrder: {
            ua: 'Не вдалося отримани інформацію про замовлення.',
            eng: 'Failed to get info about order.',
            ru: 'Не удалось получить информацию о заказе.'
        }
    }
}

export const checkoutSuccess: CheckoutSuccess = {
    createOrder: {
        ua: 'Ви успішно увійшли. Через секунду вас буде пернаправлено.',
        eng: 'You have successfully logged in. You will be redirected in a second.',
        ru: 'Вы успешно вошли. Через секунду вас будет пернаправлено.'
    },
    getOrder: {
        ua: 'Успішно отримано інформацію про замовлення.',
        eng: 'Order information successfully received.',
        ru: 'Успешно получено информацию о заказе.'
    }
}