import React from "react"
import Button from "../button/button.component"

type sidebarProps = {
    left?: boolean,
    top?: true,
    hideTopNav?: () => void,
    active: boolean,
    hideModal?: (event: React.MouseEvent<HTMLElement>) => void,
    children: React.ReactNode
}

const Sidebar: React.FC<sidebarProps> = (props) => {

    const {left, children, active, hideModal, top, hideTopNav} = props

    return (
        <div className={`sidebar ${left ? 'sidebar--left' : 'sidebar--right'} ${top ? 'sidebar--top' : ''}
            ${left && active ? 'sidebar--left--active' : active ? 'sidebar--right--active' : ''} `}
        >
            {hideTopNav && (
                <Button className={'sidebar__back'} onClick={hideTopNav}/>
            )}
            {hideModal && (
                <Button className={'close sidebar__button'} onClick={hideModal}/>
            )}
            {children}
        </div>
    )
}

const shouldUpdate = (prevProps: sidebarProps, currentProps: sidebarProps) => prevProps.active === currentProps.active

export default React.memo(Sidebar, shouldUpdate)