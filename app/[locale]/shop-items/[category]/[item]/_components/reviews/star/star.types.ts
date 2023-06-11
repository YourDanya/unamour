import {MouseAction} from 'app/[locale]/_common/types/types'

export type StarProps = {
    rating: number,
    onClick?: MouseAction,
    className?: string
}