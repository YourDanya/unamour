import React from 'react'
import Dropdown from 'components/common/dropdown/dropdown.component'

type DropdownsProps = {
    description: string,
    composition: string,
    parameters: string,
    delivery: string
}

const Dropdowns: React.FC<DropdownsProps> = (props) => {
    const {description, composition, parameters, delivery} = props

    return (
        <div className='shop-item__dropdowns'>
            <Dropdown className={'shop-item__dropdown'} name={'ОПИС'}>
                {description}
            </Dropdown>
            <Dropdown className={'shop-item__dropdown'} name={'СКЛАД І ДОГЛЯД'}>
                {composition}
            </Dropdown>
            <Dropdown className={'shop-item__dropdown'} name={'ПАРАМЕТРИ ВИРОБУ'}>
                {parameters}
            </Dropdown>
            <Dropdown className={'shop-item__dropdown'} name={'ДОСТАВКА І ОПЛАТА'}>
                {delivery}
            </Dropdown>
        </div>
    )
}

export default Dropdowns