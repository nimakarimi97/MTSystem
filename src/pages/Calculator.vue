<script setup>
import BarChartComponent from '~/components/charts/BarChartComponent.vue'
import PieChartComponent from '~/components/charts/PieChartComponent.vue'

const { t } = useI18n()
</script>

<template>
  <div my-14 flex-center flex-col justify-around gap-12>
    <BarChartComponent />
    <PieChartComponent />

    <div flex flex-col gap-7 text-left>
      <p v-for="index in 6" :key="index">
        {{ t(`calculator.description${index}`) }}
      </p>
    </div>
  </div>
</template>
