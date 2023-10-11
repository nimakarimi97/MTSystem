<script setup>
const faqItems = ref([
  { question: 'Question 1', answer: 'Answer 1', isOpen: false },
  { question: 'Question 2', answer: 'Answer 2', isOpen: false },
  { question: 'Question 3', answer: 'Answer 3', isOpen: false },
])

function toggleItem(index) {
  // close others
  //   faqItems.value.map((item) => (item.isOpen = false));
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen
}
</script>

<template>
  <div v-for="(item, index) in faqItems" :key="index" class="card">
    <div class="question" @click="toggleItem(index)">
      {{ item.question }}
    </div>
    <transition name="expand">
      <div v-if="item.isOpen" class="answer">
        {{ item.answer }}
      </div>
    </transition>
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
    transition: max-height 0.2s ease-out;
    max-height: 0;
    overflow: hidden;
  }

  .question + .answer {
    display: block;
    max-height: 200px;
  }
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }

.expand-enter-active .answer,
.expand-leave-active .answer {
  transition: max-height 0.5s ease-in-out;
}

.expand-enter .answer,
.expand-leave-to .answer {
  max-height: 500px;
}
</style>
