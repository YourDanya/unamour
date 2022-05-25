import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import WithIntern from "../../../components/hoc/with-intern/with-intern";
import {WarrantyPeriodContent} from "./warranty-period.content";
import {NextPageWithLayout} from "../../../types/types";

type WarrantyPeriodProps ={
    content: typeof WarrantyPeriodContent.ua
}

const WarrantyPeriod: NextPageWithLayout<WarrantyPeriodProps> = ({content}) => {
    return (
            <div className={'warranty-period'}>
                <div className="service__title">
                    {content.title1}
                </div>
                <div className="service__text">
                    {content.text1}
                </div>
                <div className={'service__label service__label--mb20'}>
                    {content.label1}
                </div>
                <div className="list list--pl20">
                    {
                        content.list1.map((item) => (
                            <div className={'list__item'} key={item}>
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div className="service__text">
                    {content.text2}
                </div>
            </div>
    )
}

WarrantyPeriod.getLayout = getClientServiceLayout

export default WithIntern(WarrantyPeriod, WarrantyPeriodContent)