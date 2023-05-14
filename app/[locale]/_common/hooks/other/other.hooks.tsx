import Link from 'next/link'
import {useMemo} from 'react'
import {ElementContent} from 'app/[locale]/_common/types/types'
import {useOmitFirstEffect} from 'app/[locale]/_common/hooks/component/component.hooks'
import {UseLocale} from 'app/[locale]/_common/hooks/other/other.types'
import {UseMemoizeObject} from 'app/[locale]/_common/hooks/other/other.types'
import {UseGetParamForImages} from 'app/[locale]/_common/hooks/other/other.types'
import {useRef} from 'react'
import {checkEqual} from 'app/[locale]/_common/utils/main/main.utils'
import {useLayoutEffect} from 'react'
import {useState} from 'react'
import {Locale} from 'app/[locale]/_common/types/types'
import {useRouter} from 'next/navigation'
import {usePathname} from 'next/navigation'
import {useSearchParams} from 'next/navigation'
import {useUrlStore} from 'app/[locale]/_store/url/url.store'

export const useRouteChange = (callback: (() => void) | undefined) => {
    const path = usePathname()

    useOmitFirstEffect(() => {
        if (callback) {
            callback()
        }
    }, [path])
}

export const useMatchUrl = (url: string): [match: boolean] => {
    return [usePathname() === url]
}

export const useLocale: UseLocale = ((content) => {
    const locale = useUrlStore(state => state.locale)
    const {translations, common} = content
    return common? [translations[locale], common] : [translations[locale]]
}) as UseLocale

export const useGetParamForImages: UseGetParamForImages = (ratio = 4 / 3, ...deps) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    // useLayoutResizeObserve(() => {
    //     const width = elemRef.current?.getBoundingClientRect().width as number
    //     setWidth(width)
    //     setHeight(width * ratio)
    // })

    const calcParams = () => {
        const width = elemRef.current?.getBoundingClientRect().width as number
        setWidth(width)
        setHeight(width * ratio)
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', calcParams)
        return () => {
            window.removeEventListener('resize', calcParams)
        }
    }, [])

    useLayoutEffect(() => {
        calcParams()
    }, [deps])

    const elemRef = useRef<HTMLDivElement>(null)

    return {width, height, elemRef}
}

export const useMemoizeObject: UseMemoizeObject = (obj) => {
    const objRef = useRef<typeof obj>(null as typeof obj)
    const updateRef = useRef<Date>()
    let update

    if (!checkEqual(objRef.current, obj)) {
        updateRef.current = new Date()
        update = updateRef.current
        objRef.current = obj
    } else {
        update = updateRef.current
    }

    return useMemo(() => (JSON.parse(JSON.stringify(obj))), [update])
}