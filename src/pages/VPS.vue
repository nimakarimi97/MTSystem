<script setup>
const { t } = useI18n()

const links = [
  'https://buy.stripe.com/bIY6ou4y38gUaze288',
  'https://buy.stripe.com/bIYaEK2pV0Osaze9AB',
  'https://buy.stripe.com/bIY5kq4y39kYbDibIK',
]
</script>

<template>
  <div>
    <div px-12 text-left md:text-center>
      <h2 mb-6 text-center primary-color>
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

    <div class="flex-center-col lg:flex-row" gap-5 px-8>
      <div v-for="i in 3" :key="i" class="card flex-center-col gap-6" max-w-80 border-2 border-amber-6 md:max-w-180>
        <h4>{{ t(`vps.cards.c${i}.title`) }}</h4>
        <h5>{{ t(`vps.cards.c${i}.price`) }}</h5>
        <p>{{ t(`vps.cards.c${i}.desc`) }}</p>

        <a :href="links[i - 1]" target="_blank" class="btn">
          {{ t("vps.cards.button") }}
        </a>
      </div>
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
  color: rgb(225, 225, 225);
}
</style>
