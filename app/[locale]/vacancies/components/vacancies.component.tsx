'use client'

import {FC} from 'react'
import useVacancies from 'app/[locale]/vacancies/components/vacancies.hook'

const Vacancies: FC = () => {
    const {transl} = useVacancies()

    return (
        <div className={'vacancies'}>
            <div className="vacancies__store-name">UNAMOUR</div>
            <h1 className="vacancies__title">{transl.title}</h1>
            <div className="vacancies__country">{transl.county}</div>
            <div className="vacancies__city">{transl.city}</div>
            {transl.vacancies.map((vacancy, idx) => (
                <div className={'vacancies__content'} key={idx}>
                    <div className={'vacancies__position'}>
                        {vacancy.required} {vacancy.name}
                    </div>
                    {vacancy.elems.map((category, idx) => (
                        <div className={'vacancies__category'} key={idx}>
                            <div className={'vacancies__category-title'}>
                                {transl.vacCompos[idx]}
                            </div>
                            <ul className={'vacancies__category-elements'}>
                                {category.map((elem, idx) =>
                                    <li className={'vacancies__category-element'} key={idx}>
                                        {elem}
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                    <div className={'vacancies__resume'}>
                        {transl.resume(vacancy.name)}
                    </div>
                </div>
            ))}
            {transl.cooperation.elems.map(({title, text}) => (
                <div className={'vacancies__coop-block'} key={title}>
                    <div className={'vacancies__coop-title'}>
                        {title}
                    </div>
                    <div className={'vacancies__coop-text'}>
                        {text}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Vacancies