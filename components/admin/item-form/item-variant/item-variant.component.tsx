import RadioButtons from 'components/common/radio-buttons/radio-buttons.component'
import Dropdown from 'components/common/dropdown/dropdown.component'
import Checkbox from 'components/common/checkbox/checkbox.component'
import {FC} from 'react'
import useItemVariant from 'components/admin/item-form/item-variant/item-variant.hook'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import React from 'react'
import {ItemVariantProps} from 'components/admin/item-form/item-variant/item-variant.types'
import FormMessage from 'components/common/form-message/form-message.component'

const ItemVariant: FC<ItemVariantProps> = (props) => {
    const {variantIndex, onDeleteVariant} = props
    const {onInputsChange, onSizesChange, transl, sizeValues, colors, inputs, sizeError, colorError} = useItemVariant(props)

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
                value={inputs.values.price}
                onChange={onInputsChange}
                error={inputs.errors.price}
            />
            {/*color*/}
            <Dropdown className={'item-form__dropdown'} name={transl.color}>
                <RadioButtons
                    className={'item-form__radio item-form__radio--color'}
                    name={'color'}
                    labels={colors.labels}
                    values={colors.values}
                    onChange={onInputsChange}
                    active={inputs.values.color}
                    styles={colors.styles}
                />
                <FormMessage error={inputs.errors.color || colorError}/>
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
                <FormMessage error={sizeError}/>
            </Dropdown>
            {/*images*/}
            {/*</Dropdown>*/}
            <Button className={'item-form__button'} onClick={onDeleteVariant} data-value={variantIndex}>
                {transl.delete}
            </Button>
        </div>
    )
}

export default ItemVariant