import {FC} from 'react'
import presentImg from 'public/icons/present.svg'
import FavoriteLike from 'app/[locale]/_common/components/favorite-like/favorite-like.component'
import {ButtonsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/buttons/buttons.types'
import useButtons from 'app/[locale]/shop-items/[category]/[item]/_components/buttons/buttons.hook'

const Buttons: FC<ButtonsProps> = (props) => {
    const {
        isCart, onCartEnter, onCartClick, onCartLeave, isPresent, onPresentClick, onPresentLeave, transl, liked,
        onFavoriteLike, id, color
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
            <div onClickCapture={onFavoriteLike}>
                <FavoriteLike className='shop-item__favorite' liked={liked} id={id} color={color}/>
            </div>
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