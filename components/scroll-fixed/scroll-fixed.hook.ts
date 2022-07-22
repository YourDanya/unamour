import {scrollFixedProps} from "./scroll-fixed.component"
import {useEffect, useRef, useState} from "react";
import {Property} from "csstype";
import Position = Property.Position;

export type State = {
    position: Position,
    translateY?: number | string,
    top?: number | string,
    bottom?: number | string
}

const useScrollHook = (props: scrollFixedProps) => {

    const [menuState, setMenuState] = useState<State>({
        position: 'fixed',
        top: 100,
        bottom: 'unset'
    })

    const positionRef = useRef({position: 'fixed', top1: 100, scrollY: 0, top2: 0})
    const divRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = (event: Event) => {
        const scrollY = window.scrollY
        const viewPort = window.innerHeight
        const menuHeight = divRef.current?.clientHeight as number

        const rect = divRef.current?.getBoundingClientRect() as DOMRect

        if (scrollY > positionRef.current.scrollY) {
            //scrolling down
            if (rect.bottom < viewPort) {
                //reaching menu end
                positionRef.current.top2 = scrollY + viewPort - menuHeight
                if (positionRef.current.position !== 'fixed') {
                    //checking if we already set position
                    positionRef.current.position = 'fixed'
                    setMenuState({position: 'fixed', bottom: 10, top: 'unset'})
                }
            } else {
                if (positionRef.current.position !== 'absolute') {
                    //checking if we already set position
                    positionRef.current.position = 'absolute'
                    setMenuState({position: 'absolute', top: positionRef.current.top1})
                }
            }
        } else {
            //scrolling up
            if (positionRef.current.top2 >= scrollY + 100) {
                //reaching menu top
                if (positionRef.current.position !== 'fixed') {
                    //checking if we already set position
                    positionRef.current.position = 'fixed'
                    setMenuState({position: 'fixed', top: 100, bottom: 'unset'})
                }
                positionRef.current.top1 = scrollY + 100
            } else {
                if (positionRef.current.position !== 'absolute') {
                    //checking if we already set position
                    positionRef.current.position = 'absolute'
                    setMenuState({position: 'absolute', top: positionRef.current.top2})
                }
            }
        }

        positionRef.current.scrollY = scrollY
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {

    }, [divRef.current?.clientHeight])

    return {...props, menuState, divRef}
}

export default useScrollHook