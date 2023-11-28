<script setup>
const { t } = useI18n()
</script>

<template>
  <div>
    <h3>{{ t("vps.title") }}</h3>

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

  <div class="flex justify-around">
    <div class="card flex-center-col gap-4">
      <h4>MENSILE</h4>
      <p>20€ al Mese + Iva</p>
      <p>(abbonamento automatico ogni mese)</p>
      <button class="btn">
        Acquista Ora
      </button>
    </div>

    <div class="card flex-center-col gap-4">
      <h4>TRIMESTRALE</h4>
      <p>50€ + iva</p>
      <p>(abbonamento automatico ogni tre mesi)</p>
      <button class="btn">
        Acquista ora
      </button>
    </div>

    <div class="card flex-center-col gap-4">
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
  list-style-type: none; /* Remove default bullet point */
  padding-left: 1em; /* Add some padding to the left of the text */

  /* Add a custom bullet point before the text */
  &::before {
    content: "•"; /* This is your custom bullet point */
    display: inline-block; /* Make it inline with the text */
    width: 2em; /* Specify a width */
    margin-left: -1em; /* Pull the bullet back over the padding */
  }
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 25%;
  text-align: center;
}
</style>
