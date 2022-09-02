import React, {useRef} from "react"
import useStickySidebar from "./sticky-sidebar.hook";

type stickySidebarProps = {}

const StickySidebar: React.FC<stickySidebarProps> = ({children}) => {

    const {elemRef, state} = useStickySidebar()

    console.log(state.translateY)

    return (
        <div
            className={'sticky-sidebar'}
            ref={elemRef}
            style={{
                transform: `translateY(${state.translateY})`,
                position: state.position,
                // top: state.top,
                bottom: state.bottom,
                // transition: '0.1s all',
                // top: '20px',
                // position: 'sticky'
            }}>
            {children}
        </div>
    )
}

export default StickySidebar