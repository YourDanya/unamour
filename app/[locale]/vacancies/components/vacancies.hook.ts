import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import vacanciesContent from 'app/[locale]/vacancies/components/vacancies.content'

const useVacancies = () => {
    const [transl] = useLocale(vacanciesContent)
    return {transl}
}

export default useVacancies