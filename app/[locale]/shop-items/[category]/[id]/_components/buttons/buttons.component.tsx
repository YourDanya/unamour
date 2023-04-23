import {FC} from 'react'
import presentImg from 'public/icons/present.svg'
import FavoriteLike from 'app/[locale]/_common/components/favorite-like/favorite-like.component'
import {ButtonsProps} from 'app/[locale]/shop-items/[category]/[id]/_components/buttons/buttons.types'
import useButtons from 'app/[locale]/shop-items/[category]/[id]/_components/buttons/buttons.hook'
import 'app/[locale]/shop-items/[category]/[id]/_components/buttons/buttons.styles.sass'

const Buttons: FC<ButtonsProps> = (props) => {
    const {id, color} = props
    const {
        isCart, onCartEnter, onCartClick, onCartLeave, isPresent, onPresentClick, onPresentLeave, transl, liked,
        onFavoriteLike
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