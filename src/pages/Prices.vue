<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div flex flex-col gap-6>
    <h2 class="title">
      {{ t('prices.title') }}
    </h2>
    <p>{{ t('prices.body1') }}</p>
    <h4>{{ t('prices.title2') }}</h4>
    <p>{{ t('prices.description') }}</p>

    <ul>
      <li v-for="i in 8" :key="i">
        {{ t(`prices.features[${i}]`) }}
      </li>
      <hr m-8>
    </ul>
  </div>
</template>


<style scoped>
/* Your component styles go here */
</style>
