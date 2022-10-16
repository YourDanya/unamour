import {MouseEvent} from 'react'

export type SignInProps = {
    handleSign: (event: MouseEvent<HTMLElement>) => void
    sign: string
}