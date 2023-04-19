'use client'

import {FC} from 'react'
import usePicklist from 'app/[locale]/_common/components/picklist/picklist.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import {PicklistProps} from 'app/[locale]/_common/components/picklist/picklist.types'
import 'app/[locale]/_common/components/picklist/picklist.styles.sass'

const Picklist: FC<PicklistProps> = (props) => {
    const {values, active} = props
    const {toggle, show, onChange} = usePicklist(props)

    return (
        <Button className={'picklist'} onClick={toggle}>
            <div className={'picklist__selected'}>
                {values}
            </div>
            <div className={`picklist__values ${show ? 'picklist__values--show' : ''}`}>
                {values?.map(value => (
                    <div
                        className={`picklist__value ${value === active ? 'picklist__value--active' : ''}`}
                        key={value}
                        data-value={value}
                        onClick={onChange}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </Button>
    )
}

export default Picklist