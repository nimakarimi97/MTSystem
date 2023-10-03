<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { to, title, navbarHeight, scrollToComponent = () => { } } = defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  navbarHeight: {
    type: Number,
  },
  scrollToComponent: {
    type: Function,
    required: true,
  },
})

const { t } = useI18n()
</script>

<template>
  <router-link icon-btn :to="`/#${to}`" :title="t(title)" @click="scrollToComponent(to, navbarHeight)">
    {{ t(title) }}
  </router-link>
</template>
