'use client'

import useReturn from 'app/[locale]/client-service/return/_components/return.hook'
import {FC} from 'react'
import Link from 'next/link'

const Return: FC = () => {
    const {transl} = useReturn()

    return (
        <div className={'return'}>
            <div className="service__title">{transl.title1}</div>
            <div className="service__subtitle service__subtitle--first">{transl.subtitle1}</div>
            <div className="service__text">{transl.text1}</div>
            <div className="service__label">{transl.label1}</div>
            <div className="service__text">{transl.text2}</div>
            <div className="service__subtitle">{transl.subtitle2}</div>
            <div className="service__text">{transl.text3}</div>
            <div className="service__subtitle">{transl.subtitle3}</div>
            <div className="service__text">{transl.text4}</div>
            <div className="service__label">{transl.label2}</div>
            <div className="service__text">
                {transl.text5}
                <Link href="https://zakon.rada.gov.ua/laws/show/172-94-%D0%BF#Text">
                    {transl.textLink1}
                </Link>
            </div>
        </div>
    )
}

export default Return