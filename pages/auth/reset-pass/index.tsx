import {NextPage} from "next"
import Input from "../../../components/common/input/input.component"

const resetPass: NextPage = () => {

    return (
        <div className={'reset-pass'}>
            <form className={'reset-pass__form'}>
                <div className={'reset-pass__title'}></div>
                <Input
                    className={'reset-pass__input'}
                    name={''}
                    placeholder={''}
                    value={''}
                    // handleChange={''}
                    // error={''}
                    // handleValidate={''}
                />
                <Input
                    className={'reset-pass__title'}
                    name={''}
                    placeholder={''}
                    value={''}
                    // handleChange={''}
                    // error={''}
                    // handleValidate={''}
                />
            </form>
        </div>
    );
}

export default resetPass