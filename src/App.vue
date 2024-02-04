<script setup lang="ts">
import { scrollToComponent } from '~/composables/scrollToComponent'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'MTSystem',
  meta: [{ name: 'description', content: 'Mark Trading System' }],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo-without-background-cropped.png',
    },
  ],
})

onMounted(() => {
  if (window.location.hash) {
    const section = window.location.hash.substring(1)
    scrollToComponent(section, 0)
  }
})
</script>

<template>
  <main text="center gray-700 dark:gray-200">
    <Navbar />
    <RouterView />
    <Footer />
  </main>
</template>
