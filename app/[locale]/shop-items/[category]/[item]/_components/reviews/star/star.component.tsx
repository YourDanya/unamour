import {FC} from 'react'
import {StarProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.types'

const Star: FC<StarProps> = (props) => {
    const {rating, className, ...otherProps} = props

    return (
        <svg
            className={`star ${className ?? ''}`}
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            {...otherProps}
        >
            <path
                className="star__outline"
                fill={`url(#gradient${rating})`}
                stroke={'black'}
                strokeMiterlimit="10"
                d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
            />
            <linearGradient id={`gradient${rating}`}>
                <stop offset={'0'} stopColor="black"/>
                <stop offset={rating} stopColor="black"/>
                <stop offset={rating} stopColor='white'/>
                <stop offset={'1'} stopColor='white'/>
            </linearGradient>
        </svg>
    )
}

export default Star