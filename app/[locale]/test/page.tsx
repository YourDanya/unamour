import {CategoryItem} from 'app/_common/types/types'
import Test from 'app/[locale]/test/test.component'
import {useSearchParams} from 'next/navigation'

const TestPage = async ({params}: any) => {
    return (<Test/>)
}

export default TestPage