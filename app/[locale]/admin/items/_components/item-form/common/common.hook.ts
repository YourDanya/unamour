import {useMapInputs} from 'app/_common/hooks/input/input-v2.hooks'
import {useEffect} from 'react'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {clothingDictionary} from 'app/_common/content/categories/categories.content'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/common/common.content'
import {initValues} from 'app/[locale]/admin/items/_components/item-form/common/common.content'
import {peek} from 'app/_common/utils/helpers/peek/peek.util'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
import {ChangeEvent} from 'react'
import {useRef} from 'react'
import {inputChange} from 'app/_common/utils/form/input-change/input-change.util'
import {useParams} from 'next/navigation'
import {Locale} from 'app/_common/types/types'
import {CommonProps} from 'app/[locale]/admin/items/_components/item-form/common/common.types'
import {validateSlugAndCount} from 'app/[locale]/admin/items/_components/item-form/common/validation'
import {validateValuesAndCount} from 'app/[locale]/admin/items/_components/item-form/common/validation'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'

const useCommon = (props: CommonProps) => {
    const state = useGetState(props)
    const actionsState = useHandleActions(state)

    return actionsState
}

export default useCommon

export const useGetState = (props: ItemFormState) => {
    const transl = useLocale(dictionary)
    const categoryTransl = useLocale(clothingDictionary)

    const initInputs = useMapInputs(initValues)
    const validations = initInputs.validations

    const [errors, setErrors] = useState(initInputs.errors)

    const errorCountRef = useRef(0)

    const values = peek(props.itemValue, [
        'slug', 'slugCategory', 'oldPrice', 'best', 'special', 'coming', 'weight', 'volume'
    ])

    const changeRef = useRef((event: ChangeEvent<HTMLInputElement>) => {})

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

