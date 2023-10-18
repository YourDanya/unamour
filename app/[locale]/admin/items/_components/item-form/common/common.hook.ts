import {useMapInputs} from 'app/_common/hooks/input/input-v2.hooks'
import {useEffect} from 'react'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {clothingDictionary} from 'app/_common/content/categories/categories.content'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/common/common.content'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import {initValues} from 'app/[locale]/admin/items/_components/item-form/common/common.content'
import {peek} from 'app/_common/utils/helpers/peek/peek.util'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
import {ChangeEvent} from 'react'
import {useRef} from 'react'
import {inputChange} from 'app/_common/utils/form/input-change/input-change.util'
import {useParams} from 'next/navigation'
import {Locale} from 'app/_common/types/types'
import {validateInputAndCount} from 'app/_common/utils/form/validate-input-and-count/validate-input-and-count'
import {updateErrorCount} from 'app/_common/utils/form/update-error-count/update-error-count.util'
import {CommonProps} from 'app/[locale]/admin/items/_components/item-form/common/common.types'

const useCommon = (props: CommonProps) => {
    const state = useGetState(props)
    const actionsState = useHandleActions(state)

    return actionsState
}

export default useCommon

const useGetState = (props: ItemFormState) => {
    const transl = useLocale(dictionary)
    const categoryTransl = useLocale(clothingDictionary)

    const initInputs = useMapInputs(initValues)
    const validations = initInputs.validations

    const [errors, setErrors] = useState(initInputs.errors)

    const errorCountRef = useRef(0)

    const values = peek(props.itemValue, [
        'slug', 'slugCategory', 'oldPrice', 'best', 'special', 'coming', 'weight', 'volume'
    ])

    const changeRef = useRef((event: ChangeEvent<HTMLInputElement>) => {
    })

    const locale = useParams().locale as Locale

    return {
        transl, categoryTransl, errorCountRef, props, values, changeRef, errors, setErrors, validations, locale,
    }
}

const useHandleActions = (state: ReturnType<typeof useGetState>) => {
    const {changeRef, values, props} = state
    const {setItemValue, itemValue} = props

    changeRef.current = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = inputChange<typeof values>(event);
        (values[name] as typeof value) = value
        setItemValue({...itemValue, ...values})
        validateValuesAndCount({...state, validateName: name})
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        changeRef.current(event)
    }

    useEffect(() => {
        validateValuesAndCount(state)
    }, [])

    const checkSlug = useApiCall<{ valid: boolean }>({
        url: 'shop-item/check-slug',
        onSuccess: ({valid}) => {
            validateSlugAndCount({...state, valid})
        }
    })

    return {...state, onChange, checkSlug}
}

const validateSlugAndCount = (state: ReturnType<typeof useGetState> & { valid: boolean }) => {
    const {errorCountRef, props: {setErrorCount, errorCount}, valid} = state

    const callback = () => {
        validateSlug({...state, valid})
    }

    updateErrorCount({
        errorCountRef, setErrorCount, errorCount, callback
    })
}

const validateSlug = (state: ReturnType<typeof useGetState> & { valid: boolean }) => {
    const {valid, errors, transl} = state

    if (valid && errors.slug) {
        errors.slug = ''
    }
    if (!valid && !errors.slug) {
        errors.slug = transl.uniqueSlug
    }
}

const validateValuesAndCount = (state: ReturnType<typeof useGetState> & { validateName?: keyof typeof initValues }) => {
    const {errorCountRef, props: {setErrorCount, errorCount}} = state

    const callback = () => {
        validateValues(state)
    }

    updateErrorCount({
        errorCountRef, setErrorCount, errorCount, callback
    })
}

const validateValues = (state: ReturnType<typeof useGetState> & { validateName?: keyof typeof initValues }) => {
    const {errors, setErrors, validations, locale, validateName, values, errorCountRef} = state

    validateInputAndCount({
        validations, errors, errorCountRef, locale, name: validateName, values
    })
    setErrors({...errors})
}