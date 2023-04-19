import {createItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/utils/item-form.utils'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {itemActionsContent} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.content'
import {useAdminItemsStore} from 'app/[locale]/admin/items/_components/store/admin-items.store'
import {peek} from 'app/[locale]/_common/utils/main/main.utils'
import {ItemActionName} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.types'
import {useCallback} from 'react'
import useItemActionsApi from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions-api.hook'
import {DeleteItemImagesData} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.types'
import {ItemActionsProps} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.types'
import {useItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import {usePaginationStore} from 'app/[locale]/_common/components/pagination/store/pagination.stote'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {shallow} from 'zustand/shallow'
import {Entry} from 'app/[locale]/_common/types/types'


const useItemActions = (props: ItemActionsProps) => {
    const [transl] = useLocale(itemActionsContent)

    const {
        itemValueRef, errorCount, itemImagesValuesRef, initItemImagesMapRef, _id, modalState, closeModal
    } = useItemFormStore(useCallback((state) => {
        const {_id} = state.itemValue
        const peeked = peek(state, [
            'itemValueRef', 'errorCount', 'itemImagesValuesRef', 'initItemImagesMapRef', 'modalState', 'closeModal',
        ])
        return {...peeked, _id}
    }, []), shallow)

    const itemIndex = usePaginationStore((state) => state.itemIndex)

    const {
        deleteItem
    } = useAdminItemsStore(useCallback((state) => {
        return peek(state, ['deleteItem'])
    }, []), shallow)

    const {actions, messages, setMessages, stackActions, stackCreateImages} = useItemActionsApi()
    
    const onSave: MouseAction = (event) => {
        event.preventDefault()
        if (errorCount > 0) {
            setMessages({...messages, client: {
                text: transl.clientError(errorCount), isError: true
            }})
            return
        }
        if (_id) {
            actions.updateItem.start({item: itemValueRef.current})
            let updateData = {data: new FormData(), _id}
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
                    updateData.data.append(imageId, itemImagesMap[imageId].file as File)
                }
            }
            for (let imageId in initItemImagesMapRef.current) {
                if (!(imageId in itemImagesMap)) {
                    shouldDelete = true
                    deleteData.images.push({id: imageId, color: initItemImagesMapRef.current[imageId].color})
                }
            }
            if (shouldCreate) {
                console.log('createData', createData)
                stackActions.current.push(() => actions.createImages.start(createData))
            }
            if (shouldUpdate) {
                console.log('updateData', updateData)
                stackActions.current.push(() => actions.updateImages.start(updateData))
            }
            if (shouldDelete) {
                console.log('deleteData', deleteData)
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
                console.log('stackCreateImages', stackCreateImages.current)
                stackCreateImages.current.push((_id = '') => {
                    console.log('_id', _id)
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

    const onDeleteConfirm: MouseAction = (event) => {
        event.preventDefault()
        if (_id) {
            actions.deleteItem.start({_id})
        } else {
            deleteItem(itemIndex)
        }
        closeModal()
    }

    const onClose: MouseAction = (event) => {
        event.preventDefault()
        const name = event.currentTarget.getAttribute('data-value') as keyof typeof messages
        setMessages({...messages, [name]: {text: ''}})
    }

    const onTimerExpiration = (name: ItemActionName) => {
        setMessages({...messages, [name]: {text: ''}})
        if (name === 'deleteItem') {
            console.log('deleting item')
            deleteItem(itemIndex)
        }
    }
    
    const actionsList = Object.entries(actions) as Entry<typeof actions> []
    const loading = actionsList.some(([name, value]) => value.loading && name !== 'deleteItem')

    const onCloseModal: MouseAction = (event) => {
        event.preventDefault()
        closeModal()
    }

    return {
        transl, onSave, onDelete, messages, onClose, onTimerExpiration, actions, actionsList, loading, modalState,
        onCloseModal, closeModal, onDeleteConfirm
    }
}

export default useItemActions