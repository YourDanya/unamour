import {MutableRefObject, useEffect, useRef, useState} from "react"
import {useApiCall} from "../../api/api-call/api-call.hook"
import {useSearchParams} from "next/navigation";

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

    const shouldSkipRef = useRef(false)

    const scrollRef = useRef<() => void>(() => {})

    const searchParams = useSearchParams()

    scrollRef.current = () => {
        if (!elemRef.current || shouldSkipRef.current) {
            return
        }

        const bottom = elemRef.current.getBoundingClientRect().bottom

        if (bottom > window.innerHeight + 50) {
            return
        }

        shouldSkipRef.current = true

        const params = new URLSearchParams(searchParams)
        let newUrl = url

        if (params.toString() === '') {
            newUrl += `?page=${nextPage}`
        } else {
            newUrl += `&page=${nextPage}`
        }

        console.log('newUrl', newUrl)

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

    return {getItems}
}

