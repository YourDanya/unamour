'use client'

import {FC} from 'react'
import ItemVariants from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variants.component'
import useItemForm from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import ItemCommon from 'app/[locale]/admin/items/_components/item-form/item-common/item-common.component'
import ItemTranslations
    from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translations.component'
import ItemActions from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.component'
import {FormValue} from 'app/[locale]/admin/items/_components/admin-items.types'

const ItemForm: FC<FormValue> = (props) => {
    const {itemIndex} = props
    const {transl} = useItemForm(props)

    return (
        <form className={`admin-items-item-form item-form ${false ? 'item-form--deleted' : ''}`}>
            <div className={'item-form__title item-form__title--main'}>
                {transl.item} №{itemIndex + 1}
            </div>
            <ItemCommon {...props}/>
            {/*<ItemTranslations/>*/}
            {/*<ItemVariants/>*/}
            {/*<ItemActions deleted={false}/>*/}
        </form>
    )
}
export default ItemForm

