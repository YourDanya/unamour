import {createUrlStore} from 'app/[locale]/_store/url/url.store'
import {useRef} from 'react'
import {LayoutProps} from 'app/[locale]/_components/layout/layout.types'

export const useLayout = (props: LayoutProps) => {
    const {locale} = props
    const storeRef = useRef(createUrlStore({locale}))

    return {storeRef}
}

export default useLayout