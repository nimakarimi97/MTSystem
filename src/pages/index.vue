<script setup lang="ts">
import Contact from './Contact.vue'
import Prices from './Prices.vue'
import WorkWithUs from './WorkWithUs.vue'
import Reviews from './Reviews.vue'
import WhoWeAre from './WhoWeAre.vue'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Home id="home" />
  <WhoWeAre id="who" />
  <Reviews id="reviews" />
  <Prices id="prices" />
  <WorkWithUs id="work" my-5 />
  <Contact id="contact" />
</template>
