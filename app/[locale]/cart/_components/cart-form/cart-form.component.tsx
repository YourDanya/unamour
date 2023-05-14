import {FC} from 'react'
import Checkbox from 'app/[locale]/_common/components/checkbox/checkbox.component'
import RadioButtons from 'app/[locale]/_common/components/radio-buttons/radio-buttons.component'
import {CartFormProps} from 'app/[locale]/cart/_components/cart-form/cart-form.types'
import Input from 'app/[locale]/_common/components/input/input.component'

const CartForm: FC<CartFormProps> = (props) => {
    const {transl, inputs, onChange, onValidate, content} = props

    return (
        <form className="cart-form__form">
            <div className="cart-form__title">{transl.delivery}</div>
            <Input
                className={'cart-form__input cart-form__country'}
                name={'country'}
                placeholder={transl.inputs.country}
                value={inputs.values.country}
                onChange={onChange}
                error={inputs.errors.country}
                onValidate={onValidate}
            />
            <Input
                className={'cart-form__input cart-form__region'}
                name={'region'}
                placeholder={transl.inputs.region}
                value={inputs.values.region}
                onChange={onChange}
                error={inputs.errors.region}
                onValidate={onValidate}
            />
            <RadioButtons
                className={'cart-form__settlementType'}
                title={transl.inputs.settlementType.title}
                name={'settlementType'}
                labels={transl.inputs.settlementType.labels}
                values={content.inputs.settlementType.values}
                onChange={onChange}
                active={inputs.values.settlementType}
            />
            <RadioButtons
                className={'cart-form__paymentType'}
                title={transl.inputs.paymentType.title}
                name={'paymentType'}
                labels={transl.inputs.paymentType.labels}
                values={content.inputs.paymentType.values}
                onChange={onChange}
                active={inputs.values.paymentType}
            />
            <RadioButtons
                className={'cart-form__serviceType'}
                title={transl.inputs.serviceType.title}
                name={'serviceType'}
                labels={transl.inputs.serviceType.labels}
                values={content.inputs.serviceType.values}
                onChange={onChange}
                active={inputs.values.serviceType}
            />
            <Input
                className={`cart-form__input cart-form__city ${inputs.values.serviceType === 'DoorsWarehouse' ?
                    'cart-form__city--office' : ''}`}
                name={'city'}
                placeholder={transl.inputs.city}
                value={inputs.values.city}
                onChange={onChange}
                error={inputs.errors.city}
                onValidate={onValidate}
            />
            {inputs.values.serviceType === 'DoorsDoors' ? (
                <>
                    <Input
                        className={'cart-form__input cart-form__street'}
                        placeholder={transl.inputs.street}
                        name={'street'}
                        value={inputs.values.street}
                        onChange={onChange}
                        error={inputs.errors.street}
                        onValidate={onValidate}
                    />
                    <Input
                        className={'cart-form__input cart-form__house'}
                        placeholder={transl.inputs.house}
                        name={'house'}
                        value={inputs.values.house}
                        onChange={onChange}
                        error={inputs.errors.house}
                        onValidate={onValidate}
                    />
                    <Input
                        className={'cart-form__input cart-form__apartment'}
                        placeholder={transl.inputs.apartment}
                        name={'apartment'}
                        value={inputs.values.apartment}
                        onChange={onChange}
                        error={inputs.errors.apartment}
                        onValidate={onValidate}
                    />
                </>
            ) : (
                <Input
                    className={'cart-form__input cart-form__office'}
                    placeholder={transl.inputs.office}
                    name={'office'}
                    value={inputs.values.office}
                    onChange={onChange}
                    error={inputs.errors.office}
                    onValidate={onValidate}
                />
            )}
            <div className="cart-form__title">{transl.receiverData}</div>
            <Input
                className={'cart-form__input cart-form__name'}
                placeholder={transl.inputs.name}
                name={'name'}
                value={inputs.values.name}
                onChange={onChange}
                error={inputs.errors.name}
                onValidate={onValidate}
            />
            <Input
                className={'cart-form__input cart-form__surname'}
                placeholder={transl.inputs.surname}
                name={'surname'}
                value={inputs.values.surname}
                onChange={onChange}
                error={inputs.errors.surname}
                onValidate={onValidate}
            />
            <Input
                className={'cart-form__input cart-form__email'}
                placeholder={transl.inputs.email}
                name={'email'}
                value={inputs.values.email}
                onChange={onChange}
                error={inputs.errors.email}
                onValidate={onValidate}
            />
            <Input
                className={'cart-form__input cart-form__number'}
                placeholder={transl.inputs.number}
                name={'number'}
                value={inputs.values.number}
                onChange={onChange}
                error={inputs.errors.number}
                onValidate={onValidate}
            />
            <Input
                className={'cart-form__input cart-form__comment'}
                placeholder={transl.inputs.comment}
                name={'comment'}
                value={inputs.values.comment}
                onChange={onChange}
                error={inputs.errors.comment}
                onValidate={onValidate}
            />
            <Checkbox
                className={'cart-form__checkbox'}
                label={transl.inputs.save}
                name={'save'}
                value={inputs.values.save}
                onChange={onChange}
            />
        </form>
    )
}

export default CartForm