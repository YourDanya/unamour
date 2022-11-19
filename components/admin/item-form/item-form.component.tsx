import {FC} from 'react'
import useItemForm from 'components/admin/item-form/item-form.hook'
import React from 'react'
import Button from 'components/common/button/button.component'
import ItemCommon from 'components/admin/item-form/item-common/item-common.component'
import ItemTranslations from 'components/admin/item-form/item-translations/item-translations.component'
import ItemVariants from 'components/admin/item-form/item-variants/item-variants.component'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {common: {variants, ...common}, translations, itemIndex} = props
    const {ref, onVariantAdd, onSave, transl} = useItemForm(props)

    // if (itemIndex === 0) console.log('rendering first', new Date().getSeconds())
    // if (itemIndex === 275) console.log('rendering last', new Date().getSeconds())

    console.log('rendering item form')

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

