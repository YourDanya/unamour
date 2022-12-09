import {FC} from 'react'
import Input from 'components/common/input/input.component'
import Checkbox from 'components/common/checkbox/checkbox.component'
import RadioButtons from 'components/common/radio-buttons/radio-buttons.component'
import React from 'react'
import useItemCommon from 'components/admin/item-form/item-common/item-common.hook'
import {ItemCommonProps} from 'components/admin/item-form/item-common/item-common.types'
import Dropdown from 'components/common/dropdown/dropdown.component'

const ItemCommon: FC<ItemCommonProps> = (props) => {
    const {transl, inputs, onChange, categoryTransl, categoryValues} = useItemCommon(props)

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>
                {transl.title}
            </div>
            <Input
                className={'item-form__input'}
                name={'slug'}
                placeholder={transl.inputs.slug}
                value={inputs.values.slug}
                onChange={onChange}
                error={inputs.errors.slug}
            />
            <Input
                className={'item-form__input'}
                name={'oldPrice'}
                placeholder={transl.inputs.oldPrice}
                value={inputs.values.oldPrice}
                onChange={onChange}
                error={inputs.errors.oldPrice}
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
            <Dropdown className={'item-form__dropdown'} name={transl.category}>
                <RadioButtons
                    className={'item-form__radio'}
                    labels={categoryTransl}
                    values={categoryValues}
                    onChange={onChange}
                    active={inputs.values.slugCategory}
                    name={'slugCategory'}
                />
            </Dropdown>
        </div>
    )
}

export default ItemCommon