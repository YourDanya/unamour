import React from 'react'
import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useState} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/shop-items/[category]/_components/_layout/sort-filter/sort-filter.content'
import {useEffect} from 'react'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useDebounce} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const useSortFilter = (props: FilterProps) => {
    const {createFilter, params} = props

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
        createFilter({value, name: 'sort'})
    }

    useEffect(() => {
        if (paramValue !== sortValue) {
            setSortValue(paramValue)
        }
    }, [paramValue])

    return {onClick, sortValue, transl}
}

export default useSortFilter
