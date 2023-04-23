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
            save: 'зберегти',
            success: 'Створено запит для зміни пошти.',
            error: {
                'Wrong password' : 'Невірний пароль.',
                'Email is already in use' : 'Наданий email використовується іншим юзером.'
            }
        },
        eng: {
            title: 'change email',
            inputs: {
                password: 'Your password',
                newEmail: 'New email',
            },
            save: 'save',
            success: 'The email change request was created.',
            error: {
                'Wrong password' : 'Wrong password.',
                'Email is already in use' : 'Provided email is in use by another user.'
            }
        },
        ru: {
            title: 'изменение почты',
            inputs: {
                password: 'Ваш пароль',
                newEmail: 'Новый email',
            },
            save: 'сохранить',
            success: 'Создано запрос для изменения почты.',
            error: {
                'Wrong password' : 'Неверный пароль',
                'Email is already in use' : 'Provided email is in use by another user.'
            }
        }
    }
}

export default updateEmailFormContent