import {create} from 'zustand'
import {UrlState} from 'app/[locale]/_store/url/url.types'
import {CreateUrlStore} from 'app/[locale]/_store/url/url.types'
import {createContext} from 'react'
import {StoreApi} from 'zustand'
import {useContext} from 'react'
import {UseUrlStore} from 'app/[locale]/_store/url/url.types'
import {useStore} from 'zustand'

export const UrlContext = createContext<StoreApi<UrlState>>({} as StoreApi<UrlState>)

export const createUrlStore: CreateUrlStore = ({locale}) => {
    return create((set) => ({
        locale
    }))
}

export const useUrlStore: UseUrlStore = (selector, equalityFn) => {
    const store = useContext(UrlContext)
    return useStore(store, selector, equalityFn)
}