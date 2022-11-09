import {colorContent} from 'components/common/content/content'
import {useLocale} from 'hooks/other/other.hooks'
import {useToggleMany} from 'hooks/event-handler/event-handler.hooks'
import {sizeContent} from 'components/common/content/content'
import {useMemo} from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useInput} from 'hooks/input/input.hooks'
import itemVariantContent from 'components/admin/item-form/item-variant/item-variant.content'
import {ColorRecord} from 'components/shop-items/shop-items.types'
import {ItemVariantProps} from 'components/admin/item-form/item-variant/item-variant.types'

const useItemVariant = (props: ItemVariantProps) => {
    const {color, sizes, images, refObj, price} = props
    const [colorsTransl, colorsContent] = useLocale(colorContent)
    const [transl] = useLocale(itemVariantContent)

    const sizeObject = useMemo(() => {
        return sizeContent.reduce((accum, elem) => {
            accum[elem] = sizes.some((size) => elem === size)
            return accum
        },  {} as Record<string, boolean>)
    },[])

    const [sizeValues, onSizesChange] = useToggleMany(sizeObject)

    useEffect(() => {
        if (sizeValues.length)
        refObj.sizes = sizeContent.filter((accum, elem) => sizeValues[elem])
    }, [sizeValues])

    const {inputs, onChange: onInputsChange, errRef, setOuterValues} =
        useInput({price: {value: price.toString()}, color: {value: color.param}, newImage: {value: ''}})

    const colors = useMemo(() => {
        return colorsContent.reduce((accum, elem, index) => {
            accum.obj[elem.param] = elem
            accum.labels.push(colorsTransl[index])
            accum.values.push(elem.param)
            return accum
        }, {} as {obj: ColorRecord, labels: string[], values: string []} )
    }, [])

    useEffect(() => {
        if (!errRef.current.errors.price) {
            refObj.price = price
        }
    }, [inputs.values.price])

    useEffect(() => {
        if (!errRef.current.errors.color) {
            refObj.color = colors.obj[inputs.values.color]
        }
    }, [inputs.values.color])

    const [imageValues, setImageValues] = useState(images)

    const onSaveImage = (index: number, value: string) => {
        imageValues[index] = value
        setImageValues({...imageValues})
    }

    const onDeleteImage = (index: number) => {
        imageValues.splice(index, 1)
        setImageValues({...imageValues})
    }

    const onAddImage = () => {
        imageValues.push(inputs.values.newImage)
        setOuterValues({newImage: ''})
        setImageValues({...imageValues})
    }

    useEffect(() => {
        refObj.images = imageValues
    },[imageValues])

    return {onSizesChange, inputs, onInputsChange, transl, sizeValues, colors, imageValues,
    onSaveImage, onDeleteImage, onAddImage}
}

export default useItemVariant