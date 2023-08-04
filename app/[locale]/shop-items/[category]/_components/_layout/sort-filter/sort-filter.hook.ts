import React from 'react'
import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import {MouseAction} from 'app/_common/types/types'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/shop-items/[category]/_components/_layout/sort-filter/sort-filter.content'
import {useEffect} from 'react'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import useDebounce from 'app/_common/hooks/helpers/debounce/debounce.hook'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const useSortFilter = (props: FilterProps) => {
    const {createParams, params} = props

    const transl = useLocale(dictionary)

    const paramValue = params.get('sort')
    const [sortValue, setSortValue] = useState(paramValue)

    const onClick: MouseAction = (event) => {
        const name = event.currentTarget.getAttribute('name')!
        let value = ''
        if (sortValue !== name) {
            value = name
        }
        setSortValue(value)
        createParams({value, name: 'sort'})
    }

    useEffect(() => {
        if (paramValue !== sortValue) {
            setSortValue(paramValue)
        }
    }, [paramValue])

    return {onClick, sortValue, transl}
}

export default useSortFilter
