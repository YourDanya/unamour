import React from 'react'
import useVacancies from 'pages/vacancies/vacancies.hook'

const Vacancies: React.FC = () => {
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
                        {transl.required} {vacancy.name}
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
                        {transl.resume} {vacancy.resume}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Vacancies