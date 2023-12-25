<script setup>
import BarChartComponent from '~/components/charts/BarChartComponent.vue'
import CompoundProfit from '~/components/charts/CompoundProfit.vue'
import PieChartComponent from '~/components/charts/PieChartComponent.vue'

const { t, locale } = useI18n()
let EinsteinImage = '/Einstein-en.jpg'

watch(() => {
  if (locale.value === 'it') 
    EinsteinImage = '/Einstein.jpg'
  else EinsteinImage = '/Einstein-en.jpg'
})
</script>

<template>
  <div my-4 flex-center flex-col justify-around gap-12 px-8>
    <BarChartComponent />

    <div id="risk-explanation" flex gap-17 text-left class="w-70%">
      <div>
        <p>
          {{ t("calculator.risk.title.part1") }}
          <span primary-color class="fw-bold">{{
            t("calculator.risk.title.boldPart")
          }}</span>
          {{ t("calculator.risk.title.part2") }}:
        </p>

        <p v-for="index in 4" :key="index" mt-4>
          {{ t(`calculator.risk.description${index}`) }}
        </p>
      </div>

      <div>
        <p>
          {{ t("calculator.superRisk.title.part1") }}
          <span primary-color class="fw-bold">{{
            t("calculator.superRisk.title.boldPart")
          }}</span>
          {{ t("calculator.superRisk.title.part2") }}:
        </p>

        <p v-for="index in 4" :key="index" mt-4>
          {{ t(`calculator.superRisk.description${index}`) }}
        </p>
      </div>
    </div>

    <CompoundProfit />

    <p>{{ t("calculator.einstein") }}:</p>
    <img class="max-w-2xl object-cover" :src="EinsteinImage" alt="">

    <!-- <PieChartComponent /> -->
  </div>
</template>
