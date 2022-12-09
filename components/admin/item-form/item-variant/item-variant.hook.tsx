import {colorContent} from 'components/common/content/content'
import {useLocale} from 'hooks/other/other.hooks'
import {useToggleMany} from 'hooks/event-handler/event-handler.hooks'
import {sizeContent} from 'components/common/content/content'
import {useMemo} from 'react'
import {useInput} from 'hooks/input/input.hooks'
import itemVariantContent from 'components/admin/item-form/item-variant/item-variant.content'
import {ItemVariantProps} from 'components/admin/item-form/item-variant/item-variant.types'
import {useEffect} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'

const useItemVariant = (props: ItemVariantProps) => {
    const {color, sizes, images, refObj, price, variantIndex} = props
    const [colorsTransl, colorsContent] = useLocale(colorContent)
    const [transl] = useLocale(itemVariantContent)

    const sizeObject = useMemo(() => {
        const sizeMap = {} as Record<string, boolean>
         if (sizes) sizes.forEach(size => {
            sizeMap[size] = true
            return sizeMap
        }, {} as Record<string, boolean>)
        return sizeContent.reduce((sizeObject, size) => {
            sizeObject[size] = sizeMap[size] ?? false
            return sizeObject
        }, {} as Record<string, boolean>)
    }, [])

    const [sizeValues, onSizesChange] = useToggleMany(sizeObject)

    const {inputs, onChange: onInputsChange, errRef, setOuterValues} =
        useInput({price: {value: price ?? 0}, color: {value: color}})

    const colors = useMemo(() => {
        return colorsContent.reduce((accum, {slug, code}, index) => {
            accum.values.push(slug)
            accum.styles.push({backgroundColor: code})
            accum.labels.push(colorsTransl[index])
            return accum
        }, {styles: [], labels: [], values: [] } as { styles: { backgroundColor: string }[], labels: string[], values: string[] })
    }, [])

    useEffect(() => {
        const copy: FetchedItem = JSON.parse(JSON.stringify(refObj.current))
        const sizes = Object.entries(sizeValues).reduce((sizes, [key, value]) => {
            if (value) sizes.push(key)
            return sizes
        }, [] as string[])
        copy.common.variants[variantIndex] = {...copy.common.variants[variantIndex], ...inputs.values, sizes}
        refObj.current = copy
    }, [inputs.values, sizeValues])

    return {onSizesChange, inputs, onInputsChange, transl, sizeValues, colors}
}

export default useItemVariant