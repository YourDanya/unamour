const signInContent = {
    inputs: {

    },
    translations: {
        ua: {
            title: 'вхід',
            switch: 'реєстрація',
            success: 'Ви успішно увійшли. Через секунду вас буде пернаправлено.',
            error: {
                4: 'Невірний логін або пароль.',
                5: 'Щось пійшло не так. Спробоуйте пізніше'
            },
            inputs: [
                {placeholder: ''},
                {placeholder: ''},
            ]
        },
        eng: {
            title: 'sign in',
            switch: 'sign in',
            success: 'You have successfully logged in. You will be redirected in a second.',
            error: {
                4: 'Wrong email or password.',
                5: 'Something went wrong. Try again later.'
            },
            inputs: {

            }
        },
        ru: {
            title: 'вход',
            switch: 'регистрация',
            success: 'Вы успешно вошли. Через секунду вас будет пернаправлено.',
            error: {
                4: 'Неверниый логин или пароль.',
                5: 'Что-то пошло не так. Попройбуйте снова позже.'
            },
            inputs: {

            }
        }
    }
}

export default signInContent
