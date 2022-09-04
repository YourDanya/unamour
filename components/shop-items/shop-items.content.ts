const shopItemsContent = {
    categories: [
        '/shop-items/all',
        '/shop-items/eco-leather',
        '/shop-items/dresses',
        '/shop-items/skirts',
        '/shop-items/shirts-and-blouses',
        '/shop-items/tops-and-bodies',
        '/shop-items/jackets-and-vets',
        '/shop-items/pants-and-shorts',
        '/shop-items/overalls',
        '/shop-items/jersey',
        '/shop-items/swimwear',
        '/shop-items/top-cloth',
        '/shop-items/sets',
        '/shop-items/accessories',
    ],
    filters: {
        sorting: [
            '-price',
            'price',
            'date'
        ],
        sizes: [
            'xxs',
            'xs',
            'xs-s',
            's',
            's-m',
            'm',
            'l',
            'ind'
        ],
        colors: [
            {
                code: '#fffcf5',
                param: 'milk'
            },
            {
                code: '#212121',
                param: 'black'
            },
            {
                code: '#910951',
                param: 'purple'
            },
            {
                code: '#cfc0b6',
                param: 'grey'
            },
            {
                code: '#ffffff',
                param: 'white'
            },
            {
                code: '#a86540',
                param: 'light brown'
            },
            {
                code: '#a77752',
                param: 'beige'
            },
            {
                code: '#442d25',
                param: 'coffee'
            },
            {
                code: '#735435',
                param: 'brown'
            },
            {
                code: '#87776b',
                param: 'cocoa'
            },
            {
                code: '#4d4d59',
                param: 'metallic'
            },
            {
                code: '#d4b2a7',
                param: 'dusty-rose'
            },
            {
                code: '#ffeede',
                param: 'cream'
            },
            {
                code: '#1800cc',
                param: 'dark-blue'
            },
            {
                code: '#ff0000',
                param: 'red'
            },
            {
                code: '#87cefa',
                param: 'blue'
            },
            {
                code: '#dadeaf',
                param: 'pearl-gray'
            },
            {
                code: '#313126',
                param: 'graphite'
            },
            {
                code: '#ededed',
                param: 'light-gray'
            },
            {
                code: '#f2e8c9',
                param: 'creamy'
            }
        ],
    },
    translations: {
        //////////////////////////////////////////////////////////////////
        ua: {
            categories: [
                'подивитись все',
                'екокожа',
                'сукня',
                'спідниці',
                'сорочки та блузи',
                'топи і боді',
                'жакети і жилети',
                'брюки і шорти',
                'комбінезони',
                'трикотаж',
                'купальники',
                'верхній одяг',
                'комплекти',
                'аксесуари',
            ],
            filter1: 'сортування',
            sort: [
                'ціна по спаданню',
                'ціна за зростанням',
                'нові',
            ],
            filter2: 'ціна',
            price: {
                from: 'від',
                min: '1000',
                to: 'до',
                max: '16000',
            },
            filter3: 'розмір',
            sizes: [
                'XXS',
                'XS',
                'XS-S',
                'S',
                'S-M',
                'M',
                'L',
                'ІНД'
            ],
            filter4: 'колір',
            colors: [
                'молочний',
                'чорний',
                'пурпурний',
                'сірий',
                'білий',
                'світло-коричневий',
                'біжовий',
                'кав\'яний',
                'коричневий',
                'какао',
                'металік',
                'пильна троянда',
                'кремовий',
                'синій',
                'червоний',
                'блакитий',
                'перливо-сірий',
                'графітовий',
                'світло-сірий',
                'верховий'
            ],
            reset: 'скинути',
        },
        ////////////////////////////////////////////////////////////////////////////
        eng: {
            categories: [
                'view all',
                'eco leather',
                'dresses',
                'skirts',
                'shirts and blouses',
                'tops and bodies',
                'jackets and vests',
                'pants and shorts',
                'overalls',
                'jersey',
                'swimwear',
                'top cloth',
                'sets',
                'accessories',
            ],
            filter1: 'sort',
            sort: [
                'price descending',
                'price ascending',
                'new',
            ],
            filter2: 'price',
            price: {
                from: 'from',
                min: '1000',
                to: 'to',
                max: '16000',
            },
            filter3: 'size',
            sizes: [
                'XXS',
                'XS',
                'XS-S',
                'S',
                'S-M',
                'M',
                'L',
                'IND'
            ],
            filter4: 'color',
            colors: [
                'milk',
                'black',
                'purple',
                'grey',
                'white',
                'light brown',
                'beige',
                'coffee',
                'brown',
                'cocoa',
                'metallic',
                'dusty trojan',
                'cream',
                'blue',
                'red',
                'blue',
                'pearl grey',
                'graphite',
                'light grey',
                'creamy'
            ],
            reset: 'reset',
        },
        /////////////////////////////////////////////////////////////////
        ru: {
            categories: [
                'посмотреть все',
                'экокожа',
                'платья',
                'юбки',
                'рубашки и блузы',
                'топы и боди',
                'жакеты и жилеты',
                'брюки и шорты',
                'комбинезоны',
                'трикотаж',
                'купальники',
                'верхняя одежда',
                'комплекты',
                'аксессуары',
            ],
            filter1: 'сортировка',
            sort: [
                'цена по убыванию',
                'цена по возрастанию',
                'новые',
            ],
            filter2: 'цена',
            price: {
                from: 'от',
                min: '1000',
                to: 'до',
                max: '16000',
            },
            filter3: 'размер',
            sizes: [
                'XXS',
                'XS',
                'XS-S',
                'S',
                'S-M',
                'M',
                'L',
                'ИНД'
            ],
            filter4: 'цвет',
            colors: [
                'молочный',
                'черный',
                'пурпурный',
                'серый',
                'белый',
                'светло-коричневий',
                'бежовый',
                'кофейный',
                'коричневый',
                'какао',
                'металлик',
                'пыльная троянда',
                'кремовый',
                'синий',
                'красный',
                'голубой',
                'жечужно-серый',
                'графитовый',
                'светло-серый',
                'сливочный'
            ],
            reset: 'сбросить'
        }
    }
}

export default  shopItemsContent