<script setup lang="ts">
const { name, type } = defineModels<{
  name?: string
  type?: string
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
    border="~ rounded blue-400"
    outline="none active:none"
    :type="type"
  >
</template>
