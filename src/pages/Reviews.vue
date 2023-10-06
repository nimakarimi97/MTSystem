<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div my-10 class="reviews">
    <h5 my-10 tracking-widest class="reviews">
      {{ t('reviews.title') }}
    </h5>
    <Slideshow />
  </div>
</template>

<style scoped></style>
