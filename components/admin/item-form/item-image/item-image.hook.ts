import {useLocale} from 'hooks/other/other.hooks'
import itemImageContent from 'components/admin/item-form/item-image/item-image.content'
import {useRef} from 'react'
import {MouseAction} from 'types/types'
import {ChangeEvent} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {ItemImageProps} from 'components/admin/item-form/item-image/item-image.types'

const useItemImage = (props: ItemImageProps) => {
    const [transl] = useLocale(itemImageContent)
    const btnRef = useRef<HTMLInputElement>(null)

    const onUpdate: MouseAction = (event) => {
        event.preventDefault()
        btnRef?.current?.click()
    }

    const [file, setFile] = useState<File>()

    const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        console.log('file', file)
        if (file) {
            setFile(file)
        }
    }

    const [url, setUrl] = useState(props.url)

    useEffect(() => {
        if (!file) {
            return
        }
        const objectUrl = URL.createObjectURL(file)
        console.log(objectUrl)
        setUrl(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    return {transl, btnRef, onUpdate, onSelect, url}
}

export default useItemImage