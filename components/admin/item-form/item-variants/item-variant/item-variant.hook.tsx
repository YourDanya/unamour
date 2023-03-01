import {colorContent} from 'components/common/content/content'
import {useLocale} from 'hooks/other/other.hooks'
import {useToggleMany} from 'hooks/event-handler/event-handler.hooks'
import {sizeContent} from 'components/common/content/content'
import {useMemo} from 'react'
import {useInput} from 'hooks/input/input.hooks'
import itemVariantContent from 'components/admin/item-form/item-variant/item-variant.content'
import {ItemVariantProps} from 'components/admin/item-form/item-variant/item-variant.types'
import {useEffect} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {useState} from 'react'
import {setAdminField} from 'redux/admin/admin.slice'
import {useDispatch} from 'react-redux'
import {useRef} from 'react'
import {AdminIdField} from 'redux/admin/admin.types'
import {ChangeEvent} from 'react'
import {MouseAction} from 'types/types'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'

const useItemVariant = (props: ItemVariantProps) => {
    const {color, sizes, itemValueRef, price, variantIndex, itemErrRef, _id, imagesRef} = props
    const [colorsTransl, colorsContent] = useLocale(colorContent)
    const [transl, content] = useLocale(itemVariantContent)

    const sizeObject = useMemo(() => {
        const sizeMap = sizes.reduce((sizeMap, size) => {
            sizeMap[size] = true
            return sizeMap
        }, {} as Record<string, boolean>)

        return sizeContent.reduce((sizeObject, size) => {
            sizeObject[size] = sizeMap[size] ?? false
            return sizeObject
        }, {} as Record<string, boolean>)
    }, [])

    const [sizeValues, onSizesChange] = useToggleMany(sizeObject)

    const colors = useMemo(() => {
        return colorsContent.reduce((colors, {slug, code}, index) => {
            colors.values.push(slug)
            colors.styles.push({backgroundColor: code})
            colors.labels.push(colorsTransl[index])
            return colors
        }, {
            styles: [], labels: [], values: []
        } as { styles: { backgroundColor: string }[], labels: string[], values: string[] })
    }, [])

    const {inputs, onChange: onInputsChange, errRef, onValidate} = useInput({
        price: {value: price ?? 0, ...content.inputs.price},
        color: {value: color, ...content.inputs.color}
    })

    const [sizeError, setSizeError] = useState('')
    const [colorError, setColorError] = useState('')

    const dispatch = useDispatch()

    const variantErrRef = useRef(0)

    useEffect(() => {
        const beforeCount = variantErrRef.current

        const beforeInputsCount = errRef.current.count
        Object.keys(inputs.errors).forEach(key => onValidate(key))
        const afterInputsCount = errRef.current.count

        variantErrRef.current += afterInputsCount - beforeInputsCount

        if (!errRef.current.errors.color) {
            const isColorError = itemValueRef.current.common.variants.reduce((isColorError, variant, index) => {
                if (variant.color === inputs.values.color && index !== variantIndex) isColorError = true
                return isColorError
            }, false)
            if (isColorError && !colorError) {
                setColorError(transl.colorError)
                variantErrRef.current += 1
            }
            if (!isColorError && colorError) {
                setColorError('')
                variantErrRef.current -= 1
            }
        }

        const sizes = Object.entries(sizeValues).reduce((sizes, [key, value]) => {
            if (value) sizes.push(key)
            return sizes
        }, [] as string[])
        if (sizes.length === 0 && !sizeError) {
            setSizeError(transl.sizeError)
            variantErrRef.current += 1
        }
        if (sizes.length !== 0 && sizeError) {
            setSizeError('')
            variantErrRef.current -= 1
        }

        const afterCount = variantErrRef.current
        if (beforeCount !== afterCount) {
            // console.log('before item err ref', itemErrRef.current)
            itemErrRef.current += afterCount - beforeCount
            // if (variantIndex === 2) {
            //     console.log('after count', afterCount)
            //     console.log('before count', beforeCount)
            //     console.log('item err ref', itemErrRef.current)
            // }
            let field: AdminIdField
            if (_id) {
                field = 'updateItem'
            } else {
                field = 'createItem'
            }
            dispatch(setAdminField({
                field,
                _id,
                value: {error: {client: itemErrRef.current, server: null}}
            }))
        }
        const copy: FetchedItem = JSON.parse(JSON.stringify(itemValueRef.current))
        copy.common.variants[variantIndex] = {...copy.common.variants[variantIndex], ...inputs.values, sizes}
        itemValueRef.current = copy
    }, [inputs.values, sizeValues])

    useEffect(() => {
        return () => {
            const beforeCount = itemErrRef.current
            itemErrRef.current -= variantErrRef.current
            const afterCount = itemErrRef.current
            if (afterCount !== beforeCount) {
                dispatch(setAdminField({
                    field: 'updateItem',
                    _id,
                    value: {error: {client: itemErrRef.current, server: null}}
                }))
            }
        }
    }, [])

    const modeRef = useRef({type: '', id: ''})

    const [images, setImages] = useState<{id: string, value:string | File}[]>(
        props.images.map((imageId) => ({id: imageId, value: imageId}))
    )

    useOmitFirstEffect(() => {
        const images = props.images.map((imageId) => ({id: imageId, value: imageId}))
        setImages([...images])
    }, [props.images])

    const btnRef = useRef<HTMLInputElement>(null)

    const onUpdateImage = (id: string) => {
        modeRef.current = {type: 'update', id}
        btnRef?.current?.click()
    }

    const onDeleteImage = (id: string) => {
        console.log('id', id)
        console.log('imagesRef.current', imagesRef.current)
        delete imagesRef.current[id]
        const index = images.findIndex((image) => image.id === id)
        images.splice(index, 1)
        setImages([...images])
    }

    const onAddImage: MouseAction = (event) => {
        event.preventDefault()
        modeRef.current = {type: 'create', id: ''}
        btnRef?.current?.click()
    }

    const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('selecting')

        const file = event.target.files?.[0]
        if (!file) {
            return
        }

        let {type, id} = modeRef.current

        if (type === 'create') {
            // console.log('creating')
            id = new Date().toString()
            images.push({id, value: file})
            imagesRef.current[id] = {color, file}
        } else {
            // console.log('updating')
            imagesRef.current[`${id}`].file = file
            const index = images.findIndex((image) => image.id === id)
            images[index].value = file
            imagesRef.current[id].file = file
        }
        modeRef.current = {type: '', id: ''}

        setImages([...images])
    }

    useOmitFirstEffect(() => {
        images.forEach((image) => {
            imagesRef.current[image.id].color = inputs.values.color
        })
    }, [inputs.values.color])

    return {
        onSizesChange, inputs, onInputsChange, transl, sizeValues, colors, sizeError, colorError, onUpdateImage,
        onDeleteImage, onAddImage, images, btnRef, onSelect
    }
}

export default useItemVariant

