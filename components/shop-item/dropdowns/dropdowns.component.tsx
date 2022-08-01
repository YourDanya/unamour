import React from "react";
import Dropdown from "../../common/dropdown/dropdown.component";

type dropdownsProps = {
    description: string,
    composition: string,
    parameters: string,
    delivery: string
}

const Dropdowns: React.FC<dropdownsProps> = (props) => {
    const {description, composition, parameters, delivery} = props
    return (
        <div className='shop-item__dropdowns'>
            <Dropdown className={'shop-item__dropdown'} name={'ОПИС'} plus>
                {description}
            </Dropdown>
            <Dropdown className={'shop-item__dropdown'} name={'СКЛАД І ДОГЛЯД'} plus>
                {composition}
            </Dropdown>
            <Dropdown className={'shop-item__dropdown'} name={'ПАРАМЕТРИ ВИРОБУ'} plus>
                {parameters}
            </Dropdown>
            <Dropdown className={'shop-item__dropdown'} name={'ДОСТАВКА І ОПЛАТА'} plus>
                {delivery}
            </Dropdown>
        </div>
    )
}

export default Dropdowns