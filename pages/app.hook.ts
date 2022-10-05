import {AppPropsWithLayout} from 'types/types'
import {useRouter} from 'next/router'
import {Locale} from 'redux/main/main.types'
import {useEffect} from 'react'
import {setPath} from 'redux/main/main.slice'
import {setLocale} from 'redux/main/main.slice'
import {useDispatch} from 'react-redux'

const useApp = (props: AppPropsWithLayout) => {
    const {Component} = props

    let getLayout = Component.getLayout ?? ((page) => page)
    const slug = useRouter().query.slug
    if (slug && slug.length !== 1) getLayout = ((page) => page)

    const router = useRouter()
    const path = router.asPath
    const locale = router.locale as Locale
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPath(path))
    }, [path])

    useEffect(() => {
        dispatch(setLocale(locale))
    }, [locale])

    return {getLayout}
}

export default useApp
