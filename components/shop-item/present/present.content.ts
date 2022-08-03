export const presentContent = {
    inputs: {
        recName: {value: '', error: ''},
        recSurname: {value: '', error: ''},
        recEmail: {value: '', validations: {isEmail: true}, error: ''},
        recPhone: {value: '', validations: {isPhone: true}, error: ''},
        sendName: {value: '', error: ''},
        sendEmail: {value: '', validations: {isEmail: true}, error: ''},
        country: {value: '', error: ''},
        city: {value: '', error: ''},
        index: {value: '', validations: {minLength: 5, maxLength: 5}, error: ''},
        street: {value: '', error: ''},
        house: {value: '', error: ''},
        apartment: {value: '', error: ''},
        delivery: {value: ['ukrPoshta', 'novaPoshta'], error: ''},
        anonymously: {value: false, error: ''},
        surprise: {value: false, error: ''}
    },
    translation: {
        ua: {
            inputs: {
                recName: {placeholder: 'Ім\'я отримувача'},
                recSurname: {placeholder: 'Прізвище отримувача'},
                recEmail: {placeholder: 'E-mail отримувача'},
                recPhone: {placeholder: 'Номер отримувача'},
                sendName: {placeholder: 'Ім\'я відправника'},
                sendEmail: {placeholder: 'E-mail відправника'},
                country: {placeholder: 'Країна'},
                city: {placeholder: 'Місто'},
                index: {placeholder: 'Індекс'},
                street: {placeholder: 'Вулиця'},
                house: {placeholder: 'Будинок'},
                apartment: {placeholder: 'Квартира'},
                delivery: {
                    labels: [
                        {
                            title: 'Доставка "Нова Пошта"',
                            price: '200 ₴',
                            duration: 'від 5 до 6 робочих днів'
                        },
                        {
                            title: 'Доставка "Укр Пошта"',
                            price: '250 ₴',
                            duration: 'від 5 до 6 робочих днів'
                        }
                    ]
                },
                anonymously: {placeholder: 'Подарувати анонімно?'},
                surprise: {placeholder: 'Зробити сюрприз?'}
            }
        },
        eng: {
            inputs: {
                recName: {placeholder: 'Name of recipient'},
                recSurname: {placeholder: 'Recipient\'s Surname'},
                recEmail: {placeholder: 'Recipient\'s email'},
                recPhone: {placeholder: 'Recipient number'},
                sendName: {placeholder: 'Name of sender'},
                sendEmail: {placeholder: 'Sender\'s email'},
                country: {placeholder: 'Country'},
                city: {placeholder: 'City'},
                index: {placeholder: 'Index'},
                street: {placeholder: 'Street'},
                house: {placeholder: 'House'},
                apartment: {placeholder: 'Apartment'},
                delivery: {
                    labels: [
                        {
                            title: 'Delivery "Nova Poshta"',
                            price: '200 ₴',
                            duration: 'for 5 to 6 business days'
                        },
                        {
                            title: 'Delivery "Ukr Poshta"',
                            price: '250 ₴',
                            duration: 'for 5 to 6 business days'
                        }
                    ]
                },
                anonymously: {placeholder: 'Give anonymously?'},
                surprise: {placeholder: 'Make a surprise?'}
            }
        },
        ru: {
            inputs: {
                recName: {placeholder: 'Имя получателя'},
                recSurname: {placeholder: 'Фамилия получателя'},
                recEmail: {placeholder: 'E-mail получателя'},
                recPhone: {placeholder: 'Номер получателя'},
                sendName: {placeholder: 'Имя отправителя'},
                sendEmail: {placeholder: 'E-mail отправителя'},
                country: {placeholder: 'Страна'},
                city: {placeholder: 'Город'},
                index: {placeholder: 'Индекс'},
                street: {placeholder: 'Улица'},
                house: {placeholder: 'Дом'},
                apartment: {placeholder: 'Квартира'},
                delivery: {
                    labels: [
                        {
                            title: 'Доставка "Новая Почта"',
                            price: '200 ₴',
                            duration: 'от 5 до 6 рабочих дней'
                        },
                        {
                            title: 'Доставка "Укр Почта"',
                            price: '250 ₴',
                            duration: 'от 5 до 6 рабочих дней'
                        }
                    ]
                },
                anonymously: {placeholder: 'Подарить анонимно?'},
                surprise: {placeholder: 'Сделать сюрприз?'}
            }
        }
    }
}