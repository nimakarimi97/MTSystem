<script setup>
import SimpleInterest from '~/components/charts/SimpleInterest.vue'
import CompoundInterest from '~/components/charts/CompoundInterest.vue'
import PieChartComponent from '~/components/charts/PieChartComponent.vue'

const { t, locale } = useI18n()
let EinsteinImage = '/Einstein-en.jpg'

watchEffect(() => {
  if (locale.value === 'it')
    EinsteinImage = '/Einstein.jpg'
  else EinsteinImage = '/Einstein-en.jpg'
})
</script>

<template>
  <div mb-4 flex-center flex-col justify-around gap-12 px-1 sm:px-8>
    <SimpleInterest />

    <div id="risk-explanation" flex-center-col gap-17 px-4 text-left lg:flex-row md:px-8>
      <!-- <div>
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
      </div> -->

      <div class="md-w-60%">
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

    <CompoundInterest />

    <p>{{ t("calculator.einstein") }}:</p>
    <img class="max-w-2xl w-sm object-cover md:w-100%" :src="EinsteinImage" alt="">

    <!-- <PieChartComponent /> -->
  </div>
</template>
