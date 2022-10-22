import {ContentErrors} from 'redux/store.types'
import {UserErrors} from 'redux/user/user.types'
import {UserSuccess} from 'redux/user/user.types'

export const userErrors: UserErrors = {
    '5': {
        ua: 'Щось пійшло не так. Спробоуйте пізніше',
        eng: 'Something went wrong. Try again later.',
        ru: 'Что-то пошло не так. Попройбуйте снова позже.'
    },
    '4': {
        login: {
            ua: 'Невірний логін або пароль.',
            eng: 'Wrong email or password.',
            ru: 'Неверниый логин или пароль.'
        },
        register: {
            // 'Inactive user already exists' : {
            //     ua: 'Неактивний користувач с заданим e-mail вже існує. Перейдіть на пошту для підтверждення акаунта..',
            //     eng: 'User with provided e-mail already exists. Go to the e-mail to confirm your account. ',
            //     ru: 'Пользователь с заданым e-mail уже существует. Перейти на почту для подтверждения акаунта.'
            // },
            'User already exists' : {
                ua: 'Користувач с заданим email вже існує. Введіть інший.',
                eng: 'User with provided e-mail already exists. Enter another.',
                ru: 'Пользователь с заданым e-mail уже существует. Введите другой.'
            }
        },
        activate: {
            ua: 'Користувача активовано.',
            eng: 'User activated.',
            ru: 'Пользоватеь активирован.'
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
        },
        sendCode: {
            ua: 'Ви нещодавно відправляли код.',
            eng: 'Вы недавно отправляли код.',
            ru: 'You recently submitted a code.'
        },
        updatePass: {
            ua: 'Старий пароль невірний.',
            eng: 'Old password is wrong.',
            ru: 'Старый пароль неверный.'
        },
        deleteUser: {
            ua: 'Невірний пароль.',
            eng: 'Wrong password.',
            ru: 'Неверный пароль.'
        }
    }
}

export const userSuccess: UserSuccess = {
    login: {
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
    register: {
        ua: 'Ви успішно зіреєстувалися.',
        eng: 'You have been successfully signed up.',
        ru: 'Вы успешно зарегестрировались.'
    },
    activate: {
        ua: 'Ви успішно активували акаунт.',
        eng: 'You have successfully activated your account.',
        ru: 'Вы успешно активировали аккаунт.'
    },
    signOut: {
        ua: 'Ви успышно вийшли.',
        eng: 'You have benn successfully signed out.',
        ru: 'Вы успешно вышли.'
    },
    sendCode: {
        ua: 'Код відправлане вам на пошту.',
        eng: 'The code has been sent to you by mail.',
        ru: 'Код отправлено вам на почту.'
    },
    updatePass: {
        ua: 'Пароль успішно змінено.',
        eng: 'Password changed successfully.',
        ru: 'Пароль успешно изменен.'
    },
    deleteUser: {
        ua: 'Ваш акаунт успішно видалено.',
        eng: 'Your account was successfully deleted.',
        ru: 'Ваш акаунт успешно удален.'
    }
}