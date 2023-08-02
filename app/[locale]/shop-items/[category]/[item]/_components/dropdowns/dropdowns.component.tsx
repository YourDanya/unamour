import {FC} from 'react'
import Dropdown from 'app/[locale]/_common/components/dropdown/dropdown.component'
import {DropdownsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/dropdowns/dropdowns.types'
import useDropdowns from 'app/[locale]/shop-items/[category]/[item]/_components/dropdowns/dropdowns.hook'

const Dropdowns: FC<DropdownsProps> = (props) => {
    const {transl: {description, composition, parameters, delivery}} = props
    const {transl} = useDropdowns()

    return (
        <div className='shop-item-info info'>
            <Dropdown className={'info__dropdown'} name={transl.description}>
                <div className={'info__text'}>
                    {description}    
                </div>
            </Dropdown>
            <Dropdown className={'info__dropdown'} name={transl.composition}>
                <div className={'info__text'}>
                    {composition}    
                </div>
            </Dropdown>
            <Dropdown className={'info__dropdown'} name={transl.parameters}>
                <div className={'info__text'}>
                    {parameters}    
                </div>
            </Dropdown>
            <Dropdown className={'info__dropdown'} name={transl.delivery}>
                <div className={'info__text'}>
                    {delivery}
                </div>
            </Dropdown>
        </div>
    )
}

export default Dropdowns