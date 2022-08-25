import {useEffect, useRef, useState} from "react"

type StickyState = {
    position: 'static',
    top: string,
    bottom: string,
    translateX: string
}

const useStickySidebar = () => {
    const [state, setState] = useState<StickyState>(
        {
            position: 'static',
            top: 'unset',
            bottom: 'unset',
            translateX: 'unset'
        })
    const stateRef = useRef()
    const elemRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const options = {
            rootMargin: '0px 0px -10px 0px',
            threshold: 0.99
        }
        const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            console.log('callback')
            entries.forEach(entry => console.log(entry.intersectionRatio))
        }
        const observer =  new IntersectionObserver(callback, options)
        observer.observe(elemRef.current as Element)
    }, [])

    return {elemRef, state}
}

export default useStickySidebar