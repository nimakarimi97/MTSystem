<script setup>
import faq_it from '~/stores/faq_it.json'
import faq_en from '~/stores/faq_en.json'

const faqItems = ref(faq_en)

const { t, locale } = useI18n()

watchEffect(() => {
  if (locale.value === 'it') 
    faqItems.value = faq_it
  else faqItems.value = faq_en
})

function closeOtherQuestions() {
  const activeAnswerEl = document.querySelector('.answer-wrapper.active')

  if (activeAnswerEl) 
    activeAnswerEl.classList.remove('active')
}

function toggleItem($event ) {
  closeOtherQuestions()

  const el = $event.target
  const cardEl = el.closest('.card')
  const answerEl = cardEl.querySelector('.answer-wrapper')

  answerEl.classList.toggle('active')
  cardEl.style.margin = '2rem auto'
}

const show = ref(true)
</script>

<template>
  <div>
    <h2>{{ t("faq.title") }}</h2>
    <div
      v-for="(item, index) in faqItems"
      :key="index"
      class="card"
      @click="toggleItem($event)"
    >
      <div class="question">
        {{ item.question }}
      </div>

      <div class="answer-wrapper">
        <div class="answer" v-html="item.answer" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  margin: 1rem auto;
  width: 75%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, color 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    border-color: var(--primary-color);
    transform: scale(1.01);

    .question {
      transform: scale(1.02);
      color: var(--primary-color);
    }
  }

  .question {
    transition: all 0.5s ease-in-out;
  }

  .answer-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: all 300ms ease-in-out;
    padding: 0 0.5em;

    &.active {
      margin-top: 1rem;
      grid-template-rows: 1fr;
    }

    .answer {
      text-align: justify;
      min-height: 0;
      padding: 0 2rem 0 1rem;
      border-left: 3px solid var(--secondary-color);
    }
  }
}
</style>
