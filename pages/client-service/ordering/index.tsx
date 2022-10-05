import React from 'react'
import {NextPageWithLayout} from 'types/types'
import {getClientServiceLayout} from 'components/client-service/service.component'
import useOrdering from 'pages/client-service/ordering/ordering.hook'

type OrderingPageProps = {}

const Ordering: NextPageWithLayout<OrderingPageProps> = () => {
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

Ordering.getLayout = getClientServiceLayout

export default Ordering