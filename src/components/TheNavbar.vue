
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <nav flex="~ gap-4" items-center justify-center text-xl>
    <div class="navbar-brand">
      <RouterLink to="/">
        <img src="/logo-without-background-cropped.png" alt="Logo">
      </RouterLink> 
    </div>

    <div class="navbar-items">
      <RouterLink icon-btn to="/" :title="t('button.home')">
        {{ t('nav.home') }}
      </RouterLink>
  
      <RouterLink icon-btn to="/who" :title="t('nav.who')" data-test-id="who">
        {{ t('nav.who') }}
      </RouterLink>
  
  
      <RouterLink icon-btn to="/fx" :title="t('nav.fx')" data-test-id="fx">
        {{ t('nav.fx') }}
      </RouterLink>
  
      <RouterLink icon-btn to="/profit" :title="t('nav.profit')" data-test-id="profit">
        {{ t('nav.profit') }}
      </RouterLink>
  
      <RouterLink icon-btn to="/estimates" :title="t('nav.estimates')" data-test-id="estimates">
        {{ t('nav.estimates') }}
      </RouterLink>
  
      <RouterLink icon-btn to="/reviews" :title="t('nav.reviews')" data-test-id="reviews">
        {{ t('nav.reviews') }}
      </RouterLink>
  
      <RouterLink icon-btn to="/price" :title="t('nav.price')" data-test-id="price">
        {{ t('nav.price') }}
      </RouterLink>
  
      <RouterLink icon-btn to="/vps" :title="t('nav.vps')" data-test-id="vps">
        {{ t('nav.vps') }}
      </RouterLink>
        
      <RouterLink icon-btn to="/faq" :title="t('nav.faq')" data-test-id="faq">
        {{ t('nav.faq') }}
      </RouterLink>
        
      <RouterLink icon-btn to="/work" :title="t('nav.work')" data-test-id="work">
        {{ t('nav.work') }}
      </RouterLink>
        
      <RouterLink icon-btn to="/contact" :title="t('nav.contact')" data-test-id="contact">
        {{ t('nav.contact') }}
      </RouterLink>
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
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
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
