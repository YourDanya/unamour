import {FC} from 'react'
import useItemForm from 'components/admin/item-form/item-form.hook'
import React from 'react'
import ItemCommon from 'components/admin/item-form/item-common/item-common.component'
import ItemTranslations from 'components/admin/item-form/item-translations/item-translations.component'
import ItemVariants from 'components/admin/item-form/item-variants/item-variants.component'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'
import ItemButtons from 'components/admin/item-form/item-buttons/item-buttons.component'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {common: {variants, ...common}, translations} = props
    const {itemValueRef, itemErrRef} = useItemForm(props)

    return (
        <form className={'item-form'}>
            <ItemCommon {...common} itemValueRef={itemValueRef} itemErrRef={itemErrRef}/>
            <ItemTranslations translations={translations} itemValueRef={itemValueRef} itemErrRef={itemErrRef}/>
            <ItemVariants variants={variants} itemValueRef={itemValueRef} itemErrRef={itemErrRef}/>
            <ItemButtons slug={common.slug} itemValueRef={itemValueRef}/>
        </form>
    )
}

export default ItemForm

