import React, {useState} from 'react'
import Cross from "../cross/cross.component";

const CookieComponent: React.FC = () => {

    const [hidden, setHidden] = useState(false)

    return (
        <div className={`cookies-warning cookies-waring__mane`}>
            <div className={`cookies-warning__elements ${hidden? 'cookies-warning__elements': ''}`}>
                <div className="cookies-warning__title">COOKIE</div>
                <div className="cookies-warning__text">
                    Продолжая пользование сайтом, вы соглашаетесь с использованием файлов cookie.
                </div>
                <Cross onClick={() => setHidden(true)}/>
            </div>
        </div>
    )
}

export default CookieComponent