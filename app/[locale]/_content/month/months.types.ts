import monthsContent from 'app/[locale]/_content/month/months.content'
import {Locale} from 'app/[locale]/_common/types/types'

export type MonthsKey = keyof typeof monthsContent[Locale]