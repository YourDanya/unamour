const cartFormContent = {
    common: {
        inputs: {
            country: {value: 'Україна', validations: {required: true}},
            settlementType: {value: 'city', values: ['city', 'village']},
            city: {value: 'Київ', validations: {required: true}},
            index: {value: '00000', validations: {required: true, minLength: 5, maxLength: 5}},
            delivery: {value: '', validations: {}},
            street: {value: 'Салютна', validations: {required: true}},
            house: {value: '2', validations: {required: true}},
            apartment: {value: '250', validations: {required: true}},
            name: {value: 'Данил', validations: {required: true}},
            surname: {value: 'Тарасенко', validations: {required: true}},
            email: {value: 'pochtaformumumu@gmail.com', validations: {isEmail: true, minLength: 5}},
            number: {value: '0956665297', validations: {required: true}},
            comment: {value: '', validations: {}},
            save: {value: false, validations: {}},
            // country: {value: '', validations: {required: true}},
            // settlementType: {value: 'city', values: ['city', 'village']},
            // city: {value: '', validations: {required: true}},
            // index: {value: '', validations: {required: true, minLength: 5, maxLength: 5}},
            // delivery: {value: '', validations: {required: true}},
            // street: {value: '', validations: {required: true}},
            // house: {value: '', validations: {required: true}},
            // apartment: {value: '', validations: {required: true}},
            // name: {value: '', validations: {required: true}},
            // surname: {value: '', validations: {required: true}},
            // email: {value: '', validations: {isEmail: true, minLength: 5}},
            // number: {value: '', validations: {required: true}},
            // comment: {value: '', validations: {required: true}},
            // save: {value: false, validations: {required: true}}
        },
    },
    translations: {
        ua: {
            inputs: {
                country: 'Країна',
                settlementType: {
                    title: 'Тип населеного пункту',
                    labels:['Місто', 'Село']
                },
                city: 'Населений пункт',
                index: 'Індекс',
                delivery: '',
                street: 'Вулиця',
                house: 'Дім',
                apartment: 'Квартира, офіс',
                name: 'Ім\'я',
                surname: 'Прізвище',
                email: 'Ваш email',
                number: 'Номер',
                comment: 'Коментар',
                save: 'Зберегти інформацію для наступних покупок?'
            },
            indexLabel: 'Введіть 00000, якщо у вашої країни немає індексу',
            delivery: 'доставка',
            receiverData: 'дані одержувача',
        },
        eng: {
            inputs: {
                country: 'Country',
                settlementType: {
                    title: 'Settlement type',
                    labels:['City', 'Village']
                },
                city: 'City',
                index: 'Index',
                delivery: '',
                street: 'Street',
                house: 'House',
                apartment: 'Apartment, office',
                name: 'Name',
                surname: 'Surname',
                email: 'Your email',
                number: 'Number',
                comment: 'Comment',
                save: 'Save information for future purchases?'
            },
            indexLabel: 'Enter 00000 if your country does not have an index',
            delivery: 'delivery',
            receiverData: 'receiver data'
        },
        ru: {
            title: 'доставка',
            inputs: {
                country: 'Страна',
                settlementType: {
                    title: 'Тип населенного пункта',
                    labels:['Город', 'Деревня']
                },
                city: 'Населенный пункт',
                index: 'Индекс',
                delivery: '',
                street: 'Улица',
                house: 'Дом',
                apartment: 'Квартира, офис',
                name: 'Имя',
                surname: 'Фамилия',
                email: 'Ваш email',
                number: 'Номер',
                comment: 'Комментарий',
                save: 'Сохранить информацию для последующих покупок?'
            },
            indexLabel: 'Введите 00000, если у вашей страны нет индекса',
            delivery: 'доставка',
            receiverData: 'данные получателя'
        }
    }
}

export default cartFormContent