import React from 'react'
import useCartForm from 'components/cart/cart-form/cart-form.hook'
import Input from 'components/common/input/input.component'

type CartFormProps = {}

const CartForm: React.FC<CartFormProps> = (props) => {

    const {transl, inputs, handleChange, handleValidate, handleSubmit} = useCartForm()

    return (
        <form className='cart__form'>
            <div className='cart__title'>{transl.delivery}</div>
            <Input
                className={'cart__input cart__country'}
                name={'country'}
                placeholder={transl.inputs.country}
                value={inputs.values.country}
                handleChange={handleChange}
                error={inputs.errors.country}
                handleValidate={handleValidate}
            />
            <Input
                className={'cart__city cart__input'}
                name={'city'}
                placeholder={transl.inputs.city}
                value={inputs.values.city}
                handleChange={handleChange}
                error={inputs.errors.city}
                handleValidate={handleValidate}
            />
            <Input
                className={'cart__input cart__index'}
                name={'index'}
                placeholder={transl.inputs.index}
                value={inputs.values.index}
                handleChange={handleChange}
                error={inputs.errors.index}
                handleValidate={handleValidate}
            />
            {/*<RadioButtons*/}
            {/*    className={'cart__delivery'}*/}
            {/*    name={'delivery'}*/}
            {/*    inputs={deliveryTypes}*/}
            {/*    handleChange={handleChange}*/}
            {/*    active={deliveryActive}*/}
            {/*/>*/}
            <Input
                className={'cart__input cart__street'}
                placeholder={transl.inputs.street}
                name={'street'}
                value={inputs.values.street}
                handleChange={handleChange}
                error={inputs.errors.street}
                handleValidate={handleValidate}
            />
            <Input
                className={'cart__input cart__house'}
                placeholder={transl.inputs.house}
                name={'house'}
                value={inputs.values.house}
                handleChange={handleChange}
                error={inputs.errors.house}
                handleValidate={handleValidate}
            />
            <Input
                className={'cart__input cart__apartment'}
                placeholder={transl.inputs.apartment}
                name={'apartment'}
                value={inputs.values.apartment}
                handleChange={handleChange}
                error={inputs.errors.apartment}
                handleValidate={handleValidate}
            />
            <div className='cart__title'>{transl.receiverData}</div>
            <Input
                className={'cart__input cart__name'}
                placeholder={transl.inputs.name}
                name={'name'}
                value={inputs.values.name}
                handleChange={handleChange}
                error={inputs.errors.name}
                handleValidate={handleValidate}
            />
            <Input
                className={'cart__input cart__surname'}
                placeholder={transl.inputs.surname}
                name={'surname'}
                value={inputs.values.surname}
                handleChange={handleChange}
                error={inputs.errors.surname}
                handleValidate={handleValidate}
            />
            <Input
                className={'cart__input cart__email'}
                placeholder={transl.inputs.email}
                name={'email'}
                value={inputs.values.email}
                handleChange={handleChange}
                error={inputs.errors.email}
                handleValidate={handleValidate}
            />
            <Input
                className={'cart__input cart__number'}
                placeholder={transl.inputs.number}
                name={'number'}
                value={inputs.values.number}
                handleChange={handleChange}
                error={inputs.errors.number}
                handleValidate={handleValidate}
            />
            <Input
                className={'cart__input cart__comment'}
                placeholder={transl.inputs.comment}
                name={'comment'}
                value={inputs.values.comment}
                handleChange={handleChange}
                error={inputs.errors.comment}
                handleValidate={handleValidate}
            />
            {/*<Checkbox*/}
            {/*    value={save}*/}
            {/*    handleChange={handleSave}*/}
            {/*    label={'Зберегти інформацію для наступних покупок?'}*/}
            {/*    className={'checkbox--cart'}*/}
            {/*/>*/}
        </form>
    )
}

export default CartForm