const signUpContent = {
    inputs: {
        email: {value: '', validations: {isEmail: true, minLength: 7}},
        name: {value: '', validations: { minLength: 3}},
        password: {value: '', validations: {minLength: 6, maxLength: 20}},
        passwordConfirm: {value: '', validations: {minLength: 6, maxLength: 20}}
    },
    translations: {
        ua: {
            signUp: 'реєстрація',
            switch: 'вхід',
            success: 'Ви успішно створили акаунт. Код активування вам було вислано на пошту.',
            error: {
                4: 'Невірний логін або пароль.',
                5: 'Щось пійшло не так. Спробоуйте пізніше'
            },
            inputs: {
                name: 'Ім\'я',
                email: 'Ваш e-mail',
                password: 'Пароль',
                passwordConfirm: 'Підтверждення пароля'
            },
            forget: 'Забули пароль?',
            consent: 'Натискаючи кнопку Зареєструватися, я даю згоду на обробку та \nпередачу моїх персональних даних.'
        },
        eng: {
            signUp: 'login up',
            switch: 'login in',
            success: 'You have successfully created an account. An activation code has been sent to you by mail.\'',
            error: {
                4: 'Wrong email or password.',
                5: 'Something went wrong. Try again later.'
            },
            inputs: {
                name: 'Name',
                email: 'Your e-mail',
                password: 'Password',
                passwordConfirm: 'Password confirmation'
            },
            forget: 'Forgot your password?',
            consent: 'By clicking the Submit button, I give permission for the processing and \ntransfer of my personal data.'
        },
        ru: {
            signUp: 'вход',
            switch: 'регистрация',
            success: 'Вы успешно создали аккаунт. Код активации был выслан на почту.',
            error: {
                4: 'Пользователь с таким e-mail уже существует.',
                5: 'Что-то пошло не так. Попройбуйте снова позже.'
            },
            inputs: {
                name: 'Имя',
                email: 'Ваш e-mail',
                password: 'Пароль',
                passwordConfirm: 'Подтверждение пароля'
            },
            forget: 'Забыли пароль?',
            consent: 'Нажимая кнопку Регистрация, я согласен на обработку и \nпередачу моих персональных данных.'
        }
    }
}

export default signUpContent
