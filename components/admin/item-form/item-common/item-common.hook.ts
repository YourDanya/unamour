import {Entry} from 'types/types'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import itemCommonContent from 'components/admin/item-form/item-common/item-common.content'
import {ItemCommonProps} from 'components/admin/item-form/item-common/item-common.types'
import {useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {setAdminField} from 'redux/admin/admin.slice'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {useEffect} from 'react'
import {selectCheckSlug} from 'redux/admin/admin.selectors'
import {useRefSelector} from 'hooks/enhanced/enhanced.hooks'
import {AdminIdField} from 'redux/admin/admin.types'

const useItemCommon = (props: ItemCommonProps) => {
    const {itemValueRef, itemErrRef, itemIndex, _id, ...otherProps} = props
    const [transl, content] = useLocale(itemCommonContent)
    const [categoryTransl, categoryValues] = useLocale(categoriesContent)

    const initValues = useMemo(() => {
        return Object.entries(otherProps).reduce((initValues, entry) => {
            const [key, value] = entry as Entry<typeof otherProps>
            const {validations} = content.inputs[key];
            (initValues[key] as { value: typeof value, validations: typeof validations }) = {value, validations}
            return initValues
        }, {} as {
            [key in keyof typeof otherProps]:
            { value: typeof otherProps[key], validations: typeof content.inputs[key]['validations'] }
        })
    }, [])

    const {inputs, onChange, onValidate, errRef, setOuterErrors} = useInput(initValues)

    const dispatch = useDispatch()

    const isSlugUnique = useRefSelector(selectCheckSlug, inputs.values.slug, itemIndex)

    useEffect(() => {
        const beforeCount = errRef.current.count
        Object.keys(inputs.errors).forEach((key) => onValidate(key))

        if (!isSlugUnique.current && !errRef.current.errors.slug) {
            errRef.current.errors.slug = transl.uniqueSlug
            errRef.current.count += 1
            setOuterErrors({...errRef.current.errors})
        }
        else if (isSlugUnique.current && errRef.current.errors.slug) {
            errRef.current.errors.slug = ''
            errRef.current.count -= 1
            setOuterErrors({...errRef.current.errors})
        }

        const afterCount = errRef.current.count
        itemErrRef.current += afterCount - beforeCount
        if (beforeCount !== afterCount) {
            console.log('dispatching', itemValueRef.current._id)
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
        copy.common = {...copy.common, ...inputs.values}
        itemValueRef.current = copy
    }, [inputs.values])

    return {transl, inputs, onChange, onValidate, categoryTransl, categoryValues}
}

export default useItemCommon