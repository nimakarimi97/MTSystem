<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <h3 my-8 primary-color>
      {{ t("fx.title").toUpperCase() }}
    </h3>

    <p>
      {{ t("fx.description").toUpperCase() }}
    </p>

    <div class="mx-auto my-15 gap-1 px-8 lg:w-80% md:flex-center">
      <div flex flex-col items-center justify-evenly gap-10>
        <p>
          {{ t("fx.body1").toUpperCase() }}
        </p>
        <img pb-4 md:p-0 src="/myfxbook/chart.jpg" alt="myfx-chart">
      </div>

      <div flex flex-col items-center gap-4>
        <p>
          {{ t("fx.body2").toUpperCase() }}
        </p>
        <img src="/myfxbook/myfx-aziendale.jpg" alt="myfx-aziendale">
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 90%;
  object-fit: cover;
}
</style>
