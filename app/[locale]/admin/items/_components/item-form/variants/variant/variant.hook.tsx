import {useMapInputs} from 'app/_common/hooks/input/input-v2.hooks'
import {MouseAction} from 'app/_common/types/types'
import {ItemVariantProps} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.types'
import {useMemo} from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {colorDictionary} from 'app/_common/content/color/color.content'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.content'
import {useRef} from 'react'
import {initInputs} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.content'
import {ChangeEvent} from 'react'
import {inputChange} from 'app/_common/utils/form/input-change/input-change.util'
import {mapSizes} from 'app/[locale]/admin/items/_components/item-form/variants/variant/mappers'
import {mapColors} from 'app/[locale]/admin/items/_components/item-form/variants/variant/mappers'
import {useParams} from 'next/navigation'
import {Locale} from 'app/_common/types/types'
import {clearErrors} from 'app/[locale]/admin/items/_components/item-form/variants/variant/validations'
import {sizes as sizeList} from 'app/_common/content/size/size.content'
import {validateValuesAndCount} from 'app/[locale]/admin/items/_components/item-form/variants/variant/validations'

const useItemVariant = (props: ItemVariantProps) => {
    const state = useGetState(props)
    const withMemosState = useHandleEffectsAndMemos(state)
    const withActionsState = useActions(withMemosState)

    return withActionsState
}

export default useItemVariant

export const useGetState = (props: ItemVariantProps) => {
    const colorsTransl = useLocale(colorDictionary)
    const transl = useLocale(dictionary)

    const errorCountRef = useRef(0)

    const {itemValue, variantIndex} = props
    const {variants} = itemValue
    const {color, price, sizes} = variants[variantIndex]
    const values = {color, price}

    const {validations, errors: initErrors} = useMapInputs(initInputs)
    const [errors, setErrors] = useState({...initErrors})
    const [sizeError, setSizeError] = useState('')

    const changeRef = useRef((event: ChangeEvent<HTMLInputElement>) => {})
    const sizeChangeRef = useRef((event: ChangeEvent<HTMLInputElement>) => {})

    const locale = useParams().locale as Locale

    return {
        colorsTransl, transl, errorCountRef, props, values, validations, errors, setErrors, changeRef, sizes,
        locale, variants, sizeError, setSizeError, sizeChangeRef
    }
}

const useHandleEffectsAndMemos = (state: ReturnType<typeof useGetState>) => {
    const {sizes} = state

    useEffect(() => {
        validateValuesAndCount(state)
        return () => {
            clearErrors(state)
        }
    }, [])

    const sizeValues = useMemo(() => {
        return mapSizes(state)
    }, [sizes])

    const colors = useMemo(() => {
        return mapColors(state)
    }, [])

    return {
        ...state, sizeValues, colors
    }
}

const useActions = (state: ReturnType<typeof useHandleEffectsAndMemos>) => {
    const {props, changeRef, values, sizeChangeRef, sizeValues} = state
    const {itemValue, setItemValue, variantIndex, imageValues, setImageValues} = props
    const {variants} = itemValue
    const onDeleteVariant:MouseAction = (event) => {
        event.preventDefault()

        if (variants.length === 1) {
            return
        }

        variants.splice(variantIndex, 1)
        setItemValue({...itemValue, variants})

        imageValues.splice(variantIndex, 1)
        setImageValues([...imageValues])
    }

    changeRef.current = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = inputChange<typeof values>(event);
        (values[name] as typeof value) = value;
        (variants[variantIndex]) = {...variants[variantIndex], ...values}

        setItemValue({...itemValue, variants})
        validateValuesAndCount({...state, validateName: name})
    }
    const onInputsChange = (event: ChangeEvent<HTMLInputElement>) => {
        changeRef.current(event)
    }

    sizeChangeRef.current = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = inputChange<Record<string, boolean>>(event);
        sizeValues[name] = value

        const sizes = sizeList.filter((size) => sizeValues[size])
        variants[variantIndex]['sizes'] = sizes

        setItemValue({...itemValue, variants})
        validateValuesAndCount({...state, sizes, validateName: 'size'})
    }

    const onSizesChange = (event: ChangeEvent<HTMLInputElement>) => {
        sizeChangeRef.current(event)
    }

    return {...state, onDeleteVariant, onInputsChange, onSizesChange}
}



