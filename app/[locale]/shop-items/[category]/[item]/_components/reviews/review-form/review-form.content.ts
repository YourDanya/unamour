export const dictionary = {
    ua: {
        title: 'напишіть відгук',
        subtitle: 'Будь ласка, поділіться своїм досвідом.',
        rating: 'Оцінка',
        inputs: {
            title: {
                label: 'Заголовок',
                descr: 'Ваше загальне враження (150 символів або менше)'
            },
            review: {
                label: 'Відгук',
                descr: 'Зробіть свій відгук чудовим: опишіть, що вам сподобалося, що вам не сподобалося, та інші ключові речі, які повинні знати покупці (мінімум 5 символів)'
            },
            photos: {
                label: 'Фото',
                descr: 'Ви можете додати до 5 фотографій',
            },
            email: {
                label: 'Email юзера',
                descr: 'Ви можете ввести email того юзера, від імені якого буде відправлено коментар'
            }
        },
        addPhoto: 'Додати фото',
        submit: 'Відправити'
    },
    eng: {
        title: 'write a review',
        subtitle: 'Please share your experience.',
        rating: 'Rating',
        inputs: {
            title: {
                label: 'Title',
                descr: 'Your general impression (150 characters or less)'
            },
            review: {
                label: 'Review',
                descr: 'Make your review great: describe what you liked, what you didn\'t like, and other key things buyers should know (minimum 5 characters)'
            },
            photos: {
                label: 'Photo',
                descr: 'You can add up to 5 photos',
            },
            email: {
                label: 'User email',
                descr: 'You can enter the email of the user on whose behalf the comment will be sent'
            }
        },
        addPhoto: 'Add photo',
        submit: 'Submit'
    },
    ru: {
        title: 'напишите отзыв',
        subtitle: 'Пожалуйста, поделитесь своим опытом.',
        rating: 'Оценка',
        inputs: {
            title: {
                label: 'Заголовок',
                descr: 'Ваше общее впечатление (150 символов или меньше)'
            },
            review: {
                label: 'Відгук',
                descr: 'Сделайте свой отзыв отличным: опишите, что вам понравилось, что вам не понравилось, и другие ключевые вещи, которые должны знать покупатели (минимум 5 символов)'
            },
            photos: {
                label: 'Фото',
                descr: 'Вы можете добавить до 5 фотографий',
            },
            email: {
                label: 'Email юзера',
                descr: 'Вы можете ввести email того юзера, от имени которого будет отправлен комментарий'
            }
        },
        addPhoto: 'Добавить фото',
        submit: 'отправить'
    }
}

export const validations = {
    title: {required: true},
    review: {required: true},
}

export const initValues = {
    title: '',
    review: '',
}

export const adminValidations = {
    email: {required: true, isEmail: true}
}

export const adminInitValues = {
    email : ''
}