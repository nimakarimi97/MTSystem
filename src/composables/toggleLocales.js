import { useI18n } from 'vue-i18n'
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

// import { createI18n } from 'vue-i18n-composable/src/index'

const { locale } = useI18n()

export async function toggleLocales() {
  const currentLocaleIndex = availableLocales.indexOf(locale.value)
  const newLocale = availableLocales[(currentLocaleIndex + 1) % availableLocales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}

