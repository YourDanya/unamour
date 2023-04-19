import {MouseAction} from 'app/[locale]/_common/types/types'
import itemImageContent
    from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-images/item-image/item-image.content'
import {useEffect} from 'react'
import {
    ItemImageProps
} from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-images/item-image/item-image.types'
import {useState} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

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

    const [url, setUrl] = useState(props.id)

    useEffect(() => {
        if (!file) {
            return
        }
        const objectUrl = URL.createObjectURL(file as File)

        setUrl(objectUrl)
        // free memory when ever this component is unmounted
        return () => {
            console.log('unmount')
            URL.revokeObjectURL(objectUrl)
        }
    }, [file])

    return {transl, onUpdate, url, onDelete}
}

export default useItemImage