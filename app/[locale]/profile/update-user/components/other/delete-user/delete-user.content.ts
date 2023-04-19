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
            delete: 'видалити'
        },
        eng: {
            title: 'deleting account',
            inputs: {
               password: 'Your password',
            },
            delete: 'delete'
        },
        ru: {
            title: 'удаление аккаунта',
            inputs: {
               password: 'Старый пароль',
            },
            delete: 'удалить'
        }
    }
}

export default deleteUserContent