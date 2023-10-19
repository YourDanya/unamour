export const dictionary = {
    ua: {
        price: 'ціна',
        color: 'колір',
        images: 'зображення',
        sizes: 'розміри',
        inputs: {
            price: 'ціна',
            newImage: 'введіть адресу'
        },
        variant: 'варіант',
        delete: 'видалити варіант',
        sizeError: 'Список розмірів не повинен бути пустим.',
        colorError: 'Обраний кольор вже зайнятий.'
    },
    eng: {
        price: 'price',
        color: 'price',
        images: 'images',
        sizes: 'sizes',
        inputs: {
            price: 'price',
            newImage: 'enter url'
        },
        variant: 'variant',
        delete: 'delete variant',
        sizeError: 'Size list must not be empty.',
        colorError: 'The selected color is already taken.'
    },
    ru: {
        price: 'цена',
        color: 'цвет',
        images: 'картинки',
        sizes: 'размеры',
        inputs: {
            price: 'цена',
            newImage: 'введите адрес'
        },
        variant: 'вариант',
        delete: 'удалить вариант',
        sizeError: 'Список размеров не должен быть пустым.',
        colorError: 'Выбранный цвет уже занят.'
    }
}

export const initInputs = {
    price: {validations: {required: true, isNumber: true, isNumberGreaterThanZero: true}},
    color: {validations: {required: true}}
}