import {useState} from 'react'
import {_selectUserField} from 'redux/user/user.selectors'
import {useArgSelector} from 'hooks/enhanced/enhanced.hooks'
import {UserField} from 'redux/user/user.types'

const TestFirst = () => {
    const [counter, setCounter] = useState(0)
    const handleCounter = () => {
        setCounter(counter+1)
    }

    const [fieldOne, setFieldOne] = useState<UserField>('register')
    const handleFieldOne = () => {
        if (fieldOne === 'register') {
            setFieldOne('login')
        }
        else {
            setFieldOne('register')
        }
    }

    const register = useArgSelector(_selectUserField, fieldOne)
    const sendCode = useArgSelector(_selectUserField, 'register')

    return (
        <div className={'test-first'}>
            <button className={'test-first__btn'} onClick={handleCounter}>
                {counter}
            </button>
            <button className={'test-first__btn'} onClick={handleFieldOne}>
                {fieldOne}
            </button>
        </div>
    )
}

export default TestFirst