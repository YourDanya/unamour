import {ButtonProps} from 'components/common/button/button.types'
import {MouseEvent} from 'react'

const useButton = (props: ButtonProps) => {
    const onClick = (event: MouseEvent<HTMLElement>) => {
        if (!props.loading) props.onClick(event)
    }
    return {onClick}
}

export default useButton