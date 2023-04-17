import {FC} from 'react'
import {ItemVariantsProps} from 'components/admin/items/item-form/item-variants/item-variants.types'
import useItemVariants from 'components/admin/items/item-form/item-variants/item-variants.hook'
import Button from 'components/common/button/button.component'
import ItemVariant from 'components/admin/items/item-form/item-variants/item-variant/item-variant.component'

const ItemVariants: FC<ItemVariantsProps> = () => {
    const {transl, variants, onAddVariant} = useItemVariants()

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            {variants.length > 0 && variants.map((elem, index) => (
                <ItemVariant
                    key={index}
                    variantIndex={index}
                />
            ))}
            <Button className={'item-form__button item-form__button--add'} onClick={onAddVariant}>
                {transl.addVariant}
            </Button>
        </div>
    )
}

export default ItemVariants