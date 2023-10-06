<script setup lang="ts">
import Profit from './Profit.vue'

const name: string = 'Who'
const isContactVisible = ref(true)

function alertFunc(data: string) {
  alert(`Alert function -> ${data}`)
}


function showContact() {
  isContactVisible.value = !isContactVisible.value
}
</script>

<template>
  <div my-5 rounded-7 bg-green-950 p-8>
    <button mb-11 bg-orange-5 btn @click="showContact">
      {{ isContactVisible ? 'Hide contacts' : 'Show contacts' }}
    </button>
    <Profit v-if="isContactVisible" id="profit" :name="name" @customEvent="alertFunc" />
  </div>
</template> 
