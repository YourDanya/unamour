'use client'

import {FC} from 'react'
import useItemForm from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import Common from 'app/[locale]/admin/items/_components/item-form/common/common.component'
import Translations from 'app/[locale]/admin/items/_components/item-form/translations/translations.component'
import {FormValue} from 'app/[locale]/admin/items/_components/admin-items.types'

const ItemForm: FC<FormValue> = (props) => {
    const {itemIndex} = props
    const state = useItemForm(props)
    const {transl} = state

    return (
        <form className={`admin-items-item-form item-form ${false ? 'item-form--deleted' : ''}`}>
            <div className={'item-form__title item-form__title--main'}>
                {transl.item} №{itemIndex + 1}
            </div>
            <Common {...state}/>
            <Translations {...state}/>
            {/*<ItemVariants/>*/}
            {/*<ItemActions deleted={false}/>*/}
        </form>
    )
}
export default ItemForm

