'use client'
import React from 'react'
import useOrdering from 'app/[locale]/client-service/ordering/_components/ordering.hook'

const Ordering = () => {
    const {transl} = useOrdering()

    return (
        <div className={'ordering'}>
            <div className="service__title">
                {transl.title1}
            </div>
            <div className="list service__list">
                {transl.list1.map(item =>
                    <div className={'list__item'} key={item}>
                        {item}
                    </div>
                )}
            </div>
            <div className="service__text">
                {transl.text1}
            </div>
            <div className="service__text">
                {transl.text2}
            </div>
        </div>
    )
}

export default Ordering