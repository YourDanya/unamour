import {MouseAction} from 'app/[locale]/_common/types/types'

export type CartOrderProps = {
    total: number,
    onSubmit: MouseAction,
    loading: boolean
}