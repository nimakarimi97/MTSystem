<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'
import { scrollToComponent } from '~/composables/scrollToComponent'

const navbarHeight = 100 // Height of the navbar in pixels

const { t, locale } = useI18n()


async function toggleLocales() {
  const currentLocaleIndex = availableLocales.indexOf(locale.value)
  const newLocale = availableLocales[(currentLocaleIndex + 1) % availableLocales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}

const routes = [
  { to: 'home', title: t('button.home') },
  { to: 'who', title: t('nav.who') },
  { to: 'fx', title: t('nav.fx') },
  { to: 'profit', title: t('nav.profit') },
  { to: 'calculator', title: t('nav.calculator') },
  { to: 'reviews', title: t('nav.reviews') },
  { to: 'prices', title: t('nav.prices') },
  { to: 'vps', title: t('nav.vps') },
  { to: 'faq', title: t('nav.faq') },
  { to: 'work', title: t('nav.work') },
  { to: 'contact', title: t('nav.contact') },
]

// Function to handle scroll event
function handleScroll() {
  const scrollPosition = window.scrollY
  const navbar = document.querySelector('.navbar')

  if (scrollPosition > 0)
    navbar?.classList.add('scrolled', 'bg-gray-2', 'dark:bg-black')
  else
    navbar?.classList.remove('scrolled', 'bg-gray-2', 'dark:bg-black')
}

window.addEventListener('scroll', handleScroll)
</script>

<template>
  <nav
    class="navbar" :style="{ maxHeight: `${100}px` }" flex="~ gap-4" items-center justify-center text-xl opacity-90
    dark:bg-neutral-900
  >
    <div class="navbar-brand">
      <button
        icon-btn :title="t('button.home')"
        @click="$route.path !== '/' ? $router.push('/') : scrollToComponent('home', navbarHeight)"
      >
        <img src="/logo-without-background-cropped.png" alt="Logo">
      </button>
    </div>

    <div class="navbar-items">
      <NavbarLink
        v-for="route of routes" :key="route.to" icon-btn :to="route.to" :title="route.title"
        :navbar-height="navbarHeight" :scroll-to-component="scrollToComponent"
      />
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
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease;
}

nav.navbar.scrolled {
  padding: .2rem 1rem .1rem;
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

