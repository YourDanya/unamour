export const loginContent = {
    inputs: {
        email: {value: '', validations: {isEmail: true, minLength: 7}} ,
        password: {value: '', validations: {minLength: 6, maxLength: 20}}
    },
    translations: {
        ua: {
            signIn: 'вхід',
            inputs: {
                email: 'Ваш e-mail',
                password: 'Ваш пароль',
            },
            success: 'Ви успішно увійшли. Через секунду вас буде пернаправлено.',
            error: {
                4: 'Невірний логін або пароль.',
                5: 'Щось пійшло не так. Спробоуйте пізніше'
            },
            forget: 'Забули пароль?',
            consent: 'Натискаючи кнопку Увійти, я даю згоду на обробку та \nпередачу моїх персональних даних.',
        },
        eng: {
            signIn: 'Sign in',
            inputs: {
                email: 'Your email',
                password: 'Your password'
            },
            success: 'You have successfully logged in. You will be redirected in a second.',
            error: {
                4: 'Wrong email or password.',
                5: 'Something went wrong. Try again later.'
            },
            consent: 'By clicking the Submit button, I give permission for the processing and \ntransfer of my personal data.',
            forget: 'Forgot your password?',
        },
        ru: {
            inputs: {
                email: 'Ваш e-mail',
                password: 'Ваш пароль'
            },
            success: 'Вы успешно вошли. Через секунду вас будет пернаправлено.',
            error: {
                4: 'Неверниый логин или пароль.',
                5: 'Что-то пошло не так. Попройбуйте снова позже.'
            },
            consent: 'Нажимая кнопку Войти, я согласен на обработку и \nпередачу моих персональных данных.',
            signIn: 'вход',
            forget: 'Забыли пароль?'
        }
    }
}