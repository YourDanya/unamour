import React from "react"
import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {useShopItem} from "./shop-item.hook"
import Additional from "./additional/additional.component"
import Buttons from "./buttons/buttons.component"
import Parameters from "./parameters/parameters.component"
import Images from "./images/images.component"
import Links from "./links/links.component"
import Dropdowns from "./dropdowns/dropdowns.component"
import ModalContent from "../common/modal-content/modal-content.component"
import Modal from "../common/modal/modal.component"
import Sizes from "./sizes/sizes.component"
import Present from "./present/present.component"

const ShopItem: React.FC<ClientItem> = (props) => {

    const {
        name, color, sizes, images, price, delivery, description, composition, parameters, category, slugCategory,
        oldPrice, variants, activeSize, handleSizeClick, modalState, showModal, hideModal,
    } = useShopItem(props)

    return (
        <div className='shop-item'>
            <div className="shop-item__content">
                <Images images={images}/>
                <div className={'shop-item__about'}>
                    <Links category={category} slugCategory={slugCategory}/>
                    <Parameters
                        modalState={modalState}
                        name={name}
                        oldPrice={oldPrice}
                        price={price}
                        sizes={sizes}
                        activeSize={activeSize}
                        handleSizeClick={handleSizeClick}
                        color={color}
                        variants={variants}
                        showModal={showModal}
                    />
                    <Buttons activeSize={activeSize} showModal={showModal}/>
                    <Dropdowns
                        delivery={delivery}
                        composition={composition}
                        description={description}
                        parameters={parameters}
                    />
                </div>
            </div>
            <Additional/>
            <ModalContent active={modalState.present} hideModal={hideModal}>
                <Present
                    price={price}
                    name={name}
                    images={images}
                    color={color}
                    activeSize={activeSize as string}
                />
            </ModalContent>
            <ModalContent active={modalState.size} hideModal={hideModal} className={'sizes-modal'}>
                <Sizes/>
            </ModalContent>
            <Modal active={modalState.modal} hideModal={hideModal}/>
        </div>
    )
}

export default ShopItem