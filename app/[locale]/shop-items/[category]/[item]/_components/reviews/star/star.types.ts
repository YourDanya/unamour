import {MouseAction} from 'app/_common/types/types'

export type StarProps = {
    rating: number,
    onClick?: MouseAction,
    onMouseEnter?: MouseAction,
    className?: string,
}