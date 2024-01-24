<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div flex-center-col gap-7 px-4>
    <h3 my-8 primary-color>
      {{ t("fx.title").toUpperCase() }}
    </h3>

    <p>
      {{ t("fx.description").toUpperCase() }}
    </p>

    <div class="flex-center-col md:w-70% md:flex-row">
      <div flex-center-col gap-4>
        <p>
          {{ t("fx.body1").toUpperCase() }}
        </p>
        <img src="/myfxbook/1sinistra.jpg" alt="myfx-aziendale">
      </div>

      <div flex-center-col gap-4>
        <p>
          {{ t("fx.body2").toUpperCase() }}
        </p>
        <img src="/myfxbook/1destra.jpg" alt="myfx-chart">
      </div>
    </div>

    <p my-0>
      {{ t("fx.description2") }}
    </p>
    <div class="mx-auto flex-center-col gap-12 lg:w-40% md:w-45% md:flex-row md:px-8">
      <img src="/myfxbook/2sinistra.jpg" alt="profit" h-auto>
      <img src="/myfxbook/2destra.jpg" alt="profit" h-auto pb-4 md:p-0>
    </div>

    <p my-0>
      {{ t("fx.description3") }}
    </p>
    <div class="mx-auto flex-center-col gap-12 lg:w-40% md:w-45% md:flex-row md:px-8">
      <img src="/myfxbook/3sinistra.jpg" alt="profit" h-auto>
      <img src="/myfxbook/3destra.jpg" alt="profit" h-auto pb-4 md:p-0>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 90%;
}
</style>
