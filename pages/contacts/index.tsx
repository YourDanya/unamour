import React from 'react'
import useContact from 'pages/contacts/contact.hook'
import Textarea from 'components/common/textarea/textarea.component'
import Button from 'components/common/button/button.component'
import MapComponent from 'components/common/map/map.component'
import Input from 'components/common/input/input.component'

const ContactComponent: React.FC = () => {
    const {handleChange, handleSubmit, handleValidate, transl, inputs} = useContact()

    return (
        <div className={'contacts'}>
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
                        className={'contact__input'}
                        name={'name'}
                        placeholder={transl.inputs.name}
                        value={inputs.values.name}
                        handleChange={handleChange}
                        error={inputs.errors.name}
                        handleValidate={handleValidate}
                    />
                    <Input
                        className={'contact__input'}
                        name={'number'}
                        placeholder={transl.inputs.number}
                        value={inputs.values.number}
                        handleChange={handleChange}
                        error={inputs.errors.number}
                        handleValidate={handleValidate}
                    />
                    <Input
                        className={'contact__input'}
                        name={'email'}
                        placeholder={transl.inputs.email}
                        value={inputs.values.email}
                        handleChange={handleChange}
                        error={inputs.errors.email}
                        handleValidate={handleValidate}
                    />
                    <Textarea
                        className={'contact__textarea'}
                        name={'message'}
                        placeholder={inputs.values.message}
                        handleChange={handleChange}
                        error={inputs.errors.message}
                        handleValidate={handleValidate}
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