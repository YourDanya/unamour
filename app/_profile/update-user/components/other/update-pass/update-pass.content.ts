const updatePassContent = {
    common: {
        inputs: {
            oldPassword: {value: '', validations: {required: true, minLength: 6, maxLength: 40}},
            newPassword: {value: '', validations: {required: true, minLength: 6, maxLength: 40}},
            passwordConfirm: {value: '', validations: {required: true, minLength: 6, maxLength: 40, equalToField: 'newPassword'}}
        }
    },
    translations: {
        ua: {
            title: 'зміна пароля',
            inputs: {
                oldPassword: 'Старий пароль',
                newPassword: 'Придумайте новий пароль',
                passwordConfirm: 'Повторіть новий пароль'
            },
            save: 'зберегти'
        },
        eng: {
            title: 'change password',
            inputs: {
                oldPassword: 'Old password',
                newPassword: 'Create new password',
                passwordConfirm: 'Repeat new password'
            },
            save: 'save'
        },
        ru: {
            title: 'изменение пароля',
            inputs: {
               oldPassword: 'Старый пароль',
               newPassword: 'Придумайте новый пароль',
               passwordConfirm: 'Повторите новый пароль'
            },
            save: 'сохранить'
        }
    }
}

export default updatePassContent