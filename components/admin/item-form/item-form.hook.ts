import {useRef} from 'react'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'
import {useLocale} from 'hooks/other/other.hooks'
import itemFormContent from 'components/admin/item-form/item-form.content'
import {ImageFiles} from 'components/admin/item-form/item-form.types'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'

const useItemForm = (props: ItemFormProps) => {
    const itemValueRef = useRef(props)
    const itemErrRef = useRef(0)
    const [transl] = useLocale(itemFormContent)

    const imagesRef = useRef<ImageFiles>(
        props.common.variants.reduce((imagesObj, variant) => {
            variant.images.forEach(imageId => imagesObj[imageId] = {file: imageId, color: variant.color})
            return imagesObj
        }, {} as ImageFiles)
    )

    const initImagesRef = useRef<ImageFiles>(JSON.parse(JSON.stringify(imagesRef.current)))

    useOmitFirstEffect(() => {
        imagesRef.current = props.common.variants.reduce((imagesObj, variant) => {
            variant.images.forEach(imageId => {
                imagesObj[imageId] = {file: imageId, color: variant.color}
            })
            return imagesObj
        }, {} as ImageFiles)
        initImagesRef.current = JSON.parse(JSON.stringify(imagesRef.current))
        itemValueRef.current = JSON.parse(JSON.stringify(props))
    }, [props])

    return {itemValueRef, itemErrRef, transl, imagesRef, initImagesRef}
}

export default useItemForm
