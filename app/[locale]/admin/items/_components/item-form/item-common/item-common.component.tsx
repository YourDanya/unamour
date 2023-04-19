import {FC} from 'react'
import {memo} from 'react'
import {ItemCommonProps} from 'app/[locale]/admin/items/_components/item-form/item-common/item-common.types'
import Checkbox from 'app/[locale]/_common/components/checkbox/checkbox.component'
import Dropdown from 'app/[locale]/_common/components/dropdown/dropdown.component'
import RadioButtons from 'app/[locale]/_common/components/radio-buttons/radio-buttons.component'
import useItemCommon from 'app/[locale]/admin/items/_components/item-form/item-common/item-common.hook'
import Input from 'app/[locale]/_common/components/input/input.component'

const ItemCommon: FC<ItemCommonProps> = (props) => {
    const {} = props
    const {transl, values, onChange, categoryTransl, categoryValues, errors} = useItemCommon(props)

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>
                {transl.title}
            </div>
            <Input
                className={'item-form__input'}
                name={'slug'}
                placeholder={transl.inputs.slug}
                value={values.slug}
                onChange={onChange}
                error={errors.slug}
            />
            <Input
                className={'item-form__input'}
                name={'oldPrice'}
                placeholder={transl.inputs.oldPrice}
                value={values.oldPrice}
                onChange={onChange}
                error={errors.oldPrice}
            />
            <Input
                className={'item-form__input'}
                name={'weight'}
                placeholder={transl.inputs.weight}
                value={values.weight.toString()}
                type={'number'}
                onChange={onChange}
                error={errors.weight}
            />
            <Input
                className={'item-form__input'}
                name={'volume'}
                placeholder={transl.inputs.volume}
                value={values.volume}
                type={'number'}
                onChange={onChange}
                error={errors.volume}
            />
            <Checkbox
                className={`item-form__check`}
                name={'best'}
                label={transl.inputs.best}
                value={values.best}
                onChange={onChange}
            />
            <Checkbox
                className={`item-form__check`}
                name={'special'}
                label={transl.inputs.special}
                value={values.special}
                onChange={onChange}
            />
            <Checkbox
                className={`item-form__check`}
                name={'coming'}
                label={transl.inputs.coming}
                value={values.coming}
                onChange={onChange}
            />
            <Dropdown className={'item-form__dropdown'} name={transl.category}>
                <RadioButtons
                    className={'item-form__radio'}
                    labels={categoryTransl}
                    values={categoryValues}
                    onChange={onChange}
                    active={values.slugCategory}
                    name={'slugCategory'}
                />
            </Dropdown>
        </div>
    )
}

export default memo(ItemCommon)