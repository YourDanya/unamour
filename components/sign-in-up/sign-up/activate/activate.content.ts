const activateContent = {
    inputs: {
        code: {value: '', validations: {required: true, maxLength: 30}}
    },
    translations: {
        ua: {
            title: 'Вам на пошту було вислано код для активації акаунта.',
            inputs: {
                code: 'Код'
            },
            resend: 'відправити код повторно',
            activate: 'активувати',
            in: 'через'
        },
        eng: {
            title: 'An account activation code has been sent to your email.',
            inputs: {
                code: 'Code'
            },
            resend: 'resend the code',
            activate: 'activate',
            in: 'in'
        },
        ru: {
            title: 'Вам на почту был выслан код активации аккаунта.',
            inputs: {
                code: 'Код'
            },
            resend: 'отправить код повторно',
            activate: 'активировать',
            in: 'через'
        }
    }
}

export default activateContent