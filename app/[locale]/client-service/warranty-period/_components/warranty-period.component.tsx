'use client'

import React from 'react'
import {NextPageWithLayout} from 'app/_common/types/types'
import useWarrantyPeriod from 'app/[locale]/client-service/warranty-period/_components/warranty-period.hook'

const WarrantyPeriod = () => {
    const {transl} = useWarrantyPeriod()

    return (
        <div className={'warranty-period'}>
            <div className="service__title">
                {transl.title1}
            </div>
            <div className="service__text">
                {transl.text1}
            </div>
            <div className={'service__label service__label--mb20'}>
                {transl.label1}
            </div>
            <div className="list list--pl-20">
                {
                    transl.list1.map((item) => (
                        <div className={'list__item'} key={item}>
                            {item}
                        </div>
                    ))
                }
            </div>
            <div className="service__text">
                {transl.text2}
            </div>
        </div>
    )
}

// WarrantyPeriod.getLayout = getClientServiceLayout


export default WarrantyPeriod