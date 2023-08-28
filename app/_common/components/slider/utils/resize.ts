import {useArrows} from 'app/_common/components/slider/utils/arrows'
import useDebounce from 'app/_common/hooks/helpers/debounce/debounce.hook'
import {calc} from 'app/_common/components/slider/utils/calc'
import {useEffect} from 'react'
import {useLayoutEffect} from 'react'

export const useResize = (state: ReturnType<typeof useArrows>) => {
    const {resizing, setResizing, mounted, setTransition, elemsRef, transition} = state

    const stopResize = useDebounce(() => {
        setResizing(false)
    }, 200)

    const calcResize = () => {
        if (!mounted) {
            return
        }
        stopResize()
        if (resizing) {
            return
        }
        setResizing(true)
        setTransition('unset')
        calc({...state, resizing: true})
    }

    useLayoutEffect(() => {
        if (elemsRef.current[elemsRef.current.length - 1] === null) {
            elemsRef.current.pop()
        }

        window.addEventListener('resize', calcResize)
        return () => {
            window.removeEventListener('resize', calcResize)
        }
    })

    useLayoutEffect(() => {
        if (resizing || !mounted) {
            return
        }
        calc(state)
        requestAnimationFrame(() => {
            setTransition('0.4s all')
        })
    }, [resizing])
}