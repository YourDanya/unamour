import {useSelector} from 'react-redux'
import {selectX} from 'redux/test/test.selectors'
import {selectY} from 'redux/test/test.selectors'
import {useDispatch} from 'react-redux'
import {incrY} from 'redux/test/test.slice'
import {incrX} from 'redux/test/test.slice'

const TestFirst = () => {
    const x = useSelector(selectX)
    const y = useSelector(selectY)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(incrY())
        dispatch(incrX())
    }

    return (
        <div className={'test-first'}>
            <div className={'test-first__x'}>
                {x}
            </div>
            <div className={'test-first__y'}>
                {y}
            </div>
            <button className={'test-first__btn'} onClick={handleClick}>
                dispatch test
            </button>
        </div>
    )
}

export default TestFirst