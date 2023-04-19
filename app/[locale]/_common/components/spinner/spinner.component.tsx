'use client'

import {FC} from 'react'
import {SpinnerProps} from 'app/[locale]/_common/components/spinner/spinner.types'
import 'app/[locale]/_common/components/spinner/spinner.styles.sass'

const Spinner: FC<SpinnerProps> = ({className}) => {

    return (
        <div className={`spinner ${className?? ''}`}>
            <div className={'spinner__content'}/>
        </div>
    )
}

export default Spinner