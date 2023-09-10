export type Review = {
    color: string,
    itemId: string,
    title: string,
    review: string,
    date: string,
    images: {
        path: string,
        url: string
    }[],
    status: 'pending' | 'accepted',
    rating: number,
    user: {
        name: string,
        _id: string
    },
    _id: string
}
