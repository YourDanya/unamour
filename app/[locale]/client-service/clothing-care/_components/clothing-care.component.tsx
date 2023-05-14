'use client'
import React from 'react'
import useClothingCare from 'app/[locale]/client-service/clothing-care/_components/clothing-cart.hook'

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

export default ClothingCare