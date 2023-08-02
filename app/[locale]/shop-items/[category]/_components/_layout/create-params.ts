import {filterNames} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.content'
import {useGetParamsState} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'

export const createParams = (state: ReturnType<typeof useGetParamsState> & {suspend?: boolean}) => {
    const {params, router, paramValuesRef, pathname, setParamsUrl, suspend} = state

    if (suspend) {
        return
    }

    const paramsUrl = filterNames.reduce((url, filterName) => {
        let filterValue = paramValuesRef.current[filterName]

        if (filterValue) {
            const newValue = `${filterName}=${filterValue}`
            url = addValueToUrl({value: newValue, url})
        }

        return url
    }, '')

    const newUrl = `${pathname}/${paramsUrl}`
    router.push(newUrl)
    setParamsUrl(paramsUrl)
}

const addValueToUrl = ({value, url}: { value: string, url: string }) => {

    if (url === '') {
        url += `?${value}`
    } else {
        url += `&${value}`
    }

    return url
}