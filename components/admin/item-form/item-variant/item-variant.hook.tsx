import {colorContent} from 'components/common/content/content'
import {useLocale} from 'hooks/other/other.hooks'
import {useToggleMany} from 'hooks/event-handler/event-handler.hooks'
import {sizeContent} from 'components/common/content/content'
import {useMemo} from 'react'
import {useState} from 'react'
import {useInput} from 'hooks/input/input.hooks'
import itemVariantContent from 'components/admin/item-form/item-variant/item-variant.content'
import {ItemVariantProps} from 'components/admin/item-form/item-variant/item-variant.types'
import {Entry} from 'types/types'
import {useEffect} from 'react'

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

    const {inputs, onChange: onInputsChange, errRef, setOuterValues} =
        useInput({price: {value: price.toString()}, color: {value: color}, newImage: {value: ''}})

    const colors = useMemo(() => {
        return Object.entries(colorsContent).reduce((accum, entry , index) => {
            const [key, value] = entry as Entry<typeof colorsContent>
            accum.values.push(key)
            accum.styles.push({backgroundColor : value})
            accum.labels.push(colorsTransl[key])
            return accum
        }, {styles: [], labels: [], values: []} as {styles: {backgroundColor: string}[], labels: string[], values: string[]} )
    }, [])

    useEffect(() => {
        if (!errRef.current.errors.price) {
            refObj.price = price
        }
    }, [inputs.values.price])

    // useEffect(() => {
    //     if (!errRef.current.errors.color) {
    //         refObj.color = colors.obj[inputs.values.color]
    //     }
    // }, [inputs.values.color])

    // useEffect(() => {
    //     if (sizeValues.length)
    //     refObj.sizes = sizeContent.filter((accum, elem) => sizeValues[elem])
    // }, [sizeValues])

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

    const onDeleteVariant = () => {}
    // useEffect(() => {
    //     refObj.images = imageValues
    // },[imageValues])

    return {onSizesChange, inputs, onInputsChange, transl, sizeValues, colors, imageValues,
    onSaveImage, onDeleteImage, onAddImage, onDeleteVariant}
}

export default useItemVariant