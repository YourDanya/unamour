import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {ItemFormMainState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ActionName} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {apiActions} from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {ActionsValues} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ApiSuccessState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ApiErrorState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import getValues from 'app/_common/utils/typescript/get-values/get-values.utils'
export const useApi = (state: ItemFormMainState) => {
    const {itemValue} = state

    let actions = {} as ActionsValues

    for (let prop in apiActions) {
        const name = prop as ActionName
        const value = apiActions[name]
        let url
        if (typeof value.url === 'function') {
            url = value.url(itemValue._id as string)
        } else {
            url = value.url
        }
        actions[name] = useApiCall<{item: FetchedItem}>(url, {
            ...value.options,
            onSuccess: (data) => {
                success({...state, data, name})
            },
            onError: () => {
                error({...state, name})
            }
        })
    }

    const loading = getValues(actions).some(value => value.loading)

    return {...state, actions, loading}
}

const success = (state: ApiSuccessState) => {
    const {data, name, stackActions, transl, setMessages, messages} = state

    const message = transl.success[name]
    messages[name] = {success: message}
    setMessages({...messages})

    if (stackActions.current.length > 0) {
        const action = stackActions.current.pop() as (item: FetchedItem) => void
        action(data.item)
    }
}

const error = (state: ApiErrorState) => {
    const {transl, name, messages, setMessages} = state

    const message = transl.errors[name]
    messages[name] = {success: message}
    setMessages({...messages})
}