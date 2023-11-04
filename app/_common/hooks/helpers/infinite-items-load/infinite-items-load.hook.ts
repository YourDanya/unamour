import {MutableRefObject, useEffect, useRef, useState} from "react"
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'

export const useInfiniteItemsLoad = <ItemT,> (params: {
    items: ItemT[], setItems: (items: ItemT[]) => void, url: string, elemRef: MutableRefObject<HTMLDivElement | null>,
    nextPage: number, setNextPage: (nextPage: number) => void
}) => {

    const {items, setItems, url, nextPage, setNextPage, elemRef} = params

    const getItems = useApiCall<{ items: ItemT[], total: number }>({
        onSuccess: ({items: newItems}) => {
            setItems([...items, ...newItems])
            setNextPage(nextPage + 1)
            shouldSkipRef.current = getItems.data?.total === items.length + newItems.length
        }
    })

    const itemsLengthRef = useRef(items.length)

    const shouldSkipRef = useRef(false)

    const scrollRef = useRef<() => void>(() => {})

    scrollRef.current = () => {
        if (!elemRef.current || shouldSkipRef.current) {
            return
        }

        const bottom = elemRef.current.getBoundingClientRect().bottom

        if (bottom > window.innerHeight + 50) {
            return
        }

        shouldSkipRef.current = true

        const urlObj = new URL(`https://${url}`)
        urlObj.searchParams.append('page', `${nextPage}`)
        const newUrl = urlObj.href.split('https://')[1]

        getItems.start({url: newUrl})
    }
    const onScroll = () => {
        scrollRef.current()
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    useEffect(() => {
        if (items.length < itemsLengthRef.current) {
            shouldSkipRef.current = false
        }
        itemsLengthRef.current = items.length
    }, [items])

    return {getItems}
}

