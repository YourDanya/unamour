const contactsContent = {
    common: {
        inputs: {
            name: {value: '', validations: {minLength: 3, mexLength: 15}},
            number: {value: '', validations: {isPhone: true}},
            email: {value: '', validations: {isEmail: true}},
            message: {value: '', validations: {minLength: 10, maxLength: 200}}
        }
    },
    translations: {
        ua: {
            contacts: 'контакти',
            feedback: 'зворотний зв\'язок',
            onlineInfo: [
                'інтернет магазин',
                '+38 (063) 229-33-61 по всій Україні',
                'Режим роботи: ПН-ПТ з 9:00 до 22:00',
                'Наша пошта - unamour@gmail.com',
                'Ми в Instagram - @UNAMOUR_OFFICIAL'
            ],
            submit: 'надіслати',
            consent: 'Натискаючи кнопку Надіслати, я даю згоду на обробку та передачу моїх персональних даних.',
            inputs: {
                name: 'Ім\'я',
                number: 'Телефон',
                email: 'Ваш email',
                message: 'Повідомлення'
            },
            offlineInfo: [
                [
                    'КИЇВ',
                    'Telegram/whatsapp: +38 (063) 229-33-61 по всій Україні',
                    'ТРЦ Gulliver, Спортивна площа 1, 3 поверх, Brand room',
                    'Режим роботи: ПН-НД з 11:00 до 21:00',
                    'Інстаграм шоуруму: BRAND_ROOMUA'
                ],
                [
                    'ЛЬВІВ',
                    'Telegram/whatsapp: +38 (063) 229-33-61 по всій Україні',
                    'ТРЦ Victoria Gardens, вул. Кульпарківська 122, 2 поверх, Brand room',
                    'Режим роботи: ПН-НД з 11:00 до 21:00',
                    'Інстаграм шоуруму: BRAND_ROOMUA'
                ],
                [
                    'ТЕРНОПІЛЬ',
                    'Telegram/whatsapp: +38 (063) 229-33-61 по всій Україні',
                    'Nizhna Showroom, вул. Руська 14',
                    'Режим роботи: ПН-НД з 11:00 до 21:00',
                    'Інстаграм шоуруму: NIZHNA_SHOWROOM'
                ]
            ]
        },
        eng: {
            contacts: 'contacts',
            feedback: 'feedback',
            offlineInfo: [
                [
                    'KYIV',
                    "Telegram/whatsapp: +38 (063) 229-33-61 throughout Ukraine",
                    "Gulliver Shopping Center, Sports Square 1, 3rd floor, Brand room",
                    "Working hours: Mon-Sun from 11:00 a.m. to 9:00 p.m.",
                    "Showroom Instagram: BRAND_ROOMUA"
                ],
                [
                    'LVIV',
                    'Telegram/whatsapp: +38 (063) 229-33-61 throughout Ukraine',
                    'Victoria Gardens Shopping Center, st. Kulparkivska 122, 2nd floor, Brand room',
                    'Working hours: Mon-Sun from 11:00 a.m. to 9:00 p.m.',
                    'Showroom Instagram: BRAND_ROOMUA'
                ],
                [
                    "TERNOPIL",
                    "Telegram/whatsapp: +38 (063) 229-33-61 throughout Ukraine",
                    'Nizhna Showroom, str. Russian 14',
                    "Working hours: Mon-Sun from 11:00 a.m. to 9:00 p.m.",
                    "Showroom Instagram: NIZHNA_SHOWROOM"
                ]
            ],
            onlineInfo: [
                'интернет магазин',
                '+38 (063) 229-33-61 по всей Украине',
                'Режим работы: ПН-ПТ с 9:00 до 22:00',
                'Наша почта - unamour@gmail.com',
                'Мы в Instagram - @UNAMOUR_OFFICIAL'
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
            offlineInfo: [
                [
                    'КИЇВ',
                    'Telegram/whatsapp: +38 (063) 229-33-61 по всій Україні',
                    'ТРЦ Gulliver, Спортивна площа 1, 3 поверх, Brand room',
                    'Режим роботи: ПН-НД з 11:00 до 21:00',
                    'Інстаграм шоуруму: BRAND_ROOMUA'
                ],
                [
                    'ЛЬВІВ',
                    'Telegram/whatsapp: +38 (063) 229-33-61 по всій Україні',
                    'ТРЦ Victoria Gardens, вул. Кульпарківська 122, 2 поверх, Brand room',
                    'Режим роботи: ПН-НД з 11:00 до 21:00',
                    'Інстаграм шоуруму: BRAND_ROOMUA'
                ],
                [
                    'ТЕРНОПІЛЬ',
                    'Telegram/whatsapp: +38 (063) 229-33-61 по всій Україні',
                    'Nizhna Showroom, вул. Руська 14',
                    'Режим роботи: ПН-НД з 11:00 до 21:00',
                    'Інстаграм шоуруму: NIZHNA_SHOWROOM'
                ]
            ],
            onlineInfo: [
                'online store',
                "+38 (066) 384-78-22 throughout Ukraine",
                'Working hours: Mon-Fri from 9:00 to 18:00',
                'Our mail is unamour@gmail.com',
                'We\'re on Instagram - @UNAMOUR'
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