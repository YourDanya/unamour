import {useState} from 'react'
import {useLayoutResizeObserve} from 'hooks/component/component.hooks'
import {useLayoutEffect} from 'react'
import {useRef} from 'react'
import {useRouter} from 'next/router'
import {Locale} from 'types/types'
import {useGetParamForImages} from 'hooks/other/other.hooks'

export const useShopItemsCollection = () => {
    const {width, height, elemRef} = useGetParamForImages(4 / 3)

    const locale = useRouter().locale as Locale

    return {width, elemRef, locale}
}

export default useShopItemsCollection