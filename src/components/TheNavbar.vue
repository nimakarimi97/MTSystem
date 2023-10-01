<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { navbarHeight, scrollToComponent = () => { } } = defineProps({ navbarHeight: Number, scrollToComponent: Function })

const { t, locale } = useI18n()

async function toggleLocales() {
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY
  const navbar = document.querySelector('.navbar')

  if (scrollPosition > 0)
    navbar?.classList.add('scrolled', 'bg-gray-2', 'dark:bg-black')
  else
    navbar?.classList.remove('scrolled', 'bg-gray-2', 'dark:bg-black')
})
</script>

<template>
  <nav
    class="navbar" :style="{ maxHeight: `${navbarHeight}px` }" flex="~ gap-4" items-center justify-center text-xl
    opacity-90 dark:bg-neutral-900
  >
    <div class="navbar-brand">
      <button
        icon-btn :title="t('button.home')"
        @click="$route.path !== '/' ? $router.push('/') : scrollToComponent('home')"
      >
        <img src="/logo-without-background-cropped.png" alt="Logo">
      </button>
    </div>

    <div class="navbar-items">
      <router-link to="/" icon-btn :title="t('button.home')" @click="scrollToComponent('home')">
        {{ t('nav.home') }}
      </router-link>

      <router-link to="/#who" icon-btn :title="t('nav.who')" @click="scrollToComponent('who')">
        {{ t('nav.who') }}
      </router-link>

      <router-link to="/#fx" icon-btn :title="t('nav.fx')">
        {{ t('nav.fx') }}
      </router-link>

      <router-link to="/#profit" icon-btn :title="t('nav.profit')" @click="scrollToComponent('profit')">
        {{ t('nav.profit') }}
      </router-link>

      <router-link to="/#estimate" icon-btn :title="t('nav.estimates')" @click="scrollToComponent('estimate')">
        {{ t('nav.estimates') }}
      </router-link>

      <router-link to="/#reviews" icon-btn :title="t('nav.reviews')" @click="scrollToComponent('reviews')">
        {{ t('nav.reviews') }}
      </router-link>

      <router-link to="/#price" icon-btn :title="t('nav.price')" @click="scrollToComponent('price')">
        {{ t('nav.price') }}
      </router-link>

      <router-link to="/#vps" icon-btn :title="t('nav.vps')" @click="scrollToComponent('vps')">
        {{ t('nav.vps') }}
      </router-link>

      <router-link to="/#faq" icon-btn :title="t('nav.faq')" @click="scrollToComponent('faq')">
        {{ t('nav.faq') }}
      </router-link>

      <router-link to="/#work" icon-btn :title="t('nav.work')" @click="scrollToComponent('work')">
        {{ t('nav.work') }}
      </router-link>

      <router-link to="/#contact" icon-btn @click="scrollToComponent('contact')">
        {{ t('nav.contact') }}
      </router-link>
    </div>

    <div>
      <button :title="t('button.toggle_dark')" mr-4 icon-btn @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a icon-btn :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>
    </div>
  </nav>
</template>
  
<style scoped>
nav.navbar {
  justify-content: center;
  align-items: center;
  padding: 1.4rem 1rem;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease-in-out;
}

.navbar.scrolled {
  padding: 0.2rem 1rem;
  transition: all 0.5s ease-in-out;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand img {
  height: 4rem;
}

.navbar-items {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navbar-items {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>

