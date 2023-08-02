import {MouseAction} from 'app/[locale]/_common/types/types'
import itemImageContent
    from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-images/item-image/item-image.content'
import {useEffect} from 'react'
import {
    ItemImageProps
} from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-images/item-image/item-image.types'
import {useState} from 'react'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'

const useItemImage = (props: ItemImageProps) => {
    const {id, onDeleteImage, onUpdateImage, file} = props
    const [transl] = useLocale(itemImageContent)

    const onUpdate:MouseAction = (event) => {
        event.preventDefault()
        onUpdateImage(id)
    }

    const onDelete: MouseAction = (event) => {
        event.preventDefault()
        onDeleteImage(id)
    }

    const [url, setUrl] = useState(props.url ?? '')

    useEffect(() => {
        if (!file) {
            return
        }
        const objectUrl = URL.createObjectURL(file as File)

        setUrl(objectUrl)
        return () => {
            URL.revokeObjectURL(objectUrl)
        }
    }, [file])

    return {transl, onUpdate, url, onDelete}
}

export default useItemImage