import {ItemFormApiState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ImageValue} from 'app/_common/types/image-value'
import {appendObj} from 'app/_common/utils/helpers/append-obj/append-obj.util'
import {FormImageValue} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {DeleteData} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {AppendImageDataParams} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {appendImageData} from 'app/[locale]/admin/items/_components/item-form/append-image-data'

export const save = (state: ItemFormApiState) => {
    const {errorCount, props} = state
    const {formValue: {action}} = props

    if (errorCount > 0) {
        return setErrors(state)
    }
    if (action === 'update') {
        console.log('update')
        update(state)
    } else {
        console.log('create')
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
    const {imageValues, initImagesRef} = state

    const withDataState = getData(state)

    filterImages(withDataState)

    const lastIndex = Math.max(imageValues.length, initImagesRef.current.length)
    for (let i = 0; i < lastIndex; i++) {
        mapImagesActions(appendObj(withDataState, {variantIndex: i}))
    }

    pushActions(withDataState)
}

export const getData = (state: ItemFormApiState) => {
    const {itemValue} = state

    const _id = itemValue._id!

    let updateData = new FormData()
    let createData = new FormData()
    createData.append('_id', _id)
    let deleteData: DeleteData = {_id, images: []}

    const should = {create: false, update: false, delete: false}

    const replaceMap: Record<string, boolean> = {}

    return appendObj(state, {updateData, createData, deleteData, should, replaceMap})
}
const mapImagesActions = (state: ReturnType<typeof getData> & { variantIndex: number }) => {
    const {imageValues, variantIndex, initImagesRef} = state

    const initImageArr = initImagesRef.current[variantIndex] ?? []
    const imageArr = imageValues[variantIndex] ?? []

    const lastImageIndex = Math.max(imageArr.length, initImageArr.length)

    for (let i = 0; i < lastImageIndex; i++) {
        const oldImage = initImageArr[i] as ImageValue
        const newImage = imageArr[i]

        appendImageData(appendObj(state, {oldImage, newImage, variantIndex, imageIndex: i}))
    }

}
const filterImages = (state: ReturnType<typeof getData>) => {
    const {itemValue: {variants}} = state
    for (let variant of variants) {
        variant.images = []
    }
}
const pushActions = (state: ReturnType<typeof getData>) => {
    const {should, stackActions, actions, createData, deleteData, updateData, itemValue} = state

    if (should.create) {
        stackActions.current.push(() => actions.createImages.start(createData))
    }
    stackActions.current.push(() => actions.updateItem.start({item: itemValue}));
    if (should.update) {
        stackActions.current.push(() => actions.updateImages.start(updateData))
    }
    if (should.delete) {
        stackActions.current.push(() => actions.deleteImages.start(deleteData))
    }

    (stackActions.current.pop() as () => void)()

    // updateData.forEach((value, key) => {
    //     console.log(`value = ${value}, key = ${key}`)
    // })
    // createData.forEach((value, key) => {
    //     console.log(`value = ${value}, key = ${key}`)
    // })
    // console.log(deleteData)
    // console.log(itemValue.variants[1]?.images)
}

const create = (state: ItemFormApiState) => {
    const {actions, itemValue, stackActions, imageValues} = state

    let createData = new FormData()

    for (let variantIdx = 0; variantIdx < imageValues.length; variantIdx++) {
        const imageArr = imageValues[variantIdx]
        for (let imageIdx = 0; imageIdx < imageArr.length; imageIdx++) {
            const newImage = imageArr[imageIdx]
            createData.append(`${variantIdx}_${imageIdx}`, newImage.file as File)
        }
    }

    stackActions.current.push((item: FetchedItem) => {
        createData.append('_id', item._id)
        actions.createImages.start(createData)
    })

    createData.forEach((value, key) => {
        console.log(`value = ${value}, key = ${key}`)
    })

    actions.createItem.start({item: itemValue})
}