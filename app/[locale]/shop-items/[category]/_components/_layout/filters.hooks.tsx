import {useEffect, useMemo, useRef, useState} from 'react'
import {useDebounceEffect} from 'app/[locale]/_common/hooks/component/component.hooks'
import {useRouter} from 'next/navigation'
import {ColorContent} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {GenState} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {GeneralContent} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {ResetFilter} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {PriceContent} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {FilterContent} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {HandleFilter} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {PriceState} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {UseFilter} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {usePathname} from 'next/navigation'
import {useSearchParams} from 'next/navigation'

// export const useResetFilter: ResetFilter = (filter, setState, toUpdate, state) => {
//     const router = useRouter()
//     const path = usePathname()
//     const pathArr = path.split('?')
//     const mainPath = pathArr[0]
//
//     useEffect(() => {
//         if (useSearchParams().get('reset')) {
//             toUpdate.current = false
//             if (filter === 'sorting') {
//                 setState('')
//             }
//             else if (filter === 'price') {
//                 setState({min: '1000', max: '16000'})
//             }
//             else {
//                 const newState = state as GenState
//                 Object.keys(newState).forEach(key => newState[key] = false)
//                 setState({...newState})
//             }
//         }
//     }, [path])
// }
//
//
// export const useHandleFilter: HandleFilter = (toUpdate, filters, filter, state)=> {
//     const router = useRouter()
//     const path = usePathname()
//     const query = useSearchParams()
//     const mainPath = path.split('?')[0]
//     const reset = !('reset' in query)
//     const pathRef = useRef({query, mainPath, reset})
//
//     useEffect(() => {
//         const mainPath = path.split('?')[0]
//         const reset = !('reset' in query)
//         pathRef.current = {query, mainPath, reset}
//     },[path])
//
//     useDebounceEffect(() => {
//         if (!toUpdate.current) {
//             toUpdate.current = true
//             return
//         }
//
//         const url = filters
//             .map(elem => {
//                 let param = ''
//                 if (elem === filter) {
//                     if (filter === 'sorting') {
//                         if (state === '') {
//                             param = ''
//                         }
//                         else {
//                             param = `${filter}=${state}`
//                         }
//                     }
//                     else if(filter === 'price') {
//                         const priceState = state as PriceState
//                         param = `price=${priceState.min}-${priceState.max}`
//                     }
//                     else {
//                         const objState = state as GenState
//                         const value = Object.keys(objState).filter(prop => objState[prop]).join(';')
//                         param = value ? `${filter}=${value}` : ''
//                     }
//                 } else if (elem in pathRef.current.query) {
//                     param = `${elem}=${query.get(elem)}`
//                 }
//                 return param
//             })
//             .filter(elem => elem !== '')
//             .join('&')
//             .replace(/^/, (...args) => args[2] === '' ? `${pathRef.current.mainPath}` :
//                 `${pathRef.current.mainPath}?`)
//
//         if (url!==path) {
//             router.push(url)
//         }
//
//     }, [state], 1000, pathRef.current.reset)
//
// }
//
// export const useGetFilterState = (filter: string, filterContent: FilterContent) => {
//     const router = useRouter()
//     const query = useSearchParams()
//     const pathParam = query.get(filter) as string ?? ''
//
//     return useMemo(() => {
//         if (filter === 'sorting') {
//             return pathParam
//         }
//         else if (filter === 'price') {
//             const priceContent = filterContent as PriceContent
//             if (pathParam) {
//                 const minMax = pathParam.split('-')
//                 return {min: minMax[0], max: minMax[1]}
//             } else {
//                 return {min: priceContent.min, max: priceContent.max}
//             }
//         }
//         else {
//             const pathParamValues = pathParam.split(';').reduce((accum, paramValue) => {
//                 accum[paramValue] = true
//                 return accum
//             }, {} as GenState) ?? {}
//             const state = {} as GenState
//             const genContent = filterContent as GeneralContent
//             if (typeof genContent[0] === 'string') {
//                 const generalContent = filterContent as GeneralContent
//                 generalContent.forEach(elem => state[elem] = pathParamValues[elem] ?? false)
//             } else {
//                 const colorContent = filterContent as ColorContent
//                 colorContent.forEach(elem => state[elem.slug] = pathParamValues[elem.slug] ?? false)
//             }
//             return state
//         }
//     }, [])
// }

// export const useFilter: UseFilter = (props) => {
//     const {filters, filter, content} = props
//
//     const toUpdate = useRef(false)
//
//     const retrievedState = useGetFilterState(filter, content)
//     const [state, setState] = useState(retrievedState)
//
//     useHandleFilter(toUpdate, filters, filter, state)
//     useResetFilter(filter, setState, toUpdate, state)
//
//     return [state, setState]
// }
