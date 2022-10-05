export type UseLocale = <T, K> (content: { translations: { ua: T, eng: T, ru: T } } & K) =>
    [translations: T, content: Omit<{ translations: { ua: T, eng: T, ru: T } } & K, "translations">]