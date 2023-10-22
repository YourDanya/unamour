import Button from 'app/_common/components/button/button.component'
import {ItemVariantProps} from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.types'
import Checkbox from 'app/_common/components/checkbox/checkbox.component'
import useItemVariant from 'app/[locale]/admin/items/_components/item-form/variants/variant/variant.hook'
import Dropdown from 'app/_common/components/dropdown/dropdown.component'
import RadioButtons from 'app/_common/components/radio-buttons/radio-buttons.component'
import ItemImages
    from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.component'
import {FC} from 'react'
import FormMessage from 'app/_common/components/form-message/form-message.component'
import Input from 'app/_common/components/input/input.component'

const ItemVariant: FC<ItemVariantProps> = (props) => {
    const {variantIndex} = props

    const {
        onInputsChange, onSizesChange, transl, sizeValues, colors, values, errors, onDeleteVariant, sizeError
    } = useItemVariant(props)

    return (
        <div className={'admin-item-form-block admin-item-form-variant form'}>
            <div className={'form__subtitle'}>
                {transl.variant} {variantIndex + 1}
            </div>
            {/*price*/}
            <Input
                className={'form__input'}
                name={'price'}
                type={'number'}
                placeholder={transl.inputs.price}
                value={values.price}
                onChange={onInputsChange}
                error={errors.price}
            />
            {/*color*/}
            <Dropdown className={'form__dropdown'} name={transl.color}>
                <RadioButtons
                    className={'form__radio form__radio--color'}
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
            <Dropdown className={'form__dropdown'} name={transl.sizes}>
                <div>
                    {Object.entries(sizeValues).map(([key, value], index,  arr) => (
                        <Checkbox
                            className={`form__check ${index === arr.length - 1 ? 'form__check--last' : ''}`}
                            key={key}
                            name={key}
                            label={key}
                            value={value}
                            onChange={onSizesChange}
                        />
                    ))}
                    <FormMessage error={sizeError}/>
                </div>
            </Dropdown>
            {/*images*/}
            <Dropdown className={'form__dropdown'} name={transl.images}>
                <ItemImages {...props}/>
            </Dropdown>
            <Button className={'form__button'} onClick={onDeleteVariant} data-value={variantIndex}>
                {transl.delete}
            </Button>
        </div>
    )
}

export default ItemVariant