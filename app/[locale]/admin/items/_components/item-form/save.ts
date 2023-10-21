export const save = () => {
    event.preventDefault()
    if (errorCount > 0) {
        return setErrors()
    }
    if (_id) {
        update()
    } else {
        create()
    }
}

const setErrors = () => {
    setMessages({
        ...messages, client: {
            text: transl.clientError(errorCount), isError: true
        }
    })
}

const update = () => {
    actions.updateItem.start({item: itemValueRef.current})
    let updateData = new FormData()
    let createData = new FormData()
    createData.append('_id', _id)
    let deleteData: DeleteItemImagesData = {_id, images: []}
    let shouldUpdate = false
    let shouldCreate = false
    let shouldDelete = false

    const itemImagesMap = createItemImagesMap({
        itemImagesValues: itemImagesValuesRef.current,
        itemValue: itemValueRef.current
    })

    for (let imageId in itemImagesMap) {
        if (!(imageId in initItemImagesMapRef.current)) {
            shouldCreate = true
            createData.append(`${imageId}_${itemImagesMap[imageId].color}`, itemImagesMap[imageId].file as File)
        } else if (itemImagesMap[imageId].file !== null) {
            shouldUpdate = true
            updateData.append(imageId, itemImagesMap[imageId].file as File)
        }
    }
    for (let imageId in initItemImagesMapRef.current) {
        if (!(imageId in itemImagesMap)) {
            shouldDelete = true
            deleteData.images.push({id: imageId, color: initItemImagesMapRef.current[imageId].color})
        }
    }
    if (shouldCreate) {
        stackActions.current.push(() => actions.createImages.start(createData))
    }
    if (shouldUpdate) {
        stackActions.current.push(() => actions.updateImages.start(updateData))
    }
    if (shouldDelete) {
        stackActions.current.push(() => actions.deleteImages.start(deleteData))
    }
}

const create = () => {
    actions.createItem.start({item: itemValueRef.current})
    const itemImagesMap = createItemImagesMap({
        itemImagesValues: itemImagesValuesRef.current,
        itemValue: itemValueRef.current
    })
    let createData = new FormData()
    let shouldCreate = false
    for (let imageId in itemImagesMap) {
        shouldCreate = true
        const {color, file} = itemImagesMap[imageId]
        createData.append(`${imageId}_${color}`, file as File)
    }
    if (shouldCreate) {
        stackCreateImages.current.push((_id = '') => {
            createData.append('_id', _id)
            actions.createImages.start(createData)
        })
    }
}