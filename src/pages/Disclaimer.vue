<script setup>
const { t } = useI18n()
</script>

<template>
  <div flex-center-col>
    <h2 primary-color>
      Disclaimer
    </h2>

    <p class="w-80% text-justify">
      {{ t("disclaimer.text") }}
    </p>
    <p class="mt-4 w-80% text-justify">
      {{ t("disclaimer.text2") }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
