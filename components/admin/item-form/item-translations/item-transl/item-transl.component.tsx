import {FC} from 'react'
import Input from 'components/common/input/input.component'
import React from 'react'
import useItemTransl from 'components/admin/item-form/item-translations/item-transl/item-transl.hook'
import {ItemTranslProps} from 'components/admin/item-form/item-translations/item-transl/item-transl.types'

const ItemTransl: FC<ItemTranslProps> = (props) => {
    const {transl, inputs, onChange, onValidate} = useItemTransl(props)
    
    return (
        <>
            <Input
                className={'item-form__input'}
                name={'name'}
                placeholder={`${transl.inputs.name}${transl.locale}`}
                value={inputs.values.name}
                onChange={onChange}
                error={inputs.errors.name}
                onValidate={onValidate}
            />
            <Input
                className={'item-form__input'}
                name={'category'}
                placeholder={`${transl.inputs.category}${transl.locale}`}
                value={inputs.values.category}
                onChange={onChange}
                error={inputs.errors.category}
                onValidate={onValidate}
            />
            <Input
                className={'item-form__input'}
                name={'currency'}
                placeholder={`${transl.inputs.currency}${transl.locale}`}
                value={inputs.values.currency}
                onChange={onChange}
                error={inputs.errors.currency}
                onValidate={onValidate}
            />
            <Input
                className={'item-form__input'}
                name={'description'}
                placeholder={`${transl.inputs.description}${transl.locale}`}
                value={inputs.values.description}
                onChange={onChange}
                error={inputs.errors.description}
                onValidate={onValidate}
            />
            <Input
                className={'item-form__input'}
                name={'composition'}
                placeholder={`${transl.inputs.composition}${transl.locale}`}
                value={inputs.values.composition}
                onChange={onChange}
                error={inputs.errors.composition}
                onValidate={onValidate}
            />
            <Input
                className={'item-form__input'}
                name={'parameters'}
                placeholder={`${transl.inputs.parameters}${transl.locale}`}
                value={inputs.values.parameters}
                onChange={onChange}
                error={inputs.errors.parameters}
                onValidate={onValidate}
            />
            <Input
                className={'item-form__input'}
                name={'delivery'}
                placeholder={`${transl.inputs.delivery}${transl.locale}`}
                value={inputs.values.delivery}
                onChange={onChange}
                error={inputs.errors.delivery}
                onValidate={onValidate}
            />
        </>
    )
}

export default ItemTransl