import {UserErrors, UserSuccess} from "./user.types";

export const userErrors: UserErrors = {
    '5': {
        ua: 'Щось пійшло не так. Спробоуйте пізніше',
        eng: 'Something went wrong. Try again later.',
        ru: 'Что-то пошло не так. Попройбуйте снова позже.'
    },
    '4': {
        signIn: {
            ua: 'Невірний логін або пароль.',
            eng: 'Wrong email or password.',
            ru: 'Неверниый логин или пароль.'
        },
        signUp: {
            ua: 'Користувач с заданим e-mail вже існує.',
            eng: 'User with provided e-mail already exists.',
            ru: 'Пользователь с заданым e-mail уже существует.'
        },
        signOut: {
            ua: 'Щось пійшло не так. Спробоуйте пізніше',
            eng: 'Something went wrong. Try again later.',
            ru: 'Что-то пошло не так. Попройбуйте снова позже.'
        },
        forgetPass: {
            ua: 'Невірний e-mail.',
            eng: 'Invalid e-mail.',
            ru: 'Неверный e-mail.'
        },
        resetPass: {
            ua: 'Невірний токен.',
            eng: 'Invalid token.',
            ru: 'Неверный код.'
        },
        getUser: {
            ua: 'Невірний токен.',
            eng: 'Wrong token.',
            ru: 'Неверный токен.'
        }
    }
}

export const userSuccess: UserSuccess = {
    signIn: {
        ua: 'Ви успішно увійшли. Через секунду вас буде пернаправлено.',
        eng: 'You have successfully logged in. You will be redirected in a second.',
        ru: 'Вы успешно вошли. Через секунду вас будет пернаправлено.'
    },
    forgetPass: {
        ua: 'Вам на пошту було вислано посилання для відновлення пароля.',
        eng: 'You have been sent a link to reset your password.',
        ru: 'Вам на почту была отправлена ссылка для восстановления пароля.'
    },
    resetPass: {
        ua: 'Ваш пароль успішно змінено.',
        eng: 'Your password was successfully updated.',
        ru: 'Ваш пароль успешно изменен.'
    },
    getUser: {
        ua: 'Отримано токен юзера.',
        eng: 'User token has been received/',
        ru: 'Получено токен юзера.'
    },
    signUp: {
        ua: 'Ви успішно зіреєстувалися.',
        eng: 'You have been successfully signed up.',
        ru: 'Вы успешно зарегестрировались.'
    },
    signOut: {
        ua: 'Ви успышно вийшли.',
        eng: 'You have benn successfully signed out.',
        ru: 'Вы успешно вышли.'
    }
}