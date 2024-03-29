'use client'

import {FC} from 'react'
import dynamic from 'next/dynamic'
import Textarea from 'app/_common/components/textarea/textarea.component'
import Button from 'app/_common/components/button/button.component'
import useContact from 'app/[locale]/contacts/_components/contact.hook'
import Input from 'app/_common/components/input/input.component'
const ContactsMap = dynamic(() => import('app/[locale]/contacts/_components/contacts-map/contacts-map.component'), {ssr: false})

const Contacts: FC = () => {
    const {onChange, handleSubmit, onValidate, transl, inputs} = useContact()

    return (
        <div className={'contacts container'}>
            <h2 className="contacts__title">{transl.contacts}</h2>
            <div className="contacts__top">
                <div className="contacts__text">
                    {transl.onlineInfo.map((elem, index) =>
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
                </form>
                <div className="contacts__offline-info">
                    {transl.offlineInfo.map((cityBlock, index) => (
                        <div className={'contacts__address'} key={index}>
                            {cityBlock.map((elem, index, {length}) => (
                                <div key={elem} className={`contacts__label 
                                ${index === 0 ? 'contacts__label--main' : ''} ${index === length - 1 ? 
                                    'contacts__label--last' : ''}`}>
                                    {elem}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <ContactsMap/>
            </div>
        </div>
    )
}

export default Contacts