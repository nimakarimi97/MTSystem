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
import VPS from './VPS.vue'
import Disclaimer from './Disclaimer.vue'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <Home id="home" mb-60 />
  <WhoWeAre id="who" mb-60 />
  <Fx id="fx" mb-60 />
  <Profit id="profit" mb-60 />
  <Calculator id="calculator" mb-60 />
  <Reviews id="reviews" mb-60 />
  <Prices id="prices" mb-60 />
  <VPS id="vps" mb-60 />
  <FAQ id="faq" mb-60 />
  <WorkWithUs id="work" mb-60 />
  <Contact id="contact" mb-30 />
  <Disclaimer id="disclaimer" mb-10 />
</template>
