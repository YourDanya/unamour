import {useLocale} from 'hooks/other/other.hooks'
import {useState} from 'react'
import {useEffect} from 'react'
import {MouseAction} from 'types/types'
import itemImageContent
    from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-image/item-image.content'
import {
    ItemImageProps
} from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-image/item-image.types'

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