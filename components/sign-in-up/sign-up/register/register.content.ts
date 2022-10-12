const registerContent = {
    inputs: {
        email: {value: '', validations: { required: true, isEmail: true, minLength: 7}},
        name: {required: true, value: '', validations: {required: true, minLength: 3}},
        password: {required: true, value: '', validations: {required: true, minLength: 6, maxLength: 20}},
        passwordConfirm: {required: true, value: '', validations: {required: true, minLength: 6, maxLength: 20, equalToField: 'password'}}
    },
    translations: {
        ua: {
            signUp: 'реєстрація',
            inputs: {
                name: 'Ім\'я',
                email: 'Ваш e-mail',
                password: 'Пароль',
                passwordConfirm: 'Підтверждення пароля'
            },
            consent: 'Натискаючи кнопку Зареєструватися, я даю згоду на обробку та \nпередачу моїх персональних даних.'
        },
        eng: {
            signUp: 'sign-up',
            inputs: {
                name: 'Name',
                email: 'Your e-mail',
                password: 'Password',
                passwordConfirm: 'Password confirmation'
            },
            consent: 'By clicking the Submit button, I give permission for the processing and \ntransfer of my personal data.'
        },
        ru: {
            signUp: 'вход',
            inputs: {
                name: 'Имя',
                email: 'Ваш e-mail',
                password: 'Пароль',
                passwordConfirm: 'Подтверждение пароля'
            },
            consent: 'Нажимая кнопку Регистрация, я согласен на обработку и \nпередачу моих персональных данных.'
        }
    }
}

export default registerContent