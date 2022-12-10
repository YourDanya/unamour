import {Entry} from 'types/types'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import itemCommonContent from 'components/admin/item-form/item-common/item-common.content'
import {ItemCommonProps} from 'components/admin/item-form/item-common/item-common.types'
import {useMemo} from 'react'
import {useDebounceEffect} from 'hooks/component/component.hooks'

const useItemCommon = (props: ItemCommonProps) => {
    const {itemValueRef, itemErrRef, ...otherProps} = props
    const [transl, content] = useLocale(itemCommonContent)
    const [categoryTransl, categoryValues] = useLocale(categoriesContent)

    const initValues = useMemo(() => {
        return Object.entries(otherProps).reduce((initValues, entry) => {
            const [key, value] = entry as Entry<typeof otherProps>
            const {validations} = content.inputs[key];
            (initValues[key] as {value: typeof value, validations: typeof validations}) = {value, validations}
            return initValues
        }, {} as {[key in keyof typeof otherProps]:
            {value: typeof otherProps[key], validations: typeof content.inputs[key]['validations']}})
    }, [])

    const {inputs, onChange, onValidate, errRef} = useInput(initValues)

    useDebounceEffect(() => {
        const beforeCount = errRef.current.count
        Object.keys(inputs.errors).forEach((key) => onValidate(key))
        const afterCount = errRef.current.count
        itemErrRef.current += afterCount - beforeCount
        if (itemErrRef.current === 0) {

        }
    }, [inputs.values])

    return {transl, inputs, onChange, onValidate, categoryTransl, categoryValues}
}

export default useItemCommon