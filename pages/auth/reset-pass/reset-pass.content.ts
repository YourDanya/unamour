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
            },
            save: 'зберегти',
            success: 'Ваш пароль успішно змінено.'
        },
        eng: {
            title: 'password confirm',
            inputs: {
                pass: 'New password',
                passConfirm: 'Password confirm'
            },
            save: 'save',
            success: 'Your password was successfully updated.'
        },
        ru: {
            title: 'восстановление пароля',
            inputs: {
                pass: 'Новый пароль',
                passConfirm: 'Подтверждение пароля'
            },
            save: 'сохранить',
            success: 'Ваш пароль успешно изменен.'
        }
    }
}

export default resetPassContent