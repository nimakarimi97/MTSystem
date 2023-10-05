<script setup lang="ts">
import Contact from './Contact.vue'
import Prices from './Prices.vue'
import WorkWithUs from './WorkWithUs.vue'
import Reviews from '~/components/Reviews.vue'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Home id="home" />
  <Reviews id="reviews" />
  <WhoWeAre id="who" />
  <Prices id="prices" />
  <WorkWithUs id="work" my-5 />
  <Contact id="contact" />
</template>
