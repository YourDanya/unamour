import {FC} from 'react'
import useItemForm from 'components/admin/item-form/item-form.hook'
import React from 'react'
import Button from 'components/common/button/button.component'
import ItemCommon from 'components/admin/item-form/item-common/item-common.component'
import ItemTranslations from 'components/admin/item-form/item-translations/item-translations.component'
import ItemVariants from 'components/admin/item-form/item-variants/item-variants.component'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {common: {variants, ...common}, translations} = props
    const {ref, onVariantAdd, onSave, transl} = useItemForm(props)

    return (
        <form className={'item-form'}>
            <ItemCommon {...common} refObj={ref.current}/>
            <ItemTranslations translations={translations} refObj={ref.current}/>
            <ItemVariants variants={variants} refObj={ref.current}/>
            <div className={'item-form__buttons'}>
                <Button className={'item-form__button'} onClick={onVariantAdd}>
                    {transl.addVariant}
                </Button>
                <Button className={'item-form__button'} onClick={onSave}>
                    {transl.save}
                </Button>
            </div>
        </form>
    )
}

export default ItemForm

