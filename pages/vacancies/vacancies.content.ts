const vacanciesContent = {
    translations: {
        ua: {
            title: 'співпраця та вакансії',
            county: 'Україна',
            city: 'Київ',
            vacCompos: [
                'Обов\'язки:',
                // 'Вимоги:',
                'Умови:'
            ],
            cooperation: {
                elems: [
                    {
                        title: 'співпраця з магазинами та шоурумами',
                        text: 'Ми відкриті до співпраці з магазинами по всьому світу на умовах опту та ретейлу. За всіми деталями звертатись по телефону: +380632293361'
                    },
                    {
                        title: 'співпраця з фотографами, блогерами, моделями',
                        text: 'Запрошуємо до спіпраці фотографів, блогерів та моделей. За всіми деталями звертатись по телефону: +380632293361'
                    }
                ]
            },
            vacancies: [
                {
                    required: 'потрібна',
                    name: 'високопрофесійна швея',
                    elems: [
                        [
                            'Розробка лекал',
                            'Пошив складних суконь та корсетних виробів',
                            'Допомога у підборі матеріалів'
                        ],
                        [
                            'Вільний неповний графік',
                            'Висока оплата'
                        ]
                    ],
                },
            ],
            resume: (vacancy: string) => `Резюме надсилати на пошту baranivskam@gmail.com, вказавши тему листа "Відгук на вакансію ${vacancy}"`
        },
        eng: {
            title: 'vacancies',
            county: 'Ukraine',
            city: 'Kyiv',
            vacCompos: [
                'Responsibilities:',
                // 'Requirements:',
                'Terms:'
            ],
            cooperation: {
                elems: [
                    {
                        title: 'cooperation with stores and showrooms',
                        text: 'We are open to cooperation with stores around the world on wholesale and retail terms. For all details, contact by phone: +380632293361'
                    },
                    {
                        title: 'cooperation with photographers, bloggers, models',
                        text: 'We invite photographers, bloggers and models to cooperate. For all details, contact by phone: +380632293361'
                    }
                ]
            },
            vacancies: [
                {
                    required: 'required',
                    name: 'highly professional seamstress',
                    elems: [
                        [
                            "Development of patterns",
                            "Sewing complex dresses and corset products",
                            "Help in the selection of materials"
                        ],
                        [
                            "Free part-time schedule",
                            'High Pay'
                        ]
                    ],
                },
            ],
            resume: (vacancy: string) => `Send your resume to baranivskam@gmail.com with the subject line "Response to ${vacancy}"`
        },
        ru: {
            title: 'вакансии',
            county: 'Украина',
            city: 'Киев',
            vacCompos: [
                'Обязанности:',
                // 'Требования:',
                'Условия:'
            ],
            cooperation: {
                elems: [
                    {
                        title: 'сотрудничество с магазинами и шоурумами',
                        text: 'Мы открыты к сотрудничеству с магазинами по всему миру на условиях опта и ретейла. За всеми деталями обращаться по телефону: +380632293361'
                    },
                    {
                        title: 'сотрудничество с фотографами, блоггерами, моделями',
                        text: 'Приглашаем к сотрудничеству фотографов, блоггеров и моделей. За всеми деталями обращаться по телефону: +380632293361'
                    }
                ]
            },
            vacancies: [
                {
                    required: 'требуется',
                    name: 'высокопрофессиональная швея',
                    elems: [
                        [
                            'Разработка лекал',
                            'Пошив складных платьев и корсетных изделий',
                            'Помощь в подборе материалов'
                        ],
                        [
                            'Свободный неполный график',
                            'Высокая оплата'
                        ]
                    ],
                },
            ],
            resume: (vacancy: string) => `Резюме посылать на почту baranivskam@gmail.com, указав тему письма "Отзыв на вакансию ${vacancy}"`
        }
    }
}

export default vacanciesContent