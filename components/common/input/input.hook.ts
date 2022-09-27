import {InputProps} from 'components/common/input/input.component'
import {useDebounceEffect} from 'hooks/component/component.hooks'
import {useToggle} from 'hooks/event-handler.hooks'

const useInput = (props: InputProps) => {
    const {handleValidate, error, name, value} = props

    const [focused, _handleFocus] = useToggle()

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
       _handleFocus(event)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        _handleFocus(event)
        handleValidate && handleValidate(name)
    }

    useDebounceEffect(() => {
        if (handleValidate && error) {
            handleValidate(name)
        }
    }, [value])

    return {focused, handleFocus, handleBlur}
}

export default useInput