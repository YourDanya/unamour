import {FC} from 'react'
import useCartForm from 'components/cart/cart-form/cart-form.hook'
import Input from 'components/common/input/input.component'
import {CartFormProps} from 'components/cart/cart-form/cart-form.types'

const CartForm: FC<CartFormProps> = (props) => {
    const {transl, inputs, onChange, onValidate, onSubmit} = useCartForm()

    return (
        <form className="cart__form">
            <div className="cart__title">{transl.delivery}</div>
            <Input
                className={'cart__input cart__country'}
                name={'country'}
                placeholder={transl.inputs.country}
                value={inputs.values.country}
                onChange={onChange}
                error={inputs.errors.country}
                onValidate={onValidate}
            />
            <Input
                className={'cart__city cart__input'}
                name={'city'}
                placeholder={transl.inputs.city}
                value={inputs.values.city}
                onChange={onChange}
                error={inputs.errors.city}
                onValidate={onValidate}
            />
            <div className="cart__index-wrapper">
                <Input
                    className={'cart__input cart__index'}
                    name={'index'}
                    placeholder={transl.inputs.index}
                    value={inputs.values.index}
                    onChange={onChange}
                    error={inputs.errors.index}
                    onValidate={onValidate}
                />
                {!inputs.values.index && !inputs.errors.index && (
                    <div className="cart__index-label">
                        {transl.indexLabel}
                    </div>
                )}
            </div>
            {/*<RadioButtons*/}
            {/*    className={'cart__delivery'}*/}
            {/*    name={'delivery'}*/}
            {/*    inputs={deliveryTypes}*/}
            {/*    onChange={onChange}*/}
            {/*    active={deliveryActive}*/}
            {/*/>*/}
            <Input
                className={'cart__input cart__street'}
                placeholder={transl.inputs.street}
                name={'street'}
                value={inputs.values.street}
                onChange={onChange}
                error={inputs.errors.street}
                onValidate={onValidate}
            />
            <Input
                className={'cart__input cart__house'}
                placeholder={transl.inputs.house}
                name={'house'}
                value={inputs.values.house}
                onChange={onChange}
                error={inputs.errors.house}
                onValidate={onValidate}
            />
            <Input
                className={'cart__input cart__apartment'}
                placeholder={transl.inputs.apartment}
                name={'apartment'}
                value={inputs.values.apartment}
                onChange={onChange}
                error={inputs.errors.apartment}
                onValidate={onValidate}
            />
            <div className="cart__title">{transl.receiverData}</div>
            <Input
                className={'cart__input cart__name'}
                placeholder={transl.inputs.name}
                name={'name'}
                value={inputs.values.name}
                onChange={onChange}
                error={inputs.errors.name}
                onValidate={onValidate}
            />
            <Input
                className={'cart__input cart__surname'}
                placeholder={transl.inputs.surname}
                name={'surname'}
                value={inputs.values.surname}
                onChange={onChange}
                error={inputs.errors.surname}
                onValidate={onValidate}
            />
            <Input
                className={'cart__input cart__email'}
                placeholder={transl.inputs.email}
                name={'email'}
                value={inputs.values.email}
                onChange={onChange}
                error={inputs.errors.email}
                onValidate={onValidate}
            />
            <Input
                className={'cart__input cart__number'}
                placeholder={transl.inputs.number}
                name={'number'}
                value={inputs.values.number}
                onChange={onChange}
                error={inputs.errors.number}
                onValidate={onValidate}
            />
            <Input
                className={'cart__input cart__comment'}
                placeholder={transl.inputs.comment}
                name={'comment'}
                value={inputs.values.comment}
                onChange={onChange}
                error={inputs.errors.comment}
                onValidate={onValidate}
            />
            {/*<Checkbox*/}
            {/*    value={save}*/}
            {/*    onChange={handleSave}*/}
            {/*    label={'Зберегти інформацію для наступних покупок?'}*/}
            {/*    className={'checkbox--cart'}*/}
            {/*/>*/}
        </form>
    )
}

export default CartForm