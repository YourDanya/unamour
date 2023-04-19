'use client'

import {CountTimeProps} from 'app/[locale]/_common/components/count-time/count-time.types'
import {FC} from 'react'
import {useCountTime} from 'app/[locale]/_common/components/count-time/count-time.hook'

const CountTime: FC<CountTimeProps> = (props) => {
    const {children} = props
    useCountTime()

    return (
        <>
            {children}
        </>
    )
}

export default CountTime