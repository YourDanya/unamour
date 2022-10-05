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
                name: 'Ім\'я',
                surname: 'Прізвище',
                email: 'Ваш e-mail',
                phone: 'Номер',
                birthDate: 'Дата нарождення',
                oldPassword: 'Старий пароль',
                newPassword: 'Придумайте новий пароль',
                passwordConfirm: 'Повторіть пароль'
            },
            password: 'пароль',
            changePassword: 'Зміна пароля',
            save: 'зберегти'
        },
        eng: {
            title: 'personal data',
            inputs: {
                name: 'Name',
                surname: 'Surname',
                email: 'Your e-mail',
                phone: 'Phone',
                birthDate: 'Birth date',
                oldPassword: 'Old password',
                newPassword: 'New password',
                passwordConfirm: 'Confirm password',
            },
            password: 'password',
            changePassword: 'Change password',
            save: 'save'
        },
        ru: {
            title: 'личные данные',
            inputs: {
                name: 'Имя',
                surname: 'Фамилия',
                email: 'Ваш e-mail',
                phone: 'Номер',
                birthDate: 'Дата рождения',
                oldPassword: 'Старый пароль',
                newPassword: 'Придумайте новый пароль',
                passwordConfirm: 'Повторите пароль'
            },
            password: 'пароль',
            changePassword: 'Изменение пароля',
            save: 'сохранить'
        }
    }
}