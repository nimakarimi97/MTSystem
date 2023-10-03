<script setup lang="ts">
const { t } = useI18n()
const user = useUserStore()

interface FormData {
  name: string
  email: string
  message: string
}
const formData = ref<FormData>({
  name: user.savedName,
  email: '',
  message: '',
})
// let formError : Ref<string> =ref('');

function submitForm() { }
</script>

<template>
  <form @submit.prevent="submitForm">
    <Input v-model="formData.name" :placeholder="t('form.name')" autocomplete="true" @keydown.enter="submitForm" />

    <Input
      v-model="formData.email" :placeholder="t('form.email')" autocomplete="true" type="email"
      @keydown.enter="submitForm"
    />

    <textarea
      v-model="formData.message" :placeholder="t('form.message')" text="center" h-26 bg="transparent"
      border="~ rounded blue-200 dark:blue-500" outline="none active:none"
    />

    <button text-m m-3 w-40 btn @click="submitForm">
      <!-- :disabled="!name || !email || message.length < 1 " -->
      {{ t('button.send') }}
    </button>
  </form>
</template>


<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
  border: 1.5px solid #ddd;
  border-radius: 15px;
  padding: 20px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
</style>
