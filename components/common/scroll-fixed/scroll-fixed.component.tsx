import React from 'react'
import useScrollHook from 'components/common/scroll-fixed/scroll-fixed.hook'

export type ScrollFixedProps = {
    children: React.ReactNode,
    topOffset: number,
    bottomOffset: number
}

const ScrollFixed: React.FC<ScrollFixedProps> = (props) => {

    const {state, elemRef, children, transition} = useScrollHook(props)

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