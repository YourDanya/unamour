export const resetContent = {
    inputs: {
        email: {value: '', validations: {isEmail: true, minLength: 7}} ,
        pass: {value: '', validations: {minLength: 6, maxLength: 15}} ,
        passConfirm: {value: '', validations: {minLength: 6, maxLength: 15}} ,
    },
    translations: {
        ua: {
            title: 'відновити',
            switch: 'увійти',
            explanation: 'Вкажіть e-mail, і ми надішлемо вам посилання на\nвідновлення пароля',
            inputs: {
                email: 'Ваш e-mail' ,
                pass: 'Пароль',
                passConfirm: 'Підтверждення пароля'
            },
            forget: {
                success: 'Вам на почту було вислано ключ для відновлення пароля.',
                error: {
                    4: 'Невірний e-mail.',
                    5: 'Щось пішло не так. Спробуйте пізніше.'
                }
            },
            reset: {
                success: 'Ваш пароль успішно змінено.',
                error: {
                    4: 'Невірний код.',
                    5: 'Щось пішло не так. Спробуйте пізніше.'
                }
            },
        },
        eng: {
            title: 'reset',
            switch: 'sign in',
            explanation: 'Enter your e-mail and we will send you a link to reset your password',
            inputs: {
                email: 'Your e-mail' ,
                pass: 'Password',
                passConfirm: 'Password confirmation'
            },
            forget: {
                success: 'A password reset key has been sent to your email.',
                error: {
                    4: 'Invalid e-mail.',
                    5: 'Something went wrong. Try again later.'
                }
            },
            reset: {
                success: 'Your password has been successfully changed.',
                error: {
                    4: 'Invalid code.',
                    5: 'Something went wrong. Try again later.'
                }
            }
        },
        ru: {
            title: 'сбросить',
            switch: 'войти',
            explanation: 'Укажите e-mail, и мы отправим вам ссылку на восстановление пароля',
            inputs: {
                email: 'Ваш e-mail',
                pass: 'Пароль',
                passConfirm: 'Підтверждення пароля'
            },
            forget: {
                success: 'Вам на почту был выслан ключ для восстановления пароля.',
                error: {
                    4: 'Неверный e-mail.',
                    5: 'Что-то пошло не так. Попробуйте позже.'
                }
            },
            reset: {
                success: 'Ваш пароль успешно изменен.',
                error: {
                    4: 'Неверный код.',
                    5: 'Что-то пошло не так. Попробуйте позже.'
                }
            }
        }
    }
}