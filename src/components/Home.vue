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
      <button btn>
        {{ t('home.button') }}
      </button>
    </div>
    {{ isDark.value }}
    <img :src="imgSrc" alt="Welcome Image" w-130>
  </div>
</template>
