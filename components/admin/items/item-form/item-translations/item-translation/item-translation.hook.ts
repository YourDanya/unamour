import {useLocale} from 'hooks/other/other.hooks'
import itemTranslationContent from 'components/admin/items/item-form/item-translations/item-translation/item-translation.content'
import {useItemFormContext} from 'components/admin/items/item-form/store/store'
import {ItemTranslationProps} from 'components/admin/items/item-form/item-translations/item-translation/item-translation.types'
import {useInputChange} from 'hooks/input/input-v2.hooks'
import {ChangeCallback} from 'hooks/input/input-v2.types'
import {useValidateInput} from 'hooks/input/input-v2.hooks'
import {useMapInputs} from 'hooks/input/input-v2.hooks'
import {selectItemFormMain} from 'components/admin/items/item-form/store/store'

const useItemTranslation = (props: ItemTranslationProps) => {
    const {locale} = props
    const [transl, content] = useLocale(itemTranslationContent)

    const { itemValueRef, setItemValue, errorCountRef, setErrorCount} = useItemFormContext(selectItemFormMain)
    const values = useItemFormContext(state => state.itemValue.translations[locale])

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

    const {onChange} = useInputChange({values, changeCallback})

    return {values, errors, onChange, transl}
}

export default useItemTranslation