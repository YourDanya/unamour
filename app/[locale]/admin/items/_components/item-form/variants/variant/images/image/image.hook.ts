import {MouseAction} from 'app/_common/types/types'
import {ItemImageProps} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/image/image.types'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/image/image.content'

const useItemImage = (props: ItemImageProps) => {
    const {index, onDeleteImage, onUpdateImage} = props
    const transl = useLocale(dictionary)
    const onUpdate:MouseAction = (event) => {
        event.preventDefault()
        onUpdateImage(index)
    }
    const onDelete: MouseAction = (event) => {
        event.preventDefault()
        onDeleteImage(index)
    }

    return {transl, onUpdate, onDelete}
}

export default useItemImage