<script setup>
import { Chart, registerables } from 'chart.js'
import { BarChart, useBarChart } from 'vue-chart-3'

Chart.register(...registerables)
const { t } = useI18n()

const chartInputsData = ref({
  capital: 5000,
  setting: 0.01,
  month: 10,
  estimated: 0,
})

const balance = ref(0)
const profit = ref(0)
const profitPerMonth = ref([400])
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
  balance.value = profit.value + chartInputsData.value.capital

  chartInputsData.value.setting = Math.max(0.01, Math.floor(balance.value / 3000) / 100)
  chartInputsData.value.setting = Number(chartInputsData.value.setting.toFixed(2))

  for (let i = 0; i < chartInputsData.value.month; i++) 
    profitPerMonth.value[i] = 400 * chartInputsData.value.setting * 100
  

  profit.value = profitPerMonth.value[0] * chartInputsData.value.month
  balance.value = profit.value + chartInputsData.value.capital

  monthsToShow.value = months.value.slice(0, chartInputsData.value.month)

  // console.log(profitPerMonth.value[0]);
  // console.log("profit", profit.value);
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
  <span>{{ balance }}</span>
  <span>{{ chartInputsData.setting }}</span>

  <div my-14 w-6xl flex-center-col justify-around gap-3>
    <h2>{{ t("calculator.title.compound") }}</h2>

    <div my-4 flex-center gap-7 class="w-100%">
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
    </div>

    <div flex-center-col gap-3 primary-color>
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

    <BarChart id="BarChart" class="w-100%" v-bind="barChartProps" />
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
</style>
