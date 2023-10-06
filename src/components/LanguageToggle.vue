<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  const currentLocaleIndex = availableLocales.indexOf(locale.value)
  const newLocale = availableLocales[(currentLocaleIndex + 1) % availableLocales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <a icon-btn :title="t('button.toggle_langs')" @click="toggleLocales()">
    <span v-if="locale === 'en'">🇺🇸</span>
    <span v-else-if="locale === 'it'">🇮🇹</span>
    <span v-else>
      <div i-carbon-language />
    </span>
  </a>
</template>
