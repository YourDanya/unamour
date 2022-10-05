export const resetContent = {
    inputs: {
        email: {value: '', validations: {required: true, isEmail: true, minLength: 7}},
    },
    translations: {
        ua: {
            title: 'відновити',
            switch: 'увійти',
            explanation: 'Вкажіть e-mail, і ми надішлемо вам посилання на\nвідновлення пароля',
            inputs: {
                email: 'Ваш e-mail'
            }
        },
        eng: {
            title: 'reset',
            switch: 'sign in',
            explanation: 'Enter your e-mail and we will send you a link to reset your password',
            inputs: {
                email: 'Your e-mail'
            }
        },
        ru: {
            title: 'сбросить',
            switch: 'войти',
            explanation: 'Укажите e-mail, и мы отправим вам ссылку на восстановление пароля',
            inputs: {
                email: 'Ваш e-mail'
            }
        }
    }
}