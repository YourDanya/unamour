import {useToggle} from 'hooks/event-handler/event-handler.hooks'
import {PicklistProps} from 'components/common/picklist/picklist.types'
import {MouseEvent} from 'react'

const usePicklist = (props: PicklistProps) => {
    const {name, active, setValues, setValue} = props
    const [show, toggle] = useToggle()

    const onChange = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        const value = event.currentTarget.getAttribute('data-value') as string
        if (setValues && name) setValues({[name]: value})
        if (setValue) setValue(value)
    }

    return {show, toggle, onChange, active}
}

export default usePicklist