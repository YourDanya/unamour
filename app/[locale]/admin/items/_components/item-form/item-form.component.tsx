'use client'

import {memo} from 'react'
import {FC} from 'react'
import ItemVariants from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variants.component'
import useItemForm from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import ItemCommon from 'app/[locale]/admin/items/_components/item-form/item-common/item-common.component'
import ItemTranslations from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translations.component'
import ItemActions from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.component'
import {ItemFormProps} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ItemFormContext} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import 'app/[locale]/admin/items/_components/item-form/item-form.styles.sass'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {className} = props
    const {transl, storeRef, itemIndex, deleted} = useItemForm(props)
    
    return (
        <ItemFormContext.Provider value={storeRef.current}>
            <form className={`item-form ${className ? className : ''} ${deleted ? 'item-form--deleted' : ''}`}>
                <div className={'item-form__title item-form__title--main'}>
                    {transl.item} №{itemIndex + 1}
                </div>
                <ItemCommon/>
                <ItemTranslations/>
                <ItemVariants/>
                <ItemActions deleted={deleted}/>
            </form>
        </ItemFormContext.Provider>
    )
}

// const areEqual = (prevProps: ItemFormProps, currentProps: ItemFormProps) => {
//     return prevProps.data.updateTime === currentProps.data.updateTime &&
//         prevProps.data.deleted === currentProps.data.deleted
// }

export default memo(ItemForm)

