import {useCallback} from 'react'
import {shallow} from 'zustand/shallow'
import {useValidateInput} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {useMapInputs} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {
    ItemTranslationProps
} from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translation/item-translation.types'
import itemTranslationContent
    from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translation/item-translation.content'
import {ChangeCallback} from 'app/[locale]/_common/hooks/input/input-v2.types'
import {useItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import {useInputChange} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'
import {peek} from 'app/[locale]/_common/utils/helpers/peek/peek.util'

const useItemTranslation = (props: ItemTranslationProps) => {
    const {locale} = props
    const [transl, content] = useLocale(itemTranslationContent)

    const {
        itemValueRef, setItemValue, errorCountRef, setErrorCount
    } = useItemFormStore(useCallback((state) => {
        return peek(state, ['itemValueRef', 'setItemValue', 'errorCountRef', 'setErrorCount'])
    }, []), shallow)

    const values = useItemFormStore(useCallback((state) => {
        return state.itemValue.translations[locale]
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

    const {onChange} = useInputChange({values, changeCallback})

    return {values, errors, onChange, transl}
}

export default useItemTranslation