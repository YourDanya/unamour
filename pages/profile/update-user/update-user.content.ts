export const updateUserContent = {
    inputs: {
        name: {value: ''},
        surname: {value: ''},
        email: {value: '', validations: {isEmail: true}},
        phone: {value: '', validations: {isPhone: true}},
        birthDate: {value: ''}
    },
    translations: {
        ua: {
            title: 'особисті дані',
            inputs: {
                name: {placeholder: 'Ім\'я'},
                surname: {placeholder: 'Прізвище'},
                email: {placeholder: 'Ваш e-mail'},
                phone: {placeholder: 'Номер'},
                birthDate: {placeholder: 'Дата нарождення'},
                oldPassword: {placeholder: 'Старий пароль'},
                newPassword: {placeholder: 'Придумайте новий пароль'},
                passwordConfirm: {placeholder: 'Повторіть пароль'}
            },
            changePassword: 'зміна пароля',
            save: 'зберегти'
        },
        eng: {
            title: 'personal data',
            inputs: {
                name: {placeholder: 'Name'},
                surname: {placeholder: 'Surname'},
                email: {placeholder: 'Your e-mail'},
                phone: {placeholder: 'Phone'},
                birthDate: {placeholder: 'Birth date'},
                oldPassword: {placeholder: 'Old password'},
                newPassword: {placeholder: 'New password'},
                passwordConfirm: {placeholder: 'Confirm password'},
            },
            changePassword: 'change password',
            save: 'save'
        },
        ru: {
            title: 'личные данные',
            inputs: {
                name: {placeholder: 'Имя'},
                surname: {placeholder: 'Фамилия'},
                email: {placeholder: 'Ваш e-mail'},
                phone: {placeholder: 'Номер'},
                birthDate: {placeholder: 'Дата рождения'},
                oldPassword: {placeholder: 'Старый пароль'},
                newPassword: {placeholder: 'Придумайте новый пароль'},
                passwordConfirm: {placeholder: 'Повторите пароль'}
            },
            changePassword: 'изменение пароля',
            save: 'сохранить'
        }
    }
}