import {useState} from 'react'
import {Children} from 'react'
import {useSetActive} from 'hooks/event-handler/event-handler.hooks'
import {PaginationProps} from 'components/common/pagination/pagination.types'
import {ChangeEvent} from 'react'
import {useRef} from 'react'
import {useLayoutEffect} from 'react'

const usePagination = (props: PaginationProps) => {
    const children = Children.toArray(props.children)
    const childRef = useRef<HTMLDivElement>(null)

    const [currentPage, onPageClick, setCurrentPage] = useSetActive(1)
    const [perPage, _setPerPage] = useState(5)
    const setPerPage = (value: string) => {
        _setPerPage(+value)
    }
    const onPageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        setPerPage(value)
    }

    const perPageValues = Array.from({length: 10}, (elem: number) => elem + 1)
    const pagesNumber = Math.ceil(children.length / perPage)

    const onBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const onForward = () => {
        if (currentPage < pagesNumber) {
            setCurrentPage(currentPage + 1)
        }
    }

    const [width, setWidth] = useState(0)

    const observeChildren = () => {
        const elem = childRef.current as Element
        setWidth(elem.getBoundingClientRect().width)
    }

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(observeChildren)
        const elem = childRef.current as Element
        resizeObserver.observe(elem)
        return () => {
            resizeObserver.unobserve(elem)
        }
    }, [])

    return {
        onBack, onForward, children, currentPage, perPage, pagesNumber, onPageClick, perPageValues, setPerPage,
        onPageChange, childRef, width
    }
}

export default usePagination
