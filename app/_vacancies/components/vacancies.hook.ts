import {useLocale} from 'hooks/other/other.hooks'
import vacanciesContent from 'app/_vacancies/components/vacancies.content'

const useVacancies = () => {
    const [transl] = useLocale(vacanciesContent)
    return {transl}
}

export default useVacancies