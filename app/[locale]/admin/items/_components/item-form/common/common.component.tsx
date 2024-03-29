import {FC} from 'react'
import Checkbox from 'app/_common/components/checkbox/checkbox.component'
import Dropdown from 'app/_common/components/dropdown/dropdown.component'
import RadioButtons from 'app/_common/components/radio-buttons/radio-buttons.component'
import useItemCommon from 'app/[locale]/admin/items/_components/item-form/common/common.hook'
import Input from 'app/_common/components/input/input.component'
import {clothing} from 'app/_common/content/categories/categories.content'
import {CommonProps} from 'app/[locale]/admin/items/_components/item-form/common/common.types'

const Common: FC<CommonProps> = (props) => {
    const {transl, values, onChange, categoryTransl, errors} = useItemCommon(props)

    return (
        <div className={'admin-item-form-block form'}>
            <div className={'form__title'}>
                {transl.title}
            </div>
            <Input
                className={'form__input'}
                name={'slug'}
                placeholder={transl.inputs.slug}
                value={values.slug}
                onChange={onChange}
                error={errors.slug}
            />
            <Input
                className={'form__input'}
                name={'oldPrice'}
                type={'number'}
                placeholder={transl.inputs.oldPrice}
                value={values.oldPrice}
                onChange={onChange}
                error={errors.oldPrice}
            />
            <Input
                className={'form__input'}
                name={'weight'}
                placeholder={transl.inputs.weight}
                value={values.weight.toString()}
                type={'number'}
                onChange={onChange}
                error={errors.weight}
            />
            <Input
                className={'form__input'}
                name={'volume'}
                placeholder={transl.inputs.volume}
                value={values.volume}
                type={'number'}
                onChange={onChange}
                error={errors.volume}
            />
            <Checkbox
                className={`form__check`}
                name={'best'}
                label={transl.inputs.best}
                value={values.best}
                onChange={onChange}
            />
            <Checkbox
                className={`form__check`}
                name={'special'}
                label={transl.inputs.special}
                value={values.special}
                onChange={onChange}
            />
            <Checkbox
                className={`form__check`}
                name={'coming'}
                label={transl.inputs.coming}
                value={values.coming}
                onChange={onChange}
            />
            <Dropdown className={'form__dropdown'} name={transl.category}>
                <RadioButtons
                    className={'form__radio'}
                    labels={categoryTransl}
                    values={clothing}
                    onChange={onChange}
                    active={values.slugCategory}
                    name={'slugCategory'}
                />
            </Dropdown>
        </div>
    )
}

export default Common