'use client'

import {FC} from 'react'
import useHamburger from 'app/[locale]/_components/layout/nav/hamburger/hamburger.hook'
import {HamburgerProps} from 'app/[locale]/_components/layout/nav/hamburger/hamburger.types'
import Button from 'app/_common/components/button/button.component'

const Hamburger: FC<HamburgerProps> = (props) => {
    const {hamburger} = props
    const {onHamburger} = useHamburger(props)

    return (
        <div className={`hamburger ${hamburger ? 'hamburger--active' : ''}`}>
            <Button className={`hamburger__button`} name={'hamburger'} onClick={onHamburger}>
                <div className="hamburger__line"/>
                <div className="hamburger__line"/>
                <div className="hamburger__line"/>
            </Button>
        </div>
    )
}

export default Hamburger