import {MouseEvent} from 'react'
import {ButtonProps} from 'app/[locale]/_common/components/button/button.types'

const useButton = (props: ButtonProps) => {
    const onClick = (event: MouseEvent<HTMLElement>) => {
        if (!props.loading) {
            props.onClick(event)
        }
        else {
            event.preventDefault()
        }
    }
    return {onClick}
}

export default useButton