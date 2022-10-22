const formContent = {
    inputs: {
        name: {value: '', validations: {minLength: 3, maxLength: 30}},
        surname: {value: '', validations: {minLength: 3, maxLength: 30}},
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
            save: 'сохранить'
        }
    }
}

export default formContent