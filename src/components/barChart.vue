<script>
import { Chart, registerables } from 'chart.js'
import { BarChart, useBarChart } from 'vue-chart-3'
import { shuffle } from 'lodash'

Chart.register(...registerables)

export default defineComponent({
  name: 'App',
  components: {
    BarChart,
  },
  setup() {
    const data = ref([30, 40, 60, 70, 5])

    const chartData = computed(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }))

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
    })

    function shuffleData() {
      data.value = shuffle(data.value)
    }

    return { shuffleData, barChartProps, barChartRef }
  },
})
</script>

<template>
  <div id="barChart" my-14 flex-center flex-col gap-20 md:flex-row>
    <BarChart v-bind="barChartProps" />
    <button btn @click="shuffleData">
      Shuffle
    </button>
  </div>
</template>

<style>
#barChart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
