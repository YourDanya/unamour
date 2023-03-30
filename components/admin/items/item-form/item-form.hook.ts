import {ItemFormProps} from 'components/admin/items/item-form/item-form.types'
import {useLocale} from 'hooks/other/other.hooks'
import itemFormContent from 'components/admin/items/item-form/item-form.content'
import {useState} from 'react'
import {StoreApi} from 'zustand/esm'
import {createItemFormStore} from 'components/admin/items/item-form/store/store'
import {ItemFormState} from 'components/admin/items/item-form/store/store'
import {useRef} from 'react'
import {ItemImagesValues} from 'components/admin/items/item-form/item-form.types'

const useItemForm = (props: ItemFormProps) => {
    const test = useRef(performance.now())
    test.current = performance.now()

    const {item} = props

    const [itemValue, setItemValue] = useState(item)

    const [errorCount, setErrorCount] = useState(0)
    const [transl] = useLocale(itemFormContent)

    const [itemImagesValues] = useState<ItemImagesValues>(
        item.common.variants.map(({ images}) => {
            const imagesObj = {} as Record<string, File | null>
            images.forEach((imageId) => imagesObj[imageId] = null)
            return imagesObj
        })
    )

    // const initImageValues = useRef<ImageFiles>(JSON.parse(JSON.stringify(imageValues.current)))
    //
    // useOmitFirstEffect(() => {
    //     imageValues.current = item.common.variants.reduce((imagesObj, variant) => {
    //         variant.images.forEach(imageId => {
    //             imagesObj[imageId] = {file: imageId, color: variant.color}
    //         })
    //         return imagesObj
    //     }, {} as ImageFiles)
    //     initImageValues.current = JSON.parse(JSON.stringify(initImageValues.current))
    //     itemValue.current = JSON.parse(JSON.stringify(item))
    // }, [props])
    //
    // const {} = imageValues()

    const [store] = useState<StoreApi<ItemFormState>>(
        {...createItemFormStore({itemValue, itemImagesValues})}
    )

    return {
        store, transl, providerValue: {itemValue, setItemValue, errorCount, setErrorCount}
    }
}

export default useItemForm
