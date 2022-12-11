import {FC} from 'react'
import Input from 'components/common/input/input.component'
import React from 'react'
import Textarea from 'components/common/textarea/textarea.component'
import {ItemTranslationProps} from 'components/admin/item-form/item-translation/item-translation.types'
import useItemTranslation from 'components/admin/item-form/item-translation/item-translation.hook'

const ItemTranslation: FC<ItemTranslationProps> = (props) => {
    const {locale} = props
    const {transl, inputs, onChange, onValidate} = useItemTranslation(props)

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__subtitle'}>
                {transl[locale]}
            </div>
            <Input
                className={'item-form__input'}
                name={'name'}
                placeholder={`${transl.inputs.name} ${transl[locale]}`}
                value={inputs.values.name}
                onChange={onChange}
                error={inputs.errors.name}
                onValidate={onValidate}
            />
            <Textarea
                className={'item-form__textarea'}
                name={'description'}
                placeholder={`${transl.inputs.description} ${transl[locale]}`}
                value={inputs.values.description}
                onChange={onChange}
                error={inputs.errors.description}
                onValidate={onValidate}
            />
            <Textarea
                className={'item-form__textarea'}
                name={'composition'}
                placeholder={`${transl.inputs.composition} ${transl[locale]}`}
                value={inputs.values.composition}
                onChange={onChange}
                error={inputs.errors.composition}
                onValidate={onValidate}
            />
            <Textarea
                className={'item-form__textarea'}
                name={'parameters'}
                placeholder={`${transl.inputs.parameters} ${transl[locale]}`}
                value={inputs.values.parameters}
                onChange={onChange}
                error={inputs.errors.parameters}
                onValidate={onValidate}
            />
            <Textarea
                className={'item-form__textarea'}
                name={'delivery'}
                placeholder={`${transl.inputs.delivery} ${transl[locale]}`}
                value={inputs.values.delivery}
                onChange={onChange}
                error={inputs.errors.delivery}
                onValidate={onValidate}
            />
        </div>
    )
}

export default ItemTranslation