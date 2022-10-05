import React from 'react'
import Parameters from 'components/shop-item/parameters/parameters.component'
import Sizes from 'components/shop-item/sizes/sizes.component'
import {useShopItem} from 'components/shop-item/shop-item.hook'
import Additional from 'components/shop-item/additional/additional.component'
import Images from 'components/shop-item/images/images.component'
import Dropdowns from 'components/shop-item/dropdowns/dropdowns.component'
import ModalContent from 'components/common/modal-content/modal-content.component'
import Buttons from 'components/shop-item/buttons/buttons.component'
import Present from 'components/shop-item/present/present.component'
import {ClientItem} from 'redux/shop-items/shop-items.types'
import Modal from 'components/common/modal/modal.component'
import Links from 'components/shop-item/links/links.component'

const ShopItem: React.FC<ClientItem> = (props) => {

    const {name, color, sizes, images, variants, price, delivery, description, composition, parameters,
        category, slugCategory, oldPrice} = props

    const {activeSize, handleSizeClick, modalState, showModal, hideModal} = useShopItem()

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
            <ModalContent className={'shop-item__present-modal'} active={modalState.present} hideModal={hideModal}>
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