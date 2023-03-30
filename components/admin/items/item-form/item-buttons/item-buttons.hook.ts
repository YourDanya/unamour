import {ItemButtonsProps} from 'components/admin/items/item-form/item-buttons/item-buttons.types'
import {useLocale} from 'hooks/other/other.hooks'
import {itemButtonsContent} from 'components/admin/items/item-form/item-buttons/item-buttons.content'
import {MouseAction} from 'types/types'
import {useState} from 'react'
import {useEffect} from 'react'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'
import {removeAdminDeletedItem} from 'redux/admin/admin.slice'
import {useRef} from 'react'
import {useApiCall} from 'utils/api/api-v2.utils'
import {ItemButtonsActions} from 'components/admin/items/item-form/item-buttons/item-buttons.types'
import {useDispatch} from 'react-redux'
import {Entry} from 'types/types'
import {ItemButtonsActionName} from 'components/admin/items/item-form/item-buttons/item-buttons.types'
import {useItemFormContext} from 'components/admin/items/item-form/store/store'

const useItemButtons = (props: ItemButtonsProps) => {
    const [transl, common] = useLocale(itemButtonsContent)
    const {itemValue, setItemValue, itemValueRef, errorCountRef, setErrorCount, errorCount} =
        useItemFormContext(state => state)
    const _id = itemValue._id

    let actions: ItemButtonsActions = {} as ItemButtonsActions

    for (let prop in common.actions) {
        const key = prop as keyof typeof common.actions
        const value = common.actions[key]
        let url
        if (typeof value.url === 'function') {
            url = value.url(_id)
        } else {
            url = value.url
        }
        actions[key] = useApiCall(url, value.options)
    }

    const [isMessage, setMessage] = useState({
        client: false, updateItem: false, createItem: false, deleteItem: false,
        createImages: false, deleteImages: false, updateImages: false
    })

    const test = useRef(0)

    const stackActions = useRef<((args: any) => void)[]>([])
    const stackCreateImages = useRef<((args: any) => void)[]>([])

    console.log('errorCount', errorCount)

    const onSave: MouseAction = (event) => {
        event.preventDefault()
        if (errorCount > 0) {
            setMessage({...isMessage, client: true})
            return
        }
        // if (_id) {
        //     let updateData = {data: new FormData(), _id}
        //     let createData = new FormData()
        //     createData.append('_id', _id)
        //     let deleteData: DeleteItemImagesData = {_id, images: []}
        //     let shouldUpdate = false
        //     let shouldCreate = false
        //     let shouldDelete = false
        //     for (let imageId in imageValues.current) {
        //         if (!(imageId in initImageValues.current)) {
        //             shouldCreate = true
        //             createData.append(`${imageId}_${imageValues.current[imageId].color}`, imageValues.current[imageId].file)
        //         } else if (typeof imageValues.current[imageId].file !== 'string') {
        //             shouldUpdate = true
        //             updateData.data.append(imageId, imageValues.current[imageId].file)
        //         }
        //     }
        //     for (let imageId in initImageValues.current) {
        //         if (!(imageId in imageValues.current)) {
        //             shouldDelete = true
        //             deleteData.images.push({id: imageId, color: initImageValues.current[imageId].color})
        //         }
        //     }
        //     if (shouldCreate) {
        //         console.log('shouldCreate', shouldCreate)
        //         stackActions.current.push(() => actions.createImages.start(createData))
        //     }
        //     if (shouldUpdate) {
        //         console.log('shouldUpdate', shouldUpdate)
        //         stackActions.current.push(() => actions.updateImages.start(updateData))
        //     }
        //     if (shouldDelete) {
        //         console.log('shouldDelete', shouldDelete)
        //         stackActions.current.push(() => actions.deleteItem.start(deleteData))
        //     }
        // } else {
        //     actions.createItem.start(itemValue.current)
        //     let createData = new FormData()
        //     let shouldCreate = false
        //     for (let imageId in imageValues.current) {
        //         if (!(imageId in initImageValues.current)) {
        //             shouldCreate = true
        //             createData.append(`${imageId}_${imageValues.current[imageId].color}`, imageValues.current[imageId].file)
        //         }
        //     }
        //     if (shouldCreate) {
        //         stackCreateImages.current.push((_id = '') => {
        //             console.log('_id', _id)
        //             createData.append('_id', _id)
        //             actions.createImages.start(createData)
        //         })
        //     }
        // }
    }

    const dispatch = useDispatch()

    const onDelete: MouseAction = (event) => {
        event.preventDefault()
        // if (_id) {
        //     actions.deleteItem.start()
        // } else {
        //     dispatch(removeAdminDeletedItem())
        // }
    }

    const onClose: MouseAction = (event) => {
        event.preventDefault()
        const field = event.currentTarget.getAttribute('data-value') as keyof typeof isMessage
        setMessage({...isMessage, [field]: false})
    }

    const onTimerExpiration = (field: ItemButtonsActionName) => {
        setMessage({...isMessage, [field]: false})
        if (field === 'deleteItem') {
           dispatch(removeAdminDeletedItem())
        }
    }

    for (let prop in actions) {
        const key = prop as keyof typeof actions
        useEffect(() => {
            if (actions[key].error || actions[key].success) {
                setMessage({...isMessage, [key]: true})
            }
            if (actions[key].error || actions[key].success) {
                const action = stackActions.current.pop() as () => void
                action()
            }
        }, [actions[key].error, actions[key].success])
    }

    useOmitFirstEffect(() => {
        if (stackCreateImages.current.length > 0) {
            const action = stackCreateImages.current.pop() as (_id: string) => void
            action(_id)
        }
    }, [_id])

    const actionsList = Object.entries(actions) as Entry<typeof actions> []

    const loading = actionsList.some(([name, value]) => value.loading && name !== 'deleteItem')

    return {
        transl, onSave, onDelete, isMessage, onClose, onTimerExpiration, actions, actionsList, loading, errorCount
    }
}

export default useItemButtons