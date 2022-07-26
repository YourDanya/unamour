import React from "react"
import useScrollHook from "./scroll-fixed.hook"

export type scrollFixedProps = {
    children: React.ReactNode
}

const ScrollFixed: React.FC<scrollFixedProps> = (props) => {
    const {menuState, elemRef, children} = useScrollHook(props)

    return (
        <div
            className={'scroll-fixed'}
            style={{
                position: menuState.position,
                top: menuState.top,
                bottom: menuState.bottom,
                transform: `translateY(${menuState.translateY}px)`
            }}
            ref={elemRef}>
            {children}
        </div>
    )
}

export default ScrollFixed