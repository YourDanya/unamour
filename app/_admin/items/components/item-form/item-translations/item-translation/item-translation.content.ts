const itemTranslationContent = {
    common: {
        inputs: {
            name: {validations: {required: true}},
            category: {validations: {required: true}},
            description: {validations: {required: true}},
            composition: {validations: {required: true}},
            parameters: {validations: {required: true}},
            delivery: {validations: {required: true}}
        }
    },
    translations: {
        ua: {
            inputs: {
                name: 'назва товару',
                category: 'назва категорії',
                currency: 'валюта',
                description: 'опис',
                composition: 'композиція',
                parameters: 'параметри',
                delivery: 'доставка'
            },
            ua: 'українською',
            eng: 'англійською',
            ru: 'російською'
        },
        eng: {
            inputs: {
                name: 'item name',
                category: 'item name',
                currency: 'currency',
                description: 'description',
                composition: 'composition',
                parameters: 'parameters',
                delivery: 'delivery'
            },
            ua: 'in ukrainian',
            eng: 'in english',
            ru: 'in russian'
        },
        ru: {
            inputs: {
                name: 'название товара',
                category: 'название категории',
                currency: 'валюта',
                description: 'описание',
                composition: 'композиция',
                parameters: 'параметры',
                delivery: 'доставка'
            },
            ua: 'на украинском',
            eng: 'на английском',
            ru: 'на русском'
        }
    }
}

export default itemTranslationContent