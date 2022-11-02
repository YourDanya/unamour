const registerFormContent = {
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
                email: 'Ваш email',
                password: 'Пароль',
                passwordConfirm: 'Підтверждення пароля'
            },
            consent: 'Натискаючи кнопку реєстрація, я даю згоду на обробку та \nпередачу моїх персональних даних.'
        },
        eng: {
            signUp: 'register',
            inputs: {
                name: 'Name',
                email: 'Your email',
                password: 'Password',
                passwordConfirm: 'Password confirmation'
            },
            consent: 'By clicking the submit button, I give permission for the processing and \ntransfer of my personal data.'
        },
        ru: {
            signUp: 'вход',
            inputs: {
                name: 'Имя',
                email: 'Ваш email',
                password: 'Пароль',
                passwordConfirm: 'Подтверждение пароля'
            },
            consent: 'Нажимая кнопку регистрация, я согласен на обработку и \nпередачу моих персональных данных.'
        }
    }
}

export default registerFormContent