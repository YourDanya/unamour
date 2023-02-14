import {FC, memo} from 'react'
import {ItemVariantsProps} from 'components/admin/item-form/item-variants/item-variants.types'
import ItemVariant from 'components/admin/item-form/item-variant/item-variant.component'
import useItemVariants from 'components/admin/item-form/item-variants/item-variants.hook'
import Button from 'components/common/button/button.component'

const ItemVariants: FC<ItemVariantsProps> = (props) => {
    const {variants: _, ...otherProps} = props
    const {transl, variants, onDeleteVariant, onAddVariant} = useItemVariants(props)

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            {variants.length > 0 && variants.map((elem, index) => (
                <ItemVariant
                    key={elem.color}
                    {...elem}
                    {...otherProps}
                    variantIndex={index}
                    onDeleteVariant={onDeleteVariant}
                />
            ))}
            <Button className={'item-form__button item-form__button--add'} onClick={onAddVariant}>
                {transl.addVariant}
            </Button>
        </div>
    )
}

export default memo(ItemVariants)