'use client'

import {FC} from 'react'
import close from 'public/icons/close.svg'
import useCookie from 'app/[locale]/_components/layout/cookie/cookie.hook'
import 'app/[locale]/_components/layout/cookie/cookies.styles.sass'

const Cookie: FC = () => {
    const {hidden, onHide} = useCookie()
    
    return (
        <div className={`cookie ${hidden ? 'cookie__hidden' : ''}`}>
            <div className='cookie__content'>
                <div className="cookie__title">COOKIE</div>
                <div className="cookie__text">
                    {'Продовжуючи користування сайтом, ви погоджуєтесь із використанням\nфайлів cookie.'}
                </div>
                <button className='close-btn cookie__close' onClick={onHide}>
                    <img src={close.src}/>
                </button>
            </div>
        </div>
    )
}

export default Cookie