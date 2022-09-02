import {ResetFilter, State2} from "./shop-items.types"
import {useOmitFirstEffect} from "../../hooks/component.hooks"
import {useRouter} from "next/router"

export const useResetFilter: ResetFilter = (filter, setState, toUpdate, state) => {

    const router = useRouter()
    const path = router.asPath
    const pathArr = path.split('?')
    const mainPath = pathArr[0]
    
    useOmitFirstEffect(() => {

        if (mainPath===path) {
            console.log('use reset filter', filter)
            toUpdate.current = false
            if (filter === 'sorting') {
                setState('')
            }
            else {
                const newState = state as State2
                Object.keys(newState).forEach(key => newState[key] = false)
                console.log('state', state)
                console.log('new state', newState)
                setState({...newState})
            }
        }
    }, [path])
}