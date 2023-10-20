import {MouseAction} from 'app/_common/types/types'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/variants/variants.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {VariantsProps} from 'app/[locale]/admin/items/_components/item-form/variants/variants.types'
const useItemVariants = (props: VariantsProps) => {
    const transl = useLocale(dictionary)

    const {itemValue, setItemValue, imageValues, setImageValues} = props
    const {variants} = itemValue
    const onAddVariant: MouseAction = (event) => {
        event.preventDefault()

        const newVariant = {color: '', images: [], sizes: [], price: 0}
        variants.push(newVariant)
        setItemValue({...itemValue})

        imageValues.push([])
        setImageValues([...imageValues])
    }

    return {transl, onAddVariant, variants}
}

export default useItemVariants
