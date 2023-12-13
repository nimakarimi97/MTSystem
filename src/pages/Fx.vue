<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div flex-center-col gap-7>
    <h3 my-8 primary-color>
      {{ t("fx.title").toUpperCase() }}
    </h3>

    <p>
      {{ t("fx.description").toUpperCase() }}
    </p>

    <!-- <div class="mx-auto w-85% items-end gap-0 px-8 lg:w-70% md:flex-center"> -->
    <div class="w-45% flex-center-col md:w-70% md:flex-row">
      <div flex-center-col gap-4>
        <p>
          {{ t("fx.body1").toUpperCase() }}
        </p>
        <img src="./../../public/myfxbook/storico1sinistra.png" alt="myfx-aziendale">
      </div>

      <div flex-center-col gap-4>
        <p>
          {{ t("fx.body2").toUpperCase() }}
        </p>
        <img src="./../../public/myfxbook/MT41destra.png" alt="myfx-chart">
      </div>
    </div>

    <p my-0>
      {{ t("fx.description2") }}
    </p>
    <div class="mx-auto w-45% flex-center-col gap-12 px-8 lg:w-40% md:flex-row">
      <img src="./../../public/myfxbook/storico2sinistra.png" alt="profit" h-auto>
      <img src="./../../public/myfxbook/MT42destra.png" alt="profit" h-auto pb-4 md:p-0>
    </div>

    <p my-0>
      {{ t("fx.description3") }}
    </p>
    <div class="mx-auto w-45% flex-center-col gap-12 px-8 lg:w-40% md:flex-row">
      <img src="./../../public/myfxbook/storico3sinistra.jpg" alt="profit" h-auto>
      <img src="./../../public/myfxbook/MT43destra.png" alt="profit" h-auto pb-4 md:p-0>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 90%;
}
</style>
