'use client'

import {FC} from 'react'
import Sizes from 'app/[locale]/shop-items/[category]/[item]/_components/sizes/sizes.component'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {useShopItem} from 'app/[locale]/shop-items/[category]/[item]/_components/shop-item.hook'
import Additional from 'app/[locale]/shop-items/[category]/[item]/_components/additional/additional.component'
import Images from 'app/[locale]/shop-items/[category]/[item]/_components/images/images.component'
import Info from 'app/[locale]/shop-items/[category]/[item]/_components/dropdowns/dropdowns.component'
import ModalContent from 'app/_common/components/modal-content/modal-content.component'
import Buttons from 'app/[locale]/shop-items/[category]/[item]/_components/buttons/buttons.component'
import Present from 'app/[locale]/shop-items/[category]/[item]/_components/present/present.component'
import Modal from 'app/_common/components/modal/modal.component'
import Links from 'app/[locale]/shop-items/[category]/[item]/_components/links/links.component'
import Parameters from 'app/[locale]/shop-items/[category]/[item]/_components/parameters/parameters.component'
import 'app/[locale]/shop-items/[category]/[item]/_components/shop-item.styles.sass'
import Reviews from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.component'
import useShopItems from 'app/[locale]/shop-items/[category]/_components/shop-items.hook'

const ShopItem: FC<FetchedItem> = (props) => {
    const {_id} = props

    const state = useShopItem(props)
    const {currentVariant: {images, color}, modalState, hideModal} = state

    return (
        <div className="shop-item">
            <div className="shop-item__content">
                <Images images={images}/>
                <About {...state}/>
            </div>
            <Additional {...state}/>
            <Reviews color={color} _id={_id}/>
            <ModalContent
                className={'shop-item__present-modal'}
                active={modalState.present}
                hideModal={hideModal}
            >
                <Present {...state}/>
            </ModalContent>
            <ModalContent
                className={'sizes-modal'}
                active={modalState.size}
                hideModal={hideModal}
            >
                <Sizes/>
            </ModalContent>
            <Modal active={modalState.modal} hideModal={hideModal}/>
        </div>
    )
}

export default ShopItem

const About = (props: ReturnType<typeof useShopItem>) => {

    return (
        <div className={'shop-item__about'}>
            <Links {...props}/>
            <Parameters {...props}/>
            <Buttons {...props}/>
            <Info {...props}/>
        </div>
    )
}