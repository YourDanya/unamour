import {useMapInputs} from 'app/_common/hooks/input/input-v2.hooks'
import {
    ItemTranslationProps
} from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.types'
import {
    dictionary
} from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.content'
import {
    initValues
} from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {useState} from 'react'
import {validateInputAndCount} from 'app/_common/utils/form/validate-input-and-count/validate-input-and-count'
import {useRef} from 'react'
import {useParams} from 'next/navigation'
import {Locale} from 'app/_common/types/types'
import {
    ValidateValuesState
} from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.types'
import {useEffect} from 'react'
import {ChangeEvent} from 'react'
import {inputChange} from 'app/_common/utils/form/input-change/input-change.util'
import {updateErrorCount} from 'app/_common/utils/form/update-error-count/update-error-count.util'

const useTranslation = (props: ItemTranslationProps) => {
    const state = useGetState(props)
    const withActionsState = useHandleActions(state)

    return withActionsState
}

export default useTranslation

export const useGetState = (props: ItemTranslationProps) => {
    const {itemValue} = props

    const transl = useLocale(dictionary)

    const values = itemValue.translations[props.locale]
    const {errors: initErrors, validations} = useMapInputs(initValues)

    const [errors, setErrors] = useState({...initErrors})
    const errorCountRef = useRef(0)

    const locale = useParams().locale as Locale

    const changeRef = useRef((event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    })

    return {transl, props, values, errors, setErrors, validations, errorCountRef, locale, changeRef}
}
const useHandleActions = (state: ReturnType<typeof useGetState>) => {
    const {changeRef, values, props} = state
    const {setItemValue, itemValue} = props

    changeRef.current = (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        const {value, name} = inputChange<typeof values>(event);
        (values[name] as typeof value) = value
        setItemValue({...itemValue, ...values})
        validateValuesAndCount({...state, validateName: name})
    }

    const onChange = (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        changeRef.current(event)
    }

    useEffect(() => {
        validateValuesAndCount(state)
    }, [])

    return {...state, onChange}
}

const validateValuesAndCount = (state: ValidateValuesState) => {
    const {errorCountRef, props: {setErrorCount, errorCount}} = state

    const callback = () => {
        validateValues(state)
    }

    updateErrorCount({
        errorCountRef, setErrorCount, errorCount, callback
    })
}

const validateValues = (state: ValidateValuesState) => {
    const {errors, setErrors, validations, validateName, values, errorCountRef, locale} = state

    validateInputAndCount({
        validations, errors, errorCountRef, locale, name: validateName, values
    })

    setErrors({...errors})
}