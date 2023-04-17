import {useApiCall} from 'utils/api/api-v2.utils'
import {ReviewsProps} from 'components/shop-item/reviews/reviews.types'
import {useEffect} from 'react'
import {ReviewItem} from 'components/shop-item/reviews/reviews.types'

export const testReviews = [
    {
        stars: 5,
        images: [],
        author: {
            name: 'Софія'
        },
        comment: 'Вдячна за оперативне виконання замовлення! Все сподобалося, замовляла плавки в басейн сину та спортивний костюм, якістю задоволені!'
    },
    {
        stars: 5,
        images: [],
        author: {
            name: 'Мілана'
        },
        comment: 'Дякую за оперативність і допомогу в пошуку. Все відповідає фото і опису.'
    },
    {
        stars: 5,
        images: [],
        author: {
            name: 'Злата'
        },
        comment: 'Не перший раз замовляю товари в данному інтернет-магазані. Задоволена і якістю, і ціною, і обслуговуванням. Дякую.'
    },
    {
        stars: 5,
        images: [],
        author: {
            name: 'Дарина'
        },
        comment: 'Замовляла не раз. Товаром та обслуговуванням задоволена. Вдячна за вчасно виконане замовлення та якісний товар. Дякую за вашу роботу.'
    },
    {
        stars: 5,
        images: [],
        author: {
            name: 'Соломія'
        },
        comment: 'Дуже подобається цей інтернет-магазин. Завжди можна знайти все, що потрібно за гарною ціною. Замовлення виконується дуже швидко. Дякую і бажаю розвитку !'
    },
]

const useReviews = (props: ReviewsProps) => {
    const {itemId} = props
    const getReviews = useApiCall<{reviews: ReviewItem[]}>(`reviews/${itemId}`)

    useEffect(() => {
        // getReviews.start()
    }, [])

    const reviews = testReviews

    return {getReviews, reviews}
}

export default useReviews