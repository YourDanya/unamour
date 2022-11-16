import {FC} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import useItemForm from 'components/admin/item-form/item-form.hook'
import React from 'react'
import Button from 'components/common/button/button.component'
import ItemCommon from 'components/admin/item-form/item-common/item-common.component'
import ItemTranslations from 'components/admin/item-form/item-translations/item-translations.component'
import ItemVariants from 'components/admin/item-form/item-variants/item-variants.component'

const ItemForm: FC<FetchedItem> = (props) => {
    const {common: {variants, ...common}, translations} = props
    const {ref, onVariantAdd, onSave, transl} = useItemForm(props)

    return (
        <form>
            <ItemCommon {...common} refObj={ref.current}/>
            <ItemTranslations translations={translations} refObj={ref.current}/>
            <ItemVariants variants={variants} refObj={ref.current}/>
            <Button onClick={onVariantAdd}>
                {transl.addVariant}
            </Button>

            <Button onClick={onSave}>
                {transl.save}
            </Button>
        </form>
    )
}

export default ItemForm

