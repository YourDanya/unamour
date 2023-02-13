import {FC, memo} from 'react'
import Button from 'components/common/button/button.component'
import {SidebarProps} from 'components/common/sidebar/sidebar.types'

const Sidebar: FC<SidebarProps> = (props) => {
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

const shouldUpdate = (prevProps: SidebarProps, currentProps: SidebarProps) => prevProps.active === currentProps.active

export default memo(Sidebar, shouldUpdate)
