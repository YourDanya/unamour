import {CreateItemImagesMap} from 'components/admin/items/item-form/utils/item-form.types'
import {ItemImagesMap} from 'components/admin/items/item-form/item-form.types'
import {CreateItemImagesValues} from 'components/admin/items/item-form/utils/item-form.types'

export const createItemImagesMap: CreateItemImagesMap = (params) => {
    const {itemImagesValues, itemValue} = params

    return itemImagesValues.reduce((itemImagesMap, imagesValue, index) => {
        Object.entries(imagesValue).forEach(([imageId, file]) => {
            itemImagesMap[imageId] = {file, color: itemValue.common.variants[index].color}
        })
        return itemImagesMap
    }, {} as ItemImagesMap)
}

export const createItemImagesValues: CreateItemImagesValues = ({itemValue}) => {
    return itemValue.common.variants.map(({ images}) => {
        const imagesObj = {} as Record<string, File | null>
        images.forEach((imageId) => imagesObj[imageId] = null)
        return imagesObj
    })
}