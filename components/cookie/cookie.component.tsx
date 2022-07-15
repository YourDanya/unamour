import React from 'react'
import useCookie from "./cookie.hook"
import close from './../../public/icons/close.svg'

const Cookie: React.FC = () => {
    
    const {hidden, handleClick} = useCookie()
    
    return (
        <div className={`cookie ${hidden ? 'cookie__hidden' : ''}`}>
            <div className='cookie__content'>
                <div className="cookie__title">COOKIE</div>
                <div className="cookie__text">
                    {'Продовжуючи користування сайтом, ви погоджуєтесь із використанням\nфайлів cookie.'}
                </div>
                <button className='close-btn cookie__close' onClick={handleClick}>
                    <img src={close.src}/>
                </button>
            </div>
        </div>
    )
}

export default Cookie