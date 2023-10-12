<script setup lang="ts">
import Contact from './Contact.vue'
import Prices from './Prices.vue'
import WorkWithUs from './WorkWithUs.vue'
import Reviews from './Reviews.vue'
import WhoWeAre from './WhoWeAre.vue'
import Fx from './Fx.vue'
import Profit from './Profit.vue'
import Calculator from './Calculator.vue'
import FAQ from './FAQ.vue'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Home id="home" />
  <WhoWeAre id="who" />
  <Fx id="fx" />
  <Profit id="profit" />
  <Calculator id="calculator" />
  <Reviews id="reviews" />
  <Prices id="prices" />
  <FAQ id="faq" my-5 />
  <WorkWithUs id="work" my-5 />
  <Contact id="contact" />
</template>
