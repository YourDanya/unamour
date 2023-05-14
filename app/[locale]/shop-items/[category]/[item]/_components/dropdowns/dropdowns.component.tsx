import {FC} from 'react'
import Dropdown from 'app/[locale]/_common/components/dropdown/dropdown.component'
import {DropdownsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/dropdowns/dropdowns.types'
import useDropdowns from 'app/[locale]/shop-items/[category]/[item]/_components/dropdowns/dropdowns.hook'


const Dropdowns: FC<DropdownsProps> = (props) => {
    const {description, composition, parameters, delivery} = props
    const {transl} = useDropdowns()

    return (
        <div className='shop-item__dropdowns'>
            <Dropdown className={'shop-item__dropdown'} name={transl.description}>
                {description}
            </Dropdown>
            <Dropdown className={'shop-item__dropdown'} name={transl.composition}>
                {composition}
            </Dropdown>
            <Dropdown className={'shop-item__dropdown'} name={transl.parameters}>
                {parameters}
            </Dropdown>
            <Dropdown className={'shop-item__dropdown'} name={transl.delivery}>
                {delivery}
            </Dropdown>
        </div>
    )
}

export default Dropdowns