<script setup lang="ts">
import { Chart, registerables } from 'chart.js'
import { shuffle } from 'lodash'
import { computed, defineComponent, ref } from 'vue'
import type { ExtractComponentData } from 'vue-chart-3'
import { DoughnutChart } from 'vue-chart-3'

Chart.register(...registerables)


const data = ref([30, 40, 60, 70, 5])
const doughnutRef = ref<ExtractComponentData<typeof DoughnutChart>>()

const options = ref<ChartOptions<'doughnut'>>({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
    },
  },
})

const testData2 = computed<ChartData<'doughnut'>>(() => ({
  labels: ['Paris', 'Roma', 'Toulon', 'Palermo', 'Autre'],
  datasets: [
    {
      data: data.value,
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
    },
  ],
}))

function shuffleData() {
  data.value = shuffle(data.value)
}
</script>

<template>
  <div>
    <DoughnutChart ref="doughnutRef" :chart-data="testData2" :options="options" />
    <button mt-5 btn @click="shuffleData">
      Shuffle
    </button>
  </div>
</template>

<style scoped></style>
