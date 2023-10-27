import {MouseAction} from 'app/_common/types/types'
import {ItemImageProps} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/image/image.types'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/image/image.content'

const useItemImage = (props: ItemImageProps) => {
    const {index, onDeleteImage, onUpdateImage, url, file, timeStamp} = props
    const transl = useLocale(dictionary)
    const onUpdate:MouseAction = (event) => {
        event.preventDefault()
        onUpdateImage(index)
    }
    const onDelete: MouseAction = (event) => {
        event.preventDefault()
        onDeleteImage(index)
    }

    let src = ''

    if (!file) {
        src = `${url}&t=${timeStamp}`
    } else {
        src = url
    }

    return {transl, onUpdate, onDelete, src}
}

export default useItemImage