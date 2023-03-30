import {useRef} from 'react'
import {MouseAction} from 'types/types'
import {ChangeEvent} from 'react'
import {useItemFormContext} from 'components/admin/items/item-form/store/store'
import {useCallback} from 'react'
import {
    ItemImagesProps
} from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-images.types'
import {useEffect} from 'react'
import {useState} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import itemImagesContent
    from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-images.content'

const useItemImages = (props: ItemImagesProps) => {
    const [transl] = useLocale(itemImagesContent)
    const {variantIndex} = props

    const modeRef = useRef({type: '', id: ''})

    const {values, setItemImagesValues, itemImagesValuesRef, errorCountRef, setErrorCount} =
        useItemFormContext(useCallback((state) => {
            const {
                itemValue: {common: {variants}}, itemImagesValues, setItemImagesValues, itemImagesValuesRef,
                errorCountRef, setErrorCount
            } = state
            return {
                variants, values: itemImagesValues[variantIndex], setItemImagesValues, itemImagesValuesRef, errorCountRef,
                setErrorCount
            }
        }, [variantIndex]))

    const btnRef = useRef<HTMLInputElement>(null)

    const onUpdateImage = (id: string) => {
        modeRef.current = {type: 'update', id}
        btnRef?.current?.click()
    }

    const onDeleteImage = (id: string) => {
        delete itemImagesValuesRef.current[variantIndex][id]
        setItemImagesValues(itemImagesValuesRef.current)
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
        // console.log('btnRef.current.value', btnRef.current?.value)

        let {id} = modeRef.current
        itemImagesValuesRef.current[variantIndex] = {...itemImagesValuesRef.current[variantIndex], [id]: file}
        setItemImagesValues(itemImagesValuesRef.current)

        modeRef.current = {type: '', id: ''}
    }

    const [imagesError, setImagesError] = useState('')
    const imagesErrRef = useRef('')

    // variantIndex === 1 && console.log('values', values)

    useEffect(() => {
        const noImages = Object.keys(values ?? {}).length === 0
        variantIndex === 1 && console.log('noImages', noImages)
        if (noImages && !imagesError) {
            imagesErrRef.current = transl.noImages
            setImagesError(transl.noImages)
            errorCountRef.current += 1
            setErrorCount(errorCountRef.current)
        } else if (!noImages && imagesError) {
            imagesErrRef.current = ''
            setImagesError('')
            errorCountRef.current -= 1
            setErrorCount(errorCountRef.current)
        }
    }, [values])

    // variantIndex === 1 && console.log('imagesError', imagesError)

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

    return {onUpdateImage, onDeleteImage, onAddImage, onSelect, values, btnRef, transl, imagesError}
}

export default useItemImages