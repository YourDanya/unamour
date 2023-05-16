const itemCommonContent = {
    common: {
        inputs: {
            slug: {validations: {required: true, minLength: 5, maxLength: 30}},
            slugCategory: {validations: {required: true}},
            best: {validations: {}},
            special: {validations: {}},
            coming: {validations: {}},
            wedding: {validations: {}},
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
                wedding: 'весільная колекція',
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
                wedding: 'wedding collection',
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
                wedding: 'свадебная коллекция',
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