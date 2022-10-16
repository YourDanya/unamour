import {ButtonProps} from 'components/common/button/button.types'
import {MouseEvent} from 'react'

const useButton = (props: ButtonProps) => {
    const {loading, onClick} = props
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        if (!loading) onClick(event)
    }
    return {handleClick}
}

export default useButton