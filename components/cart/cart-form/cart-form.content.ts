const cartFormContent = {
    inputs: {
        country: {value: '', validations: {required: true}},
        city: {value: '', validations: {required: true}},
        index: {value: '', validations: {required: true, minLength: 5, maxLength: 5}},
        delivery: {value: '', validations: {required: true}},
        street: {value: '', validations: {required: true}},
        house: {value: '', validations: {required: true}},
        apartment: {value: '', validations: {required: true}},
        name: {value: '', validations: {required: true}},
        surname: {value: '', validations: {required: true}},
        email: {value: '', validations: {isEmail: true, minLength: 5}},
        number: {value: '', validations: {required: true}},
        comment: {value: '', validations: {required: true}},
        save: {value: false, validations: {required: true}}
    },
    translations: {
        ua: {
            inputs: {
                country: 'Країна',
                city: 'Місто',
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
            delivery: 'доставка',
            receiverData: 'дані одержувача'
        },
        eng: {
            inputs: {
                country: 'Country',
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
            delivery: 'delivery',
            receiverData: 'receiver data'
        },
        ru: {
            title: 'доставка',
            inputs: {
                country: 'Страна',
                city: 'Город',
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
            delivery: 'доставка',
            receiverData: 'данные получателя'
        }
    }
}

export default cartFormContent