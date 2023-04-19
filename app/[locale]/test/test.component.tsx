'use client'

import {useSearchParams} from 'next/navigation'
import {useUrlStore} from 'app/[locale]/_store/url/url.store'

const Test = () => {
    const locale = useUrlStore(state => state.locale)

    return (
        <div>
            test
        </div>
    )
}

export default Test