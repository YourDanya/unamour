import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectAdminField} from 'redux/admin/admin.selectors'
import {SelectWithClientErr} from 'redux/admin/admin.types'
import {ItemButtonsProps} from 'components/admin/item-form/item-buttons/item-buttons.types'
import {useLocale} from 'hooks/other/other.hooks'
import {itemButtonsContent} from 'components/admin/item-form/item-buttons/item-buttons.content'
import {MouseAction} from 'types/types'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {resetAdminFieldSuccess} from 'redux/admin/admin.slice'
import {useEffect} from 'react'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'
import {AdminIdField} from 'redux/admin/admin.types'
import {SelectField} from 'redux/store.types'
import {createItemAsync} from 'redux/admin/admin.thunk'
import {useOmitFirstLayoutEffect} from 'hooks/component/component.hooks'
import {deleteItemAsync} from 'redux/admin/admin.thunk'
import {removeAdminDeletedItem} from 'redux/admin/admin.slice'
import {updateItemImagesAsync} from 'redux/admin/admin.thunk'
import {deleteItemImagesAsync} from 'redux/admin/admin.thunk'
import {createItemImagesAsync} from 'redux/admin/admin.thunk'
import {DeleteItemImagesData} from 'redux/admin/admin.types'
import {useRef} from 'react'
import {updateItemAsync} from 'redux/admin/admin.thunk'

