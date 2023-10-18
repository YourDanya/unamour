import {FC} from 'react'
import {ItemVariantsProps} from 'app/[locale]/admin/items/_components/item-form/variants/variants.types'
import ItemVariant from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.component'
import Button from 'app/_common/components/button/button.component'
import useItemVariants from 'app/[locale]/admin/items/_components/item-form/variants/variants.hook'

const ItemVariants: FC<ItemVariantsProps> = (props) => {
    const {transl, onAddVariant, variants} = useItemVariants(props)

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            {variants.length > 0 && variants.map((elem, index) => (
                <ItemVariant
                    {...props}
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