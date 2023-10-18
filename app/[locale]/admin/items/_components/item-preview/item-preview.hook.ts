import {ItemPreviewProps} from 'app/[locale]/admin/items/_components/item-preview/item-preview.types'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {clothing} from 'app/_common/content/categories/categories.content'
import {useMemo} from 'react'
import {clothingDictionary} from 'app/_common/content/categories/categories.content'
import {dictionary} from 'app/[locale]/admin/items/_components/item-preview/item-preview.content'

const useItemPreview = (props: ItemPreviewProps) => {
    const {item, pageIndex} = props

    const {translations, variants, slugCategory} = item

    const {name} = useLocale(translations)

    const image = variants[0].images[0]

    const clothingTransl = useLocale(clothingDictionary)

    const category = useMemo(() => {
        const index = clothing.findIndex(clothName => slugCategory)
        return clothingTransl[index]
    }, [])

    const onUpdate = () => {
        props.onUpdate(pageIndex)
    }

    const onDelete = () => {
        props.onDelete(pageIndex)
    }

    const transl = useLocale(dictionary)

    return {name, image, category, onUpdate, onDelete, transl}
}

export default useItemPreview