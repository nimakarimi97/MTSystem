<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { navbarHeight, scrollTo = () => {} } = defineProps({ navbarHeight: Number, scrollTo: Function })

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
    class="navbar" 
    :style="{ maxHeight: `${navbarHeight}px` }"
    flex="~ gap-4" items-center justify-center text-xl opacity-90 dark:bg-neutral-900
  >
    <div class="navbar-brand">
      <button icon-btn :title="t('button.home')" @click="$route.path !== '/' ? $router.push('/') : scrollTo('home')">
        <img src="/logo-without-background-cropped.png" alt="Logo">
      </button>
    </div>

    <div class="navbar-items">
      <button icon-btn :title="t('button.home')" @click="$route.path !== '/' ? $router.push('/') : scrollTo('home')">
        {{ t('nav.home') }}
      </button>
  
      <button icon-btn :title="t('nav.who')" @click="scrollTo('who')">
        {{ t('nav.who') }}
      </button>
  
      <button icon-btn to="/fx" :title="t('nav.fx')">
        {{ t('nav.fx') }}
      </button>
  
      <button icon-btn :title="t('nav.profit')" @click="scrollTo('profit')">
        {{ t('nav.profit') }}
      </button>
  
      <button icon-btn :title="t('nav.estimates')" @click="scrollTo('estimate')">
        {{ t('nav.estimates') }}
      </button>
  
      <button icon-btn :title="t('nav.reviews')" @click="scrollTo('reviews')">
        {{ t('nav.reviews') }}
      </button>
  
      <button icon-btn :title="t('nav.price')" @click="scrollTo('price')">
        {{ t('nav.price') }}
      </button>
  
      <button icon-btn :title="t('nav.vps')" @click="scrollTo('vps')">
        {{ t('nav.vps') }}
      </button>
        
      <button icon-btn :title="t('nav.faq')" @click="scrollTo('faq')">
        {{ t('nav.faq') }}
      </button>
        
      <button icon-btn :title="t('nav.work')" @click="scrollTo('work')">
        {{ t('nav.work') }}
      </button>
        
      <button icon-btn @click="scrollTo('contact')">
        {{ t('nav.contact') }}
      </button>
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
