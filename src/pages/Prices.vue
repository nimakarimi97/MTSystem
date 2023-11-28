<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div flex flex-col gap-6>
    <h2 class="title">
      {{ t("prices.title") }}
    </h2>
    <p>{{ t("prices.body1") }}</p>
    <h4>{{ t("prices.title2") }}</h4>
    <p>{{ t("prices.description") }}</p>

    <ul>
      <li v-for="i in 9" :key="i" py-1>
        {{ t(`prices.features[${i - 1}]`) }}
      </li>

      <hr class="mx-auto w-70%" my-4>

      <div flex-center flex-col gap-4>
        <span>{{ t("prices.footer") }}</span>
        <button btn @click="scrollToComponent('#prices')">
          {{ t("prices.button") }}
        </button>
      </div>
    </ul>
  </div>
</template>

<style scoped>
/* Your component styles go here */
</style>
