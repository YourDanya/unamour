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
            success: 'Пошту успішно змінено.',
            error: 'Невірний код.'
        },
        eng: {
            title: 'change email',
            inputs: {
                code: 'Code'
            },
            activate: 'activate',
            resend: 'resend the code',
            in: 'in',
            success: 'Email was successfully updated.',
            error: 'Wrong code.'
        },
        ru: {
            title: 'изменение почты',
            inputs: {
                code: 'Код'
            },
            activate: 'активувати',
            resend: 'отправить код повторно',
            in: 'через',
            success: 'Почта успешно изменена.',
            error: 'Неверный код.'
        }
    }
}

export default updateEmailFormContent