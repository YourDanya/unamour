import {useState} from 'react'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {FormImageValue} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ItemFormProps} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {AdminItem} from 'app/_common/types/admin-item'
import {MouseAction} from 'app/_common/types/types'
import getKeys from 'app/_common/utils/typescript/get-keys/get-keys.utils'
import {apiActions} from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {MessageValues} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {MessageName} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {save} from 'app/[locale]/admin/items/_components/item-form/save'
import {useApi} from 'app/[locale]/admin/items/_components/item-form/api'
import {ItemFormApiState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {useRef} from 'react'

const useItemForm = (props: ItemFormProps) => {
    const state = useGestState(props)
    const apiState = useApi(state)
    const withActionsState = useGetActions(apiState)

    return withActionsState
}

export default useItemForm
export const useGestState = (props: ItemFormProps) => {
    const transl = useLocale(dictionary)
    const {item} = props

    const initSlug = item.slug

    const [itemValue, setItemValue] = useState(item)
    const [errorCount, setErrorCount] = useState(0)

    const [imageValues, setImageValues] = useState(() => mapImages(itemValue))
    const [messages, setMessages] = useState(mapMessages)

    const stackActions = useRef<((args: any) => void)[]>([])
    const stackCreateImages = useRef<((args: any) => void)[]>([])

    return {
        transl, itemValue, setItemValue, errorCount, setErrorCount, initSlug, imageValues, setImageValues, props,
        messages, setMessages, stackActions, stackCreateImages
    }
}

const mapImages = (itemValue: AdminItem): FormImageValue[][] => {
    return itemValue.variants.map(({images}) => {
        return images
    })
}

const mapMessages = () => {
    const keys: MessageName[] = [...getKeys(apiActions), 'client']

    return keys.reduce((messages, key) => {
        messages[key] = {}
        return messages
    }, {} as MessageValues)
}

const useGetActions = (state: ItemFormApiState) => {
    const {setMessages, messages} = state
    const onSave: MouseAction = (event) => {
        event.preventDefault()
        save()
    }
    const onClose = (name: MessageName) => {
        setMessages({...messages, [name]: {}})
    }
    const onTimerExpiration = (name: MessageName) => {
        setMessages({...messages, [name]: {}})
    }

    return {...state, onSave, onClose, onTimerExpiration}
}

// const time = useRef(0)
// time.current = performance.now()
// useEffect(() => {
//     console.log(performance.now() - time.current)
// })
