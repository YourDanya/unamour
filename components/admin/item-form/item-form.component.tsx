import {FC} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import useItemForm from 'components/admin/item-form/item-form.hook'
import React from 'react'
import ItemVariant from 'components/admin/item-form/item-variant/item-variant.component'
import Button from 'components/common/button/button.component'
import ItemCommon from 'components/admin/item-form/item-common/item-common.component'
import ItemTranslations from 'components/admin/item-form/item-translations/item-translations.component'

const ItemForm: FC<FetchedItem> = (props) => {
    const {common: {variants, ...common}, translations} = props
    const {ref, onVariantAdd, onSave, transl} = useItemForm(props)

    return (
        <form>
            <ItemCommon {...common} refObj={ref.current}/>
            <ItemTranslations translations={translations} refObj={ref.current}/>
            {variants.map((elem, index) => (
                <ItemVariant {...elem} refObj={ref.current} key={index}/>
            ))}
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

