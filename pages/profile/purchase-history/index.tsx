import React from "react"
import {NextPageWithLayout} from "../../../types/types"
import {getProfileLayout} from "../../../components/profile/profile.component"

type PurchaseHistoryProps = {

}

const PurchaseHistory: NextPageWithLayout<PurchaseHistoryProps> = () => {
    return (
        <div className={'purchase-history'}>
        </div>
    )
}

PurchaseHistory.getLayout = getProfileLayout

export default PurchaseHistory