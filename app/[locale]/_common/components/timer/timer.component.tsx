'use client'

import {FC} from 'react'
import {TimerProps} from 'app/[locale]/_common/components/timer/timer.types'
import useTimer from 'app/[locale]/_common/components/timer/timer.hook'

const Timer: FC<TimerProps> = (props) => {
    const {children, ...other} = props
    const {strTimer, onSubmit} = useTimer(other)

    return (
        <>
            {children(strTimer, onSubmit)}
        </>
    )
}

export default Timer