import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'
import vacanciesContent from 'app/[locale]/vacancies/components/vacancies.content'

const useVacancies = () => {
    const [transl] = useLocale(vacanciesContent)
    return {transl}
}

export default useVacancies