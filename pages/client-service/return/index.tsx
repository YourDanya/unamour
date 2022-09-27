import React from 'react'
import {NextPageWithLayout} from 'types/types'
import {getClientServiceLayout} from 'components/client-service/service.component'
import {ReturnContent} from 'pages/client-service/return/return.content'
import WithIntern from 'components/hoc/with-intern/with-intern'
import Link from 'next/link'

type ReturnProps = {
    content: typeof ReturnContent.ua
}

const Return: NextPageWithLayout<ReturnProps> = ({content}) => {

    return (
        <div className={'return'}>
            <div className="service__title">{content.title1}</div>
            <div className="service__subtitle service__subtitle--first">{content.subtitle1}</div>
            <div className="service__text">{content.text1}</div>
            <div className="service__label">{content.label1}</div>
            <div className="service__text">{content.text2}</div>
            <div className="service__subtitle">{content.subtitle2}</div>
            <div className="service__text">{content.text3}</div>
            <div className="service__subtitle">{content.subtitle3}</div>
            <div className="service__text">{content.text4}</div>
            <div className="service__label">{content.label2}</div>
            <div className="service__text">
                {content.text5}
                <Link href="https://zakon.rada.gov.ua/laws/show/172-94-%D0%BF#Text">
                    <a className={'service__link'}>{content.textLink1}</a>
                </Link>
            </div>
        </div>
    )
}

Return.getLayout = getClientServiceLayout

export default WithIntern(Return, ReturnContent)