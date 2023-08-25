import {FC} from 'react'
import {ArrowProps} from 'app/_common/components/arrow/arrow.types'
import useArrow from 'app/_common/components/arrow/arrow.hook'

const Arrow: FC<ArrowProps> = (props) => {
    const {type, className} = props
    const {arrowStyles, afterStyles} = useArrow(props)

    return (
        <div
            className={`arrow ${type === 'left' ? 'arrow--left' : 'arrow--right'} ${className ? className : ''}`}
            style={arrowStyles}
        >
            <div className={'arrow__after-wrapper'}>
                <div
                    className={'arrow__after'}
                    style={afterStyles}
                />
            </div>
        </div>
    )
}

export default Arrow