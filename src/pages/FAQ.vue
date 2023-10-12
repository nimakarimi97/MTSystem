<script setup>
import faq from '~/stores/faq.json'

const faqItems = ref(faq)

function closeOtherQuestions() {
  const activeAnswerEl = document.querySelector('.answer.active')

  if (activeAnswerEl) 
    activeAnswerEl.classList.remove('active')
}

function toggleItem($event, index) {
  closeOtherQuestions()

  const el = $event.target
  const answerEl = el.closest('.card').querySelector('.answer')
  answerEl.classList.toggle('active')
}
</script>

<template>
  <div>
    <div
      v-for="(item, index) in faqItems"
      :key="index"
      class="card"
      @click="toggleItem($event, index)"
    >
      <div class="question">
        {{ item.question }}
      </div>

      <transition name="flip-list" tag="div" mode="out-in" appear>
        <div class="answer">
          {{ item.answer }}
        </div>
      </transition>
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
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    border-color: var(--primary-color);

    .question {
      color: var(--primary-color);
    }
  }

  .question {
    transition: all 0.5s ease-in-out;
  }

  .answer {
    display: block;
    text-align: left;
    transition: max-height 0.5s, opacity 0.2s;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }

  .answer.active {
    display: block;
    margin-top: 1rem;
    max-height: 1000px; /* This value should be larger than the maximum height your text could ever be */
    opacity: 1;
    transition: max-height 0.3s, opacity 0.2s;
  }
}
</style>
