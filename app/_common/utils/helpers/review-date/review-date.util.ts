import {Locale} from 'app/_common/types/types'
import monthsContent from 'app/_common/content/month/months.content'
import {MonthsKey} from 'app/_common/content/month/months.types'

const reviewDate = ({date, locale}: {date: string, locale: Locale}) => {
    const newDate = new Date(date)

    const monthNum = newDate.getMonth() as MonthsKey
    const month = monthsContent[locale][monthNum]

    const day =  newDate.getDay()
    const year = newDate.getFullYear()

    return `${month} ${day}, ${year}`
}

export default reviewDate