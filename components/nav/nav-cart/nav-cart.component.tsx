import {FC} from 'react'
import shoppingCart from '/public/icons/big-shopping-cart.svg'
import CartItem from 'components/cart-item/cart-item.component'
import useNavCart from 'components/nav/nav-cart/nav-cart.hook'
import NavLink from 'components/common/nav-link/nav-link.component'
import {NavCartProps} from 'components/nav/nav-cart/nav-cart.types'
import Button from 'components/common/button/button.component'

const NavCart: FC<NavCartProps> = (props) => {
    const {hideModal} = props
    const {cartItems, total, length, transl} = useNavCart(props)

    return (
        <div className={`nav-cart`}>
            {length > 0 ? (
                <>
                    <div className="nav-cart__title">{transl.cart}</div>
                    <div className={'nav-cart__items'}>
                        {cartItems.map((props) => (
                            <CartItem key={props.common._id} {...props}/>
                        ))}
                    </div>
                    <div className="nav-cart__total">
                        <div className="nav-cart__total-label">{transl.total}</div>
                        <div className="nav-cart__total-price">{total} {transl.currency}</div>
                    </div>
                </>
            ) : (
                <>
                    <img className="nav-cart__icon" src={shoppingCart.src} alt={'nav-components-icon'}/>
                    <div className={'nav-cart__empty'}>
                        {transl.empty}
                    </div>
                </>
            )}
            <NavLink className="nav-cart__button nav-cart__link" href={length > 0 ? '/components' : '/favorite'}>
                {length > 0 ? transl.order : transl.favorite}
            </NavLink>
            <Button className={'nav-cart__button nav-cart__button--white'} onClick={hideModal}>
                {transl.continue}
            </Button>
        </div>
    )
}

export default NavCart