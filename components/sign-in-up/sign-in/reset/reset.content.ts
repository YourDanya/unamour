export const resetContent = {
    inputs: {
        email: {value: '', validations: {isEmail: true, minLength: 7}} ,
        pass: {value: '', validations: {minLength: 6, maxLength: 15}} ,
        passConfirm: {value: '', validations: {minLength: 6, maxLength: 15}} ,
    },
    translations: {
        ua: {
            title: 'відновити',
            switch: 'увійти',
            explanation: 'Вкажіть e-mail, і ми надішлемо вам посилання на\nвідновлення пароля',
            inputs: {
                email: 'Ваш e-mail',
                pass: 'Пароль',
                passConfirm: 'Підтверждення пароля'
            }
        },
        eng: {
            title: 'reset',
            switch: 'sign in',
            explanation: 'Enter your e-mail and we will send you a link to reset your password',
            inputs: {
                email: 'Your e-mail',
                pass: 'Password',
                passConfirm: 'Password confirmation'
            }
        },
        ru: {
            title: 'сбросить',
            switch: 'войти',
            explanation: 'Укажите e-mail, и мы отправим вам ссылку на восстановление пароля',
            inputs: {
                email: 'Ваш e-mail',
                pass: 'Пароль',
                passConfirm: 'Підтверждення пароля'
            }
        }
    }
}