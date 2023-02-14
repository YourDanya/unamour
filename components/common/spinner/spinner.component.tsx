import {FC} from 'react'
import {SpinnerProps} from 'components/common/spinner/spinner.types'

const Spinner: FC<SpinnerProps> = ({className}) => {
    return (
        <div className={`spinner ${className?? ''}`}>
            <div className={'spinner__content'}/>
        </div>
    )
}

export default Spinner