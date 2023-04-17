import {ReviewStarProps} from 'components/shop-item/reviews/review-star/review-star.types'
import {FC} from 'react'

const ReviewStar: FC<ReviewStarProps> = (props) => {
    const {star} = props

    return (
        <svg className="review-star" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path
                className="review-star__path"
                fill={`url(#reviewStarGradient${star})`}
                stroke={`url(#reviewStarGradient${star})`}
                d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
            />
            <linearGradient
                id={`reviewStarGradient${star}`}
                x1="0" y1="1" x2={star} y2="1"
            >
                <stop stopColor="#4f4f4f" offset={1}/>
                <stop stopColor="#e0e0e0"/>
            </linearGradient>
        </svg>
    )
}

export default ReviewStar