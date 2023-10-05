<script setup lang="ts">
// const props = defineProps({ name:String })

interface Props { name?: string  }

const props = withDefaults(defineProps<Props>(), { name: 'default name' })

const emits = defineEmits(['customEvent'])
function getAlert() { 
  emits('customEvent', `to parent  ${ props.name}`)
}
</script>

<template>
  <div class="contact mx-auto w-30% bg-gray-7" mb-5 p-2 text-blue-3>
    <h2>
      Contact -> {{ props.name }}
    </h2>
    <button m-3 bg-red5 p-3 text-white @click="getAlert">
      alert
    </button>
  </div>
</template>

