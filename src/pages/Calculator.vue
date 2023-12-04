<script setup>
import BarChartComponent from '~/components/charts/BarChartComponent.vue'
import CompoundProfit from '~/components/charts/CompoundProfit.vue'

const { t } = useI18n()
</script>

<template>
  <div my-4 flex-center flex-col justify-around gap-12 px-8>
    <BarChartComponent />

    <div flex gap-17 text-left class="w-70%">
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

    <p class="w-60%">
      {{ t("calculator.compoundDescription.part1") }}
      <span primary-color class="fw-bold">{{
        t("calculator.compoundDescription.boldPart")
      }}</span>
      {{ t("calculator.compoundDescription.part2") }}
    </p>

    <!-- <PieChartComponent /> -->
  </div>
</template>
