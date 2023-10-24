import {ItemFormApiState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ImageValue} from 'app/_common/types/image-value'
import {appendObj} from 'app/_common/utils/helpers/append-obj/append-obj.util'
import {FormImageValue} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {FetchedItem} from 'app/_common/types/fetched-item'

export const save = (state: ItemFormApiState) => {
    const {errorCount, props} = state
    const {action} = props

    if (errorCount > 0) {
        return setErrors(state)
    }
    if (action === 'update') {
        update(state)
    } else {
        create(state)
    }
}

export const setErrors = (state: ItemFormApiState) => {
    const {setMessages, messages, transl, errorCount, shouldCheck} = state
    messages.client.error = transl.clientError(errorCount)

    setMessages({...messages})
    shouldCheck.current = true
}

const update = (state: ItemFormApiState) => {
    const {actions, itemValue, imageValues, initImagesRef} = state
    const {variants} = itemValue

    actions.updateItem.start({item: itemValue})
    const withDataState = getData(state)

    const lastIndex = Math.max(imageValues.length, initImagesRef.current.length)
    for (let i = 0; i < lastIndex; i++) {
        mapImagesActions(appendObj(withDataState, {variantIndex: i}))
    }

    pushActions(withDataState)
}

const getData = (state: ItemFormApiState) => {
    const {itemValue} = state

    const _id = itemValue._id!

    let updateData = new FormData()
    let createData = new FormData()
    createData.append('_id', _id)
    let deleteData = {_id, images: []}

    const should = {create: false, update: false, delete: false}

    return appendObj(state, {updateData, createData, deleteData, should})
}
const mapImagesActions = (state: ReturnType<typeof getData> & { variantIndex: number }) => {
    const {imageValues, itemValue, variantIndex, createData, deleteData, updateData, initImagesRef} = state
    const {variants} = itemValue

    const initImageArr = initImagesRef.current[variantIndex] ?? []
    const imageArr = imageValues[variantIndex] ?? []

    const lastImageIndex = Math.max(imageArr.length, initImageArr.length)

    for (let i = 0; i < lastImageIndex; i++) {
        const oldImage = initImageArr[i] as ImageValue
        const newImage = imageArr[i]

        appendImageData(appendObj(state, {oldImage, newImage, variantIndex, imageIndex: i}))
    }

    // updateData.forEach((value, key) => {
    //     console.log(`value = ${value}, key = ${key}`)
    // })
    // createData.forEach((value, key) => {
    //     console.log(`value = ${value}, key = ${key}`)
    // })
    // console.log(deleteData)
}

const pushActions = (state: ReturnType<typeof getData>) => {
    const {should, stackActions, actions, createData, deleteData, updateData} = state

    if (should.create) {
        stackActions.current.push(() => actions.createImages.start(createData))
    }
    if (should.update) {
        stackActions.current.push(() => actions.updateImages.start(updateData))
    }
    if (should.delete) {
        stackActions.current.push(() => actions.deleteImages.start(deleteData))
    }
}

const appendImageData = (params: ReturnType<typeof getData> & {
    newImage: FormImageValue, oldImage: ImageValue, variantIndex: number, imageIndex: number
}) => {
    const {should, createData, updateData, deleteData, newImage, oldImage, variantIndex, imageIndex} = params

    // debugger

    if (newImage && !oldImage) {
        should.create = true
        console.log(`${variantIndex}_${imageIndex}`, newImage.file)
        createData.append(`${variantIndex}_${imageIndex}`, newImage.file as File)
    }
    if (newImage && oldImage && newImage.url !== oldImage.url) {
        should.update = true
        updateData.append(oldImage.path, newImage.file as File)
    }
    if (!newImage && oldImage) {
        should.delete = true
        deleteData.images.push(`${variantIndex}_${imageIndex}` as never)
    }
}

const create = (state: ItemFormApiState) => {
    const {actions, itemValue, stackActions, imageValues} = state
    const {variants} = itemValue

    actions.createItem.start({item: itemValue})

    let createData = new FormData()

    for (let variantIdx = 0; variantIdx < variants.length; variantIdx++) {
        for (let imageIdx = 0; imageIdx < imageValues.length; imageIdx++) {
            const newImage = imageValues[variantIdx][imageIdx]
            createData.append(`${variantIdx}_${imageIdx}`, newImage.file as File)
        }
    }

    stackActions.current.push((item: FetchedItem) => {
        createData.append('_id', item._id)
        actions.createImages.start(createData)
    })
}