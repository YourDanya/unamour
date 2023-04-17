const updateEmailFormContent = {
    common: {
        inputs: {
            code: {value: '', validations: {required: true}}
        }
    },
    translations: {
        ua: {
            title: 'зміна пошти',
            inputs: {
                code: 'Код'
            },
            activate: 'активувати',
            resend: 'відправити код повторно',
            in: 'через',
        },
        eng: {
            title: 'change email',
            inputs: {
                code: 'Code'
            },
            activate: 'activate',
            resend: 'resend the code',
            in: 'in'
        },
        ru: {
            title: 'изменение почты',
            inputs: {
                code: 'Код'
            },
            activate: 'активувати',
            resend: 'отправить код повторно',
            in: 'через'
        }
    }
}

export default updateEmailFormContent