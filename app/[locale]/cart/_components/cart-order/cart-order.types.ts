import {MouseAction} from 'app/_common/types/types'

export type CartOrderProps = {
    total: number,
    onSubmit: MouseAction,
    loading: boolean
}