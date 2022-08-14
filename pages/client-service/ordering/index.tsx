import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/service.component";
import axios from "axios";
import {NextPage} from "next";
import {NextPageWithLayout} from "../../../types/types";
import {OrderingContent} from "./ordering.content";
import WithIntern from "../../../components/hoc/with-intern/with-intern";

type OrderingPageProps = {
    content: typeof OrderingContent.ua
}

const Ordering: NextPageWithLayout<OrderingPageProps> = ({content}) => {

    return (
        <div className={'ordering'}>
            <div className="service__title">
                {content.title1}
            </div>
            <div className="list service__list">
                {
                    content.list1.map(item =>
                        <div className={'list__item'} key={item}>
                            {item}
                        </div>
                    )
                }
            </div>
            <div className="service__text">
                {content.text1}
            </div>
            <div className="service__text">
                {content.text2}
            </div>
        </div>
    )
}

Ordering.getLayout = getClientServiceLayout

export default WithIntern(Ordering, OrderingContent)
