import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import {NextPageWithLayout} from "../../../types/types";
import {ReturnContent} from "./return.content";
import WithIntern from "../../../components/hoc/with-intern/with-intern";
import Link from "next/link";

type ReturnProps = {
    content: typeof ReturnContent.ua
}

const Return: NextPageWithLayout<ReturnProps> = ({content}) => {
    console.log('content', content)
    return (
        <div className={'return'}>
            <div className="service__title">
                {content.title1}
            </div>
            <div className="service__subtitle">
                {content.subtitle1}
            </div>
            <div className="service__text">
                {content.text1}
                <br/><br/>
                <div className="service__label">
                    {content.label1}
                </div>
                {content.text2}
            </div>
            <div className="service__subtitle">
                {content.subtitle2}
            </div>
            <div className="service__text">
                {content.text3}
            </div>
            <div className="service__subtitle">
                {content.subtitle3}
            </div>
            <div className="service__text">
                {content.text4}
                <br/><br/>
                <div className="service__label">
                    {content.label2}
                </div>
                {content.text5}
                <Link href="https://zakon.rada.gov.ua/laws/show/172-94-%D0%BF#Text">
                    <a className={'service__link'}>{content.link1}</a>
                </Link>
            </div>
        </div>
    )
}

Return.getLayout = getClientServiceLayout

export default WithIntern(Return, ReturnContent)