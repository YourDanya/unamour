import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import axios from "axios";
import {NextPage} from "next";
import {NextPageWithLayout} from "../../../types/types";
import InternHoc from "../../../components/internationalization-hoc/internationalization-hoc";
import {OrderingContent} from "./ordering.content";

type OrderingPageProps = {
    content: typeof OrderingContent.ua
}

const Ordering: NextPageWithLayout<OrderingPageProps> = ({content}) => {

    return (
        <div className={'ordering'}>
            <div className="client-service__page-title">
                ИНСТРУКЦИЯ ПО ОФОРМЛЕНИЮ ЗАКАЗА
            </div>
            <div className="list client-service__page-list">
                {
                    content.list1.map(item =>
                        <div className={'list__item'}>
                            {item}
                        </div>
                    )
                }
            </div>
            <div className="client-service__page-text">
                {content.text1}
            </div>
            <div className="client-service__page-text">
                {content.text2}
            </div>
        </div>
    )
}

Ordering.getLayout = getClientServiceLayout

export default InternHoc(Ordering, OrderingContent)