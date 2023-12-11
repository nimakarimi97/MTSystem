<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="mx-auto w-85% p-14 text-center text-left">
    <h3 class="font-bold">
      {{ t("nav.work") }}
    </h3>
    <p class="my-6 text-lg">
      {{ $t("work.body1") }}
    </p>
    <p class="text-lg">
      {{ $t("work.body2") }}
    </p>
    <p class="mt-6 text-lg">
      {{ $t("work.body3") }}
    </p>
  </div>
</template>

<style scoped></style>
