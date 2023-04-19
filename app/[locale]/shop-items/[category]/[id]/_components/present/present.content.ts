export const presentContent = {
    common: {
        inputs: {
            recName: {value: ''},
            recSurname: {value: ''},
            recEmail: {value: '', validations: {isEmail: true} },
            recPhone: {value: '', validations: {isPhone: true} },
            sendName: {value: '', },
            sendEmail: {value: '', validations: {isEmail: true} },
            country: {value: ''},
            city: {value: ''},
            index: {value: '', validations: {minLength: 5, maxLength: 5},},
            street: {value: ''},
            house: {value: ''},
            apartment: {value: ''},
            delivery: {value: 'novaPoshta', values: ['novaPoshta']},
            anonymously: {value: false},
            surprise: {value: false}
        }
    },
    translations: {
        ua: {
            inputs: {
                recName: 'Ім\'я отримувача',
                recSurname: 'Прізвище отримувача',
                recEmail: 'email отримувача',
                recPhone: 'Номер отримувача',
                sendName: 'Ім\'я відправника',
                sendEmail: 'email відправника',
                country: 'Країна',
                city: 'Місто',
                index: 'Індекс',
                street: 'Вулиця',
                house: 'Будинок',
                apartment: 'Квартира',
                delivery: {
                    labels: [
                        {
                            title: 'Доставка "Нова Пошта"',
                            price: '200 ₴',
                            duration: 'від 5 до 6 робочих днів'
                        }
                    ]
                },
                anonymously: 'Подарувати анонімно?',
                surprise: 'Зробити сюрприз?'
            }
        },
        eng: {
            inputs: {
                recName: 'Name of recipient',
                recSurname: 'Recipient\'s Surname',
                recEmail: 'Recipient\'s email',
                recPhone: 'Recipient number',
                sendName: 'Name of sender',
                sendEmail: 'Sender\'s email',
                country: 'Country',
                city: 'City',
                index: 'Index',
                street: 'Street',
                house: 'House',
                apartment: 'Apartment',
                delivery: {
                    labels: [
                        {
                            title: 'Delivery "Nova Poshta"',
                            price: '200 ₴',
                            duration: 'for 5 to 6 business days'
                        }
                    ]
                },
                anonymously: 'Give anonymously?',
                surprise: 'Make a surprise?'
            }
        },
        ru: {
            inputs: {
                recName: 'Имя получателя',
                recSurname: 'Фамилия получателя',
                recEmail: 'email получателя',
                recPhone: 'Номер получателя',
                sendName: 'Имя отправителя',
                sendEmail: 'email отправителя',
                country: 'Страна',
                city: 'Город',
                index: 'Индекс',
                street: 'Улица',
                house: 'Дом',
                apartment: 'Квартира',
                delivery: {
                    labels: [
                        {
                            title: 'Доставка "Новая Почта"',
                            price: '200 ₴',
                            duration: 'от 5 до 6 рабочих дней'
                        }
                    ]
                },
                anonymously: 'Подарить анонимно?',
                surprise: 'Сделать сюрприз?'
            }
        }
    }
}