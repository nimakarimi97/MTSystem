<script setup>
const { t } = useI18n()
const imgSrc = ref('MTLight.png')

watchEffect(() => {
  imgSrc.value = isDark.value ? 'MTDark-without-background.png' : 'MTLight.png'
})
</script>

<template>
  <div
    class="home-container"
    h-100vh
    flex
    flex-col
    items-start
    justify-start
    gap-4
    px-4
    pb4
    pt12
    lg:h-80vh
    md:flex-row
    md:py-14
    md:pl-12
    md:pr-28
  >
    <img :src="imgSrc" alt="Welcome Image" class="w-80% lg:w-130 md:w-50%">

    <div flex-center-col md:pt-16>
      <h3 md:mb-10 class="title md:w-75%">
        {{ t("home.title") }}
      </h3>

      <ul flex-center flex-wrap gap1 text-sm md:gap8>
        <li v-for="i in 3" :key="i" flex-center justify-start py-1>
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
          {{ t(`prices.features[${i - 1}]`).toUpperCase() }}
        </li>
      </ul>

      <button mt7 btn @click="scrollToComponent('#vps')">
        {{ t("prices.button") }}
      </button>
    </div>
  </div>
</template>
