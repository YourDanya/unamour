import {Locale} from 'redux/main/main.types'
import {fetchItems} from 'redux/shop-items/shop-items.thunk'
import {AppPropsWithLayout} from 'types/types'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getUser} from 'redux/user/user.thunk'
import {selectClientItems} from 'redux/shop-items/shop-items.slice'
import {setLocale, setPath} from 'redux/main/main.slice'


const useApp = (props: AppPropsWithLayout) => {
    const {Component} = props

    let getLayout = Component.getLayout ?? ((page) => page)
    const slug = useRouter().query.slug
    if (slug && slug.length !== 1) getLayout = ((page) => page)

    const dispatch = useDispatch()
    const items = useSelector(selectClientItems)

    useEffect(() => {
        if (items.length == 0) {
            console.log('no items')
            dispatch(fetchItems())
        }
        dispatch(getUser())
    }, [])

    const router = useRouter()
    const path = router.asPath
    const locale = router.locale as Locale

    useEffect(() => {
        dispatch(setPath(path))
    }, [path])

    useEffect(() => {
        dispatch(setLocale(locale))
    }, [locale])

    return {...props, getLayout}
}

export default useApp