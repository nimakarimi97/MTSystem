<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav flex="~ col gap-4" mt-6 justify-center py-12 pb-20>
    <div class="footer-top" flex="~ gap-4" justify-center text-xl>
      <RouterLink icon-btn to="/" :title="t('button.home')">
        <div i-carbon-campsite />
      </RouterLink>

      <DarkModeToggle />
      <LanguageToggle />

      <RouterLink icon-btn to="/about" :title="t('button.about')" data-test-id="about">
        <div i-carbon-dicom-overlay />
      </RouterLink>
    </div>

    <div flex justify-center gap-2>
      <p italic text-gray>
        Developed by Nima Karimi
      </p>
      <a icon-btn rel="noreferrer" href="https://github.com/nimakarimi97" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>
    </div>
  </nav>
</template>
