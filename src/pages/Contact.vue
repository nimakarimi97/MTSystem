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
const formError: Ref<string> = ref('')

function submitForm(e: Event) {
  const { name, email, message } = formData.value

  if (!name || !email || message.length < 1)
    return formError.value = 'Please, complete the inputs'

  try {
    formError.value = ''
    // console.log(formData.value);

    alert('Form submitted successfully!')

    //to do, reset form after submission 

  }
  catch (error: any) {
    formError.value = error.message
  }
}
</script>

<template>
  <form border="~ rounded blue-400" @submit.prevent="submitForm">
    <Input v-model="formData.name" :placeholder="t('form.name')" autocomplete="true" />

    <Input v-model="formData.email" :placeholder="t('form.email')" autocomplete="true" type="email" />

    <textarea
      v-model="formData.message" :placeholder="t('form.message')" text="center" h-26 bg="transparent"
      border="~ rounded blue-400" outline="none active:none"
    />

    <div v-if="formError" class="error italic text-red-7">
      {{ formError }}
    </div>

    <button text-m m-3 w-40 btn :disabled="!formData.name || !formData.email || formData.message.length < 1">
      {{ t('button.send') }}
    </button>
  </form>
</template>


<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
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
