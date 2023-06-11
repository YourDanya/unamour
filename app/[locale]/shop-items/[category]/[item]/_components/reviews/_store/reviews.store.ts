import {create} from 'zustand'
import {ReviewsState} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/_store/reviews.types'

export const useReviewsStore = create<ReviewsState>((set) => ({
    showForm: false,
    setShowForm: (showForm: boolean) => set({showForm})
}))