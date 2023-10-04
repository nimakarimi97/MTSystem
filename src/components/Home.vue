<script setup>
const { t } = useI18n()
const imgSrc = ref(isDark.value ? 'MTDark.png' : 'MTLight.png')

watchEffect(() => {
  imgSrc.value = isDark.value ? 'MTDark.png' : 'MTLight.png'
})
</script>

<template>
  <div          
    mb-9 flex flex-col items-center justify-center gap-10 border-pink-9 rounded-2 p-4 px-12 opacity-75 transition-all-900 hover:mx-9 md:flex-row hover:border-1 hover:rounded-10 hover:bg-gray-8 hover:p-1 hover:opacity-100
  >
    <div>
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

