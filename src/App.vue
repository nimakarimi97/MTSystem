<script setup lang="ts">
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

const navbarHeight = 100 // Height of the navbar in pixels

function scrollToComponent(section: any) {
  const element = document.getElementById(section)
  if (element) {
    const offset = element.offsetTop - navbarHeight
    window.scrollTo({ top: offset, behavior: 'smooth' })
  }
}

onMounted(() => {
  if (window.location.hash) {
    const section = window.location.hash.substring(1)
    scrollToComponent(section)
  }
})
</script>

<template>
  <main text="center gray-700 dark:gray-200">
    <Navbar :scroll-to-component="scrollToComponent" :navbar-height="navbarHeight" />
    <RouterView />
    <Footer />
  </main>
</template>
