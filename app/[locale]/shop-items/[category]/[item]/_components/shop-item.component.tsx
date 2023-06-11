'use client'

import {FC} from 'react'
import Sizes from 'app/[locale]/shop-items/[category]/[item]/_components/sizes/sizes.component'
import {FetchedItem} from 'app/[locale]/_common/types/types'
import {useShopItem} from 'app/[locale]/shop-items/[category]/[item]/_components/shop-item.hook'
import Additional from 'app/[locale]/shop-items/[category]/[item]/_components/additional/additional.component'
import Images from 'app/[locale]/shop-items/[category]/[item]/_components/images/images.component'
import Dropdowns from 'app/[locale]/shop-items/[category]/[item]/_components/dropdowns/dropdowns.component'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import Buttons from 'app/[locale]/shop-items/[category]/[item]/_components/buttons/buttons.component'
import Present from 'app/[locale]/shop-items/[category]/[item]/_components/present/present.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import Links from 'app/[locale]/shop-items/[category]/[item]/_components/links/links.component'
import Parameters from 'app/[locale]/shop-items/[category]/[item]/_components/parameters/parameters.component'
import 'app/[locale]/shop-items/[category]/[item]/_components/shop-item.styles.sass'
import Reviews from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.component'

const ShopItem: FC<FetchedItem> = (props) => {
    const {common: {variants, slugCategory, oldPrice}, _id} = props

    const {
        activeSize, onActiveSize, modalState, showModal, hideModal, onCurrentVariant, onAddItem,
        currentVariant: {sizes, images, price, color},
        transl: {name, delivery, description, composition, parameters, category}
    } = useShopItem(props)

    return (
        <div className="shop-item">
            <div className="shop-item__content">
                <Images images={images}/>
                <div className={'shop-item__about'}>
                    <Links category={category} slugCategory={slugCategory}/>
                    <Parameters
                        name={name}
                        oldPrice={oldPrice}
                        price={price}
                        sizes={sizes}
                        activeSize={activeSize}
                        onActiveSize={onActiveSize}
                        color={color}
                        onActiveColor={onCurrentVariant}
                        variants={variants}
                        showModal={showModal}
                    />
                    <Buttons
                        id={_id}
                        color={color}
                        activeSize={activeSize}
                        showModal={showModal}
                        onAddItem={onAddItem}
                    />
                    <Dropdowns
                        delivery={delivery}
                        composition={composition}
                        description={description}
                        parameters={parameters}
                    />
                </div>
            </div>
            <Additional/>
            <Reviews color={color} _id={_id}/>
            <ModalContent className={'shop-item__present-modal'} active={modalState.present} hideModal={hideModal}>
                <Present
                    price={price}
                    name={name}
                    images={images}
                    color={color}
                    activeSize={activeSize}
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