const updateEmailFormContent = {
    common: {
        inputs: {
            password: {value: '', validations: {required: true, minLength: 6, maxLength: 40}},
            newEmail: {value: '', validations: {required: true, minLength: 6, maxLength: 40}},
        },
    },
    translations: {
        ua: {
            title: 'зміна пошти',
            inputs: {
                password: 'Ваш пароль',
                newEmail: 'Новий email',
            },
            save: 'зберегти'
        },
        eng: {
            title: 'change email',
            inputs: {
                password: 'Your password',
                newEmail: 'New email',
            },
            save: 'save'
        },
        ru: {
            title: 'изменение почты',
            inputs: {
                password: 'Ваш пароль',
                newEmail: 'Новый email',
            },
            save: 'сохранить'
        }
    }
}

export default updateEmailFormContent