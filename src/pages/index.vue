<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div id="home">
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>

    <div py-4 />

    <Contact id="contact" />
    <WhoWeAre id="who" />
  </div>
</template>
