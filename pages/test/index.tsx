import {NextPage} from 'next'
import {useEffect, useRef, useState} from 'react'

const Test: NextPage = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={'container test'}>
            <Test2 type={'click'} callback={() => {setCount(count + 1)}}/>
            <div className={'test__count'}>
                {count}
            </div>
        </div>
    )
}

const Test2 = ({type, callback}: {type: string, callback: () => void}) => {
    const ref = useRef(callback)

    ref.current = callback

    useEffect(() => {
        const callback = () => ref.current()
        window.addEventListener(type, callback)
        return () => {
            window.removeEventListener(type, callback)
        }
    }, [type])

    return (<></>)
}

export default Test