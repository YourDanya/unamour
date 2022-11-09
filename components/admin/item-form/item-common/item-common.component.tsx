import {FC} from 'react'
import Input from 'components/common/input/input.component'
import React from 'react'
import Checkbox from 'components/common/checkbox/checkbox.component'
import useItemCommon from 'components/admin/item-form/item-common/item-common.hook'
import {ItemCommonProps} from 'components/admin/item-form/item-common/item-common.types'
import RadioButtons from 'components/common/radio-buttons/radio-buttons.component'

const ItemCommon: FC<ItemCommonProps> = (props) => {
    const {transl, inputs, onInputChange, onValidate, categoryTransl, categoryValues} = useItemCommon(props)

    return (
        <>
            <Input
                className={'item-form__input'}
                name={'slug'}
                placeholder={transl.inputs.slug}
                value={inputs.values.slug}
                onChange={onInputChange}
                error={inputs.errors.slug}
                onValidate={onValidate}
            />
            <Input
                className={'item-form__input'}
                name={'oldPrice'}
                placeholder={transl.inputs.oldPrice}
                value={inputs.values.oldPrice}
                onChange={onInputChange}
                error={inputs.errors.oldPrice}
                onValidate={onValidate}
            />
            <Checkbox
                className={`item-form__check`}
                name={'best'}
                label={transl.inputs.best}
                value={inputs.values.best}
                onChange={onInputChange}
            />
            <Checkbox
                className={`item-form__check`}
                name={'special'}
                label={transl.inputs.special}
                value={inputs.values.special}
                onChange={onInputChange}
            />
            <Checkbox
                className={`item-form__check`}
                name={'coming'}
                label={transl.inputs.coming}
                value={inputs.values.coming}
                onChange={onInputChange}
            />
            <RadioButtons
                labels={categoryTransl}
                values={categoryValues}
                onChange={onInputChange}
                active={inputs.values.slugCategory}
                name={'category'}
            />
        </>
    )
}

export default ItemCommon