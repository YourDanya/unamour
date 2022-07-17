const DeliveryContent = {
    formData: [
        {
            type: 'title',
            className: 'cart__title'
        },
        {
            type: 'input',
            name: 'country',
            className: 'cart__input cart__country'
        },
        {
            type: 'input',
            name: 'city',
            className: 'cart__input cart__city'
        },
        {
            type: 'input',
            name: 'index',
            className: 'cart__input cart__index'
        },
        {
            type: 'radio',
            name: 'delivery',
            inputs: [
                {
                    value: 'novaPoshta',
                    className: 'cart__input'
                }
            ]
        },
        {
            type: 'input',
            name: 'street',
            className: 'cart__input cart__street'
        },
        {
            type: 'input',
            name: 'house',
            className: 'cart__input cart__house'
        },
        {
            type: 'input',
            name: 'apartment',
            className: 'cart__input cart__apartment'
        },
        {
            type: 'title',
            className: 'cart__title'
        },
        {
            type: 'input',
            name: 'name',
            className: 'cart__input cart__surname'
        },
        {
            type: 'input',
            name: 'surname',
            className: 'cart__input cart__surname'
        },
        {
            type: 'input',
            name: 'email',
            className: 'cart__input cart__email'
        },
        {
            type: 'input',
            name: 'number',
            className: 'cart__input cart__number'
        },
        {
            type: 'input',
            name: 'comment',
            className: 'cart__input cart__comment'
        },
        {
            type: 'check',
            name: 'remember'
        }
    ],
    formPlaceholders: [
        'Країна',
        'Місто',
        'Індекс',
        '',
        'Вулиця',
        'Дім',
        'Квартира, офіс',
        'Ім\'я',
        'Прізвище',
        'Email',
        'Номер',
        'Коментар',
        'Зберегти інформацію для наступних покупок?'
    ],
    deliveryTypes: [
        {
            value: 'novaPoshta',
            label: {
                title: 'Доставка "Нова Пошта"',
                price: '200 ₴',
                duration: 'від 5 до 6 робочих днів'
            }
        },
        {
            value: 'ukrPoshta',
            label: {
                title: 'Доставка "Укр Пошта"',
                price: '250 ₴',
                duration: 'від 5 до 6 робочих днів'
            }
        }
    ]
}

export default DeliveryContent