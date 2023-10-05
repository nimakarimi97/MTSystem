<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DarkModeToggle from './DarkModeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
import { scrollToComponent } from '~/composables/scrollToComponent'
import { isLaptop } from '~/composables/deviceType'
import { getRoutes } from '~/routes'

const { t } = useI18n()

const routes = getRoutes()
const navbarHeight: number = 100 // Height of the navbar in pixels
const isNavbarOpen: Ref<boolean> = ref(true)

// Function to handle scroll event
function handleScroll() {
  const scrollPosition = window.scrollY
  const navbar = document.querySelector('.navbar-desktop')

  if (scrollPosition > 0)
    navbar?.classList.add('scrolled', 'bg-gray-2', 'dark:bg-black')
  else
    navbar?.classList.remove('scrolled', 'bg-gray-2', 'dark:bg-black')
}

window.addEventListener('scroll', handleScroll)
</script>

<template>
  <nav
    v-if="isLaptop" class="navbar-desktop" :style="{ maxHeight: `${100}px` }" flex="~ gap-4" items-center
    justify-center text-xl opacity-90 dark:bg-neutral-900
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
        v-for="route of routes" :key="route.to" icon-btn :to="route.to" :title="`nav.${route.to}`"
        :navbar-height="navbarHeight" :scroll-to-component="scrollToComponent"
      />
    </div>

    <div>
      <DarkModeToggle />
      <LanguageToggle />
    </div>
  </nav>

  <nav v-else>
    <div v-if="isNavbarOpen" class="navbar-items" flex flex-col items-center justify-center>
      <button @click="isNavbarOpen = !isNavbarOpen">
        hide Navbar
      </button>

      <div class="navbar-brand">
        <button
          icon-btn :title="t('button.home')"
          @click="$route.path !== '/' ? $router.push('/') : scrollToComponent('home', navbarHeight)"
        >
          <img src="/logo-without-background-cropped.png" alt="Logo">
        </button>

        <DarkModeToggle />
        <LanguageToggle />
      </div>
      <div flex flex-row flex-wrap items-center justify-center gap-5 bg-slate-8>
        <NavbarLink
          v-for="route of routes" :key="route.to" :to="route.to" :title="`nav.${route.to}`"
          :navbar-height="navbarHeight" :scroll-to-component="scrollToComponent" flex-row icon-btn
        />
      </div>
    </div>

    <button v-else @click="isNavbarOpen = !isNavbarOpen">
      show
    </button>
  </nav>
</template>
  
<style scoped>
nav.navbar-desktop {
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

nav.navbar-desktop.scrolled {
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
