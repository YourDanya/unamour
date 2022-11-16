import {FC} from 'react'
import React from 'react'
import {ItemVariantsProps} from 'components/admin/item-form/item-variants/item-variants.types'
import ItemVariant from 'components/admin/item-form/item-variant/item-variant.component'
import useItemVariants from 'components/admin/item-form/item-variants/item-variants.hook'

const ItemVariants: FC<ItemVariantsProps> = (props) => {
    const {variants, refObj} = props
    const {transl} = useItemVariants()

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            {variants.map((elem, index) => (
                <ItemVariant {...elem} refObj={refObj} key={index}/>
            ))}
        </div>
    )
}

export default ItemVariants