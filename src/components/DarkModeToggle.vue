<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <button :title="t('button.toggle_dark')" icon-btn @click="toggleDark()">
    <div i="carbon-sun dark:carbon-moon" />
  </button>
</template>
