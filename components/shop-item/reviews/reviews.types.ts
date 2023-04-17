export type ReviewsProps = {
    itemId: string
}

export type ReviewItem = {
    stars: number
    images: string[],
    author: {
        name: string
    },
    comment: string
}