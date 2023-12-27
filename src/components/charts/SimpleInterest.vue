<script setup>
import { Chart, registerables } from 'chart.js'
import { BarChart, useBarChart } from 'vue-chart-3'

Chart.register(...registerables)
const { t } = useI18n()

const chartInputsData = ref({
  capital: 1500,
  setting: 0.01,
  month: 10,
})

// const sliderValue = ref(10);
const balance = ref(0)
const profit = ref(0)
const profitPerMonth = ref(400)
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
  profitPerMonth.value = 400 * chartInputsData.value.setting * 100
  profit.value = profitPerMonth.value * chartInputsData.value.month
  balance.value = profit.value + chartInputsData.value.capital

  monthsToShow.value = months.value.slice(0, chartInputsData.value.month)
  // sliderValue.value = Number.parseInt(sliderValue.value);
})

const chartData = computed(() => ({
  labels: monthsToShow.value,
  datasets: [
    {
      data: Array.from({ length: monthsToShow.value.length }).fill(profitPerMonth.value),
      backgroundColor: ['rgba(217, 119, 6)'],
      label: 'Profit per month',
    },
  ],
}))

const { barChartProps } = useBarChart({
  chartData,
})
</script>

<template>
  <div mt-14 flex-center-col justify-around gap-3>
    <h3 mb-5 primary-color>
      {{ t("calculator.title.simple") }}
    </h3>

    <div my-4 flex-center-col gap-7 md:flex-row>
      <div grid gap-2 text-left>
        <span v-if="chartInputsData.capital < 1500" text-xs style="color: red">
          {{ t("calculator.chart.capital_error") }}
        </span>
        <span v-else>{{ t("calculator.chart.capital") }}</span>

        <Input
          v-model="chartInputsData.capital"
          :value="chartInputsData.capital"
          type="number"
          name="capital"
          :class="{
            'border-red-7': chartInputsData.capital < 1500,
          }"
          :placeholder="t('calculator.chart.capital')"
          min="1500"
        />
      </div>

      <div position-relative grid gap-2 text-left>
        <span>{{ t("calculator.chart.setting") }}</span>
        <Input
          v-model="chartInputsData.setting"
          :value="chartInputsData.setting"
          type="number"
          :placeholder="t('calculator.chart.setting')"
          step="0.01"
          min="0"
        />
        <span italic class="setting-explanation">
          {{ t("calculator.chart.setting_explanation") }}
          <span
            cursor-pointer
            underline
            @click="scrollToComponent('#risk-explanation')"
          >{{ t("click_here") }}</span>
        </span>
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

      <!-- <div class="PB-range-slider-div" mx-8 px-5>
        <input
          v-model="sliderValue"
          type="range"
          min="0"
          max="100"
          class="PB-range-slider"
        />
        <p class="PB-range-slidervalue">
          {{ sliderValue }}
        </p>
      </div> -->
    </div>

    <div mt8 flex-center-col gap-3 primary-color>
      <p>
        {{ `${t("calculator.profit")} : ` }}
        <span v-if="chartInputsData.capital < 1500" text-white> -- </span>
        <span v-else text-white>{{ profit }}</span>
      </p>
      <p>
        {{ `${t("calculator.balance")} : ` }}
        <span v-if="chartInputsData.capital < 1500" text-white> -- </span>
        <span v-else text-white>{{ balance }}</span>
      </p>
    </div>

    <BarChart class="BarChart max-w-3xl md:w90%" v-bind="barChartProps" />
  </div>
</template>

<style>
.barChart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 48rem;
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

.setting-explanation {
  position: absolute;
  bottom: -32%;
  font-size: 11px;
  text-wrap: nowrap;
}
</style>
