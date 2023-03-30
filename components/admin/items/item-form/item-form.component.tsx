import {memo} from 'react'
import {FC} from 'react'
import useItemForm from 'components/admin/items/item-form/item-form.hook'
import ItemCommon from 'components/admin/items/item-form/item-common/item-common.component'
import {ItemFormProps} from 'components/admin/items/item-form/item-form.types'
import ItemTranslations from 'components/admin/items/item-form/item-translations/item-translations.component'
import {ItemFormContext} from 'components/admin/items/item-form/store/store'
import ItemVariants from 'components/admin/items/item-form/item-variants/item-variants.component'
import ItemButtons from 'components/admin/items/item-form/item-buttons/item-buttons.component'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {item: {deleted}, itemIndex, className} = props
    const {transl, store} = useItemForm(props)

    return (
        <ItemFormContext.Provider value={store}>
            <form className={`item-form ${className ? className : ''} ${deleted ? 'item-form--deleted' : ''}`}>
                <div className={'item-form__title item-form__title--main'}>
                    {transl.item} №{itemIndex + 1}
                </div>
                <ItemCommon itemIndex={itemIndex}/>
                <ItemTranslations/>
                <ItemVariants/>
                <ItemButtons deleted={deleted} itemIndex={itemIndex}/>
            </form>
        </ItemFormContext.Provider>
    )
}

const areEqual = (prevProps: ItemFormProps, currentProps: ItemFormProps) => {
    return prevProps.item.updateTime === currentProps.item.updateTime &&
        prevProps.item.deleted === currentProps.item.deleted
}

export default memo(ItemForm, areEqual)

