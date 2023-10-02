<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { to, title, scrollToComponent = () => { } } = defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  scrollToComponent: {
    type: Function,
    required: true,
  },
})

const { t } = useI18n()
</script>

<template>
  <router-link icon-btn :to="`/#${to}`" :title="t(title)" @click="scrollToComponent(to)">
    {{ t(title) }}
  </router-link>
</template>
