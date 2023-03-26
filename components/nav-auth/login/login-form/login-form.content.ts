const loginFormContent = {
    common: {
        inputs: {
            email: {value: '', validations: {required: true, isEmail: true}} ,
            password: {value: '', validations: {required: true, minLength: 6, maxLength: 20}}
        },
    },
    translations: {
        ua: {
            signIn: 'вхід',
            inputs: {
                email: 'Ваш email',
                password: 'Ваш пароль',
            },
            error: 'Невірний логін або пароль.',
            success: 'Ви успішно увійшли. Через секунду вас буде пернаправлено.',
            forget: 'Забули пароль?',
            consent: 'Натискаючи кнопку Увійти, я даю згоду на обробку та \nпередачу моїх персональних даних.',
        },
        eng: {
            signIn: 'sign in',
            inputs: {
                email: 'Your email',
                password: 'Your password'
            },
            error: 'Wrong email or password.',
            success: 'You have successfully logged in. You will be redirected in a second.',
            consent: 'By clicking the Submit button, I give permission for the processing and \ntransfer of my personal data.',
            forget: 'Forgot your password?',
        },
        ru: {
            signIn: 'вход',
            inputs: {
                email: 'Ваш email',
                password: 'Ваш пароль'
            },
            error: 'Неверниый логин или пароль.',
            success: 'Вы успешно вошли. Через секунду вас будет пернаправлено.',
            consent: 'Нажимая кнопку Войти, я согласен на обработку и \nпередачу моих персональных данных.',
            forget: 'Забыли пароль?'
        }
    }
}

export default loginFormContent