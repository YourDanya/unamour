const ItemVariantContent = {
    common: {
        inputs: {
            price: {validations: {required: true, isNumber: true}},
            color: {validations: {required: true}},
            size: {validations: {}}
        }
    },
    translations: {
        ua: {
            price: 'ціна',
            color: 'колір',
            images: 'зображення',
            sizes: 'розміри',
            inputs: {
                price: 'ціна',
                newImage: 'введіть адресу'
            },
            addImage: 'додати картинку',
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
            addImage: 'add image',
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
            addImage: 'добавить картинку',
            variant: 'вариант',
            delete: 'удалить вариант',
            sizeError: 'Список размеров не должен быть пустым.',
            colorError: 'Выбранный цвет уже занят.'
        }
    }
}

export default ItemVariantContent