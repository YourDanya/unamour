import React from "react"
import Modal from "../modal/modal.component"
import Present from "../present/present.component"
import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {useShopItem} from "./shop-item.hook"
import Additional from "./additional/additional.component"
import ModalContent from "../modal-content/modal-content.component"
import Buttons from "./buttons/buttons.component";
import Parameters from "./parameters/parameters.component";
import Sizes from "../sizes/sizes.component";
import Images from "./images/images.component";
import Links from "./links/links.component";
import Dropdowns from "./dropdowns/dropdowns.component";

const ShopItem: React.FC<ClientItem> = (props) => {

    const {
        name, color, sizes, images, price, delivery, description, composition, parameters, category, slugCategory,
        oldPrice, slug, currency, variants, activeSize, handleSizeChange, checkout, setCheckout, handleCheckoutButtonMouseEnter,
        handleCheckoutButtonMouseLeave, modalActive, setModalActive, handleModalSize, presentLabel, handlePresentClick, handlePresentMouseLeave,
        sliderCount, setSliderCount, slideImages, similarItems, viewedItems, handleCartClick
    } = useShopItem(props)

    return (
        <div className='shop-item'>
            <div className="shop-item__content">
                <Images
                    images={images}
                    slideImages={slideImages}
                    setSliderCount={setSliderCount}
                    sliderCount={sliderCount}
                />
                <div className={'shop-item__about'}>
                    <Links category={category} slugCategory={slugCategory}/>
                    <Parameters
                        name={name}
                        oldPrice={oldPrice}
                        price={price}
                        sizes={sizes}
                        handleModalSize={handleModalSize}
                        activeSize={activeSize}
                        handleSizeChange={handleSizeChange}
                        color={color}
                        variants={variants}
                    />
                    <Buttons
                        handleCheckoutButtonMouseEnter={handleCheckoutButtonMouseEnter}
                        handleCheckoutButtonMouseLeave={handleCheckoutButtonMouseLeave}
                        handleCartClick={handleCartClick}
                        checkout={checkout}
                        handlePresentClick={handlePresentClick}
                        handlePresentMouseLeave={handlePresentMouseLeave}
                        presentLabel={presentLabel}
                    />
                    <Dropdowns
                        delivery={delivery}
                        composition={composition}
                        description={description}
                        parameters={parameters}
                    />
                </div>
            </div>
            <Additional similarItems={similarItems} viewedItems={viewedItems}/>
            <ModalContent active={modalActive.present} hideModal={() => {}}>
                <Present
                    price={price}
                    name={name}
                    images={images}
                    color={color}
                    activeSize={activeSize as string}
                />
            </ModalContent>
            <ModalContent active={modalActive.size} hideModal={() => setModalActive({modal: false, size: false, present: false})}>
                <Sizes/>
            </ModalContent>
            <Modal active={modalActive.modal} hideModal={() => setModalActive({modal: false, size: false, present: false})}/>
        </div>
    )
}

export default ShopItem