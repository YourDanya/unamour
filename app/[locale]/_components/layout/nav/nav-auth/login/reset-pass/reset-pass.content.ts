export const resetPassContent = {
    common: {
        inputs: {
            email: {value: '', validations: {required: true, isEmail: true, minLength: 7}},
        },
    },
    translations: {
        ua: {
            title: 'відновити',
            switch: 'увійти',
            explanation: 'Вкажіть email, і ми надішлемо вам посилання на\nвідновлення пароля',
            inputs: {
                email: 'Ваш email'
            },
            success: 'Успішно оновлено дані юзера.',
            error: 'Невірний email.'
        },
        eng: {
            title: 'reset',
            switch: 'sign in',
            explanation: 'Enter your email and we will send you a link to reset-pass your password',
            inputs: {
                email: 'Your email'
            },
            success: 'User data has been updated successfully.',
            error: 'Invalid email.'
        },
        ru: {
            title: 'сбросить',
            switch: 'войти',
            explanation: 'Укажите email, и мы отправим вам ссылку на восстановление пароля',
            inputs: {
                email: 'Ваш email'
            },
            success: 'Успешно обновлены данные пользователя.',
            error: 'Неверный email.'
        }
    }
}