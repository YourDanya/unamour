import {useLocale} from 'hooks/other/other.hooks'
import itemTranslationContent
    from 'components/admin/items/item-form/item-translations/item-translation/item-translation.content'
import {useItemFormStore} from 'components/admin/items/item-form/store/item-form.store'
import {
    ItemTranslationProps
} from 'components/admin/items/item-form/item-translations/item-translation/item-translation.types'
import {useInputChange} from 'hooks/input/input-v2.hooks'
import {ChangeCallback} from 'hooks/input/input-v2.types'
import {useValidateInput} from 'hooks/input/input-v2.hooks'
import {useMapInputs} from 'hooks/input/input-v2.hooks'
import {peek} from 'utils/main/main.utils'
import {useCallback} from 'react'
import {shallow} from 'zustand/shallow'

const useItemTranslation = (props: ItemTranslationProps) => {
    const {locale} = props
    const [transl, content] = useLocale(itemTranslationContent)

    const {
        itemValueRef, setItemValue, errorCountRef, setErrorCount
    } = useItemFormStore(useCallback((state) => {
        return peek(state, ['itemValueRef', 'setItemValue', 'errorCountRef', 'setErrorCount'])
    }, []), shallow)

    const values = useItemFormStore(useCallback((state) => {
        return state.itemValue.translations.ua
    }, []))

    const {errors, validations} = useMapInputs(content.inputs)

    const {onValidate, errRef} = useValidateInput({validations, errors})

    const changeCallback: ChangeCallback<typeof values> = ({changeValues, name}) => {
        itemValueRef.current.translations[locale] = {...changeValues}
        setItemValue(itemValueRef.current)

        const beforeCount = errRef.current.count
        onValidate(name, changeValues[name])
        const afterCount = errRef.current.count

        if (afterCount !== beforeCount) {
            errorCountRef.current += afterCount - beforeCount
            setErrorCount(errorCountRef.current + afterCount - beforeCount)
        }
    }

    // const {itemIndex} = usePaginationStore(state => peek(state, ['itemIndex']))
    // itemIndex === 0 && console.log('render item translation')

    const {onChange} = useInputChange({values, changeCallback})

    return {values, errors, onChange, transl}
}

export default useItemTranslation