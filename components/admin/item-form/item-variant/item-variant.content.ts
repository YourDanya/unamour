const ItemVariantContent = {
    common: {
        inputs: {
            price: {validations: {required: true, isNumber: true}}
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
            delete: 'видалити варіант'
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
            delete: 'delete variant'
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
            delete: 'удалить вариант'
        }
    }
}

export default ItemVariantContent