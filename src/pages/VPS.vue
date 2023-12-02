<script setup>
const { t } = useI18n()
</script>

<template>
  <div>
    <h2 primary-color>
      {{ t("vps.title") }}
    </h2>

    <p>{{ t("vps.body1") }}</p>
    <p>{{ t("vps.body2") }}</p>
    <p>{{ t("vps.body3") }}</p>

    <ul my-9>
      <p>{{ t("vps.body4") }} :</p>
      <li v-for="i in 3" :key="i" py-1 class="bullet-point">
        {{ t(`vps.body5[${i - 1}]`) }}
      </li>
      <hr class="mx-auto w-70%" my-4>
    </ul>
  </div>

  <div class="flex justify-center" gap-5>
    <div class="card flex-center-col gap-6" border-2 border-amber-6>
      <h4>MENSILE</h4>
      <p>20€ al Mese + iva</p>
      <p>(abbonamento automatico ogni mese)</p>
      <button class="btn">
        Acquista Ora
      </button>
    </div>

    <div class="card flex-center-col gap-6" border-2 border-amber-6>
      <h4>TRIMESTRALE</h4>
      <p>50€ + iva</p>
      <p>(abbonamento automatico ogni tre mesi)</p>
      <button class="btn">
        Acquista ora
      </button>
    </div>

    <div class="card flex-center-col gap-6" border-2 border-amber-6>
      <h4>ANNUALE</h4>
      <p>180€ + iva</p>
      <p>(abbonamento automatico ogni 12 mesi)</p>
      <button class="btn">
        Acquista ora
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bullet-point {
  list-style-type: none;
  padding-left: 1em;

  &::before {
    content: "•";
    display: inline-block;
    width: 2em;
    margin-left: -1em;
  }
}

.card {
  background: black;
  border-radius: 5px;
  padding: 20px 1rem;
  width: fit-content;
  text-align: center;
}
</style>
