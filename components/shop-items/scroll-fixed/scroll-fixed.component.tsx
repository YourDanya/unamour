import React from "react"
import useScrollHook from "./scroll-fixed.hook"

export type scrollFixedProps = {
    children: React.ReactNode
}

const ScrollFixed: React.FC<scrollFixedProps> = (props) => {

    const {state, elemRef, children, transition} = useScrollHook(props)

    return (
        <div
            className={'scroll-fixed'}
            style={{
                position: state.position,
                top: state.top,
                bottom: state.bottom,
                transform: `translateY(${state.translateY}px)`
            }}
            ref={elemRef}>
            {children}
        </div>
    )
}

export default ScrollFixed