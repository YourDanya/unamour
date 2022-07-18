import React from "react";
import Input from "../common/input/input.component";
import RadioButtons from "../common/radio-buttons/radio-buttons.component";
import Checkbox from "../common/checkbox/checkbox.component";

type cartFormProps = {
    formValues: Record<"number" | "name" | "surname" | "street" | "county" | "index" | "city" | "house" | "apartment" | "email", string>,
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    deliveryTypes: { value: string, label: string, node: JSX.Element }[],
    deliveryActive: string,
    handleDeliveryChange: (event: any) => void,
    save: boolean,
    handleSave: (event: any) => void
}

const CartForm: React.FC<cartFormProps> = (props) => {

    const {formValues, handleFormChange, deliveryTypes, handleDeliveryChange, deliveryActive, save, handleSave} = props

    return (
        <form className='cart__form'>
            <div className='cart__title'>ДОСТАВКА</div>
            <Input
                className={'cart__country cart__input'}
                placeholder={'Країна'}
                name={'country'}
                value={formValues.county}
                handleChange={handleFormChange}
            />
            <Input
                className={'cart__city cart__input'}
                placeholder={'Місто'}
                name={'city'}
                value={formValues.house}
                handleChange={handleFormChange}
            />
            <Input
                className={'cart__index cart__input'}
                placeholder={'Індекс'}
                name={'index'}
                value={formValues.index}
                handleChange={handleFormChange}
            />
            <RadioButtons
                className={'cart__delivery'}
                name={'delivery'}
                inputs={deliveryTypes}
                handleChange={handleDeliveryChange}
                active={deliveryActive}
            />
            <Input
                className={'cart__street cart__input'}
                placeholder={'Вулиця'}
                name={'street'}
                value={formValues.street}
                handleChange={handleFormChange}
            />
            <Input
                className={'cart__house cart__input'}
                placeholder={'Дім'}
                name={'house'}
                value={formValues.house}
                handleChange={handleFormChange}
            />
            <Input
                className={'cart__apartment cart__input'}
                placeholder={'Квартира, офіс'}
                name={'apartment'}
                value={formValues.apartment}
                handleChange={handleFormChange}
            />
            <div className='cart__title'>ДАНІ ОДЕРЖУВАЧА</div>
            <Input
                className={'cart__name cart__input'}
                placeholder={'Ім\'я'}
                name={'name'}
                value={formValues.name}
                handleChange={handleFormChange}
            />
            <Input
                className={'cart__surname cart__input'}
                placeholder={'Прізвище'}
                name={'surname'}
                value={formValues.surname}
                handleChange={handleFormChange}
            />
            <Input
                className={'cart__email cart__input'}
                placeholder={'Email'}
                name={'email'}
                value={formValues.email}
                handleChange={handleFormChange}
            />
            <Input
                className={'cart__number cart__input'}
                placeholder={'Номер'}
                name={'number'}
                value={formValues.number}
                handleChange={handleFormChange}
            />
            <Input
                className={'cart__comment cart__input'}
                placeholder={'Коментар'}
                name={'comment'}
                value={formValues.surname}
                handleChange={handleFormChange}
            />
            <Checkbox
                value={save}
                handleChange={handleSave}
                label={'Зберегти інформацію для наступних покупок?'}
                className={'checkbox--cart'}
            />
        </form>
    )
}

export default CartForm