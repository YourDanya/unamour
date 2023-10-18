import {useMapInputs} from 'app/_common/hooks/input/input-v2.hooks'
import {MouseAction} from 'app/_common/types/types'
import {ItemVariantProps} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.types'
import {useMemo} from 'react'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import {useEffect} from 'react'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {colorDictionary} from 'app/_common/content/color/color.content'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.content'
import {useRef} from 'react'
import {
    initInputs
} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.content'
import {ChangeEvent} from 'react'
import {inputChange} from 'app/_common/utils/form/input-change/input-change.util'
import {mapSizes} from 'app/[locale]/admin/items/_components/item-form/variants/variant/mappers'
import {mapColors} from 'app/[locale]/admin/items/_components/item-form/variants/variant/mappers'
const useItemVariant = (props: ItemVariantProps) => {

    useEffect(() => {
        const beforeCount = errRef.current.count

        const {color, price} = itemValueRef.current.variants[variantIndex]
        const values = {color, price}

        getEntries(values).forEach(([name, value]) => onValidate(name, value))

        if (!errRef.current.errors.color) {
            const isColorNotUnique = itemValueRef.current.variants.reduce((count, {color}) => {
                if (color === values.color) {
                    count++
                }
                return count
            }, 0) > 1

            if (isColorNotUnique) {
                errRef.current.count++
                errRef.current.errors.color = transl.colorError
            }
        }

        const beforeSizeError = errRef.current.errors.size
        if (sizes.length !== 0) {
            errRef.current.errors.size = ''
            if (beforeSizeError) {
                errRef.current.count--
            }
        } else {
            errRef.current.errors.size = transl.sizeError
            if (!beforeSizeError) {
                errRef.current.count++
            }
        }

        setErrors({...errRef.current.errors})

        const afterCount = errRef.current.count
        if (afterCount!==beforeCount) {
            errorCountRef.current+= afterCount - beforeCount
            setErrorCount(errorCountRef.current)
        }
    }, [itemValue.variants, sizes])
}

export default useItemVariant

export const useGetState = (props: ItemVariantProps) => {
    const colorsTransl = useLocale(colorDictionary)
    const transl = useLocale(dictionary)

    const errorCountRef = useRef(0)

    const {itemValue, variantIndex} = props
    const {color, price, sizes} = itemValue.variants[variantIndex]
    const values = {color, price}

    const {validations, errors: initErrors} = useMapInputs(initInputs)
    const [errors, setErrors] = useState({...initErrors})

    const changeRef = useRef((event: ChangeEvent<HTMLInputElement>) => {})

    return {
        colorsTransl, transl, errorCountRef, props, values, validations, errors, setErrors, changeRef, sizes
    }
}

const useHandleEffects = (state: ReturnType<typeof useGetState>) => {
    const {sizes} = state

    useEffect(() => {
        return () => {
            clearErrors(state)
        }
    }, [])

    const sizeValues = useMemo(() => {
        mapSizes(state)
    }, [sizes])

    const colors = useMemo(() => {
        mapColors(state)
    }, [])

    return {
        sizeValues, colors
    }
}

const useActions = (state: ReturnType<typeof useGetState>) => {
    const {props, changeRef, values} = state
    const {itemValue, setItemValue, variantIndex} = props
    const {variants} = itemValue
    const onDeleteVariant:MouseAction = (event) => {
        event.preventDefault()

        if (variants.length === 1) {
            return
        }

        variants.splice(variantIndex, 1)
        setItemValue({...itemValue, variants})
    }

    changeRef.current = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = inputChange<typeof values>(event);
        (variants[variantIndex][name] as typeof value) = value

        setItemValue({...itemValue, variants})
    }

    return {...state, onDeleteVariant}
}

const clearErrors = (state: ReturnType<typeof useGetState>) => {
    const {errorCountRef, props: {setErrorCount, errorCount}} = state
    if (errorCountRef.current !== 0) {
        setErrorCount(errorCount - errorCountRef.current)
    }
}
