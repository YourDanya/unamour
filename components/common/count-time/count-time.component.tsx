import {CountTimeProps} from 'components/common/count-time/count-time.types'
import {FC} from 'react'
import {useCountTime} from 'components/common/count-time/count-time.hook'

const CountTime: FC<CountTimeProps> = (props) => {
    const {children} = props
    useCountTime()

    return (
        <>
            {children}
        </>
    )
}

export default CountTime