import {useLocale} from 'hooks/other/other.hooks'
import itemVariantsContent from 'components/admin/item-form/item-variants/item-variants.content'
import {useState} from 'react'
import {ItemVariantsProps} from 'components/admin/item-form/item-variants/item-variants.types'
import {MouseAction} from 'types/types'
import {ItemVariant} from 'components/admin/item-form/item-form.types'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'

const useItemVariants = (props: ItemVariantsProps) => {
    const {itemValueRef, imagesRef} = props
    const [transl] = useLocale(itemVariantsContent)
    const [variants, setVariants] = useState(props.variants)

    const onDeleteVariant: MouseAction = (event) => {
        event.preventDefault()
        const index = +(event.currentTarget.getAttribute('data-value') as string)
        const variants = itemValueRef.current.common.variants
        if (variants.length === 0) {
            return
        }
        for (let imageId in imagesRef.current) {
            if (imagesRef.current[imageId].color === variants[index].color) {
                delete imagesRef.current[imageId]
            }
        }
        console.log('imagesRef.current', imagesRef.current)
        variants.splice(index, 1)
        setVariants([...variants])
    }

    const onAddVariant: MouseAction = (event) => {
        event.preventDefault()
        const variants = itemValueRef.current.common.variants
        const newVariant = {} as ItemVariant
        variants.push(newVariant)
        setVariants([...variants])
    }

    useOmitFirstEffect(() => {
        setVariants([...props.variants])
    }, [props.variants])

    return {transl, variants, onDeleteVariant, onAddVariant}
}

export default useItemVariants