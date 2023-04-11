import {memo} from 'react'
import {FC} from 'react'
import useItemForm from 'components/admin/items/item-form/item-form.hook'
import ItemCommon from 'components/admin/items/item-form/item-common/item-common.component'
import {ItemFormProps} from 'components/admin/items/item-form/item-form.types'
import ItemTranslations from 'components/admin/items/item-form/item-translations/item-translations.component'
import {ItemFormContext} from 'components/admin/items/item-form/store/item-form.store'
import ItemVariants from 'components/admin/items/item-form/item-variants/item-variants.component'
import ItemActions from 'components/admin/items/item-form/item-actions/item-actions.component'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {className} = props
    const {transl, storeRef, itemIndex, deleted} = useItemForm(props)
    
    return (
        <ItemFormContext.Provider value={storeRef.current}>
            <form className={`item-form ${className ? className : ''} ${deleted ? 'item-form--deleted' : ''}`}>
                <div className={'item-form__title item-form__title--main'}>
                    {transl.item} №{itemIndex + 1}
                </div>
                <ItemCommon/>
                <ItemTranslations/>
                <ItemVariants/>
                <ItemActions deleted={deleted}/>
            </form>
        </ItemFormContext.Provider>
    )
}

// const areEqual = (prevProps: ItemFormProps, currentProps: ItemFormProps) => {
//     return prevProps.data.updateTime === currentProps.data.updateTime &&
//         prevProps.data.deleted === currentProps.data.deleted
// }

export default memo(ItemForm)

