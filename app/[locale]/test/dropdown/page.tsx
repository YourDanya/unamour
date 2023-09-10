import Dropdown from 'app/_common/components/dropdown/dropdown.component'

const TestDropdown = () => {

    return (
        <div className={'test-dropdown test'}>
            <div className={'test__container'}>
                <Dropdown name={'test'}>
                    <div className={'test__block'}/>
                </Dropdown>
                {/*<div className={'test__parent'}>*/}
                {/*    <div className={'test__block-wrapper'}>*/}
                {/*        <div className={'test__block'}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default TestDropdown