const useItemButtons = (props: ItemButtonsProps) => {
    const {itemValueRef, _id, imagesRef, updateTime, initImagesRef} = props
    const [transl] = useLocale(itemButtonsContent)

    // const updateItemState = useSelector((state : AppState) => _id? _selectAdminField(state, 'updateItem', _id) : null) as SelectWithClientErr
    const updateItemState = useParamSelector(selectAdminField, 'updateItem', _id) as SelectWithClientErr
    const createItemState = useParamSelector(selectAdminField, 'createItem', _id) as SelectWithClientErr
    const deleteItemState = useParamSelector(selectAdminField, 'deleteItem', _id) as SelectField

    const updateItemImages = useParamSelector(selectAdminField, 'updateItemImages', _id) as SelectField
    const deleteItemImages = useParamSelector(selectAdminField, 'deleteItemImages', _id) as SelectField
    const createItemImages = useParamSelector(selectAdminField, 'createItemImages', _id) as SelectField

    // if (!_id) {
    //     console.log('createItemState.loading', createItemState.loading)
    //     console.log('updateItemState.loading', updateItemState.loading)
    //     console.log('deleteItemState.loading', deleteItemState.loading)
    // }

    const [isMessage, setMessage] = useState({
        client: false, updateItem: false, createItem: false, deleteItem: false,
        createItemImages: false, deleteItemImages: false, updateItemImages: false
    })

    const dispatch = useDispatch()

    const test = useRef(0)

    const stackActions = useRef<((args: any) => void)[]>([])
    const stackCreateImages = useRef<((args: any) => void)[]>([])

    const onSave: MouseAction = (event) => {
        event.preventDefault()
        if (updateItemState.error.client || createItemState.error.client) {
            setMessage({...isMessage, client: true})
        } else {
            if (_id) {
                console.log('itemValueRef.current', itemValueRef.current)
                // console.log('initImagesRef', initImagesRef.current)
                // console.log('imagesRef', imagesRef.current)
                dispatch(updateItemAsync(itemValueRef.current, _id))
                let updateData = {data: new FormData(), _id}
                let createData = new FormData()
                createData.append('_id', _id)
                let deleteData: DeleteItemImagesData = {_id, images: []}
                let shouldUpdate = false
                let shouldCreate = false
                let shouldDelete = false
                for (let imageId in imagesRef.current) {
                    if (!(imageId in initImagesRef.current)) {
                        shouldCreate = true
                        createData.append(`${imageId}_${imagesRef.current[imageId].color}`, imagesRef.current[imageId].file)
                    }
                    else if (typeof imagesRef.current[imageId].file !== 'string') {
                        shouldUpdate = true
                        updateData.data.append(imageId, imagesRef.current[imageId].file)
                    }
                }
                for (let imageId in initImagesRef.current) {
                    if (!(imageId in imagesRef.current)) {
                        shouldDelete = true
                        deleteData.images.push({id: imageId, color: initImagesRef.current[imageId].color})
                    }
                }
                // if (test.current >= 0) {
                //     return
                // } else {
                //     test.current++
                // }
                if (shouldCreate) {
                    console.log('shouldCreate', shouldCreate)
                    stackActions.current.push(() => dispatch(createItemImagesAsync(createData)))
                }
                if (shouldUpdate) {
                    console.log('shouldUpdate',shouldUpdate)
                    stackActions.current.push(() => dispatch(updateItemImagesAsync(updateData)))
                }
                if (shouldDelete) {
                    console.log('shouldDelete', shouldDelete)
                    stackActions.current.push(() => dispatch(deleteItemImagesAsync(deleteData)))
                }
            } else {
                dispatch(createItemAsync(itemValueRef.current, _id))
                let createData = new FormData()
                let shouldCreate = false
                for (let imageId in imagesRef.current) {
                    if (!(imageId in initImagesRef.current)) {
                        shouldCreate = true
                        createData.append(`${imageId}_${imagesRef.current[imageId].color}`, imagesRef.current[imageId].file)
                    }
                }
                if (shouldCreate) {
                    stackCreateImages.current.push((_id = '') => {
                        console.log('_id', _id)
                        createData.append('_id', _id)
                        dispatch(createItemImagesAsync(createData))
                    })
                }
            }
        }
    }

    const onDelete: MouseAction = (event) => {
        event.preventDefault()
        if (_id) {
            dispatch(deleteItemAsync(_id))
        } else {
            dispatch(removeAdminDeletedItem())
        }
    }

    const onDeleteExpiration = () => {
        dispatch(removeAdminDeletedItem())
    }

    const onClose: MouseAction = (event) => {
        event.preventDefault()
        const field = event.currentTarget.getAttribute('data-value') as keyof typeof isMessage
        setMessage({...isMessage, [field]: false})
    }

    const onTimerExpiration = (field: AdminIdField) => {
        setMessage({...isMessage, [field]: false})
        dispatch(resetAdminFieldSuccess({field, _id}))
        if (field === 'deleteItem') {
            dispatch(removeAdminDeletedItem())
        }
    }

    useOmitFirstEffect(() => {
        if (!updateItemState.error.client) {
            setMessage({...isMessage, client: false})
        }
    }, [updateItemState.error.client])

    useOmitFirstLayoutEffect(() => {
        if (!createItemState.error.client) {
            setMessage({...isMessage, client: false})
        }
    }, [createItemState.error.client])

    // item effects
    useEffect(() => {
        const createItem = !!createItemState.error.server || !!createItemState.success
        if (isMessage.createItem !== createItem) {
            setMessage({...isMessage, createItem})
        }
        if ((createItemState.error.server || createItemState.success) && stackActions.current.length > 0) {
            const action = stackActions.current.pop() as () => void
            action()
        }
    }, [createItemState.error.server, createItemState.success])

    useEffect(() => {
        const updateItem = !!updateItemState.error.server || !!updateItemState.success
        if (isMessage.updateItem !== updateItem) {
            setMessage({...isMessage, updateItem})
        }
        if ((updateItemState.error.server || updateItemState.success) && stackActions.current.length > 0) {
            const action = stackActions.current.pop() as () => void
            action()
        }
    }, [updateItemState.error.server, updateItemState.success])

    useEffect(() => {
        const deleteItem = !!deleteItemState.error || !!deleteItemState.success
        if (isMessage.deleteItem !== deleteItem) {
            setMessage({...isMessage, deleteItem})
        }
        if ((deleteItemState.error || deleteItemState.success) && stackActions.current.length > 0) {
            const action = stackActions.current.pop() as () => void
            action()
        }
    }, [deleteItemState.error, deleteItemState.success])

    // image effects
    useEffect(() => {
        const shouldMessage = !!createItemImages.error || !!createItemImages.success
        if (isMessage.createItemImages !== shouldMessage) {
            setMessage({...isMessage, createItemImages: shouldMessage})
        }
        if ((createItemImages.success || createItemImages.error) && stackActions.current.length > 0) {
            const action = stackActions.current.pop() as () => void
            action()
        }
    }, [createItemImages.success, createItemImages.error])

    useEffect(() => {
        const shouldMessage = !!updateItemImages.error || !!updateItemImages.success
        if (isMessage.updateItem !== shouldMessage) {
            setMessage({...isMessage, updateItemImages: shouldMessage})
        }
        if ((updateItemImages.success || updateItemImages.error) && stackActions.current.length > 0) {
            const action = stackActions.current.pop() as () => void
            action()
        }
    }, [updateItemImages.success, updateItemImages.error])

    useEffect(() => {
        const shouldMessage= !!deleteItemImages.error || !!deleteItemImages.success
        if (isMessage.deleteItem !== shouldMessage) {
            setMessage({...isMessage, deleteItemImages: shouldMessage})
        }
        if ((deleteItemImages.success || deleteItemImages.error) && stackActions.current.length > 0) {
            const action = stackActions.current.pop() as () => void
            action()
        }
    }, [deleteItemImages.success, deleteItemImages.error])

    useOmitFirstEffect(() => {
        if (stackCreateImages.current.length > 0) {
            const action = stackCreateImages.current.pop() as (_id: string) => void
            action(_id)
        }
    }, [_id])

    return {
        updateItemState, transl, onSave, onDelete, isMessage, onClose, onTimerExpiration, createItemState,
        deleteItemState, onDeleteExpiration, updateItemImages, deleteItemImages, createItemImages,
    }
}

export default useItemButtons