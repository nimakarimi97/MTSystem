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

function handleClick(target: any, to: string) {
  const navClass = 'nav-active'
  const navbar = document.querySelector(`.navbar-link.${navClass}`)
  navbar?.classList.remove(navClass)
  target.classList.add(navClass)

  scrollToComponent(to, navbarHeight)
}
</script>

<template>
  <router-link
    class="navbar-link"
    icon-btn
    :to="`/#${to}`"
    :title="t(title)"
    @click="handleClick($event.target, to)"
  >
    {{ t(title) }}
  </router-link>
</template>
