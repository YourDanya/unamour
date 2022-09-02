import {useEffect, useRef, useState} from "react"
import {Property} from "csstype"
import Position = Property.Position

type StickyState = {
    position: Position,
    top: string,
    bottom: string,
    translateY: string
}

const useStickySidebar = () => {
    const [state, setState] = useState<StickyState>(
        {
            position: 'static',
            top: 'unset',
            bottom: 'unset',
            translateY: '0'
        })
    const stateRef = useRef()
    const elemRef = useRef<HTMLDivElement>(null)

    const options = {
        rootMargin: '-20px 0px 0px 0px',
        threshold: [1]
    }

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        console.log('callback')
        entries.forEach(entry => {
            if(entry.intersectionRatio<1) {
                setState({bottom: 'unset', top: '0', position: 'fixed', translateY: '20px'})
            }
            // if (entry.isIntersecting)
        })
    }

    useEffect(() => {
        const observer =  new IntersectionObserver(callback, options)
        observer.observe(elemRef.current as Element)
    }, [])

    return {elemRef, state}
}

export default useStickySidebar