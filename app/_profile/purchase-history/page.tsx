import {NextPageWithLayout} from 'types/types'
import {getProfileLayout} from 'components/profile/profile.component'

const PurchaseHistoryPage: NextPageWithLayout = () => {
    return (
        <div className={'purchase-history'}>
        </div>
    )
}

PurchaseHistoryPage.getLayout = getProfileLayout

export default PurchaseHistoryPage