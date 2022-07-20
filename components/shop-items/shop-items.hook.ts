import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import {removeFromArr} from "../../utils/main.utils";
import {ShopItemsProps} from "./shop-items.component";
import {useLocale} from "../../hooks/hooks";
import {ShopItemsContent} from "./shop-items.content";
import {Property} from "csstype";
import Position = Property.Position;

const useShopItems = (props: ShopItemsProps) => {
    const router = useRouter()
    const [content] = useLocale(ShopItemsContent)
    const [sort, setSort] = useState<string | undefined>()
    const [price, setPrice] = useState<{ num1: string, num2: string }>({
        num1: content.price.num1,
        num2: content.price.num2,
    })
    const [sizes, setSizes] = useState<string[]>([])
    const [colors, setColors] = useState<string[]>([])

    const {children} = props

    const handleSortClick = (param: string) => {
        if (param === sort) {
            setSort(undefined)
        } else {
            setSort(param)
        }
    }

    const handlePriceInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 5) return
        setPrice({...price, [event.target.name]: event.target.value})
    }

    const handleSizeClick = (size: string) => {
        if (sizes?.includes(size)) {
            sizes.push(size)
        } else {
            setSizes(removeFromArr(sizes, size))
        }
    }

    const handleColorClick = (color: string) => {
        if (colors?.includes(color)) {
            colors.push(color)
        } else {
            setColors(removeFromArr(colors, color))
        }
    }

    const [menuState, setMenuState] = useState<{
        position: Position,
        translateY?: number | string,
        top?: number | string,
        bottom?: number | string
    }>({
        position: 'fixed',
        top: 100,
        bottom: 'unset'
    })

    const positionRef = useRef({position: 'fixed', top1: 100, scrollY: 0, top2: 0})
    const divRef = useRef<HTMLDivElement | null>(null)
    const pageRef = useRef<HTMLDivElement | null>(null)

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
        if (typeof window !== undefined) {
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    useEffect(() => {

    }, [divRef.current?.clientHeight])

    return {
        ...props, menuState, divRef, handlePriceInputChange, price, handleSortClick, handleSizeClick, sort,
        handleColorClick, pageRef, content
    }
}

export default useShopItems