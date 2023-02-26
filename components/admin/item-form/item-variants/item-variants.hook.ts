import {useLocale} from 'hooks/other/other.hooks'
import itemVariantsContent from 'components/admin/item-form/item-variants/item-variants.content'
import {useState} from 'react'
import {ItemVariantsProps} from 'components/admin/item-form/item-variants/item-variants.types'
import {MouseAction} from 'types/types'
import {ItemVariant} from 'components/admin/item-form/item-form.types'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'
import {useRef} from 'react'

const useItemVariants = (props: ItemVariantsProps) => {
    const {itemValueRef, imagesRef} = props
    const [transl] = useLocale(itemVariantsContent)
    const [variants, setVariants] = useState(props.variants)

    const variantImagesToUpdate = useRef()

    const onDeleteVariant: MouseAction = (event) => {
        event.preventDefault()
        const index = +(event.currentTarget.getAttribute('data-value') as string)
        console.log('variants before', itemValueRef.current.common.variants)
        let variants = itemValueRef.current.common.variants
        if (variants.length === 0) {
            return
        }
        for (let imageId in imagesRef.current) {
            if (imagesRef.current[imageId].color === variants[index].color) {
                delete imagesRef.current[imageId]
            }
        }
        variants.splice(index, 1)
        variants = variants.map(variant => {
            variant.images = ['no']
            return variant
        })
        setVariants([...variants])
    }

    const onAddVariant: MouseAction = (event) => {
        event.preventDefault()
        console.log('variants before', itemValueRef.current.common.variants)
        const variants = itemValueRef.current.common.variants
        const newVariant: ItemVariant = {color: '', images: [], sizes: [], price: ''} as unknown as ItemVariant
        variants.push(newVariant)
        console.log('variants after', itemValueRef.current.common.variants)
        setVariants([...variants])
    }

    useOmitFirstEffect(() => {
        setVariants([...props.variants])
    }, [props.variants])

    return {transl, variants, onDeleteVariant, onAddVariant}
}

export default useItemVariants