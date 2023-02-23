import React from 'react'
import useContact from 'pages/contacts/contact.hook'
import Textarea from 'components/common/textarea/textarea.component'
import Button from 'components/common/button/button.component'
import MapComponent from 'components/common/map/map.component'
import Input from 'components/common/input/input.component'

const ContactComponent: React.FC = () => {
    const {onChange, handleSubmit, onValidate, transl, inputs} = useContact()

    return (
        <div className={'contacts container'}>
            <h2 className="contacts__title">{transl.contacts}</h2>
            <div className="contacts__top">
                <div className="contacts__text">
                    {transl.info.map((elem, index) =>
                        <div key={elem} className={`contacts__label ${index === 0 ? 'contacts__label--main' : ''}`}>
                            {elem}
                        </div>
                    )}
                </div>
                <form className={'contacts__form'}>
                    <div className="contacts__feedback">{transl.feedback}</div>
                    <Input
                        className={'contacts__input'}
                        name={'name'}
                        placeholder={transl.inputs.name}
                        value={inputs.values.name}
                        onChange={onChange}
                        error={inputs.errors.name}
                        onValidate={onValidate}
                    />
                    <Input
                        className={'contacts__input'}
                        name={'number'}
                        placeholder={transl.inputs.number}
                        value={inputs.values.number}
                        onChange={onChange}
                        error={inputs.errors.number}
                        onValidate={onValidate}
                    />
                    <Input
                        className={'contacts__input'}
                        name={'email'}
                        placeholder={transl.inputs.email}
                        value={inputs.values.email}
                        onChange={onChange}
                        error={inputs.errors.email}
                        onValidate={onValidate}
                    />
                    <Textarea
                        className={'contacts__textarea'}
                        name={'message'}
                        placeholder={transl.inputs.message}
                        value={inputs.values.message}
                        onChange={onChange}
                        error={inputs.errors.message}
                        onValidate={onValidate}
                    />
                    <Button className={'contacts__button'} onClick={handleSubmit}>
                        {transl.submit}
                    </Button>
                    <div className="contacts__consent">
                        {transl.consent}
                    </div>
                    {/*<FormMessage success={} error={}/>*/}
                </form>
            </div>
            <div className="contacts__address">
                <div className="contacts__city">{transl.city}</div>
                <div className="contacts__work-hours">{transl.workHours}</div>
                <div className="contacts__number">{transl.number}</div>
            </div>
            <MapComponent/>
        </div>
    )

}

export default ContactComponent