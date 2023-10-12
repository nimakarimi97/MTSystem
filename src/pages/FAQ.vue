<script setup>
import faq from '~/stores/faq.json'

const faqItems = ref(faq)

function toggleItem($event, index) {
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
      <transition name="fade">
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
    display: none;
    margin-top: 1rem;
    text-align: left;
    transition: all 0s;
  }

  .answer.active {
    display: block;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
