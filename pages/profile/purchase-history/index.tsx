import {NextPageWithLayout} from 'types/types'
import {getProfileLayout} from 'components/profile/profile.component'

const PurchaseHistory: NextPageWithLayout = () => {
    return (
        <div className={'purchase-history'}>
        </div>
    )
}

PurchaseHistory.getLayout = getProfileLayout

export default PurchaseHistory