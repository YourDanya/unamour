const menuContent = {
    common: {
        filters: {
            price: {
                min: '1000',
                max: '16000'
            },
            sorting: [
                '-price',
                'price',
                'date'
            ]
        }
    },
    translations: {
        //////////////////////////////////////////////////////////////////
        ua: {
            filter1: 'сортування',
            sort: [
                'ціна по спаданню',
                'ціна за зростанням',
                'нові',
            ],
            filter2: 'ціна',
            price: {
                coefficient: 1,
                from: 'від',
                to: 'до',
            },
            filter3: 'розмір',
            filter4: 'колір',
            reset: 'скинути',
            all: 'подивитись усе'
        },
        ////////////////////////////////////////////////////////////////////////////
        eng: {
            filter1: 'sort',
            sort: [
                'price descending',
                'price ascending',
                'new',
            ],
            filter2: 'price',
            price: {
                coefficient: 40,
                from: 'from',
                to: 'to',
            },
            filter3: 'size',
            filter4: 'color',
            reset: 'reset',
            all: 'view all'
        },
        /////////////////////////////////////////////////////////////////
        ru: {
            filter1: 'сортировка',
            sort: [
                'цена по убыванию',
                'цена по возрастанию',
                'новые',
            ],
            filter2: 'цена',
            price: {
                coefficient: 1,
                from: 'от',
                to: 'до',
            },
            filter3: 'размер',
            filter4: 'цвет',
            reset: 'сбросить',
            all: 'посмотреть все'
        }
    }
}

export default menuContent