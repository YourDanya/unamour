import {useRouter} from "next/router"
import {useDispatch, useSelector} from "react-redux"
import {selectClientItems} from "../redux/shop-items/shop-items.slice"
import {useEffect} from "react"
import {fetchItems} from "../redux/shop-items/shop-items.thunk"
import {AppPropsWithLayout} from "../types/types"

const useApp = (props: AppPropsWithLayout) => {
    const {Component} = props

    let getLayout = Component.getLayout ?? ((page) => page)
    const slug = useRouter().query.slug
    if (slug && slug.length!==1) getLayout = ((page) => page)

    const dispatch = useDispatch()
    const items = useSelector(selectClientItems)

    useEffect(() => {
        if (items.length==0) {
            dispatch(fetchItems())
        }
    }, [])

    return {...props, getLayout}
}

export default useApp