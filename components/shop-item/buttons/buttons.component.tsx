import React from "react"
import bookmark from '/public/icons/bookmark.svg'
import presentImg from '/public/icons/present.svg'

type buttonsProps = {
    handleCheckoutButtonMouseEnter: (event: React.MouseEvent) => void,
    handleCheckoutButtonMouseLeave: (event: React.MouseEvent) => void,
    handleCartClick: (event: React.MouseEvent) => void,
    checkout: boolean,
    handlePresentClick: (event: React.MouseEvent) => void,
    handlePresentMouseLeave: (event: React.MouseEvent) => void,
    presentLabel: boolean
}

const Buttons: React.FC<buttonsProps> = (props) => {
    const {handleCheckoutButtonMouseEnter, handleCartClick, handlePresentClick, handlePresentMouseLeave,
        handleCheckoutButtonMouseLeave, checkout, presentLabel} = props

    return (
        <div className={'shop-item__buttons'}>
            <button
                className="shop-item__checkout-button"
                onMouseEnter={handleCheckoutButtonMouseEnter}
                onMouseLeave={handleCheckoutButtonMouseLeave}
                onClick={handleCartClick}
            >
                <div className={`shop-item__checkout-button-text fade
                                ${checkout ? 'fade--show' : ''}`}>
                    ДОДАТИ ДО КОРЗИНИ
                </div>
                <div className={`shop-item__checkout-button-text fade
                                ${checkout ? '' : 'fade--show'}`}>
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
                    <div className={`shop-item__present-label fade ${presentLabel ? 'fade--show' : ''}`}>
                        ПОДАРУВАТИ
                    </div>
                    <div className={`shop-item__present-label fade ${presentLabel ? '' : 'fade--show'}`}>
                        ОБЕРІТЬ РОЗМІР
                    </div>
                    <img className='shop-item__present-img' src={presentImg.src} alt={'present img'}/>
                </button>
            </div>
        </div>
    )
}

export default Buttons