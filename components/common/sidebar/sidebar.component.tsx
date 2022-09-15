import React from "react"
import Button from "../button/button.component"

type sidebarProps = {
    active: boolean,
    children: React.ReactNode,
    left?: boolean,
    top?: true,
    hideModal?: (event: React.MouseEvent<HTMLElement>) => void,
    hideTopModal?: (event: React.MouseEvent<HTMLElement>) => void,
    name?: string
}

const Sidebar: React.FC<sidebarProps> = (props) => {

    const {left, active, hideModal, hideTopModal, name, children} = props

    return (
        <div className={`sidebar ${left ? 'sidebar--left' : 'sidebar--right'} ${hideTopModal ? 'sidebar--top' : ''}
            ${left && active ? 'sidebar--left--active' : active ? 'sidebar--right--active' : ''} `}
        >
            {hideTopModal && (
                <Button className='sidebar__back' onClick={hideTopModal} name={name}>
                    <div className={'arrow-back'}/>
                </Button>
            )}
            {hideModal && (
                <Button className='close sidebar__button' onClick={hideModal}/>
            )}
            {children}
        </div>
    )
}

const shouldUpdate = (prevProps: sidebarProps, currentProps: sidebarProps) => prevProps.active === currentProps.active

export default React.memo(Sidebar, shouldUpdate)
