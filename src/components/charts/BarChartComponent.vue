<script setup>
import { Chart, registerables } from 'chart.js'
import { BarChart, useBarChart } from 'vue-chart-3'

Chart.register(...registerables)
const { t } = useI18n()

const chartInputsData = ref({
  capital: 1000,
  setting: 0.01,
  month: 12,
  estimated: 0,
})

const sliderValue = ref(10)
const data = ref([])
const total = ref(0)
const months = ref([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
])
const monthsToShow = ref([months])

watchEffect(() => {
  sliderValue.value = Number.parseInt(sliderValue.value)
  data.value[0] = sliderValue.value
  data.value[1] = chartInputsData.value.capital
  data.value[2] = chartInputsData.value.setting
  data.value[3] = chartInputsData.value.month

  total.value =
    chartInputsData.value.capital +
    400 * chartInputsData.value.setting * 100 * chartInputsData.value.month
  // console.log([total.value] * 6);

  monthsToShow.value = months.value.slice(0, chartInputsData.value.month)
  // console.log(monthsToShow.value.length);
})

const chartData = computed(() => ({
  labels: monthsToShow.value,
  datasets: [
    {
      data: Array.from({ length: monthsToShow.value.length }).fill(total.value),
      backgroundColor: ['orange'],
    },
  ],
}))

const { barChartProps } = useBarChart({
  chartData,
})
</script>

<template>
  <div my-14 flex-center flex-col justify-around gap-20 md:flex-row>
    <div my-14 flex-center flex-col gap-7>
      <div grid gap-2 text-left>
        <span>{{ t("calculator.chart.capital") }}</span>
        <Input
          v-model="chartInputsData.capital"
          :value="chartInputsData.capital"
          type="number"
          :placeholder="t('calculator.chart.capital')"
        />
      </div>

      <div grid gap-2 text-left>
        <span>{{ t("calculator.chart.setting") }}</span>
        <Input
          v-model="chartInputsData.setting"
          :value="chartInputsData.setting"
          type="number"
          :placeholder="t('calculator.chart.setting')"
          step="0.01"
        />
      </div>

      <div grid gap-2 text-left>
        <span>{{ t("calculator.chart.month") }}</span>
        <Input
          v-model="chartInputsData.month"
          :value="chartInputsData.month"
          type="number"
          :placeholder="t('calculator.chart.month')"
          max="12"
          min="1"
          w-50
        />
      </div>

      <div class="PB-range-slider-div" mx-8 px-5>
        <input
          v-model="sliderValue"
          type="range"
          min="0"
          max="100"
          class="PB-range-slider"
        >
        <p class="PB-range-slidervalue">
          {{ sliderValue }}
        </p>
      </div>
    </div>

    <BarChart id="BarChart" v-bind="barChartProps" />
  </div>

  <div>
    <h5>
      Total Estimated Profit:
      {{ total }}
    </h5>
  </div>
</template>

<style scoped>
#barChart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.PB-range-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 5px;
  background: #d5dbe1;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.PB-range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #000000;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.PB-range-slider::-webkit-slider-thumb:hover {
  box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.16);
  transition: 0.3s ease-in-out;
}

.PB-range-slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--primary-color);
  cursor: pointer;
}

.PB-range-slider-div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #c6cace;
  box-shadow: 0px 1px 2px 0px #1f1e241f;
}

.PB-range-slidervalue {
  font-weight: 600;
}
</style>
