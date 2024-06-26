export const defaultLang = 'de'
export const languages = [defaultLang]

export function getTransLink(language, slug) {
  return language === defaultLang ? slug : `/${language}${slug}`
}
