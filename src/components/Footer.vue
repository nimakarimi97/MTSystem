<script setup>
import { scrollToComponent } from '~/composables/scrollToComponent'

const { t } = useI18n()
</script>

<template>
  <nav mt-6 flex-center-col justify-center gap-6 py-12 pb-20>
    <div flex-center-col gap-2>
      <span>{{ t("footer.companyInfo.name") }} : MTSystem</span>
      <span>{{ t("footer.companyInfo.piva") }} : 207645129</span>
      <span>{{ t("footer.companyInfo.address") }} : Via Pop Bogomil № 1A, Oborishte, 1202, Sofia</span>
      <span>{{ t("footer.companyInfo.rights") }}</span>
    </div>

    <div class="footer-top" flex="~ gap-4" justify-center text-xl>
      <RouterLink
        icon-btn
        to="/"
        :title="t('button.home')"
        @click="$route.path !== '/' ? $router.push('/') : scrollToComponent('home')"
      >
        <div i-carbon-home />
      </RouterLink>

      <LanguageToggle />
    </div>

    <div flex items-center justify-center gap-1>
      <span mr-1 italic text-gray> Developed by 
        <a
          underline
          underline-sky-5
          icon-btn 
          rel="noreferrer"
          href="https://nimakarimi.me"
          target="_blank"
          title="GitHub"
        >
          Nima Karimi
        </a>
      </span>

      <a
        text-xl
        icon-btn
        rel="noreferrer"
        href="https://github.com/nimakarimi97"
        target="_blank"
        title="GitHub"
      >
        <div i-carbon-logo-github />
      </a>
      <a
        text-xl
        icon-btn
        hover:text-blue-6
        rel="noreferrer"
        href="https://www.linkedin.com/in/nimakarimi97/"
        target="_blank"
        title="LinkedIn"
      >
        <div i-carbon-logo-linkedin />
      </a>
    </div>
  </nav>
</template>
