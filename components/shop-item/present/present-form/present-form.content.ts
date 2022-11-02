const presentFormContent = {
    inputs: {
        recName: {value: '', validations: {required: true}},
        recSurname: {value: '', validations: {required: true}},
        recEmail: {value: '', validations: {required: true, isEmail: true}},
        recPhone: {value: '', validations: {required: true, isPhone: true}},
        sendName: {value: '', validations: {required: true}},
        sendEmail: {value: '', validations: {required: true, isEmail: true},},
        country: {value: '', validations: {required: true}},
        city: {value: '', validations: {required: true}},
        index: {value: '', validations: {required: true, minLength: 5, maxLength: 5}},
        street: {value: '', validations: {required: true}},
        house: {value: '', validations: {required: true}},
        apartment: {value: '', validations: {required: true}},
        delivery: {value: 'ukrPoshta', values: ['ukrPoshta', 'novaPoshta']},
        anonymously: {value: false,},
        surprise: {value: false,}
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
                        },
                        {
                            title: 'Доставка "Укр Пошта"',
                            price: '250 ₴',
                            duration: 'від 5 до 6 робочих днів'
                        }
                    ]
                },
                anonymously: 'Подарувати анонімно?',
                surprise: 'Зробити сюрприз?'
            },
            toWhom: 'кому вы хочете зробити подарунок?',
            fromWhom: 'від кого?',
            where: 'куди відправити?',
            index: 'Введіть 00000, якщо у вашої країни немає індексу',
            select: 'оберіть доставку',
            totalPrice: 'Вартість:',
            delivery: 'Доставка:',
            pay: 'сплатити',
            currency: '₴'
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
                        },
                        {
                            title: 'Delivery "Ukr Poshta"',
                            price: '250 ₴',
                            duration: 'for 5 to 6 business days'
                        }
                    ]
                },
                anonymously: 'Give anonymously?',
                surprise: 'Make a surprise?'
            },
            toWhom: 'who do you want to give a gift to?',
            fromWhom: 'from whom?',
            where: 'where to send?',
            index: 'Enter 00000 if your country does not have an index',
            select: 'select shipping',
            totalPrice: 'Cost:',
            delivery: 'Delivery:',
            pay: 'pay',
            currency: '$'
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
                        },
                        {
                            title: 'Доставка "Укр Почта"',
                            price: '250 ₴',
                            duration: 'от 5 до 6 рабочих дней'
                        }
                    ]
                },
                anonymously: 'Подарить анонимно?',
                surprise: 'Сделать сюрприз?'
            },
            toWhom: 'кому вы хотите сделать подарок?',
            fromWhom: 'от кого?',
            where: 'куда отправить?',
            index: 'Введите 00000, если у вашей страны нет индекса',
            select: 'выберите доставку',
            totalPrice: 'Стоимость:',
            delivery: 'Доставка:',
            pay: 'заплатить',
            currency: '₴'
        }
    }
}

export default presentFormContent