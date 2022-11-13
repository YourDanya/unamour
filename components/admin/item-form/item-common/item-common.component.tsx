import {FC} from 'react'
import Input from 'components/common/input/input.component'
import Checkbox from 'components/common/checkbox/checkbox.component'
import RadioButtons from 'components/common/radio-buttons/radio-buttons.component'
import React from 'react'
import useItemCommon from 'components/admin/item-form/item-common/item-common.hook'
import {ItemCommonProps} from 'components/admin/item-form/item-form.types'

const ItemCommon: FC<ItemCommonProps> = (props) => {
    const {transl, inputs, onChange, onValidate, categoryTransl, categoryValues} = useItemCommon(props)

    return (
        <>
            <Input
                className={'item-form__input'}
                name={'slug'}
                placeholder={transl.inputs.slug}
                value={inputs.values.slug}
                onChange={onChange}
                error={inputs.errors.slug}
                onValidate={onValidate}
            />
            <Input
                className={'item-form__input'}
                name={'oldPrice'}
                placeholder={transl.inputs.oldPrice}
                value={inputs.values.oldPrice}
                onChange={onChange}
                error={inputs.errors.oldPrice}
                onValidate={onValidate}
            />
            <Checkbox
                className={`item-form__check`}
                name={'best'}
                label={transl.inputs.best}
                value={inputs.values.best}
                onChange={onChange}
            />
            <Checkbox
                className={`item-form__check`}
                name={'special'}
                label={transl.inputs.special}
                value={inputs.values.special}
                onChange={onChange}
            />
            <Checkbox
                className={`item-form__check`}
                name={'coming'}
                label={transl.inputs.coming}
                value={inputs.values.coming}
                onChange={onChange}
            />
            <RadioButtons
                labels={categoryTransl}
                values={categoryValues}
                onChange={onChange}
                active={inputs.values.slugCategory}
                name={'category'}
            />
        </>
    )
}

export default ItemCommon