import {useRef} from 'react'
import {MouseAction} from 'app/_common/types/types'
import {ChangeEvent} from 'react'
import {useEffect} from 'react'
import {ImagesProps} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.types'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.content'
import {ImagesState} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.types'
import {WithEventState} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.types'
import {NewImageValue} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
const useItemImages = (props: ImagesProps) => {
    const state = useGestState(props)
    const withStateActions = useActions(state)
    useHandleEffets(state)

    return withStateActions
}

export default useItemImages

export const useGestState = (props: ImagesProps) => {
    const {imageValues, variantIndex} = props
    const values = imageValues[variantIndex]

    const transl = useLocale(dictionary)

    const updateIndexRef = useRef(- 1)
    const btnRef = useRef<HTMLInputElement>(null)
    const unmountRef = useRef(() => {})

    const [imagesError, setImagesError] = useState('')

    return {props, transl, updateIndexRef, btnRef, imagesError, setImagesError, values, unmountRef}
}
const useActions = (state: ImagesState) => {
    const {updateIndexRef, btnRef, values, setImagesError, transl, props} = state
    const {imageValues, setImageValues, formErrCountRef, setErrorCount} = props
    const onUpdateImage = (index: number) => {
        updateIndexRef.current = index
        btnRef?.current?.click()
    }

    const onDeleteImage = (imageIndex: number) => {
        values.splice(imageIndex, 1)
        setImageValues([...imageValues])

        if (values.length === 0) {
            setImagesError(transl.noImages)
            setErrorCount(formErrCountRef.current++)
        }
    }
    const onAddImage: MouseAction = (event) => {
        event.preventDefault()
        btnRef?.current?.click()
    }

    const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
        select({...state, event})
    }

    return {
        ...state, onUpdateImage, onDeleteImage, onAddImage, onSelect
    }
}
const select = (state: WithEventState) => {
    const {event, values, setImagesError, props, updateIndexRef} = state
    const {formErrCountRef, setErrorCount, imageValues, setImageValues} = props

    const file = event.target.files?.[0]
    if (!file) {
        return
    }
    if (values.length === 0) {
        setImagesError('')
        setErrorCount(--formErrCountRef.current)
    }

    const url = URL.createObjectURL(file)

    if (updateIndexRef.current === -1) {
        values.push({url, file})
    } else {
        const value = values[updateIndexRef.current] as NewImageValue
        if (value.file) {
            URL.revokeObjectURL(value.url)
        }
        values[updateIndexRef.current] = {url, file}
        updateIndexRef.current = -1
    }

    setImageValues([...imageValues])
}

const useHandleEffets = (state: ImagesState) => {
    const {unmountRef, imagesError, values, setImagesError, transl, props} = state
    const {setErrorCount, formErrCountRef} = props

    unmountRef.current = () => {
        if (imagesError) {
            setErrorCount(--formErrCountRef.current)
        }
        values.forEach((value) => {
            if ('file' in value) {
                URL.revokeObjectURL(value.url)
            }
        })
    }

    useEffect(() => {
        if (values.length === 0) {
            setImagesError(transl.noImages)
            setErrorCount(formErrCountRef.current++)
        }
        return () => {
            unmountRef.current()
        }
    }, [])
}
