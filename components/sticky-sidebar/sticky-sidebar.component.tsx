import React, {useRef} from "react"
import useStickySidebar from "./sticky-sidebar.hook";

type stickySidebarProps = {

}

const StickySidebar: React.FC<stickySidebarProps> = ({children}) => {

    const {elemRef, state} = useStickySidebar()

    return (
        <div
            className={'sticky-sidebar'}
            ref={elemRef}
            style={{position: state.position, top: state.top, bottom: state.bottom}}
        >
            {children}
        </div>
    )
}

export default StickySidebar