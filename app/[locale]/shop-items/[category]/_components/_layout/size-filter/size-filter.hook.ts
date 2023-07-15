import {ChangeEvent} from 'react'
import {useRef} from 'react'
import {useState} from 'react'
import {sizes} from 'app/[locale]/_content/size/size.content'
import {useMemo} from 'react'
import {boolean} from 'zod'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useDebounce} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import useCheckFilter from 'app/[locale]/shop-items/[category]/_components/_layout/check-filter/check-filter.hook'

const useSizesFilter = (props: FilterProps) => {
    const {createFilter} = props

    const checkState = useCheckFilter({
        props, name: 'size', initArrValues: sizes
    })

    const {values} = checkState

    return {...checkState}
}

export default useSizesFilter
