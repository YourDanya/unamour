import useGetParamForImages from 'app/_common/hooks/helpers/get-param-for-images/get-param-for-images.hook'
import {useState} from 'react'
import {MouseAction} from 'app/_common/types/types'

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