<script setup lang="ts">
import Contact from './Contact.vue'

// import Prices from './Prices.vue'
import WorkWithUs from './WorkWithUs.vue'
import Reviews from './Reviews.vue'

// import WhoWeAre from './WhoWeAre.vue'
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
  <Home id="home" />
  <!-- <WhoWeAre id="who" mb-60 /> -->
  <Fx id="fx" mb-12 />
  <Profit id="profit" />
  <Calculator id="calculator" mb-12 />
  <Reviews id="reviews" mb-12 />
  <!-- <Prices id="prices" mb-12 /> -->
  <VPS id="vps" mb-12 />
  <FAQ id="faq" mb-10 />
  <WorkWithUs id="work" mb-10 />
  <Contact id="contact" mb-12 />
  <Disclaimer id="disclaimer" mb-10 />
</template>
