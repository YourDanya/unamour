const contactsContent = {
    inputs: {
        name: {value: '', validations: {minLength: 3, mexLength: 15}},
        number: {value: '', validations: {isPhone: true}},
        email: {value: '', validations: {isEmail: true}},
        message: {value: '', validations: {minLength: 10, maxLength: 200}}
    },
    translations: {
        ua: {
            contacts: 'контакти',
            feedback: 'зворотний зв\'язок',
            info: [
                'інтернет магазин',
                '+38 (066) 384-78-22 по всій Україні',
                'Режим роботи: ПН-ПТ з 9:00 до 18:00',
                'Наша пошта - unamour@gmail.com',
                'Ми в Instagram - @UNAMOUR'
            ],
            submit: 'надіслати',
            consent: 'Натискаючи кнопку Надіслати, я даю згоду на обробку та передачу моїх персональних даних.',
            inputs: {
                name: 'Ім\'я',
                number: 'Телефон',
                email: 'Ваш email',
                message: 'Повідомлення'
            },
            city: 'Київ',
            workHours: 'Режим роботи: з 11:00 до 22:00',
            number: '+380 (66) 384-78-22'
        },
        eng: {
            contacts: 'contacts',
            feedback: 'feedback',
            info: [
                'online store',
                "+38 (066) 384-78-22 throughout Ukraine",
                'Working hours: Mon-Fri from 9:00 to 18:00',
                'Our mail is unamour@gmail.com',
                'We\'re on Instagram - @UNAMOUR'
            ],
            submit: 'send',
            consent: 'By clicking the Submit button, I consent to the processing and transfer of my personal data.',
            inputs: {
                name: 'Name',
                number: 'Phone',
                email: 'Your email',
                message: 'Message'
            },
            city: 'Kyiv',
            workHours: 'Working hours: from 11:00 to 22:00',
            number: '+380 (66) 384-78-22'
        },
        ru: {
            contacts: 'контакты',
            feedback: 'обратная связь',
            info: [
                'интернет-магазин',
                '+38 (066) 384-78-22 по всей Украине',
                'Режим работы: ПН-ПТ с 9:00 до 18:00',
                'Наша почта - unamour@gmail.com',
                'Мы в Instagram - @UNAMOUR'
            ],
            submit: 'отправить',
            consent: 'Нажимая кнопку Отправить, я даю согласие на обработку и передачу моих персональных данных.',
            inputs: {
                name: 'Имя',
                number: 'Телефон',
                email: 'Ваш email',
                message: 'Сообщение'
            },
            city: 'Киев',
            workHours: 'Режим работы: с 11:00 до 22:00',
            number: '+380 (66) 384-78-22'
        }
    }
}

export default contactsContent