import {Locale} from "../redux/main/main.types";

export const Errors = {
    signIn: {
        '4': {
            ua: 'Невірний логін або пароль.',
            eng: 'Wrong email or password.',
            ru: 'Неверниый логин или пароль.'
        },
        '5' : {
            ua: 'Щось пійшло не так. Спробоуйте пізніше',
            eng: 'Something went wrong. Try again later.',
            ru: 'Что-то пошло не так. Попройбуйте снова позже.'
        }
    },
    signUp :{
        '4' : {
            ua: 'Користувач с заданим e-mail вже існує.',
            eng: 'User with provided e-mail already exists.',
            ru: 'Пользователь с заданым e-mail уже существует.'
        },
        '5' : {
            ua: 'Щось пійшло не так. Спробоуйте пізніше',
            eng: 'Something went wrong. Try again later.',
            ru: 'Что-то пошло не так. Попройбуйте снова позже.'
        }
    }
}

export type ErrorField = keyof typeof Errors

export type ErrorKey = keyof typeof Errors[ErrorField]