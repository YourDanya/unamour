import {useMapInputs} from 'app/_common/hooks/input/input-v2.hooks'
import {MouseAction} from 'app/_common/types/types'
import {ItemVariantProps} from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-variant.types'
import {useMemo} from 'react'
import {useInputChange} from 'app/_common/hooks/input/input-v2.hooks'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import {useEffect} from 'react'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {colorDictionary} from 'app/_common/content/color/color.content'
import {colorValues} from 'app/_common/content/color/color.content'
import {sizes as sizesList} from 'app/_common/content/size/size.content'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-variant.content'
import {useRef} from 'react'
import {
    initInputs
} from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-variant.content'
import {ChangeEvent} from 'react'
import {inputChange} from 'app/_common/utils/form/input-change/input-change.util'
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

const useGetState = (props: ItemVariantProps) => {
    const colorsTransl = useLocale(colorDictionary)
    const transl = useLocale(dictionary)

    const errorCountRef = useRef(0)

    const {itemValue, variantIndex} = props
    const {color, price} = itemValue.variants[variantIndex]
    const values = {color, price}

    const {validations, errors: initErrors} = useMapInputs(initInputs)
    const [errors, setErrors] = useState({...initErrors})

    const changeRef = useRef((event: ChangeEvent<HTMLInputElement>) => {})

    const sizeValues = useMemo(() => {
        const sizeMap = sizes.reduce((sizeMap, size) => {
            sizeMap[size] = true
            return sizeMap
        }, {} as Record<string, boolean>)

        return sizesList.reduce((sizeObject, size) => {
            sizeObject[size] = sizeMap[size] ?? false
            return sizeObject
        }, {} as Record<string, boolean>)
    }, [sizes])

    const colors = useMemo(() => {
        return colorValues.reduce((colors, {slug, code}, index) => {
            colors.values.push(slug)
            colors.styles.push({backgroundColor: code})
            colors.labels.push(colorsTransl[index])
            return colors
        }, {
            styles: [], labels: [], values: []
        } as { styles: { backgroundColor: string }[], labels: string[], values: string[] })
    }, [])

    return {
        colorsTransl, transl, errorCountRef, props, values, validations, errors, setErrors, changeRef
    }
}

const useHandleEffects = (state: ReturnType<typeof useGetState>) => {
    useEffect(() => {
        return () => {
            clearErrors(state)
        }
    }, [])
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
const mapSizes = () => {

}