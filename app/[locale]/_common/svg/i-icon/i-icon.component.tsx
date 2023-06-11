import {IIconProps} from 'app/[locale]/_common/svg/i-icon/i-icon.types'
import {FC} from 'react'

const IIcon: FC<IIconProps> = (props) => {
    const {className} = props

    return (
        <svg className={`i-icon ${className ?? ''}`} viewBox='0 0 24 24'>
            <path
                d="M12 .25A11.75 11.75 0 1023.75 12 11.76 11.76 0 0012 .25zm0 21.15a9.4 9.4 0 119.4-9.4 9.41 9.41 0 01-9.4 9.4z"
            />
            <path
                d="M13.18 15.53v-4.7A1.17 1.17 0 0012 9.65H9.65V12h1.17v3.53H8.48v2.35h7.05v-2.35z"
            />
            <circle cx="12" cy="7.3" r="1.47"/>
        </svg>
    )
}

export default IIcon