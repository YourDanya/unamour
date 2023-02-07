import {FC} from 'react'
import useItemForm from 'components/admin/item-form/item-form.hook'
import React from 'react'
import ItemCommon from 'components/admin/item-form/item-common/item-common.component'
import ItemTranslations from 'components/admin/item-form/item-translations/item-translations.component'
import ItemVariants from 'components/admin/item-form/item-variants/item-variants.component'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'
import ItemButtons from 'components/admin/item-form/item-buttons/item-buttons.component'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {_id, deleted, common: {variants, ...common}, translations, itemIndex, className} = props
    const {itemValueRef, itemErrRef, transl} = useItemForm(props)

    return (
        <form className={`item-form ${className ? className : ''} ${deleted? 'item-form--deleted' : ''}`}>
             {/*{!deleted && (*/}
             {/*    <>*/}
                     <div className={'item-form__title item-form__title--main'}>
                         {transl.item} №{itemIndex + 1} {common.slug}
                     </div>
                     <ItemCommon
                         {...common}
                         itemValueRef={itemValueRef}
                         itemErrRef={itemErrRef}
                         itemIndex={itemIndex}
                         _id={_id}
                     />
                     <ItemTranslations
                         translations={translations}
                         itemValueRef={itemValueRef}
                         itemErrRef={itemErrRef}
                         _id={_id}
                     />
                     <ItemVariants
                         variants={variants}
                         itemValueRef={itemValueRef}
                         itemErrRef={itemErrRef}
                         _id={_id}
                     />
            {/*     </>*/}
            {/*)}*/}
            <ItemButtons itemValueRef={itemValueRef} _id={_id} deleted={deleted}/>
        </form>
    )
}

const areEqual = (prevProps: ItemFormProps, currentProps: ItemFormProps) => {
    return prevProps.updateTime === currentProps.updateTime && prevProps.deleted === currentProps.deleted
}

export default React.memo(ItemForm, areEqual)

