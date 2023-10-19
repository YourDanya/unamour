import {useRef} from 'react'
import {MouseAction} from 'app/_common/types/types'
import {ChangeEvent} from 'react'
import {useEffect} from 'react'
import {ItemImagesProps} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.types'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.content'

const useItemImages = (props: ItemImagesProps) => {
    const transl = useLocale(dictionary)
    const {variantIndex} = props

    const modeRef = useRef({type: '', id: ''})

    const btnRef = useRef<HTMLInputElement>(null)

    const onUpdateImage = (id: string) => {
        modeRef.current = {type: 'update', id}
        btnRef?.current?.click()
    }

    const onDeleteImage = (id: string) => {
        delete itemImagesValuesRef.current[variantIndex][id]
        setItemImagesValues(itemImagesValuesRef.current)

        if (Object.keys(values).length === 0) {
            imagesErrRef.current = transl.noImages
            setImagesError(transl.noImages)
            errorCountRef.current += 1
            setErrorCount(errorCountRef.current)
        }
    }

    const onAddImage: MouseAction = (event) => {
        event.preventDefault()
        modeRef.current = {type: 'create', id: new Date().toString()}
        btnRef?.current?.click()
    }

    const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) {
            return
        }

        let {id} = modeRef.current

        if (Object.keys(values).length === 0) {
            imagesErrRef.current = ''
            setImagesError('')
            errorCountRef.current -= 1
            setErrorCount(errorCountRef.current)
        }

        if (modeRef.current.type === 'create') {
            itemImagesValuesRef.current[variantIndex][id] = {file : null, url: ''}
        }

        itemImagesValuesRef.current[variantIndex][id].file = file
        setItemImagesValues({...itemImagesValuesRef.current})

        modeRef.current = {type: '', id: ''}
    }

    const [imagesError, setImagesError] = useState('')
    const imagesErrRef = useRef('')

    useEffect(() => {
        if (!values || Object.keys(values).length === 0) {
            imagesErrRef.current = transl.noImages
            setImagesError(transl.noImages)
            errorCountRef.current += 1
            setErrorCount(errorCountRef.current)
        }
    }, [])

    useEffect(() => {
        return () => {
            itemImagesValuesRef.current.splice(variantIndex, 1)
            setItemImagesValues(itemImagesValuesRef.current)
            if (imagesErrRef.current) {
                errorCountRef.current -= 1
                setErrorCount(errorCountRef.current)
            }
        }
    }, [])

    return {onUpdateImage, onDeleteImage, onAddImage, onSelect, btnRef, transl, imagesError}
}

export default useItemImages