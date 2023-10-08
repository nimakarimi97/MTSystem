<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { scrollToComponent } from '~/composables/scrollToComponent'

const { to, title, navbarHeight = () => {} } = defineProps({
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
})

const { t } = useI18n()
</script>

<template>
  <router-link
    icon-btn
    :to="`/#${to}`"
    :title="t(title)"
    @click="scrollToComponent(to, navbarHeight)"
  >
    {{ t(title) }}
  </router-link>
</template>
