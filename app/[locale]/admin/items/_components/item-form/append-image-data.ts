import {AppendImageDataParams} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ImageValue} from 'app/_common/types/image-value'

export const appendImageData = (params: AppendImageDataParams) => {
    const {newImage, oldImage} = params

    // if (variantIndex >=1) {debugger}

    if (newImage && !oldImage) {
        handleImageAdded(params)
    }

    if (newImage && oldImage) {
        handleImageUpdated(params)
    }

    if (!newImage && oldImage) {
        handleImageDeleted(params)
    }
}
const handleImageAdded = (params: AppendImageDataParams) => {
    const {should, createData, variantIndex, imageIndex, newImage, itemValue, replaceMap} = params

    if (newImage.file) {
        should.create = true
        createData.append(`${variantIndex}_${imageIndex}`, newImage.file as File)
    }

    const {images} = itemValue.variants[variantIndex]

    if (newImage.path) {
        images[imageIndex] = newImage as ImageValue
        replaceMap[newImage.path] = true
    }
}
const handleImageUpdated = (params: AppendImageDataParams) => {
    const {
        should, updateData, variantIndex, imageIndex, newImage, oldImage, replaceMap, deleteData, itemValue
    } = params

    const {images} = itemValue.variants[variantIndex]

    if (newImage.file) {
        should.update = true
        updateData.append(oldImage.path, newImage.file as File)
        images.push(oldImage as ImageValue)
    }

    if (newImage.path) {
        images[imageIndex] = newImage as ImageValue
        replaceMap[newImage.path] = true
    }

    if (newImage.path && !replaceMap[oldImage.path]) {
        should.delete = true
        deleteData.images.push(`${variantIndex}_${imageIndex}`)
    }
}
const handleImageDeleted = (params: AppendImageDataParams) => {
    const {variantIndex, imageIndex, replaceMap, oldImage, should, deleteData} = params

    if (!replaceMap[oldImage.path]) {
        should.delete = true
        deleteData.images.push(`${variantIndex}_${imageIndex}`)
    }
}