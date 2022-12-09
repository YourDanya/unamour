import {Entry} from 'types/types'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import itemCommonContent from 'components/admin/item-form/item-common/item-common.content'
import {ItemCommonProps} from 'components/admin/item-form/item-common/item-common.types'
import {useMemo} from 'react'
import {useDebounceEffect} from 'hooks/component/component.hooks'

const useItemCommon = (props: ItemCommonProps) => {
    let {refObj, ...otherProps} = props

    const [transl, content] = useLocale(itemCommonContent)
    const [categoryTransl, categoryValues] = useLocale(categoriesContent)

    const initValues = useMemo(() => {
      return Object.entries(otherProps).reduce((accum, entry) => {
          const [key, value] = entry as Entry<typeof otherProps>
          const {validations} = content.inputs[key];
          (accum[key] as {value: typeof value, validations: typeof validations}) = {value, validations}
          return accum
      }, <{[key in keyof typeof otherProps]:
          {value: typeof otherProps[key], validations: typeof content.inputs[key]['validations']}}> {})
    }, [])

    const {inputs, onChange, onValidate} = useInput(initValues)

    useDebounceEffect(() => {
        Object.keys(inputs.errors).forEach((key) => onValidate(key))
    }, [inputs.values])

    return {transl, inputs, onChange, onValidate, categoryTransl, categoryValues}
}

export default useItemCommon