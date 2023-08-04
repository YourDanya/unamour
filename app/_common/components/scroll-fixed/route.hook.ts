import {useRef} from 'react'
import {useLayoutEffect} from 'react'
import {MutableRefObject} from 'react'
import {StateRef} from 'app/_common/components/scroll-fixed/scroll-fixes.types'
import {State} from 'app/_common/components/scroll-fixed/scroll-fixes.types'
import {useRouter} from 'next/navigation'
import {useGetState} from 'app/_common/components/scroll-fixed/scroll-fixed.hook'
import {usePathname} from 'next/navigation'
import {useSearchParams} from 'next/navigation'
import {useEffect} from 'react'

export const useRoute = (values: ReturnType<typeof useGetState>) => {
    const ref = useRef(false)
    const {elemRef, stateRef, state, setState} = values

    const path = usePathname() + useSearchParams().toString()

    useLayoutEffect(() => {
        ref.current = true
        const elemRect = elemRef.current?.getBoundingClientRect() as DOMRect
        const toScroll = stateRef.current.scrollY - stateRef.current.toParentTop

        setState({...state, marginTop: 0})

        stateRef.current = {
            toParentTop: 0, position: state.position, scrollY: toScroll, first: false, toBottom: false,
            height: 0, self: true
        }
    }, [path])
}
