<script setup>
const { t } = useI18n()
const imgSrc = ref('MTLight.png')

watchEffect(() => {
  imgSrc.value = isDark.value ? 'MTDark-without-background.png' : 'MTLight.png'
})
</script>

<template>
  <div mb-9 flex flex-col items-center justify-center gap-10 p-4 px-12 md:flex-row>
    <div flex flex-col items-center justify-center>
      <h3 mb-10 class="title">
        {{ t('home.title') }}
      </h3>
      <button class="swipe">
        {{ t('home.button') }} <span class="container"><svg
          height="24" width="24" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          />
        </svg></span>
      </button>
    </div>
    {{ isDark.value }}
    <img :src="imgSrc" alt="Welcome Image" w-130>
  </div>
</template>

<style scoped>
.swipe {
  position: relative;
  background-color: var(--btn-bg-color);
  width: 200px;
  height: 60px;
  color: var(--btn-text-color);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  letter-spacing: 2px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.35);
  border-left: 0.5px solid rgba(0, 0, 0, 0.35);
  padding-left: 40px;
  cursor: pointer;
  transition: 0.35s ease;
}

.swipe:hover {
  padding-left: 0;
  padding-right: 40px;
  color: var(--btn-text-color);
}

.container {
  position: absolute;
  left: 5px;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  transition: 0.35s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

.swipe:hover .container {
  left: calc(100% - 55px);
  color: var(--btn-bg-color);
}
</style>
