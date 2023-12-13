<script setup>
const { t } = useI18n()
const imgSrc = ref('MTLight.png')

watchEffect(() => {
  imgSrc.value = isDark.value ? 'MTDark-without-background.png' : 'MTLight.png'
})
</script>

<template>
  <div mb-9 flex-center-col gap-10 p-4 px-12 md:flex-row>
    <div flex-center-col>
      <h3 mb-10 class="title w-75%">
        {{ t("home.title") }}
      </h3>

      <ul mx-auto>
        <li v-for="i in 9" :key="i" text- flex-center justify-start py-1>
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

      <button mt7 btn @click="scrollToComponent('#prices')">
        {{ t("prices.button") }}
      </button>
    </div>

    <img :src="imgSrc" alt="Welcome Image" w-130>
  </div>
</template>
