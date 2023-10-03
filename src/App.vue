<script setup lang="ts">
import { scrollToComponent } from '~/composables/scrollToComponent'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Fx Trading',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/logo-without-background-cropped' : '/logo-without-background-logo-without-background-cropped',
    },
  ],
})

onMounted(() => {
  if (window.location.hash) {
    const section = window.location.hash.substring(1)
    scrollToComponent(section)
  }
  else {
    console.error('Failed to find the page')
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
