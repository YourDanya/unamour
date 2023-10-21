import {FC} from 'react'
import ItemVariant from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.component'
import Button from 'app/_common/components/button/button.component'
import useVariants from 'app/[locale]/admin/items/_components/item-form/variants/variants.hook'
import {VariantsProps} from 'app/[locale]/admin/items/_components/item-form/variants/variants.types'
const Variants: FC<VariantsProps> = (props) => {
    const {transl, onAddVariant, variants} = useVariants(props)

    return (
        <div className={'admin-item-form-block form'}>
            <div className={'form__title'}>{transl.title}</div>
            {variants.length > 0 && variants.map((_, index) => (
                <ItemVariant
                    {...props}
                    key={index}
                    variantIndex={index}
                />
            ))}
            <Button className={'form__button form__button--add'} onClick={onAddVariant}>
                {transl.addVariant}
            </Button>
        </div>
    )
}

export default Variants