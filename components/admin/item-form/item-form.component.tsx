import {FC} from 'react'
import useItemForm from 'components/admin/item-form/item-form.hook'
import React from 'react'
import Button from 'components/common/button/button.component'
import ItemCommon from 'components/admin/item-form/item-common/item-common.component'
import ItemTranslations from 'components/admin/item-form/item-translations/item-translations.component'
import ItemVariants from 'components/admin/item-form/item-variants/item-variants.component'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'
import ItemMessage from 'components/admin/item-form/item-message/item-message.component'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {common: {variants, ...common}, translations} = props
    const {ref, onDelete, onSave, transl, updateItem} = useItemForm(props)

    return (
        <form className={'item-form'}>
            <ItemMessage updateItem={updateItem}/>
            <ItemCommon {...common} refObj={ref}/>
            <ItemTranslations translations={translations} refObj={ref}/>
            <ItemVariants variants={variants} refObj={ref}/>
            <Button className={'item-form__button item-form__button--delete'} onClick={onDelete}>
                {transl.delete}
            </Button>
            <Button className={'item-form__button item-form__button--save'} onClick={onSave}>
                {transl.save}
            </Button>
        </form>
    )
}

export default ItemForm

