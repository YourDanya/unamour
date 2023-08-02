import {useGetParamForImages} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useState} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'

const useImages = () => {
    const [current, setCurrent] = useState(0)

    const onTab: MouseAction = (event) => {
        const name = event.currentTarget.getAttribute('data-index') as string
        setCurrent(+name)
    }

    const {height, elemRef} = useGetParamForImages()

    return {current, onTab, setCurrent, elemRef, height}
}

export default useImages