const deleteUserContent = {
    common: {
        inputs: {
            password: {value: '', validations: {required: true, minLength: 6, maxLength: 40}},
        }
    },
    translations: {
        ua: {
            title: 'видалення акаунту',
            inputs: {
               password: 'Ваш пароль'
            },
            delete: 'видалити',
            success: 'Ваш акаунт успішно видалено.',
            error: 'Невірний пароль.'
        },
        eng: {
            title: 'deleting account',
            inputs: {
               password: 'Your password',
            },
            delete: 'delete',
            success: 'Your account was successfully deleted.',
            error: 'Wrong password.'
        },
        ru: {
            title: 'удаление аккаунта',
            inputs: {
               password: 'Старый пароль',
            },
            delete: 'удалить',
            success: 'Ваш акаунт успешно удален.',
            error: 'Неверный пароль.'
        }
    }
}

export default deleteUserContent