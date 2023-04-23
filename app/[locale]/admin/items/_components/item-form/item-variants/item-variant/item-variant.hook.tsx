import {useMapInputs} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {ItemVariantProps} from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-variant.types'
import {sizeContent} from 'app/[locale]/_content/content'
import {selectItemFormMain} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import {useMemo} from 'react'
import {colorContent} from 'app/[locale]/_content/content'
import itemVariantContent from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-variant.content'
import {useInputChange} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {useValidateInput} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useEffect} from 'react'
import {useItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import {useState} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const useItemVariant = (props: ItemVariantProps) => {
    const [colorsTransl, colorsContent] = useLocale(colorContent)
    const [transl, content] = useLocale(itemVariantContent)

    const {variantIndex} = props

    const {itemValueRef, setItemValue, errorCountRef, setErrorCount}
        = useItemFormStore(selectItemFormMain)

    const itemValue = useItemFormStore(({itemValue}) => itemValue)

    const {sizes, color, price} = itemValue.common.variants[variantIndex]

    const {validations, errors: initErrors} = useMapInputs(content.inputs)
    const [errors, setErrors] = useState(initErrors)

    const {errRef, onValidate} = useValidateInput({validations, errors})

    const sizeValues = useMemo(() => {
        const sizeMap = sizes.reduce((sizeMap, size) => {
            sizeMap[size] = true
            return sizeMap
        }, {} as Record<string, boolean>)

        return sizeContent.reduce((sizeObject, size) => {
            sizeObject[size] = sizeMap[size] ?? false
            return sizeObject
        }, {} as Record<string, boolean>)
    }, [sizes])

    const {onChange: onSizesChange} = useInputChange({
        values: sizeValues,
        changeCallback: ({changeValues}) => {
            const sizes = Object.entries(changeValues).filter(([_, value]) => value).map(([key]) => key)
            itemValueRef.current.common.variants[variantIndex].sizes = sizes
            setItemValue(itemValueRef.current)
        }
    })

    const colors = useMemo(() => {
        return colorsContent.reduce((colors, {slug, code}, index) => {
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
            const {variants} = itemValueRef.current.common
            variants[variantIndex][name] = changeValues[name]
            itemValueRef.current.common.variants = [...variants]
            setItemValue(itemValueRef.current)
        }
    })

    useEffect(() => {
        const beforeCount = errRef.current.count

        const {color, price} = itemValueRef.current.common.variants[variantIndex]
        const values = {color, price}

        getEntries(values).forEach(([name, value]) => onValidate(name, value))

        if (!errRef.current.errors.color) {
            const isColorNotUnique = itemValueRef.current.common.variants.reduce((count, {color}) => {
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
    }, [itemValue.common.variants, sizes])

    const onDeleteVariant:MouseAction = (event) => {
        event.preventDefault()
        if (itemValueRef.current.common.variants.length === 1) {
            return
        }
        itemValueRef.current.common.variants.splice(variantIndex, 1)
        itemValueRef.current.common.variants = [...itemValueRef.current.common.variants]
        setItemValue(itemValueRef.current)
    }

    useEffect(() => {
        return () => {
            if (errRef.current.count !== 0) {
                console.log('error count')
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
