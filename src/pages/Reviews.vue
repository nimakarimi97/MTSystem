<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div my-28 class="reviews">
    <h3 my-14 px-4 tracking-widest primary-color class="reviews">
      {{ t("reviews.title") }}
    </h3>
    <Slideshow />
  </div>
</template>
