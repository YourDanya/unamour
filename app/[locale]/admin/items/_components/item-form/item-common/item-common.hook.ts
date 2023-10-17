import {useMapInputs} from 'app/_common/hooks/input/input-v2.hooks'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import {useEffect} from 'react'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {clothingDictionary} from 'app/_common/content/categories/categories.content'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/item-common/item-common.content'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import {initValues} from 'app/[locale]/admin/items/_components/item-form/item-common/item-common.content'
import {peek} from 'app/_common/utils/helpers/peek/peek.util'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
import {ChangeEvent} from 'react'
import {useRef} from 'react'
import {inputChange} from 'app/_common/utils/form/input-change/input-change.util'
import {validate} from 'app/_common/hooks/input/input.hooks'
import {useParams} from 'next/navigation'
import {Locale} from 'app/_common/types/types'
import {validateInputAndCount} from 'app/_common/utils/form/validate-input-and-count/validate-input-and-count'

const useItemCommon = (props: ItemFormState) => {
    const {setItemValue, itemValue} = props

    const state = useGetState(props)
    const {values, changeRef} = state

    changeRef.current = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = inputChange<typeof values>(event);
        (values[name] as typeof value) = value
        setItemValue({...itemValue, ...values})

    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        changeRef.current(event)
    }

    useEffect(() => {
        validateValues(state)
    }, [])

    return {onChange}
}

export default useItemCommon

const useGetState = (props: ItemFormState) => {
    const transl = useLocale(dictionary)
    const categoryTransl = useLocale(clothingDictionary)

    const initInputs = useMapInputs(initValues)
    const validations = initInputs.validations

    const [errors, setErrors] = useState(initInputs.errors)

    const errCountRef = useRef(0)

    const values = peek(props.itemValue, [
        'slug', 'slugCategory', 'oldPrice', 'best', 'special', 'coming', 'weight', 'volume'
    ])

    const changeRef = useRef((event: ChangeEvent<HTMLInputElement>) => {})

    const checkSlug = useApiCall({
        url: 'shop-item/check-slug',
        onSuccess: () => {

        }
    })

    const locale = useParams().locale as Locale

    return {
        transl, categoryTransl, errCountRef, props, values, changeRef, errors, setErrors, validations, locale
    }
}

const validateSlug = (state: ReturnType<typeof useGetState>) => {
    const {errCountRef} = state

    // const beforeCount = errRef.current.count
    //
    // if (!errRef.current.errors.slug) {
    //     if (isSlugNotUnique) {
    //         errRef.current.errors.slug = transl.uniqueSlug
    //         errRef.current.count += 1
    //     }
    // }
    //
    // setErrors({...errRef.current.errors})
    //
    // const afterCount = errRef.current.count
    // if (afterCount !== beforeCount) {
    //     errorCountRef.current += afterCount - beforeCount
    //     setErrorCount(errorCountRef.current)
    // }
}

const validateValues = (state: ReturnType<typeof useGetState> & {
    validateName?: keyof typeof initValues}
) => {
    const {errCountRef, errors, setErrors, props, validations, locale, validateName, values} = state
    const {errorCount, setErrorCount} = props

    const beforeCount = errCountRef.current
    errCountRef.current = 0

    if (validateName) {
        validateInputAndCount({
            validations, errors, errCountRef, locale, name: validateName, values
        })
    } else {
        validateInputAndCountAll({
            validations, errors, errCountRef, locale, name: validateName, values
        })
    }

    setErrors({...errors})

    const afterCount = errCountRef.current
    if (beforeCount !== afterCount) {
        setErrorCount(errorCount + afterCount - beforeCount)
    }
}
const validateAll = (state: ReturnType<typeof useGetState>) => {
    const {errors, errCountRef, validations, locale} = state

    getEntries(errors).forEach(([name, value]) => {
        const error = validate({name, value, validations: validations[name]}, locale)
        if (error) {
            errCountRef.current++
        }
        errors[name] = error
    })
}