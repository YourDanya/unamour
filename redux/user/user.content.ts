import {UserErrors} from 'redux/user/user.types'
import {UserSuccess} from 'redux/user/user.types'

export const userErrors: UserErrors = {
    '5': {
        ua: 'Щось пійшло не так. Спробоуйте пізніше.',
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
            //     ua: 'Неактивний Юзер с заданим email вже існує. Перейдіть на пошту для підтверждення акаунта..',
            //     eng: 'User with provided email already exists. Go to the email to confirm your account. ',
            //     ru: 'Пользователь с заданым email уже существует. Перейти на почту для подтверждения акаунта.'
            // },
            'User already exists' : {
                ua: 'Юзер з наданим email вже існує. Введіть інший.',
                eng: 'User with provided email already exists. Enter another.',
                ru: 'Пользователь с предоставленным email уже существует. Введите другой.'
            }
        },
        logout: {
            ua: 'Щось пійшло не так. Спробоуйте пізніше',
            eng: 'Something went wrong. Try again later.',
            ru: 'Что-то пошло не так. Попройбуйте снова позже.'
        },
        forgetPass: {
            ua: 'Невірний email.',
            eng: 'Invalid email.',
            ru: 'Неверный email.'
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
        sendRegisterCode: {
            ua: 'Ви нещодавно відправляли код.',
            eng: 'You recently submitted a code.',
            ru: 'Вы недавно отправляли код.'
        },
        activateUser: {
            ua: 'Невірний код.',
            eng: 'Wrong code.',
            ru: 'Неверный код.'
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
        },
        updateEmail: {
            'Wrong password' : {
                ua: 'Невірний пароль.',
                eng: 'Wrong password.',
                ru: 'Неверный пароль'
            },
            'Email is already in use' : {
                ua: 'Наданий email використовується іншим юзером.',
                eng: 'Provided email is in use by another user.',
                ru: 'Предоставленный email используется другим пользователем.'
            }
        },
        sendUpdateEmailCode: {
            ua: 'Ви нещодавно відправляли код.',
            eng: 'You recently submitted a code.',
            ru: 'Вы недавно отправляли код.'
        },
        activateEmail: {
            ua: 'Невірний код.',
            eng: 'Wrong code.',
            ru: 'Неверный код.'
        },
        updateUser: {
            ua: 'Не вдалося змінити дані юзера.',
            eng: 'Failed to change user data.',
            ru: 'Не удалось изменить данные пользователя.'
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
        eng: 'You have been sent a link to reset-pass your password.',
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
        ua: 'Ви успішно зареєстувалися.',
        eng: 'You have been successfully signed up.',
        ru: 'Вы успешно зарегестрировались.'
    },
    activateUser: {
        ua: 'Юзера активовано.',
        eng: 'User activated.',
        ru: 'Пользоватеь активирован.'
    },
    logout: {
        ua: 'Ви успышно вийшли.',
        eng: 'You have benn successfully signed out.',
        ru: 'Вы успешно вышли.'
    },
    sendRegisterCode: {
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
    },
    updateEmail: {
        ua: 'Створено запит для зміни пошти.',
        eng: 'The email change request was created.',
        ru: 'Создано запрос для изменения почты.'
    },
    sendUpdateEmailCode: {
        ua: 'Код для підтверждення було вислано на пошту.',
        eng: 'The activation code was sent to the email.',
        ru: 'Код для подтверждения был выслан на почту.'
    },
    activateEmail: {
        ua: 'Пошту успішно змінено.',
        eng: 'Email was successfully updated.',
        ru: 'Почта успешно изменена.'
    },
    updateUser: {
        ua: 'Успішно оновлено дані юзера.',
        eng: 'User data has been updated successfully.',
        ru: 'Успешно обновлены данные пользователя.'
    }
}