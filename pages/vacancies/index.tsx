import React from 'react'


const Vacancies: React.FC = () => {
    return (
        <div className={'vacancies'}>
            <div className="vacancies__store-name">UNAMOUR</div>
            <div className="vacancies__word">ВАКАНСИИ</div>
            <div className="vacancies__country">Украина</div>
            <div className="vacancies__city">Киев</div>
            <div className="vacancies__content">
                <div className="vacancies__position">
                    <div className="vacancies__position">
                        ТРЕБУЕТСЯ КОПИРАЙТЕР
                    </div>
                </div>
                <div className="vacancies__category">
                    <div className="vacancies__category-title">
                        Обязанности:
                    </div>
                    <ul className="vacancies__category-elements">
                        <li className="vacancies__category-element">
                            Разработка названий рекламных кампаний, слоганов;
                        </li>
                        <li className="vacancies__category-element">
                            Написание сценариев для аудио и видеороликов;
                        </li>
                        <li className="vacancies__category-element">
                            Написание оригинальных текстов для презентаций, СМИ и пр.;
                        </li>
                        <li className="vacancies__category-element">
                            Подготовка рекламных и PR-текстов (пресс-релизов, новостных сообщений);
                        </li>
                        <li className="vacancies__category-element">
                            Разработка контента для социальных сетей.
                        </li>
                    </ul>
                </div>
                <div className="vacancies__category">
                    <div className="vacancies__category-title">
                        Требования:
                    </div>
                    <ul className="vacancies__category-elements">
                        <li className="vacancies__category-element">
                            Опыт работы от 1 года;
                        </li>
                        <li className="vacancies__category-element">
                            Умение легко и быстро писать тексты в стилистике бренда;
                        </li>
                        <li className="vacancies__category-element">
                            Стремление к развитию, нацеленность на результат;
                        </li>
                        <li className="vacancies__category-element">
                            Обязательно наличие портфолио;
                        </li>
                        <li className="vacancies__category-element">
                            Грамотная устная речь;
                        </li>
                        <li className="vacancies__category-element">
                            Самостоятельность, умение организовывать свою работу и соблюдать сроки;
                        </li>
                        <li className="vacancies__category-element">
                            Работать в режиме многозадачности и соблюдение дедлайнов;
                        </li>
                        <li className="vacancies__category-element">
                            Уровень владения английским языком от intermediate.
                        </li>
                    </ul>
                </div>
                <div className="vacancies__category">
                    <div className="vacancies__category-title">
                        Условия:
                    </div>
                    <ul className="vacancies__category-elements">
                        <li className="vacancies__category-element">
                            Присоединиться к развивающейся компании и расти с нами;
                        </li>
                        <li className="vacancies__category-element">
                            Работа в офисе в центре Москвы (метро Площадь 1905 года);
                        </li>
                        <li className="vacancies__category-element">
                            График работы обсуждается индивидуально с каждым кандидатом;
                        </li>
                        <li className="vacancies__category-element">
                            Предполагаемая оплата труда обсуждается с успешным кандидатом по результатам собеседования и выполнения тестового задания.
                        </li>
                    </ul>
                </div>
                <div className="vacancies__resume">
                    Резюме отправлять на почту creativeteam@namelazz.com, указав тему письма "Отклик на вакансию копирайтер".
                </div>
            </div>
        </div>
    )
}

export default Vacancies