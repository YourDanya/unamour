import {MouseAction} from 'app/[locale]/_common/types/types'

export type ParametersProps = {
    name: string,
    oldPrice: string,
    price: string,
    sizes: string[],
    activeSize: string | null,
    showModal: MouseAction,
    onActiveSize: MouseAction,
    onActiveColor: MouseAction,
    color: string,
    variants: {
        color: string
    }[]
}