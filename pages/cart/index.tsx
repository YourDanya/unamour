import React from "react"
import CartItem from "../../components/cart-item/cart-item.component"
import Discount from "../../components/cart/discount/discount.component"
import {NextPage} from "next"
import Order from "../../components/cart/order/order.component"
import useCart from "./cart.hook"
import CartForm from "../../components/cart/cart-form/cart-form.component"

const Cart: NextPage = () => {

    const {cartItems, total, deliveryTypes, formValues, handleFormChange, deliveryActive, handleDeliveryChange,
        discount, handleDiscountChange, save, handleSave} = useCart()

    return (
        <div className='cart'>
            <div className='cart__content'>
                <div className='cart__items'>
                    {cartItems.map((props, index) => <CartItem key={props.data.slug + index}  {...props}/>)}
                </div>
                <Discount handleChange={handleDiscountChange} values={discount}/>
                <CartForm
                    formValues={formValues}
                    handleFormChange={handleFormChange}
                    handleDeliveryChange={handleDeliveryChange}
                    deliveryTypes={deliveryTypes}
                    save={save}
                    handleSave={handleSave}
                    deliveryActive={deliveryActive}
                />
            </div>
            <Order className={'cart__order'} total={total}/>
        </div>
    )
}

export default Cart