import {useLocale} from 'hooks/other/other.hooks'
import itemVariantsContent from 'components/admin/item-form/item-variants/item-variants.content'
import {useState} from 'react'
import {ItemVariantsProps} from 'components/admin/item-form/item-variants/item-variants.types'
import {MouseAction} from 'types/types'
import {ItemVariant} from 'components/admin/item-form/item-form.types'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'
import {useRef} from 'react'
import {useItemFormContext} from 'components/admin/item-form/store/store'

const useItemVariants = () => {
    const [transl] = useLocale(itemVariantsContent)

    const {
        itemValue: {common: {variants}}, itemValueRef, setItemValue, errorCountRef, setErrorCount
    } = useItemFormContext(state => state)

    const onAddVariant: MouseAction = (event) => {
        event.preventDefault()
        const newVariant: ItemVariant = {color: '', images: [], sizes: [], price: ''} as unknown as ItemVariant
        itemValueRef.current = {
            ...itemValueRef.current, common: {
                ...itemValueRef.current.common,
                variants: [...itemValueRef.current.common.variants, newVariant]
            }
        }
        setItemValue(itemValueRef.current)
    }

    return {transl, variants, onAddVariant}
}

export default useItemVariants

// const onDeleteVariant: MouseAction = (event) => {
//     event.preventDefault()
//     const index = +(event.currentTarget.getAttribute('data-value') as string)
//     let variants = itemValueRef.current.common.variants
//     if (variants.length === 0) {
//         return
//     }
//     for (let imageId in imageValues.current) {
//         if (imageValues.current[imageId].color === variants[index].color) {
//             delete imageValues.current[imageId]
//         }
//     }
//     variants.splice(index, 1)
//     variants = variants.map(variant => {
//         variant.images = ['no']
//         return variant
//     })
//     setVariants([...variants])
// }