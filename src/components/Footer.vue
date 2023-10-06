<script setup lang="ts">
import { scrollToComponent } from '~/composables/scrollToComponent'

const { t } = useI18n()
</script>

<template>
  <nav flex="~ col gap-4" mt-6 justify-center py-12 pb-20>
    <div class="footer-top" flex="~ gap-4" justify-center text-xl>
      <RouterLink
        icon-btn to="/" :title="t('button.home')"
        @click="$route.path !== '/' ? $router.push('/') : scrollToComponent('home')"
      >
        <div i-carbon-home />
      </RouterLink>

      <DarkModeToggle />
      <LanguageToggle />
    </div>

    <div flex items-center justify-center gap-1>
      <p mr-1 italic text-gray>
        Developed by Nima Karimi
      </p>

      <a icon-btn rel="noreferrer" href="https://github.com/nimakarimi97" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>
      <a icon-btn rel="noreferrer" href="https://www.linkedin.com/in/nimakarimi97/" target="_blank" title="LinkedIn">
        <div i-carbon-logo-linkedin />
      </a>
    </div>
  </nav>
</template>
