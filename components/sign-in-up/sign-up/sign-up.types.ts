import {MouseEvent} from 'react'

export type SignUpProps = {
    handleSign: (event: MouseEvent<HTMLElement>) => void,
    sign: string
}
