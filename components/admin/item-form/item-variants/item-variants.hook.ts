import {useLocale} from 'hooks/other/other.hooks'
import itemVariantsContent from 'components/admin/item-form/item-variants/item-variants.content'
import {useState} from 'react'
import {ItemVariantsProps} from 'components/admin/item-form/item-variants/item-variants.types'
import {MouseAction} from 'types/types'
import {ItemVariant} from 'redux/shop-items/shop-items.types'

const useItemVariants = (props: ItemVariantsProps) => {
    const {refObj} = props
    const [transl] = useLocale(itemVariantsContent)
    const [variants, setVariants] = useState(props.variants)

    const onDeleteVariant: MouseAction = (event) => {
        event.preventDefault()
        const index = +(event.currentTarget.getAttribute('data-value') as string)
        const variants = refObj.current.common.variants
        if (variants.length === 0) return
        variants.splice(index, 1)
        setVariants([...variants])
    }

    const onAddVariant: MouseAction = (event) => {
        event.preventDefault()
        const variants = refObj.current.common.variants
        const newVariant = {} as ItemVariant
        variants.push(newVariant)
        setVariants([...variants])
    }

    return {transl, variants, onDeleteVariant, onAddVariant}
}

export default useItemVariants