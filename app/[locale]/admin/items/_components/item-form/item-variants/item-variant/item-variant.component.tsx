import Button from 'app/[locale]/_common/components/button/button.component'
import {ItemVariantProps} from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-variant.types'
import Checkbox from 'app/[locale]/_common/components/checkbox/checkbox.component'
import useItemVariant from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-variant.hook'
import Dropdown from 'app/[locale]/_common/components/dropdown/dropdown.component'
import RadioButtons from 'app/[locale]/_common/components/radio-buttons/radio-buttons.component'
import ItemImages
    from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-images/item-images.component'
import {FC} from 'react'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Input from 'app/[locale]/_common/components/input/input.component'

const ItemVariant: FC<ItemVariantProps> = (props) => {
    const {variantIndex} = props
    const {
        onInputsChange, onSizesChange, transl, sizeValues, colors, values, errors, onDeleteVariant
    } = useItemVariant(props)

    return (
        <div className={'item-form__variant'}>
            <div className={'item-form__subtitle'}>
                {transl.variant} {variantIndex + 1}
            </div>
            {/*price*/}
            <Input
                className={'item-form__input'}
                name={'price'}
                placeholder={transl.inputs.price}
                value={values.price}
                onChange={onInputsChange}
                error={errors.price}
            />
            {/*color*/}
            <Dropdown className={'item-form__dropdown'} name={transl.color}>
                <RadioButtons
                    className={'item-form__radio item-form__radio--color'}
                    name={'color'}
                    labels={colors.labels}
                    values={colors.values}
                    onChange={onInputsChange}
                    active={values.color}
                    styles={colors.styles}
                    error={errors.color}
                />
            </Dropdown>
            {/*sizes*/}
            <Dropdown className={'item-form__dropdown'} name={transl.sizes}>
                {Object.entries(sizeValues).map(([key, value], index,  arr) => (
                    <Checkbox
                        className={`item-form__check ${index === arr.length - 1 ? 'item-form__check--last' : ''}`}
                        key={key}
                        name={key}
                        label={key}
                        value={value}
                        onChange={onSizesChange}
                    />
                ))}
                <FormMessage error={errors.size}/>
            </Dropdown>
            {/*images*/}
            <Dropdown className={'item-form__dropdown item-form__dropdown--images'} name={transl.images}>
                <ItemImages variantIndex={variantIndex}/>
            </Dropdown>
            <Button className={'item-form__button'} onClick={onDeleteVariant} data-value={variantIndex}>
                {transl.delete}
            </Button>
        </div>
    )
}

export default ItemVariant