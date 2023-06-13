import IIcon from 'app/[locale]/_common/svg/i-icon/i-icon.component'
import {IconProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/description/description.types'
import {FC} from 'react'

const Description: FC<IconProps> = (props) => {
    const {children, className} = props

    return (
        <div className={`review-form-descr descr ${className ?? ''}`}>
            <IIcon className={'descr__icon'}/>
            {children}
        </div>
    )
}

export default Description