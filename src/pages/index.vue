<script setup lang="ts">
import Contact from './Contact.vue'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Home id="home" />
  <Contact id="contact" />
  <WhoWeAre id="who" />
</template>
