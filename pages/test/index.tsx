import {NextPage} from 'next'
import {useState} from 'react'
import {useMemo} from 'react'
import PaginationArray from 'components/common/pagination/pagination-array/pagination-array.component'
import {FC} from 'react'

const Test: NextPage = () => {
    const [number, setNumber] = useState(1000000)

    const arr = useMemo(() => {
        const arr = []
        for (let i = 0; i < number; i++) {
            arr.push(i)
        }
        return arr
    }, [number])

    // const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setNumber(+event.currentTarget.value)
    // }

    const Elem: FC<{data: string}> = ({data}) => {
        return (
            <div>
                elem {data}
            </div>
        )
    }

    return (
        <div className={'test'}>
            <PaginationArray Component={Elem} arr={arr}/>
            {/*<input type="number" value={number} onChange={onChange}/>*/}
        </div>
    )
}

export default Test