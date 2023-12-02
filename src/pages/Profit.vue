<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="mx-auto my-15 flex-center-col p-2">
    <h3 primary-color>
      {{ t("profit.title").toUpperCase() }}
    </h3>

    <div class="my-15 flex-center-col p-2 md:w-60%">
      <p my-5>
        {{ t("profit.body1") }}
      </p>
      <img src="/risultati/MYFXBOOK/a.jpg" alt="">

      <p my-5>
        {{ t("profit.body2") }}
      </p>
      <img src="/risultati/MYFXBOOK/b.jpg" alt="hi">
    </div>

    <div class="mx-auto my-15 w-55% items-end gap-3 px-8 lg:w-40% md:flex-center">
      <img src="/risultati/MYFXBOOK/left.jpg" alt="" h-auto pb-4 md-h-125 md:p-0>
      <img src="/risultati/MYFXBOOK/right.jpg" alt="" h-auto md-h-125>
    </div>

    <div class="mx-auto flex flex-col gap-3 lg:w-90%">
      <h3 primary-color>
        {{ t("profit.title2") }}
      </h3>
      <img class="max-w-2xl object-cover" src="/risultati/MT4/1.jpg" alt="">
      <img class="max-w-2xl self-end" src="/risultati/MT4/2.jpg" alt="">
      <img class="max-w-2xl" src="/risultati/MT4/3.jpg" alt="">
      <img class="max-w-2xl self-end" src="/risultati/MT4/4.jpg" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 90%;
}
</style>
