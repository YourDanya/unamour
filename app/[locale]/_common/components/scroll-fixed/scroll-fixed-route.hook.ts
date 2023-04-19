import {useRef} from 'react'
import {useLayoutEffect} from 'react'
import {MutableRefObject} from 'react'
import {StateRef} from 'app/[locale]/_common/components/scroll-fixed/scroll-fixes.types'
import {State} from 'app/[locale]/_common/components/scroll-fixed/scroll-fixes.types'
import {useRouter} from 'next/navigation'

const useScrollFixedRoute = (state: State, setState: (state: State) => void, stateRef: MutableRefObject<StateRef>,
                             elemRef: MutableRefObject<HTMLDivElement | null>) => {

    const router = useRouter()
    const ref = useRef(false)

    useLayoutEffect(() => {
        ref.current = true
        const elemRect = elemRef.current?.getBoundingClientRect() as DOMRect
        const toScroll = stateRef.current.scrollY - stateRef.current.toParentTop
        // console.log('ref', ref.current)
        // console.log('on path change')
        // console.log('scrollY', stateRef.current.scrollY)
        // console.log('toParentTop', stateRef.current.toParentTop)
        // console.log('toScroll', toScroll)
        setState({...state, translateY: 0})
        stateRef.current = {toParentTop: 0, position: state.position, scrollY: toScroll, first: false, toBottom: false,
            height: 0, parentToPageTop: stateRef.current.parentToPageTop, self: true}

        scroll(0, toScroll)
    }, [router.asPath])
}

export default useScrollFixedRoute