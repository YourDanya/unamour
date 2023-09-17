const itemCommonContent = {
    common: {
        inputs: {
            slug: {validations: {required: true, minLength: 5, maxLength: 40}},
            slugCategory: {validations: {required: true}},
            best: {validations: {}},
            special: {validations: {}},
            coming: {validations: {}},
            oldPrice: {validations: {required: true, isNumberGreaterThanZero: true}},
            weight: {validations: {}},
            volume: {validations: {}}
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
                weight: 'вага',
                volume: 'об\'єм'
            },
            category: 'категорія',
            title: 'загальне',
            uniqueSlug: 'Слаг повинен бути унікальним'
        },
        eng: {
            inputs: {
                slug: 'slug',
                slugCategory: 'slug category',
                best: 'best',
                special: 'special',
                coming: 'coming',
                oldPrice: 'old price',
                weight: 'weight',
                volume: 'volume'
            },
            category: 'category',
            title: 'common',
            uniqueSlug: 'Slug should be unique'
        },
        ru: {
            inputs: {
                slug: 'слаг',
                slugCategory: 'слаг категория',
                best: 'лучшие',
                special: 'особые',
                coming: 'скоро будет',
                oldPrice: 'старая цена',
                weight: 'вес',
                volume: 'объем'
            },
            category: 'категория',
            title: 'общее',
            uniqueSlug: 'Слаг должен быть уникальным'
        }
    }
}

export default itemCommonContent