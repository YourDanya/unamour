import {useRef} from 'react'
import {ItemActionsValues} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.types'
import {actions as actionsData} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.content'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.content'
import {useAdminItemsStore} from 'app/[locale]/admin/items/_components/store/admin-items.store'
import {peek} from 'app/_common/utils/helpers/peek/peek.util'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {useCallback} from 'react'
import {useEffect} from 'react'
import {ItemActionsMessages} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.types'
import {useItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import {usePaginationStore} from 'app/_common/components/pagination/store/pagination.stote'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {shallow} from 'zustand/shallow'
import getKeys from 'app/_common/utils/typescript/get-keys/get-keys.utils'
import {AdminItem} from 'app/[locale]/admin/items/_components/store/admin-items.types'

const useItemActionsApi = () => {
    let actions: ItemActionsValues = {} as ItemActionsValues

    const itemValueRef = useItemFormStore(state => state.itemValueRef)

    const {_id} = itemValueRef.current

    const transl = useLocale(dictionary)

    const {
        setItem, deleteItem, setAddedItemId
    } = useAdminItemsStore(useCallback((state) => {
        return peek(state, ['setItem', 'deleteItem', 'addItem', 'setAddedItemId'])
    }, []), shallow)

    const itemIndex =
        useItemFormStore(state => state.itemIndex)

    const isItemAdded = useAdminItemsStore(useCallback((state) => {
        return state.addedItemId === _id
    }, [_id]), shallow)

    for (let prop in actionsData) {
        const key = prop as keyof typeof actionsData

        const value = actionsData[key]
        let url
        if (typeof value.url === 'function') {
            url = value.url(_id)
        } else {
            url = value.url
        }
        actions[key] = useApiCall<{item: AdminItem}>(url, {
            ...value.options,
            onSuccess: (data) => {
                const {item} = data
                if (key === 'updateImages') {
                    setItem({...itemValueRef.current}, itemIndex)
                }
                else if (key === 'createItem') {
                    setItem(item, itemIndex)
                    itemIndex === 6 && console.log('item', item)
                    setAddedItemId(item._id)
                }
                else {
                    setItem(item, itemIndex)
                }
            }
        })
    }

    const [messages, setMessages] = useState<ItemActionsMessages>(() => {
        const actionsMessages = getKeys(actions).reduce((actionsMessages, key) => {
            actionsMessages[key] = {text: ''}
            return actionsMessages
        }, {} as ItemActionsMessages)
        return {...actionsMessages, client: {text: ''}} as ItemActionsMessages
    })

    const stackActions = useRef<((args: any) => void)[]>([])
    const stackCreateImages = useRef<((args: any) => void)[]>([])

    for (let prop in actions) {
        const key = prop as keyof typeof actionsData
        useEffect(() => {
            if (actions[key].error) {
                setMessages({...messages, [key]: {text: transl.errors[key], isError: true}})
            }
            if (actions[key].success) {
                setMessages({...messages, [key]: {text: transl.success[key], isSuccess: true}})
            }
            if (stackActions.current.length > 0 && (actions[key].error || actions[key].success)) {
                const action = stackActions.current.pop() as () => void
                action()
            }
        }, [actions[key].error, actions[key].success])
    }

    useEffect(() => {
        if (isItemAdded) {
            setMessages({...messages, createItem: {isSuccess: true, text: transl.success.createItem}})
            setAddedItemId(null)
            const action = stackCreateImages.current.pop() as (_id: string) => void
            action(_id)
        }
    }, [isItemAdded])

    return {actions, messages, setMessages, stackActions, stackCreateImages}
}

export default useItemActionsApi

// useEffect(() => {
//     debugger
//     for (let prop in actions) {
//         const key = prop as keyof typeof actions
//         if (actions[key].error || actions[key].success) {
//             setMessage({...isMessage, [key]: true})
//         }
//         if (stackActions.current.length > 0 && (actions[key].error || actions[key].success)) {
//             const action = stackActions.current.pop() as () => void
//             action()
//         }
//     }
// }, [actions])

// useApiCall('shop-item', {
//     method: 'POST',
//     onSuccess: () => {
//
//     }
// })
//
// useApiCall(`shop-item/${_id}`, {
//     method: 'PUT',
//     onSuccess: () => {
//
//     }
// })
//
// useApiCall(`shop-item/${_id}`, {
//     method: 'DELETE',
//     onSuccess: () => {
//
//     }
// })
//
// useApiCall(`shop-item/add-images`, {
//     method: 'POST',
//     onSuccess: () => {
//
//     }
// })
//
// useApiCall(`edit-files-by-ids`, {
//     method: 'POST',
//     onSuccess: () => {
//
//     }
// })
//
// useApiCall('shop-item/remove-images', {
//     method: 'POST',
//     onSuccess: () => {
//
//     }
// })