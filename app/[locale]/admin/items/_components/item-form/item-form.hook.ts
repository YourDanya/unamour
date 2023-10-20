import {useState} from 'react'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {FormImageValue} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ItemFormProps} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {AdminItem} from 'app/_common/types/admin-item'
const useItemForm = (props: ItemFormProps) => {
    const transl = useLocale(dictionary)
    const {item} = props

    const initSlug = item.slug

    const [itemValue, setItemValue] = useState(item)
    const [errorCount, setErrorCount] = useState(0)

    const [imageValues, setImageValues] = useState(() => mapImages(itemValue))

    console.log('imageValues', imageValues)

    return {
        transl, itemValue, setItemValue, errorCount, setErrorCount, initSlug, imageValues, setImageValues
    }
}

export default useItemForm

export type ItemFormState = ReturnType<typeof useItemForm>

const mapImages = (itemValue: AdminItem): FormImageValue[][] => {
    return itemValue.variants.map(({images}) => {
        return images
    })
}

// const time = useRef(0)
// time.current = performance.now()
// useEffect(() => {
//     console.log(performance.now() - time.current)
// })
