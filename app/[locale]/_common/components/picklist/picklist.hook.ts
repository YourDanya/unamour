import {MouseEvent} from 'react'
import {PicklistProps} from 'app/[locale]/_common/components/picklist/picklist.types'
import {useState} from 'react'

const usePicklist = (props: PicklistProps) => {
    const {name, active, setValues, setValue} = props
    const [show, setShow] = useState(false)

    const onChange = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        const value = event.currentTarget.getAttribute('data-value') as string
        if (setValues && name) setValues({[name]: value})
        if (setValue) setValue(value)
    }

    const toggle = () => {
        setShow(!show)
    }

    return {show, toggle, onChange, active}
}

export default usePicklist