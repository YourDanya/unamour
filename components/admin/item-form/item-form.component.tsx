import {FC} from 'react'
import useItemForm from 'components/admin/item-form/item-form.hook'
import React from 'react'
import ItemCommon from 'components/admin/item-form/item-common/item-common.component'
import ItemTranslations from 'components/admin/item-form/item-translations/item-translations.component'
import ItemVariants from 'components/admin/item-form/item-variants/item-variants.component'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'
import ItemButtons from 'components/admin/item-form/item-buttons/item-buttons.component'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {common: {variants, ...common}, translations, itemIndex, className} = props
    const {itemValueRef, itemErrRef, transl} = useItemForm(props)

    return (
        <form className={`item-form ${className ? className : ''}`}>
            <div className={'item-form__title item-form__title--main'}>{transl.item} №{itemIndex + 1} {common.slug}</div>
            <ItemCommon {...common} itemValueRef={itemValueRef} itemErrRef={itemErrRef} itemIndex={itemIndex}/>
            <ItemTranslations translations={translations} itemValueRef={itemValueRef} itemErrRef={itemErrRef}/>
            <ItemVariants variants={variants} itemValueRef={itemValueRef} itemErrRef={itemErrRef}/>
            <ItemButtons slug={common.slug} itemValueRef={itemValueRef}/>
        </form>
    )
}

const areEqual = (prevProps: ItemFormProps, currentProps: ItemFormProps) => {
    return prevProps.updateTime === currentProps.updateTime
}

export default React.memo(ItemForm, areEqual)

