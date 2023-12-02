<script setup>
import BarChartComponent from '~/components/charts/BarChartComponent.vue'
import CompoundProfit from '~/components/charts/CompoundProfit.vue'
import PieChartComponent from '~/components/charts/PieChartComponent.vue'

const { t } = useI18n()
</script>

<template>
  <div my-4 flex-center flex-col justify-around gap-12 px-8>
    <CompoundProfit />
    <BarChartComponent />
    <!-- <PieChartComponent /> -->

    <div flex flex-col gap-7 text-left>
      <p v-for="index in 6" :key="index">
        {{ t(`calculator.description${index}`) }}
      </p>
    </div>
  </div>
</template>
