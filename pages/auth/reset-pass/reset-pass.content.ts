const resetPassContent = {
    inputs: {
        pass: {value: '', validations: {minLength: 6, maxLength: 15}},
        passConfirm: {value: '', validations: {minLength: 6, maxLength: 15}}
    },
    translations: {
        ua: {
            title: 'відновлення пароля',
            inputs: {
                pass: 'Новий пароль',
                passConfirm: 'Підтверждення пароля'
            }
        },
        eng: {
            title: 'password confirm',
            inputs: {
                pass: 'New password',
                passConfirm: 'Password confirm'
            }
        },
        ru: {
            title: 'восстановление пароля',
            inputs: {
                pass: 'Новый пароль',
                passConfirm: 'Подтверждение пароля'
            }
        }
    }
}

export default resetPassContent