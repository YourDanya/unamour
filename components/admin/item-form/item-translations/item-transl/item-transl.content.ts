const itemTransl = {
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
            }
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
            }
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
            }
        }
    }
}

export default itemTransl