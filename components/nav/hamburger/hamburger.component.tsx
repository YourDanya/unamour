import {FC} from 'react'
import {HamburgerProps} from 'components/nav/hamburger/hamburger.types'
import Button from 'components/common/button/button.component'

const Hamburger: FC<HamburgerProps> = ({hamburger, showModal, hideModal}) => {

    return (
        <div className={`hamburger ${hamburger ? 'hamburger--active' : ''}`}>
            <Button className={`hamburger__button`} name={'hamburger'} onClick={hamburger? hideModal : showModal}>
                {/*<div className='hamburger__content'>*/}
                    <div className="hamburger__line"/>
                    <div className="hamburger__line"/>
                    <div className="hamburger__line"/>
                {/*</div>*/}
            </Button>
        </div>
    )
}

export default Hamburger