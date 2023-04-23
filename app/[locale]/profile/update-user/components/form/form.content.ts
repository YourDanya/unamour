const formContent = {
    common: {
        inputs: {
            name: {value: '', validations: {minLength: 3, maxLength: 30}},
            surname: {value: '', validations: {minLength: 3, maxLength: 30}},
            phone: {value: '', validations: {isPhone: true}},
            birthDate: {value: '', validations: {minLength: 3}}
        }
    },
    translations: {
        ua: {
            title: 'особисті дані',
            inputs: {
                name: 'Ім\'я',
                surname: 'Прізвище',
                phone: 'Номер',
                birthDate: 'Дата нарождення',
                oldPassword: 'Старий пароль',
                newPassword: 'Придумайте новий пароль',
                passwordConfirm: 'Повторіть пароль'
            },
            save: 'зберегти',
            success: 'Дані користувача успішно оновлено.',
            error: 'Не вдалося змінити дані юзера.',
        },
        eng: {
            title: 'personal data',
            inputs: {
                name: 'Name',
                surname: 'Surname',
                phone: 'Phone',
                birthDate: 'Birth date',
                oldPassword: 'Old password',
                newPassword: 'New password',
                passwordConfirm: 'Confirm password',
            },
            save: 'save',
            success: 'User data has been successfully updated.',
            error: 'Failed to change user data.'
        },
        ru: {
            title: 'личные данные',
            inputs: {
                name: 'Имя',
                surname: 'Фамилия',
                phone: 'Номер',
                birthDate: 'Дата рождения',
                oldPassword: 'Старый пароль',
                newPassword: 'Придумайте новый пароль',
                passwordConfirm: 'Повторите пароль'
            },
            save: 'сохранить',
            success: 'Данные пользователя успешно обновлены.',
            error: 'Не удалось изменить данные пользователя.'
        }
    }
}

export default formContent