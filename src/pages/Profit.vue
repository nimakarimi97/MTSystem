<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="mx-auto mt-15 flex-center-col p-2">
    <h3 primary-color>
      {{ t("profit.title").toUpperCase() }}
    </h3>

    <div class="flex-center-col p-2 md:my-6 md:w-60%">
      <p my-5>
        {{ t("profit.body1") }}
      </p>
      <img src="/risultati/MYFXBOOK/1myfxbook.png" alt="profit">

      <p my-5>
        {{ t("profit.body2") }}
      </p>
      <img src="/risultati/MYFXBOOK/2myfxbook.png" alt="profit">

      <p my-5>
        {{ t("profit.body3") }}
      </p>
      <img src="/risultati/MYFXBOOK/3myfxbook.png" alt="profit">
    </div>

    <!-- <div class="w-70% flex-center-col gap7 text-left md:flex-row">
      <div>
        <p mb-4>
          {{ t("profit.body4") }}
        </p>
        <img src="/risultati/MYFXBOOK/4myfxbook.jpeg" alt="profit" h-auto md-h-135>
      </div>

      <div>
        <p mb-4>
          {{ t("profit.body5") }}
        </p>
        <img src="/risultati/MYFXBOOK/5myfxbook.jpeg" alt="profit" h-auto md-h-135>
      </div> 
    </div> -->

    <!-- <div class="mx-auto mt-12 flex flex-col gap-3 lg:w-90%">
      <h3 primary-color>
        {{ t("profit.title2") }}
      </h3>
      <img class="max-w-184 object-cover" src="/risultati/MT4/1.jpg" alt="profit">
      <img class="max-w-184 self-end" src="/risultati/MT4/2.png" alt="profit">
      <img class="max-w-184" src="/risultati/MT4/3.jpg" alt="profit">
      <img class="max-w-184 self-end" src="/risultati/MT4/4.jpg" alt="profit">
    </div> -->
  </div>
</template>

<style scoped lang="scss">
img {
  width: 90%;

  @media (min-width: 768px) {
    width: auto;
  }
}
</style>
