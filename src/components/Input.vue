<script setup lang="ts">
const { name } = defineModels<{
  name?: string
}>()
</script>

<template>
  <input
    v-model="name"
    class="input"
    v-bind="$attrs"
    p="x-4 y-2"
    text="center"
    bg="transparent"
    border="~ rounded amber-600"
    outline="none active:none"
  >
</template>

