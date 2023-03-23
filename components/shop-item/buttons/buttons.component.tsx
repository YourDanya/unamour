import {FC} from 'react'
import bookmark from 'public/icons/bookmark.svg'
import presentImg from 'public/icons/present.svg'
import useButtons from 'components/shop-item/buttons/buttons.hook'
import {ButtonsProps} from 'components/shop-item/buttons/buttons.types'
import Button from 'components/common/button/button.component'
import FavoriteLike from 'components/common/favorite-like/favorite-like.component'

const Buttons: FC<ButtonsProps> = (props) => {
    const {id, color} = props
    const {
        isCart, onCartEnter, onCartClick, onCartLeave, isPresent, onPresentClick, onPresentLeave, transl, liked
    } = useButtons(props)

    return (
        <div className='shop-item__buttons'>
            <button
                className="shop-item__cart"
                onMouseEnter={onCartEnter}
                onMouseLeave={onCartLeave}
                onClick={onCartClick}
            >
                <div className={`shop-item__cart-text fade ${isCart ? 'fade--show' : ''}`}>
                    {transl.addToCart}
                </div>
                <div className={`shop-item__cart-text fade ${isCart ? '' : 'fade--show'}`}>
                    {transl.selectSize}
                </div>
            </button>
            <FavoriteLike className='shop-item__favorite' liked={liked} id={id} color={color}/>
            <div className="shop-item__present-cover">
                <button
                    className="shop-item__present"
                    onClick={onPresentClick}
                    onMouseLeave={onPresentLeave}
                    name={'present'}
                >
                    <div className={`shop-item__present-label fade ${isPresent ? 'fade--show' : ''}`}>
                        {transl.givePresent}
                    </div>
                    <div className={`shop-item__present-label fade ${isPresent ? '' : 'fade--show'}`}>
                        {transl.selectSize}
                    </div>
                    <img className='shop-item__present-img' src={presentImg.src} alt={'present img'}/>
                </button>
            </div>
        </div>
    )
}

export default Buttons