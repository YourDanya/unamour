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
            in: 'через'
        },
        eng: {
            title: 'An account activation code has been sent to your email.',
            inputs: {
                code: 'Code'
            },
            activate: 'activate',
            resend: 'resend the code',
            in: 'in'
        },
        ru: {
            title: 'Вам на почту был выслан код активации аккаунта.',
            inputs: {
                code: 'Код'
            },
            activate: 'активировать',
            resend: 'отправить код повторно',
            in: 'через'
        }
    }
}

export default activateUserContent