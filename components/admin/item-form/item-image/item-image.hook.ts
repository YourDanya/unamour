import {useLocale} from 'hooks/other/other.hooks'
import itemImageContent from 'components/admin/item-form/item-image/item-image.content'
import {useState} from 'react'
import {ItemImageProps} from 'components/admin/item-form/item-image/item-image.types'
import {useEffect} from 'react'
import {MouseAction} from 'types/types'

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

    // const urlRef = useRef<URL>()

    useEffect(() => {
        if (!file || typeof file === 'string') {
            return
        }
        const objectUrl = URL.createObjectURL(file as File)
        console.log(objectUrl)
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