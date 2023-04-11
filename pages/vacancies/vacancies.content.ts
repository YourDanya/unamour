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
                            'Experience from 2 years.',
                            'The ability to easily and quickly write texts in the style of the brand.',
                            'Striving for development, focus on results.',
                            'A portfolio is required.',
                            'Competent oral speech.',
                            'Independence, the ability to organize one\'s work and meet deadlines.',
                            'Multitask and meet deadlines.',
                            'English proficiency level from upper intermediate.'
                        ],
                        [
                            'Join a growing company and grow with us.',
                            'Working in an office in the center of Kyiv (Olimpiyskaya metro station).',
                            'The work schedule is discussed individually with each candidate.',
                            'Estimated salary is discussed with the successful candidate based on the results of the interview and the performance of the count-time task.',
                            "Free part-time schedule",
                            'High Pay'
                        ]
                    ],
                },
                {
                    name: 'photographer',
                    elems: [
                        [
                            'Teamwork with photographers and videographers.',
                            'Prompt and high-quality photo processing.',
                            'Searching for new ideas for photo sessions and their implementation.'
                        ],
                        [
                            'Minimum 3 years experience in the field.',
                            'Fluent in graphic editors Adobe Photoshop, Lightroom, etc.',
                            'Technical literacy: knowledge and skills of working with studio lighting and equipment.',
                            'Punctuality, activity, responsibility.',
                            'Readiness to listen to the opinion of the team, to meet deadlines, because the result of our joint work depends on it.'
                        ],
                        [
                            'Join a growing company and grow with us.',
                            'Working in an office in the center of Kyiv (Olimpiyskaya metro station).',
                            'The work schedule is discussed individually with each candidate.',
                            'Estimated salary is discussed with the successful candidate based on the results of the interview and the performance of the count-time task.'
                        ]
                    ],
                    resume: '"Application for photographer".'
                },
                {
                    name: 'retoucher',
                    elems: [
                        [
                            'Photo retouching.'
                        ],
                        [
                            'Minimum 2 years experience in the field.',
                            'A willingness to learn quickly and understand brand aesthetics.',
                            'Readiness to listen to the opinion of the team, to meet deadlines, because the result of our joint work depends on it.',
                            'The ability to work quickly and respond to all our comments.'
                        ],
                        [
                            'Join a growing company and grow with us.',
                            'Working in an office in the center of Kyiv (Olimpiyskaya metro station).',
                            'Schedule 5/2, floating holidays.',
                            'Working in a creative team led by a creative director.',
                            'Estimated salary is discussed with the successful candidate based on the results of the interview and the performance of the count-time task.'
                        ]
                    ],
                    resume: '"Apply for retoucher".'
                }
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