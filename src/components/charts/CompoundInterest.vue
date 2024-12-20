<script setup>
import { Chart, registerables } from 'chart.js'
import { BarChart, useBarChart } from 'vue-chart-3'

Chart.register(...registerables)
const { t } = useI18n()

const chartInputsData = ref({
  capital: 5000,
  setting: [0.01],
  month: 10,
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

function calculateSetting(money) {
  return Number(Math.max(0.01, Math.ceil(money / 10000) / 100).toFixed(2))
}

watchEffect(() => {
  profit.value = 0
  balance.value = chartInputsData.value.capital
  chartInputsData.value.setting = [0.01]
  profitPerMonth.value = []

  for (let i = 0; i < chartInputsData.value.month; i++) {
    const currentSetting = calculateSetting(balance.value)
    chartInputsData.value.setting.push(currentSetting)

    const monthlyProfit = 400 * currentSetting * 100
    profitPerMonth.value[i] = monthlyProfit
    profit.value += monthlyProfit
    balance.value += monthlyProfit
  }

  monthsToShow.value = months.value.slice(0, chartInputsData.value.month)
})

function incrementInput(input) {
  if (input === 'setting')
    chartInputsData.value[input] += 0.01
  else if (input === 'capital')
    chartInputsData.value[input]++
  else if (chartInputsData.value.month < 12)
    chartInputsData.value[input]++
}

function decrementInput(input) {
  if (input === 'setting')
    chartInputsData.value[input] -= 0.01
  else if (input === 'capital' && chartInputsData.value.capital > 2000)
    chartInputsData.value[input]--
  else if (input === 'month' && chartInputsData.value.month > 0)
    chartInputsData.value[input]--
}

const chartData = computed(() => ({
  labels: monthsToShow.value,
  datasets: [
    {
      data: profitPerMonth.value,
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
  <div mb-14 flex-center-col justify-around gap-3>
    <h3 mb-6 primary-color>
      {{ t("calculator.title.compound") }}
    </h3>

    <p class="w-60%">
      {{ t("calculator.compoundDescription.part1") }}
      <span primary-color class="fw-800">{{
        t("calculator.compoundDescription.boldPart")
      }}</span>
      {{ t("calculator.compoundDescription.part2") }}
    </p>

    <div my-4 flex-center-col gap-7 md:flex-row>
      <div grid gap-2 text-left>
        <span v-if="chartInputsData.capital < 2000" text-xs style="color: red">
          {{ t("calculator.chart.capital_error") }}
        </span>
        <span v-else>{{ t("calculator.chart.capital") }}</span>

        <div class="number-input">
          <Input
            v-model="chartInputsData.capital" :value="chartInputsData.capital" type="number" inputmode="decimal"
            :class="{ 'border-red-7': chartInputsData.capital < 2000 }" :placeholder="t('calculator.chart.capital')"
            min="2000" class="show-arrows"
          />

          <div class="spinners">
            <button class="spinner increment" @click="incrementInput('capital')">
              &#9650;
            </button>
            <button class="spinner decrement" @click="decrementInput('capital')">
              &#9660;
            </button>
          </div>
        </div>
      </div>

      <div grid gap-2 text-left>
        <span>{{ t("calculator.chart.setting") }}</span>
        <Input
          v-model="chartInputsData.setting" :value="chartInputsData.setting.slice(-1)" type="number"
          inputmode="decimal" :placeholder="t('calculator.chart.setting')" step="0.01" min="0" class="setting-input"
          lang="en-US" disabled
        />
      </div>

      <div class="number-input">
        <div grid gap-2 text-left class="w-100%">
          <span>{{ t("calculator.chart.month") }}</span>
          <Input
            v-model="chartInputsData.month" :value="chartInputsData.month" type="number" inputmode="decimal"
            :placeholder="t('calculator.chart.month')" max="12" min="1" md:w-50 class="show-arrows"
          />

          <div class="spinners month">
            <button class="spinner increment" @click="incrementInput('month')">
              &#9650;
            </button>
            <button class="spinner decrement" @click="decrementInput('month')">
              &#9660;
            </button>
          </div>
        </div>
      </div>
    </div>

    <div flex-center-col gap-3 primary-color>
      <p>
        {{ `${t("calculator.profit")} : ` }}
        <span v-if="chartInputsData.capital < 2000" text-white> -- </span>
        <span v-else text-white>€{{ profit }}</span>
      </p>
      <p>
        {{ `${t("calculator.balance")} : ` }}
        <span v-if="chartInputsData.capital < 2000" text-white> -- </span>
        <span v-else text-white>€{{ balance }}</span>
      </p>
    </div>

    <BarChart class="BarChart max-w-3xl md:w60%" v-bind="barChartProps" />
  </div>
</template>

<style lang="scss">
.barChart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 420px !important;
}

#bar-chart {
  min-height: 300px !important;
}
</style>
