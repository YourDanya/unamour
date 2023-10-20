import {MouseAction} from 'app/_common/types/types'
import {peek} from 'app/_common/utils/helpers/peek/peek.util'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'

const useItemActions = (props: ItemActionsProps) => {
    const transl = useLocale(dictionary)

    const {actions, messages, setMessages, stackActions, stackCreateImages} = useItemActionsApi()

    const onSave: MouseAction = (event) => {
        event.preventDefault()
        if (errorCount > 0) {
            setMessages({
                ...messages, client: {
                    text: transl.clientError(errorCount), isError: true
                }
            })
            return
        }
        if (_id) {
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
        } else {
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
    }

    const onDelete: MouseAction = (event) => {
        event.preventDefault()
        closeModal()
    }

    const onClose: MouseAction = (event) => {
        event.preventDefault()
        const name = event.currentTarget.getAttribute('data-value') as keyof typeof messages
        setMessages({...messages, [name]: {text: ''}})
    }

    const onTimerExpiration = (name: ItemActionName) => {
        setMessages({...messages, [name]: {text: ''}})
    }

    const actionsList = Object.entries(actions) as Entry<typeof actions> []
    const loading = actionsList.some(([name, value]) => value.loading)

    const onCloseModal: MouseAction = (event) => {
        event.preventDefault()
        closeModal()
    }

    return {
        transl, onSave, onDelete, messages, onClose, onTimerExpiration, actions, actionsList, loading, modalState,
        onCloseModal, closeModal
    }
}

export default useItemActions
