import {useState} from 'react'
import {useLayoutResizeObserve} from 'hooks/component/component.hooks'
import {useLayoutEffect} from 'react'
import {useRef} from 'react'

export const useShopItemsCollection = () => {
    const [width, setWidth] = useState(0)

    useLayoutResizeObserve(() => {{
        if (itemRef.current) {
            setWidth(itemRef.current.getBoundingClientRect().width)
        }
    }})

    useLayoutEffect(() => {
        const width = itemRef.current?.getBoundingClientRect().width as number
        setWidth(width)
    }, [])

    const itemRef = useRef<HTMLDivElement>(null)

    return {width, itemRef}
}

export default useShopItemsCollection