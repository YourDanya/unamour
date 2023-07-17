'use client'

import {FC} from 'react'
import {ScrollFixedProps} from 'app/[locale]/_common/components/scroll-fixed/scroll-fixes.types'
import useScrollHook from 'app/[locale]/_common/components/scroll-fixed/scroll-fixed.hook'

const ScrollFixed: FC<ScrollFixedProps> = (props) => {
    const {children} = props
    const {state, elemRef, transition} = useScrollHook(props)

    return (
        <div
            className={'scroll-fixed'}
            style={{
                position: state.position,
                top: state.top,
                bottom: state.bottom,
                transform: `translateY(${state.translateY}px)`,
                transition: transition
            }}
            ref={elemRef}>
            {children}
        </div>
    )
}

export default ScrollFixed