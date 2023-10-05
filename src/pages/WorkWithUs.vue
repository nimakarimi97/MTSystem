<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="bg-gray-100 p-4 text-center">
    <h2 class="text-4xl font-bold text-gray-800">
      {{ t('nav.work') }}
    </h2>
    <p class="mt-2 text-lg text-gray-600">
      {{ $t('work.body1') }}
    </p>
    <p class="mt-2 text-lg text-gray-600">
      {{ $t('work.body2') }}
    </p>
  </div>
</template>

<style scoped></style>
