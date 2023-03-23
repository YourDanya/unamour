import {FC} from 'react'
import {HamburgerProps} from 'components/nav/hamburger/hamburger.types'
import Button from 'components/common/button/button.component'
import useHamburger from 'components/nav/hamburger/hamburger.hook'

const Hamburger: FC<HamburgerProps> = (props) => {
    const {hamburger} = props
    const {onHamburger} = useHamburger(props)

    return (
        <div className={`hamburger ${hamburger ? 'hamburger--active' : ''}`}>
            <Button className={`hamburger__button`} name={'hamburger'} onClick={onHamburger}>
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