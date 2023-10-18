export const dictionary = {
    ua: {
        inputs: {
            name: 'назва товару',
            description: 'опис',
            composition: 'композиція',
            parameters: 'параметри'
        },
        ua: 'українською',
        eng: 'англійською',
        ru: 'російською'
    },
    eng: {
        inputs: {
            name: 'item name',
            description: 'description',
            composition: 'composition',
            parameters: 'parameters'
        },
        ua: 'in ukrainian',
        eng: 'in english',
        ru: 'in russian'
    },
    ru: {
        inputs: {
            name: 'название товара',
            description: 'описание',
            composition: 'композиция',
            parameters: 'параметры'
        },
        ua: 'на украинском',
        eng: 'на английском',
        ru: 'на русском'
    }
}

export const initValues = {
    name: {validations: {required: true}},
    description: {validations: {required: true}},
    composition: {validations: {required: true}},
    parameters: {validations: {required: true}}
}

