<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Slide } from 'vue3-burger-menu'
import DarkModeToggle from './DarkModeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
import { scrollToComponent } from '~/composables/scrollToComponent'
import { isLaptop } from '~/composables/deviceType'
import { getRoutes } from '~/routes'

const { t } = useI18n()

const routes = getRoutes()
const navbarHeight: number = 100 // Height of the navbar in pixels
// const isNavbarOpen: Ref<boolean> = ref(true)

// Function to handle scroll event
function handleScroll() {
  const scrollPosition = window.scrollY
  const navbar = document.querySelector('.navbar-desktop')

  if (scrollPosition > 0) 
    navbar?.classList.add('scrolled', 'bg-gray-2', 'dark:bg-black')
  else navbar?.classList.remove('scrolled', 'bg-gray-2', 'dark:bg-black')
}

window.addEventListener('scroll', handleScroll)
</script>

<template>
  <nav
    v-if="isLaptop"
    class="navbar-desktop"
    :style="{ maxHeight: `${100}px` }"
    flex-center
    gap-4
    text-xl
    opacity-90
    dark:bg-neutral-900
  >
    <div class="navbar-brand">
      <button
        icon-btn
        :title="t('button.home')"
        @click="
          $route.path !== '/'
            ? $router.push('/')
            : scrollToComponent('home', navbarHeight)
        "
      >
        <img src="/logo-without-background-cropped.png" alt="Logo">
      </button>
    </div>

    <div class="navbar-items">
      <NavbarLink
        v-for="route of routes"
        :key="route.to"
        icon-btn
        :to="route.to"
        :title="`nav.${route.to}`"
        :navbar-height="navbarHeight"
      />
    </div>

    <div flex="~ row justify-center gap-3">
      <DarkModeToggle />
      <LanguageToggle />
    </div>
  </nav>

  <Slide v-else :close-on-navigation="true" no-overlay mb-22 flex-center flex-col>
    <div flex-center flex-col gap-4>
      <button
        icon-btn
        :title="t('button.home')"
        @click="
          $route.path !== '/'
            ? $router.push('/')
            : scrollToComponent('home', navbarHeight)
        "
      >
        <img src="/logo-without-background.png" alt="Logo" w-32>
      </button>

      <div flex items-start>
        <DarkModeToggle mx-3 text-xl />
        <LanguageToggle text-xl />
      </div>
    </div>

    <div flex-center flex-col flex-wrap gap-5 px-4>
      <NavbarLink
        v-for="route of routes"
        :key="route.to"
        :to="route.to"
        :title="`nav.${route.to}`"
        :navbar-height="navbarHeight"
        flex-row
        icon-btn
      />
    </div>
  </Slide>
</template>

<style>
nav.navbar-desktop {
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease;
}

nav.navbar-desktop.scrolled {
  padding: 0.2rem 1rem 0.1rem;
  transition: all 0.5s ease-in-out;
}

.navbar-desktop .navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-desktop .navbar-brand img {
  height: 4rem;
}

.navbar-items {
  display: flex;
  gap: 1rem;
}

.bm-burger-button {
  position: fixed !important;
  width: 36px;
  height: 30px;
  left: 7%;
  top: 4%;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.bm-burger-button:hover {
  transform: scale(1.06);
  opacity: 1;
}

.bm-burger-button .bm-burger-bars {
  background-color: var(--btn-bg-color);
}

.bm-burger-button .line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}

.bm-cross-button {
  position: absolute;
  right: 4% !important;
  top: 2% !important;
  cursor: pointer;
  display: grid;
  place-items: center;
  height: 2rem;
  width: 2rem;
  background: rgba(128, 128, 128, 0.5);
  background: rgb(128, 128, 128);
  border-radius: 50%;
  opacity: 0.5;
  transition: all 0.4s ease;
}

.bm-cross-button:hover {
  transform: rotate(180deg);
  opacity: 1;
}
</style>
