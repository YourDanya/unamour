import React from "react"
import bookmark from '/public/icons/bookmark.svg'
import presentImg from '/public/icons/present.svg'
import useButtons from "./buttons.hook"

export type buttonsProps = {
    activeSize: string | null,
    showModal: (event: React.MouseEvent<HTMLElement>) => void
}

const Buttons: React.FC<buttonsProps> = (props) => {

    const {
        handleCartMouseEnter, handleCartClick, handlePresentClick, handlePresentMouseLeave, handleCartMouseLeave,
        cart, present
    } = useButtons(props)

    return (
        <div className={'shop-item__buttons'}>
            <button
                className="shop-item__checkout-button"
                onMouseEnter={handleCartMouseEnter}
                onMouseLeave={handleCartMouseLeave}
                onClick={handleCartClick}
            >
                <div className={`shop-item__checkout-button-text fade ${cart ? 'fade--show' : ''}`}>
                    ДОДАТИ ДО КОРЗИНИ
                </div>
                <div className={`shop-item__checkout-button-text fade ${cart ? '' : 'fade--show'}`}>
                    ОБЕРІТЬ РОЗМІР
                </div>
            </button>
            <button className="shop-item__favorite-button">
                <img src={bookmark.src} className={'shop-item__favorite-img'} alt={'shop-item'}/>
            </button>
            <div className="shop-item__present-cover">
                <button
                    className="shop-item__present"
                    onClick={handlePresentClick}
                    onMouseLeave={handlePresentMouseLeave}
                >
                    <div className={`shop-item__present-label fade ${present ? 'fade--show' : ''}`}>
                        ПОДАРУВАТИ
                    </div>
                    <div className={`shop-item__present-label fade ${present ? '' : 'fade--show'}`}>
                        ОБЕРІТЬ РОЗМІР
                    </div>
                    <img className='shop-item__present-img' src={presentImg.src} alt={'present img'}/>
                </button>
            </div>
        </div>
    )
}

export default Buttons