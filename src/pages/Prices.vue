<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div flex flex-col gap-6>
    <h2 class="title" primary-color>
      {{ t("prices.title") }}
    </h2>

    <h4>{{ t("prices.title2") }}</h4>
    <p>{{ t("prices.description") }}</p>

    <ul mx-auto text-left>
      <li v-for="i in 9" :key="i" flex-center justify-start py-1>
        <svg
          primary-color
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"
          />
        </svg>
        {{ t(`prices.features[${i - 1}]`) }}
      </li>
    </ul>

    <hr class="mx-auto w-70%" my-4>

    <div flex-center flex-col gap-4>
      <span>
        <span line-through>
          {{ t("prices.footer2") }}
        </span>
        {{ t("prices.footer") }}
      </span>
      <button btn @click="scrollToComponent('#prices')">
        {{ t("prices.button") }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Your component styles go here */
</style>
