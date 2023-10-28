import {useState} from 'react'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {ItemFormProps} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {MouseAction} from 'app/_common/types/types'
import getKeys from 'app/_common/utils/typescript/get-keys/get-keys.utils'
import {apiActions} from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {MessageValues} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {MessageName} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {save} from 'app/[locale]/admin/items/_components/item-form/save'
import {useApi} from 'app/[locale]/admin/items/_components/item-form/api'
import {ItemFormApiState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {useRef} from 'react'
import {useEffect} from 'react'
import {setErrors} from 'app/[locale]/admin/items/_components/item-form/save'
import {mapImages} from 'app/[locale]/admin/items/_components/item-form/api'
import {MouseEvent} from 'react'

const useItemForm = (props: ItemFormProps) => {
    const state = useGestState(props)
    const apiState = useApi(state)
    const withActionsState = useGetActions(apiState)
    useHandleEffects(apiState)

    return withActionsState
}

export default useItemForm
export const useGestState = (props: ItemFormProps) => {
    const transl = useLocale(dictionary)
    const {item} = props.formValue

    const initSlug = item.slug

    const [itemValue, setItemValue] = useState(item)
    const [errorCount, setErrorCount] = useState(0)
    const formErrCountRef = useRef(0)
    const shouldCheck = useRef(false)

    const [imageValues, setImageValues] = useState(() => mapImages(itemValue))
    const initImagesRef = useRef(mapImages(itemValue))
    const [messages, setMessages] = useState(mapMessages)

    const [imagesTimeStamp, setImagesTimeStamp] = useState(Date.now())

    const stackActions = useRef<((args: any) => void)[]>([])

    return {
        transl, itemValue, setItemValue, errorCount, setErrorCount, initSlug, imageValues, setImageValues, props,
        messages, setMessages, stackActions, formErrCountRef, shouldCheck, initImagesRef, imagesTimeStamp,
        setImagesTimeStamp
    }
}
const mapMessages = () => {
    const keys: MessageName[] = [...getKeys(apiActions), 'client']

    return keys.reduce((messages, key) => {
        messages[key] = {}
        return messages
    }, {} as MessageValues)
}

const useHandleEffects = (state: ItemFormApiState) => {
    const {errorCount, shouldCheck, messages, setMessages} = state

    useEffect(() => {
        if (!shouldCheck.current) {
            return
        }
        if (errorCount) {
            setErrors(state)
        } else {
            shouldCheck.current = false
            setMessages(mapMessages)
        }

    }, [errorCount])
}

const useGetActions = (state: ItemFormApiState) => {
    const {setMessages, messages, props: {setFormValue}} = state
    const onSave: MouseAction = (event) => {
        event.preventDefault()
        save(state)
    }
    const onClose = (name: MessageName) => {
        setMessages({...messages, [name]: {}})
    }
    const onTimerExpiration = (name: MessageName) => {
        setMessages({...messages, [name]: {}})
    }
    const onBack = (event: MouseEvent) => {
        event.preventDefault()
        setFormValue(null)
    }

    return {...state, onSave, onClose, onTimerExpiration, onBack}
}



// const time = useRef(0)
// time.current = performance.now()
// useEffect(() => {
//     console.log(performance.now() - time.current)
// })