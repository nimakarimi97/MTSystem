<script setup>
import { useI18n } from 'vue-i18n'
import LanguageToggle from './LanguageToggle.vue'
import { scrollToComponent } from '~/composables/scrollToComponent'
import { isLaptop } from '~/composables/deviceType'
import { getRoutes } from '~/routes'

const { t } = useI18n()

const routes = getRoutes()
const navbarHeight = 100 // Height of the navbar in pixels
const isNavbarOpen = ref(false)

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
    flex
    items-center
    justify-around
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
      <!-- <DarkModeToggle /> -->
      <LanguageToggle />
    </div>
  </nav>

  <nav v-else class="navbar-mobile">
    <label class="hamburger">
      <input type="checkbox" @click="isNavbarOpen = !isNavbarOpen">
      <svg viewBox="0 0 32 32">
        <path
          class="line line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        />
        <path class="line" d="M7 16 27 16" />
      </svg>
    </label>

    <div
      v-if="isNavbarOpen"
      class="navbar-items"
      flex
      flex-col
      items-center
      justify-center
      pt8
    >
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

      <div flex-center flex-wrap gap-5 px-4>
        <NavbarLink
          v-for="route of routes"
          :key="route.to"
          :to="route.to"
          :title="`nav.${route.to}`"
          :navbar-height="navbarHeight"
          flex-row
          icon-btn
        />

        <LanguageToggle text-xl />
      </div>
    </div>
  </nav>
</template>

<style>
nav {
  overflow-x: hidden;
}

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

.hamburger {
  cursor: pointer;
  position: absolute;
  top: 2%;
  left: 5%;
}

.hamburger input {
  display: none;
}

.hamburger svg {
  /* The size of the SVG defines the overall size */
  height: 3em;
  /* Define the transition for transforming the SVG */
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  /* Define the transition for transforming the Stroke */
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

.hamburger input:checked + svg {
  transform: rotate(-45deg);
}

.hamburger input:checked + svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}
</style>
