import {MutableRefObject, useEffect, useRef} from "react"
import {useRouter} from "next/router"
import {State, StateRef} from "./scroll-fixes.types"

const useScrollFixedRoute = (state: State, setState: (state: State) => void, stateRef: MutableRefObject<StateRef>,
                             elemRef: MutableRefObject<HTMLDivElement | null>) => {

    const router = useRouter()

    const ref = useRef(false)

    useEffect(() => {
        ref.current = true
        const elemRect = elemRef.current?.getBoundingClientRect() as DOMRect
        const toScroll = stateRef.current.scrollY - stateRef.current.toParentTop
        // console.log('ref', ref.current)
        // console.log(stateRef.current.scrollY, stateRef.current.toParentTop)
        // console.log('toScroll', toScroll)
        setState({...state, translateY: 0})
        stateRef.current = {toParentTop: 0, position: state.position, scrollY: 0, first: false, toBottom: false, height: 0, parentToPageTop: stateRef.current.parentToPageTop}
        scroll(0, toScroll)
    }, [router.asPath])
}

export default useScrollFixedRoute