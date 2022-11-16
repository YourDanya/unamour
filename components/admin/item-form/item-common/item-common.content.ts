const itemCommonContent = {
    common: {
        inputs: {
            slug: {validations: {}},
            slugCategory: {validations: {}},
            best: {validations: {}},
            special: {validations: {}},
            coming: {validations: {}},
            oldPrice: {validations: {}},
        }
    },
    translations: {
        ua: {
            inputs: {
                slug: 'слаг',
                slugCategory: 'слаг категорія',
                best: 'найкращі',
                special: 'особливі',
                coming: 'скоро буде',
                oldPrice: 'стара ціна',
            },
            category: 'категорія',
            title: 'загальне'
        },
        eng: {
            inputs: {
                slug: 'slug',
                slugCategory: 'slug category',
                best: 'best',
                special: 'special',
                coming: 'coming',
                oldPrice: 'old price'
            },
            category: 'category',
            title: 'common'
        },
        ru: {
            inputs: {
                slug: 'слаг',
                slugCategory: 'слаг категория',
                best: 'лучшие',
                special: 'особые',
                coming: 'скоро будет',
                oldPrice: 'старая цена'
            },
            category: 'категория',
            title: 'общее'
        }
    }
}

export default itemCommonContent