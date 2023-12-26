<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div my-10 class="reviews">
    <h4 my-10 px-4 font-size-1.2rem tracking-widest primary-color class="reviews">
      {{ t("reviews.title") }}
    </h4>
    <Slideshow />
  </div>
</template>
