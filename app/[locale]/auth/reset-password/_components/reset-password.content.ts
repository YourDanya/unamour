const resetPasswordContent = {
    common: {
        inputs: {
            password: {value: '', validations: {required: true, minLength: 6, maxLength: 15}},
            passwordConfirm: {value: '', validations: {required: true, minLength: 6, maxLength: 15, equalToField: 'password'}}
        }
    },
    translations: {
        ua: {
            title: 'відновлення пароля',
            inputs: {
                password: 'Новий пароль',
                passwordConfirm: 'Підтверждення пароля'
            },
            save: 'зберегти',
            success: 'Ваш пароль успішно змінено.',
            error: 'Невірні дані. Спробуйте ще раз.'
        },
        eng: {
            title: 'password confirm',
            inputs: {
                password: 'New password',
                passwordConfirm: 'Password confirm'
            },
            save: 'save',
            success: 'Your password was successfully updated.',
            error: 'Wrong data. Try again.'
        },
        ru: {
            title: 'восстановление пароля',
            inputs: {
                password: 'Новый пароль',
                passwordConfirm: 'Подтверждение пароля'
            },
            save: 'сохранить',
            success: 'Ваш пароль успешно изменен.',
            error: 'Неверные данные. Попробуйте еще раз.'
        }
    }
}

export default resetPasswordContent