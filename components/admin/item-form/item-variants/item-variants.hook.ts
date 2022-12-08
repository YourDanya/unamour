import {useLocale} from 'hooks/other/other.hooks'
import itemVariantsContent from 'components/admin/item-form/item-variants/item-variants.content'
import {useState} from 'react'
import {ItemVariantsProps} from 'components/admin/item-form/item-variants/item-variants.types'
import {MouseAction} from 'types/types'

const useItemVariants = (props: ItemVariantsProps) => {
    const {refObj} = props
    const [transl] = useLocale(itemVariantsContent)
    const [variants, setVariants] = useState(props.variants)

    const onDeleteVariant: MouseAction = (event) => {
        event.preventDefault()
        const index = +(event.currentTarget.getAttribute('data-value') as string)
        refObj.current.common.variants.splice(index, 1)
        setVariants([...refObj.current.common.variants])
    }

    const onAddVariant: MouseAction = (event) => {
        event.preventDefault()
    }

    return {transl, variants, onDeleteVariant, onAddVariant}
}

export default useItemVariants