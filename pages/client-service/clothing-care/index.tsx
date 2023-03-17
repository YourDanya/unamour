import React from 'react'
import {getClientServiceLayout} from 'components/client-service/service.component'
import useClothingCare from 'pages/client-service/clothing-care/clothing-cart.hook'

const ClothingCare = () => {
    const {transl} = useClothingCare()
    return (
        <div className={'clothing-care'}>
            <div className="service__title">
                {transl.title1}
            </div>
            <div className='service__label'>
                {transl.label1}
            </div>
            <div className='service__text'>
                {transl.text1}
            </div>
        </div>
    )
}

ClothingCare.getLayout = getClientServiceLayout

export default ClothingCare