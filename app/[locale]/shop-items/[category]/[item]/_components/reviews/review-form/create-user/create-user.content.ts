export const dictionary = {
    ua: {
        createUser: 'Створити юзера',
        success: 'Юзера створено',
        descr: 'Уведіть дані для створення користувача.',
        inputs: {
            name: {label: 'Ім\'я'},
            email: {label: 'Email'},
            password: {label: 'Пароль'},
            passwordConfirm: {label: 'Підтвердження пароля'}
        }
    },
    eng: {
        createUser: 'Create user',
        success: 'Users created',
        descr: 'Enter data for user creation',
        inputs: {
            name: {label: 'Name'},
            email: {label: 'Email'},
            password: {label: 'Password'},
            passwordConfirm: {label: 'Password confirmation'}
        }
    },
    ru: {
        createUser: 'Создать пользователя',
        success: 'Пользователя создано',
        descr: 'Введите данные для создания пользователя',
        inputs: {
            name: {label: 'Имя'},
            email: {label: 'Email'},
            password: {label: 'Пароль'},
            passwordConfirm: {label: 'Подтверждение пароля'}
        }
    }
}

export const initValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
}

export const initErrors = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
}

export const validations = {
    name: {required: true},
    email: {required: true, isEmail: true},
    password: {required: true},
    passwordConfirm: {required: true}
}