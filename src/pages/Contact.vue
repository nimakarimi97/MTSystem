<script setup lang="ts">
const { t } = useI18n()
// const user = useUserStore();

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }
// const formData = ref<FormData>({
//   name: user.savedName,
//   email: "",
//   message: "",
// });
// const formError: Ref<string> = ref("");

// function submitForm(e: Event) {
//   const { name, email, message } = formData.value;

//   if (!name || !email || message.length < 1)
//     return (formError.value = "Please, complete the inputs");

//   try {
//     formError.value = "";
//     // console.log(formData.value);

//     alert("Form submitted successfully!");

//     //to do, reset form after submission
//   } catch (error: any) {
//     formError.value = error.message;
//   }
// }
</script>

<template>
  <div flex-center flex-col gap-8 lg:flex-row class="mx-auto w-85%">
    <div flex-center-col gap-12>
      <h3 rounded px-5 py-3 primary-color shadow-blue-9 shadow-sm lg:self-start>
        {{ t("contact.title") }}
      </h3>

      <div flex-center-col items-start gap4>
        <a href="https://t.me/MarkFxTradingSystem" target="_blank" flex-center gap4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill-neutral-600
              dark:fill-white
              hover:fill-blue
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
            />
          </svg>

          <span hover:primary-color hover:underline>
            {{ t("contact.telegram") }}
          </span>
        </a>

        <a
          href="https://instagram.com/mt_system?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          flex-center
          gap4
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path
              fill-neutral-600
              dark:fill-white
              d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
            />
          </svg>

          <span hover:primary-color hover:underline>
            {{ t("contact.instagram") }}
          </span>
        </a>

        <a href="mailto:tradingmtsysyem@gmail.com" target="_blank" flex-center gap4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill-neutral-600
              dark:fill-white
              hover:fill-blue
              d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
            />
          </svg>

          tradingmtsysyem@gmail.com
        </a>
      </div>
    </div>

    <!-- <form border="~ rounded amber-600" @submit.prevent="submitForm">
      <Input v-model="formData.name" :placeholder="t('form.name')" autocomplete="true" />

      <Input
        v-model="formData.email"
        :placeholder="t('form.email')"
        autocomplete="true"
        type="email"
      />

      <textarea
        v-model="formData.message"
        :placeholder="t('form.message')"
        text="center"
        h-26
        bg="transparent"
        border="~ rounded amber-600"
        outline="none active:none"
      />

      <div v-if="formError" class="error italic text-red-7">
        {{ formError }}
      </div>

      <button
        text-m
        m-3
        w-40
        btn
        :disabled="!formData.name || !formData.email || formData.message.length < 1"
      >
        {{ t("button.send") }}
      </button>
    </form> -->
  </div>
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
