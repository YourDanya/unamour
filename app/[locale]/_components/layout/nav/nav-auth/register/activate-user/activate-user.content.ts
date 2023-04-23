const activateUserContent = {
    common: {
        inputs: {
            code: {value: '', validations: {required: true, maxLength: 30}}
        }
    },
    translations: {
        ua: {
            title: 'Вам на пошту було вислано код для активації акаунта.',
            inputs: {
                code: 'Код'
            },
            activate: 'активувати',
            resend: 'відправити код повторно',
            in: 'через',
            success: 'Юзера активовано.',
            error: 'Невірний код.'
        },
        eng: {
            title: 'An account activation code has been sent to your email.',
            inputs: {
                code: 'Code'
            },
            activate: 'activate',
            resend: 'resend the code',
            in: 'in',
            success: 'User activated.',
            error: 'Wrong code.'
        },
        ru: {
            title: 'Вам на почту был выслан код активации аккаунта.',
            inputs: {
                code: 'Код'
            },
            activate: 'активировать',
            resend: 'отправить код повторно',
            in: 'через',
            success: 'Пользоватеь активирован.',
            error: 'Неверный код.'
        }
    }
}

export default activateUserContent