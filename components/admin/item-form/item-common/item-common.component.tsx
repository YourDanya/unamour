import {FC} from 'react'
import Input from 'components/common/input/input.component'
import Checkbox from 'components/common/checkbox/checkbox.component'
import RadioButtons from 'components/common/radio-buttons/radio-buttons.component'
import useItemCommon from 'components/admin/item-form/item-common/item-common.hook'
import Dropdown from 'components/common/dropdown/dropdown.component'
import {ItemCommonProps} from 'components/admin/item-form/item-common/item-common.types'

const ItemCommon: FC<ItemCommonProps> = (props) => {
    const {itemIndex} = props
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
            {/*<Button className={'item-form__button'} onClick={(event) => {*/}
            {/*    event.preventDefault()*/}
            {/*    state.setCount(state.count + 1)*/}
            {/*}}>*/}
            {/*    {`count: ${state.count}`}*/}
            {/*</Button>*/}
        </div>
    )
}

export default ItemCommon