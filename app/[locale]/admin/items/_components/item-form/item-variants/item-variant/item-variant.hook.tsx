import {useMapInputs} from 'app/_common/hooks/input/input-v2.hooks'
import {MouseAction} from 'app/_common/types/types'
import {ItemVariantProps} from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-variant.types'
import {selectItemFormMain} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import {useMemo} from 'react'
import itemVariantContent from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-variant.content'
import {useInputChange} from 'app/_common/hooks/input/input-v2.hooks'
import {useValidateInput} from 'app/_common/hooks/input/input-v2.hooks'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import {useEffect} from 'react'
import {useItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import {useState} from 'react'
import useDeprLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {ChangeValue} from 'app/_common/components/input-v2/input.types'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {colorDictionary} from 'app/_common/content/color/color.content'
import {colorValues} from 'app/_common/content/color/color.content'
import {sizes as sizesList} from 'app/_common/content/size/size.content'

const useItemVariant = (props: ItemVariantProps) => {
    const colorsTransl = useLocale(colorDictionary)
    const [transl, content] = useDeprLocale(itemVariantContent)

    const {variantIndex} = props

    const {itemValueRef, setItemValue, errorCountRef, setErrorCount}
        = useItemFormStore(selectItemFormMain)

    const itemValue = useItemFormStore(({itemValue}) => itemValue)

    const {sizes, color, price} = itemValue.variants[variantIndex]

    const inputValues = {color, price}

    const {validations, errors: initErrors} = useMapInputs(content.inputs)
    const [errors, setErrors] = useState(initErrors)

    const {errRef, onValidate} = useValidateInput({validations, errors})

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

    const {onChange: onSizesChange} = useInputChange({
        values: sizeValues,
        changeCallback: ({changeValues}) => {
            const sizes = Object.entries(changeValues).filter(([_, value]) => value).map(([key]) => key)
            itemValueRef.current.variants[variantIndex].sizes = sizes
            setItemValue(itemValueRef.current)
        }
    })

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

    const {onChange: onInputsChange} = useInputChange({
        values: {color, price},
        changeCallback: ({changeValues, name}) => {
            const {variants} = itemValueRef.current;
            (variants[variantIndex][name] as typeof changeValues[typeof name]) = changeValues[name]
            itemValueRef.current.variants = [...variants]
            setItemValue(itemValueRef.current)
        }
    })

    // const onInputsChange = ({value, name}: ChangeValue<typeof inputValues>) => {
    //     const {variants} = itemValueRef.current;
    //     (variants[variantIndex][name] as typeof value) = value
    //     itemValueRef.current.variants = [...variants]
    //     setItemValue(itemValueRef.current)
    // }

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

    const onDeleteVariant:MouseAction = (event) => {
        event.preventDefault()
        if (itemValueRef.current.variants.length === 1) {
            return
        }
        itemValueRef.current.variants.splice(variantIndex, 1)
        itemValueRef.current.variants = [...itemValueRef.current.variants]
        setItemValue(itemValueRef.current)
    }

    useEffect(() => {
        return () => {
            if (errRef.current.count !== 0) {
                errorCountRef.current -= errRef.current.count
                setErrorCount(errorCountRef.current)
            }
        }
    }, [])

    return {
        onSizesChange, onInputsChange, transl, sizeValues, colors, values: {price, color}, errors, onDeleteVariant
    }
}

export default useItemVariant

