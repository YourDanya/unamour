import {FC} from 'react'
import Button from 'components/common/button/button.component'
import usePicklist from 'components/common/picklist/picklist.hook'
import {PicklistProps} from 'components/common/picklist/picklist.types'

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